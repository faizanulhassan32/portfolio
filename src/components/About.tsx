'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { personalInfo, educationData } from '@/lib/data';
import { publicAssetPath } from '@/lib/publicAssetPath';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Cpu, ArrowUpRight, RotateCw } from 'lucide-react';

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const swingRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);
  const targetRotation = useRef({ x: 0, y: 0, z: 0 });
  const currentRotation = useRef({ x: 0, y: 0, z: 0 });

  // Spring physics loop for natural swinging badge on outer wrapper
  useEffect(() => {
    let animId: number;
    const spring = 0.08;
    const friction = 0.85;
    let vx = 0;
    let vy = 0;
    let vz = 0;

    const tick = () => {
      if (!isHovering.current) {
        targetRotation.current.x = 0;
        targetRotation.current.y = 0;
        targetRotation.current.z = Math.sin(Date.now() / 1400) * 1.8; // gentle natural pendulum sway
      }

      const ax = (targetRotation.current.x - currentRotation.current.x) * spring;
      const ay = (targetRotation.current.y - currentRotation.current.y) * spring;
      const az = (targetRotation.current.z - currentRotation.current.z) * spring;

      vx = (vx + ax) * friction;
      vy = (vy + ay) * friction;
      vz = (vz + az) * friction;

      currentRotation.current.x += vx;
      currentRotation.current.y += vy;
      currentRotation.current.z += vz;

      if (swingRef.current) {
        swingRef.current.style.transform = `rotateX(${currentRotation.current.x}deg) rotateY(${currentRotation.current.y}deg) rotateZ(${currentRotation.current.z}deg)`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardContainerRef.current) return;
    isHovering.current = true;
    const rect = cardContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    targetRotation.current.x = (-offsetY / rect.height) * 18;
    targetRotation.current.y = (offsetX / rect.width) * 20;
    targetRotation.current.z = (offsetX / rect.width) * 7;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    targetRotation.current.x = 0;
    targetRotation.current.y = 0;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  return (
    <section id="about" className="py-24 md:py-32 border-t border-line/70">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="mono-tag mb-3">About</div>
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl">
            Engineering intelligence with <span className="heading-serif-accent font-serif italic text-mute">intent.</span>
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column (5 cols): Summary verbatim from resume + quick links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-line text-xs font-mono text-mute">
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                <span>Professional Summary</span>
              </div>

              <p className="text-base sm:text-lg text-ink font-normal leading-relaxed">
                {personalInfo.summary}
              </p>

              <div className="pt-2 text-sm text-mute leading-relaxed">
                Focused on moving AI from fragile prototypes into reliable, production software backed by deterministic schemas, fault-tolerant pipelines, and end-to-end observability.
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-6 border-t border-line/60 flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-line hover:border-ink/40 text-ink text-xs font-mono transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-mute" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-line hover:border-ink/40 text-ink text-xs font-mono transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-mute" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-line hover:border-ink/40 text-ink text-xs font-mono transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Center Column (4 cols): Hanging Lanyard 3D ID Badge */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center pt-2 pb-6">
            {/* Lanyard Top Anchor & Strap */}
            <div className="flex flex-col items-center pointer-events-none select-none">
              <div className="w-8 h-2.5 rounded-t bg-ink" />
              <div className="w-5 h-16 bg-ink flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-y-0 w-[1px] bg-white/20" />
                <div className="text-[7px] text-white/60 font-mono rotate-90 tracking-widest uppercase">
                  FAST-NUCES
                </div>
              </div>
              <div className="w-7 h-5 rounded-sm border-2 border-stone-400 bg-stone-200 shadow-sm flex items-center justify-center">
                <div className="w-2.5 h-1 bg-stone-600 rounded-full" />
              </div>
            </div>

            {/* Interactive 3D Card: Outer Swinger & Inner Flipper */}
            <div
              ref={cardContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleCardClick}
              className="perspective-1000 cursor-pointer select-none -mt-1"
              style={{ width: '290px', height: '410px' }}
              title="Click anywhere to flip the badge"
            >
              {/* Outer swing physics wrapper */}
              <div
                ref={swingRef}
                className="w-full h-full preserve-3d"
                style={{ transformOrigin: 'top center' }}
              >
                {/* Inner flip wrapper (smooth 180deg flip on click) */}
                <div
                  className="w-full h-full relative preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* FRONT SIDE OF ID BADGE */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl bg-card border border-line p-5 shadow-xl flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-9 h-2 rounded-full bg-paper border border-line" />

                    {/* Top Header */}
                    <div className="pt-4 flex items-center justify-between border-b border-line pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-ink text-white font-mono text-[10px] font-bold flex items-center justify-center">
                          {personalInfo.monogram}
                        </div>
                        <span className="font-mono text-[9px] font-semibold tracking-wider text-ink">
                          VERIFIED CREDENTIAL
                        </span>
                      </div>
                    </div>

                    {/* Body Avatar & Identity */}
                    <div className="my-auto text-center space-y-3">
                      <div className="relative w-20 h-20 mx-auto rounded-full bg-paper border-2 border-line p-1 shadow-inner flex items-center justify-center">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <Image
                            src={publicAssetPath('/profile.jpg')}
                            alt={personalInfo.name}
                            width={72}
                            height={72}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-card border border-line flex items-center justify-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-lg text-ink tracking-tight">
                          {personalInfo.name}
                        </h3>
                        <p className="font-mono text-xs text-mute mt-0.5">
                          {personalInfo.role}
                        </p>
                      </div>

                      <div className="inline-block px-2.5 py-1 rounded bg-paper text-[10px] font-mono text-ink-2">
                        FAST-NUCES Alum
                      </div>
                    </div>

                    {/* Bottom Security & Barcode */}
                    <div className="pt-3 border-t border-line space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-mono text-mute">
                        <span>SECURITY AUTHENTICATED</span>
                        <span className="text-emerald-700 font-semibold">ACTIVE</span>
                      </div>

                      {/* Barcode representation */}
                      <div className="h-6 w-full flex items-center justify-between px-1 bg-paper/60 rounded">
                        <div className="flex items-center gap-[2px] w-full h-4 opacity-75">
                          {Array.from({ length: 42 }).map((_, i) => (
                            <div
                              key={i}
                              className="h-full bg-ink"
                              style={{
                                width: (i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1) + 'px',
                                opacity: i % 4 === 0 ? 0.35 : 0.9,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1 text-[8px] font-mono text-mute">
                        <span className="flex items-center gap-1 text-ink font-semibold">
                          <RotateCw className="w-2.5 h-2.5" /> Click anywhere to flip
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE OF ID BADGE */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-2xl bg-paper border border-line p-5 shadow-xl flex flex-col justify-between overflow-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-9 h-2 rounded-full bg-card border border-line" />

                    {/* Magnetic Strip Simulation */}
                    <div className="pt-4">
                      <div className="h-8 w-full bg-ink-2 rounded -mx-5 px-5 flex items-center">
                        <span className="font-mono text-[7px] text-zinc-400 tracking-widest uppercase">
                          MAGNETIC ENCODED PROFILE DATA
                        </span>
                      </div>
                    </div>

                    {/* Back Content: Education & Highlights */}
                    <div className="space-y-3 text-left my-auto">
                      <div>
                        <div className="font-mono text-[9px] text-mute tracking-wider uppercase">
                          Education & Honors
                        </div>
                        <div className="font-semibold text-xs text-ink mt-0.5">
                          {educationData.degree}
                        </div>
                        <div className="text-[11px] text-ink-2">
                          {educationData.institution}, {educationData.location}
                        </div>
                        <div className="font-mono text-[10px] text-mute">
                          Graduation: 2019 to 2023 • TA: Computer Networks
                        </div>
                      </div>

                      <div className="pt-2 border-t border-line/60">
                        <div className="font-mono text-[9px] text-mute tracking-wider uppercase">
                          Production Highlights
                        </div>
                        <ul className="text-[10px] text-ink-2 space-y-1 mt-1 font-mono">
                          <li>• DreamIT (Adopted by 250+ employees)</li>
                          <li>• AI Courtroom Portal (10 daily hearings)</li>
                          <li>• Multi-Agent HR Copilot (500+ registrations)</li>
                          <li>• Multi-Hop Agentic RAG (Cyclic LangGraph)</li>
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-line/60">
                        <div className="font-mono text-[9px] text-mute tracking-wider uppercase">
                          Contact Verification
                        </div>
                        <div className="text-[10px] font-mono text-ink truncate">
                          {personalInfo.email}
                        </div>
                        <div className="text-[10px] font-mono text-mute">
                          {personalInfo.phone}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-line text-center">
                      <span className="font-mono text-[8px] text-ink font-semibold flex items-center justify-center gap-1">
                        <RotateCw className="w-2.5 h-2.5" /> Click anywhere to flip back
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (3 cols): Quick Facts */}
          <div className="lg:col-span-3 space-y-4">
            <div className="card-premium p-6 space-y-5">
              <div className="mono-tag text-[10px]">Quick Facts</div>

              <div className="space-y-4 text-left">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-mute font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Location</span>
                  </div>
                  <div className="text-sm font-semibold text-ink">
                    {personalInfo.location}
                  </div>
                </div>

                <div className="space-y-1 pt-3 border-t border-line/60">
                  <div className="flex items-center gap-1.5 text-xs text-mute font-mono">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Education</span>
                  </div>
                  <div className="text-sm font-semibold text-ink">
                    {educationData.degree}
                  </div>
                  <div className="text-xs text-mute font-mono">
                    {educationData.institution} (2019 to 2023)
                  </div>
                </div>

                <div className="space-y-1 pt-3 border-t border-line/60">
                  <div className="flex items-center gap-1.5 text-xs text-mute font-mono">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Core Focus</span>
                  </div>
                  <div className="text-sm font-semibold text-ink">
                    {personalInfo.coreFocus}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
