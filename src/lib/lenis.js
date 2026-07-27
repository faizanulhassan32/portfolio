// Module-level Lenis instance store — lets any component trigger smooth scroll
let _lenis = null

export const setLenis = l => { _lenis = l }

export const lenisScrollTo = (target, opts = {}) => {
  if (_lenis) {
    _lenis.scrollTo(target, {
      duration: 1.8,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      offset: -70, // Leaves 70px offset for the fixed navbar
      ...opts,
    })
  } else {
    const el = typeof target === 'string' && target.startsWith('#')
      ? document.querySelector(target)
      : target
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
}