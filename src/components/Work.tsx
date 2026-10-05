'use client';

import React, { useState } from 'react';
import { projectsData, ProjectItem } from '@/lib/data';
import { Video, ArrowUpRight, CheckCircle2, AlertCircle, Wrench, ShieldAlert } from 'lucide-react';

export default function Work() {
  const [activeId, setActiveId] = useState<string>(projectsData[0].id);

  return (
    <section id="work" className="py-24 md:py-32 border-t border-line/70">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="mono-tag mb-3">Work</div>
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-ink">
              Production <span className="heading-serif-accent font-serif italic text-mute">systems.</span>
            </h2>
          </div>

          <p className="text-mute text-sm max-w-md">
            Architected and shipped end-to-end: legal-tech pipelines, autonomous multi-agent
            workflows, and enterprise-scale platforms.
          </p>
        </div>

        {/* Desktop Expanding Accordion Gallery */}
        <div className="hidden lg:flex gap-3 h-[720px] w-full">
          {projectsData.map((project, index) => {
            const isActive = activeId === project.id;
            return (
              <div
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`relative rounded-[28px] border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer ${
                  isActive
                    ? 'flex-[8] bg-card border-ink/20 shadow-xl'
                    : 'flex-[1] bg-card/60 hover:bg-card border-line hover:border-ink/20'
                }`}
              >
                {/* Collapsed Spine View */}
                {!isActive && (
                  <div className="w-full h-full p-6 flex flex-col justify-between items-center select-none">
                    {/* Distinct Solid Black Circular Badge */}
                    <div className="w-8 h-8 rounded-full bg-ink text-card flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1 flex items-center justify-center py-4">
                      <span className="font-display font-bold text-lg text-ink-2 whitespace-nowrap tracking-tight rotate-180 [writing-mode:vertical-rl]">
                        {project.name}
                      </span>
                    </div>

                    <span className="w-2 h-2 rounded-full bg-ink/20" />
                  </div>
                )}

                {/* Expanded Full View with Scrollable Content Body */}
                {isActive && (
                  <div className="w-full h-full p-8 flex flex-col justify-between animate-in fade-in duration-300">
                    {/* Fixed Card Header */}
                    <div className="flex items-center border-b border-line pb-4 mb-4 shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-ink text-card flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <span className="font-mono text-xs font-bold text-ink px-2.5 py-1 rounded-full bg-paper border border-line">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Scrollable Content Body (ensures zero text cutoff) */}
                    <div
                      data-lenis-prevent
                      className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain pr-3 space-y-6 my-2 text-left"
                    >
                      {/* Title & Tagline */}
                      <div>
                        <h3 className="heading-display text-2xl xl:text-3xl font-bold text-ink">
                          {project.name}
                        </h3>
                        <p className="font-mono text-xs text-mute mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Full Overview Description */}
                      <p className="text-sm text-ink-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem Solved Callout */}
                      <div className="bg-paper/80 p-4 rounded-2xl border border-line space-y-1.5">
                        <div className="font-mono text-[10px] font-semibold text-ink uppercase tracking-wider flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-ink" />
                          <span>The Real-World Challenge & Solution</span>
                        </div>
                        <p className="text-xs text-mute leading-relaxed font-sans">
                          {project.problemSolved}
                        </p>
                      </div>

                      {/* Key Engineering Highlights */}
                      <div className="space-y-2">
                        <div className="font-mono text-[10px] font-semibold text-ink uppercase tracking-wider">
                          Key Architecture Highlights:
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {project.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-xs text-ink-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-ink shrink-0 mt-0.5" />
                              <span className="leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Challenges & Solutions */}
                      {project.challenges && project.challenges.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-line/60">
                          <div className="font-mono text-[10px] font-semibold text-ink uppercase tracking-wider flex items-center gap-1.5">
                            <Wrench className="w-3.5 h-3.5 text-ink" />
                            <span>Overcoming Production Constraints</span>
                          </div>
                          <div className="space-y-2">
                            {project.challenges.map((c, cIdx) => (
                              <div
                                key={cIdx}
                                className="text-xs text-ink-2 bg-paper/50 p-3 rounded-xl border border-line/70 leading-relaxed font-mono"
                              >
                                {c}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech Stack Tags */}
                      <div className="space-y-2 pt-2 border-t border-line/60">
                        <div className="font-mono text-[10px] font-semibold text-ink uppercase tracking-wider">
                          Technologies Deployed:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-3 py-1 rounded-lg bg-paper border border-line text-ink-2 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Metrics */}
                      <div className="space-y-2 pt-2 border-t border-line/60">
                        <div className="font-mono text-[10px] font-semibold text-ink uppercase tracking-wider">
                          Project Outcomes:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="inline-flex max-w-full font-mono text-[10px] text-ink-2 px-2.5 py-1 rounded-full bg-paper border border-line"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Caution Note for company projects */}
                      {project.caution && (
                        <div className="p-3.5 rounded-xl bg-paper/80 border border-line text-[11px] font-mono text-mute flex items-start gap-2">
                          <ShieldAlert className="w-4 h-4 text-mute shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{project.caution}</span>
                        </div>
                      )}
                    </div>

                    {project.videoUrl && (
                      <div className="pt-4 border-t border-line flex justify-end shrink-0">
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-card hover:bg-black font-mono text-xs font-semibold shadow-xs"
                        >
                          <Video className="w-3.5 h-3.5" />
                          <span>Watch Demo</span>
                          <ArrowUpRight className="w-3 h-3 text-white/70" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Accordion Layout (vertical) */}
        <div className="lg:hidden space-y-4">
          {projectsData.map((project, index) => {
            const isExpanded = activeId === project.id;
            return (
              <div
                key={project.id}
                className="card-premium overflow-hidden transition-all duration-300"
              >
                {/* Header Toggle with Solid Black Circular Badge */}
                <button
                  onClick={() => setActiveId(isExpanded ? '' : project.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between border-b border-line/60 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-ink text-card flex items-center justify-center font-mono text-xs font-bold shadow-xs shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-ink">
                        {project.name}
                      </h3>
                      <p className="font-mono text-xs text-mute">{project.category}</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold text-ink">
                    {isExpanded ? '—' : '+'}
                  </span>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 space-y-5 animate-in fade-in duration-200">
                    <p className="text-sm text-ink-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="bg-paper p-3.5 rounded-2xl border border-line space-y-1">
                      <div className="font-mono text-[10px] font-semibold text-ink uppercase flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-ink" />
                        <span>Problem Solved:</span>
                      </div>
                      <p className="text-xs text-mute leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="font-mono text-[10px] font-semibold text-ink uppercase">
                        Highlights:
                      </div>
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-ink-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ink shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {project.challenges && project.challenges.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-line/60">
                        <div className="font-mono text-[10px] font-semibold text-ink uppercase">
                          Technical Challenges:
                        </div>
                        {project.challenges.map((c, i) => (
                          <div
                            key={i}
                            className="text-xs text-ink-2 bg-paper/60 p-3 rounded-xl border border-line font-mono"
                          >
                            {c}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2.5 py-1 rounded bg-paper border border-line text-ink-2 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Caution note */}
                    {project.caution && (
                      <div className="p-3 rounded-xl bg-paper/80 border border-line text-[10px] font-mono text-mute flex items-start gap-2">
                        <ShieldAlert className="w-3.5 h-3.5 text-mute shrink-0 mt-0.5" />
                        <span>{project.caution}</span>
                      </div>
                    )}

                    {project.videoUrl && (
                      <div className="pt-2">
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ink text-card hover:bg-black font-mono text-xs font-semibold shadow-xs"
                        >
                          <Video className="w-3.5 h-3.5" />
                          <span>Watch Demo</span>
                          <ArrowUpRight className="w-3 h-3 text-white/70" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
