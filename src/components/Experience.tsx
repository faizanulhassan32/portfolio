'use client';

import React, { useEffect, useRef, useState } from 'react';
import { experienceTimeline } from '@/lib/data';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [activeIndices, setActiveIndices] = useState<number[]>([0]);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight * 0.7;
      const newActive: number[] = [];

      milestonesRef.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowCenter) {
            newActive.push(index);
          }
        }
      });

      if (newActive.length > 0) {
        setActiveIndices(newActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line/70">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="mono-tag mb-3">Experience</div>
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-ink">
              The Unified <span className="heading-serif-accent font-serif italic text-mute">path.</span>
            </h2>
          </div>

          <p className="text-mute text-sm max-w-md">
            Chronological engineering journey from foundational computer science at FAST-NUCES to
            architecting enterprise AI platforms and autonomous agent workflows.
          </p>
        </div>

        {/* Timeline Container with Prominent Year Markers along Path */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Progress Spine */}
          <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 bottom-12 w-[2px] bg-line">
            <div
              className="w-full bg-ink transition-all duration-300 ease-out origin-top"
              style={{
                height: `${
                  (Math.max(...activeIndices, 0) / (experienceTimeline.length - 1)) * 100
                }%`,
              }}
            />
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-14 md:space-y-20">
            {experienceTimeline.map((item, index) => {
              const isPassed = activeIndices.includes(index);
              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    milestonesRef.current[index] = el;
                  }}
                  className="relative flex flex-col md:flex-row items-start pl-12 md:pl-0 group"
                >
                  {/* Spine Node Indicator */}
                  <div className="absolute left-5 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isPassed
                          ? 'bg-ink border-ink text-card shadow-sm scale-110'
                          : 'bg-card border-line text-mute'
                      }`}
                    >
                      {item.type === 'education' ? (
                        <GraduationCap className="w-4 h-4" />
                      ) : (
                        <Briefcase className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  <span
                    className={`absolute left-12 top-8 z-10 whitespace-nowrap font-mono text-sm md:text-base font-medium text-ink/80 ${
                      index % 2 === 0
                        ? 'md:left-1/2 md:ml-10 md:text-left'
                        : 'md:left-auto md:right-1/2 md:mr-10 md:text-right'
                    }`}
                  >
                    {item.period}
                  </span>

                  {/* Milestone Content Card */}
                  <div
                    className={`w-full md:w-1/2 mt-14 md:mt-0 ${
                      index % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10'
                    }`}
                  >
                    <div
                      className={`card-premium p-6 md:p-8 transition-all duration-300 ${
                        isPassed ? 'border-line/90 shadow-sm' : 'border-line/40 opacity-75'
                      }`}
                    >
                      {/* Header Row */}
                      <div className="border-b border-line pb-4 mb-5">
                        <div className="font-mono text-xs text-mute font-medium">
                          {item.company}
                        </div>
                        <h3 className="heading-display text-xl sm:text-2xl font-bold text-ink mt-1">
                          {item.role}
                        </h3>
                      </div>

                      {/* Highlights grouped by project/theme */}
                      <div className="space-y-4">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="space-y-2 text-left">
                            <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                              {h.projectTitle}
                            </h4>
                            <ul className="space-y-2">
                              {h.bullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-2 leading-relaxed"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-ink/70 shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="pt-5 border-t border-line/70 mt-6 flex flex-wrap gap-1.5">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-paper border border-line text-ink-2 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
