'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { personalInfo, navigationLinks } from '@/lib/data';
import { publicAssetPath } from '@/lib/publicAssetPath';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for tracking active section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1,
    };

    const sectionElements = navigationLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -70, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* 2px hairline scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-black/5">
        <div
          className="h-full bg-ink transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5 md:py-7'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Left: Monogram mark & Name */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Scroll to top"
          >
            <div className="w-9 h-9 rounded-full bg-ink overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src={publicAssetPath('/profile.jpg')}
                alt={personalInfo.name}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-ink group-hover:text-black transition-colors">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[10px] tracking-wider text-mute">
                {personalInfo.role}
              </span>
            </div>
          </button>

          {/* Desktop: Floating frosted-glass pill */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-line shadow-sm"
          >
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-tight transition-colors duration-200 rounded-full ${
                    isActive ? 'text-ink font-semibold' : 'text-mute hover:text-ink'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className="absolute inset-0 bg-paper/90 rounded-full border border-line shadow-xs -z-0" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Quick Resume & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-line bg-card text-ink focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-card border border-line shadow-lg backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-2 text-left text-sm font-mono rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-paper text-ink font-bold'
                      : 'text-mute hover:bg-paper/50 hover:text-ink'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-line mt-2">
                <a
                  href={publicAssetPath(personalInfo.resumePdf)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-sm font-mono text-ink rounded-lg bg-paper"
                >
                  <span>Download Résumé</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
