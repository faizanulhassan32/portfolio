'use client';

import React, { useEffect, useRef, useState } from 'react';
import { productionMetrics, Metric } from '@/lib/data';
import { ArrowLeft, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Impact() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="impact"
      ref={containerRef}
      className="py-24 md:py-32 border-t border-line/70 overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="mono-tag mb-3">Impact</div>
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-ink">
              Production Impact & <span className="heading-serif-accent font-serif italic text-mute">metrics.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-mute">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Résumé Production Numbers</span>
            </div>

            {/* Scroll Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`p-2.5 rounded-full border border-line bg-card transition-all ${
                  canScrollLeft
                    ? 'text-ink hover:bg-ink hover:text-card shadow-xs'
                    : 'text-mute/30 cursor-not-allowed border-line/40'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`p-2.5 rounded-full border border-line bg-card transition-all ${
                  canScrollRight
                    ? 'text-ink hover:bg-ink hover:text-card shadow-xs'
                    : 'text-mute/30 cursor-not-allowed border-line/40'
                }`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Track of Landscape Metric Cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {productionMetrics.map((metric, idx) => (
            <div
              key={metric.id}
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[400px] snap-start"
            >
              <div className="card-premium p-7 sm:p-8 h-full flex flex-col justify-between group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 hover:shadow-xl hover:border-ink/30 cursor-pointer">
                {/* Card Top: Index & Context */}
                <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
                  <span className="font-mono text-xs font-semibold text-mute group-hover:text-ink transition-colors">
                    METRIC 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-paper border border-line text-ink-2 group-hover:border-ink/30 transition-colors">
                    {metric.context}
                  </span>
                </div>

                {/* Card Middle: Huge Count-Up Value */}
                <div className="my-2">
                  <div className="heading-display text-5xl sm:text-6xl md:text-7xl font-bold text-ink tracking-tight flex items-baseline">
                    <AnimatedValue
                      target={metric.numericValue}
                      start={hasAnimated}
                      isDecimal={metric.value.includes('.')}
                    />
                    <span className="font-mono text-2xl sm:text-3xl text-mute ml-1 font-normal">
                      {metric.suffix}
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-base sm:text-lg text-ink mt-3">
                    {metric.label}
                  </h3>
                </div>

                {/* Card Bottom: Verbatim Detail from Resume */}
                <div className="pt-6 border-t border-line/60 mt-4">
                  <p className="text-xs sm:text-sm text-mute leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Animated count-up counter component
 */
function AnimatedValue({
  target,
  start,
  isDecimal = false,
}: {
  target: number;
  start: boolean;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * target;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [start, target]);

  if (isDecimal) {
    return <span>{count.toFixed(1)}</span>;
  }
  return <span>{Math.round(count)}</span>;
}
