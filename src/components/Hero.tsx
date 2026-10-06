'use client';

import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '@/lib/data';
import { publicAssetPath } from '@/lib/publicAssetPath';
import { VolumeX, ArrowDown, FileDown, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const p = video.play();
    if (p) p.catch(() => {});

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.intersectionRatio < 0.3) video.pause();
          else video.play().catch(() => {});
        }),
      { threshold: [0, 0.3, 1] }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    if (isMuted) v.play().catch(() => {});
    setIsMuted((m) => !m);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    (window.__lenis
      ? window.__lenis.scrollTo(el, { offset: -70, duration: 1.2 })
      : el.scrollIntoView({ behavior: 'smooth' }));
  };

  return (
    /*
      Hero is pure white (#fff) so mix-blend-multiply on the video
      makes the white background perfectly transparent — white × white = white = invisible.
      The rest of the page stays --paper (#f4f2ee).
    */
    <section
      id="hero"
      ref={heroRef}
      className="relative overflow-hidden"
      style={{ minHeight: '100svh', backgroundColor: '#ffffff' }}
    >
      {/* ══ Ghost "FAIZAN" — sits at very top, right below navbar ══ */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[130px] pointer-events-none select-none z-0 md:top-[58px]"
      >
        <span
          className="block w-full text-center font-black uppercase leading-none tracking-tighter whitespace-nowrap overflow-hidden text-[clamp(56px,15vw,88px)] md:text-[clamp(100px,20vw,300px)]"
          style={{
            color: 'rgba(13,13,13,0.07)',
            letterSpacing: '-0.045em',
          }}
        >
          {personalInfo.firstName}
        </span>
      </div>

      {/* ══ Audio Toggle ══ */}
      <div className="absolute top-[76px] right-6 sm:right-10 z-30">
        <button
          onClick={toggleSound}
          className="w-[46px] h-[46px] rounded-full bg-ink text-card flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <div className="flex items-center justify-center gap-[3px]">
              <div className="w-[3px] h-3.5 bg-white rounded-full animate-pulse" />
              <div className="w-[3px] h-4 bg-white rounded-full animate-pulse delay-75" />
              <div className="w-[3px] h-2 bg-white rounded-full animate-pulse delay-150" />
            </div>
          )}
        </button>
      </div>

      {/*
        ══ Three-column layout ══
        col-1: left text (name / role / description)
        col-2: video character (fills viewport height)
        col-3: right CTA buttons
      */}
      <div
        className="relative z-10 container-custom grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:h-[100svh]"
        style={{ minHeight: '100svh' }}
      >
        {/* ── LEFT: name, role, description ── */}
        <div className="flex flex-col justify-center md:justify-end py-24 md:py-0 md:pb-24 pr-0 md:pr-6 order-2 md:order-1 space-y-5">
          {/* Name */}
          <h1
            className="heading-display font-black text-ink leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(30px, 3.8vw, 54px)' }}
          >
            {personalInfo.role}
          </h1>

          {/* Description */}
          <p className="text-mute text-sm leading-relaxed max-w-[320px]">
            3+ years building full-stack and production AI/LLM applications for real users,
            including multi-agent systems and RAG pipelines.
          </p>

          <div className="pt-1 text-xs font-mono text-mute flex items-center gap-2">
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* ── CENTER: character video (full viewport height) ── */}
        <div className="flex items-end justify-center order-1 md:order-2">
          {/*
            Width is proportional: the original video is 1280×720 (landscape).
            The character roughly occupies the center 40% width.
            To show them tall, we make the container viewport-height and let
            object-cover crops the landscape video; desktop scaling brings the
            centered character closer, with the portrait frame clipping the sides.
            We use a narrow container so the character appears close to full height.
          */}
          <div
            className="mt-[190px] h-[55svh] w-full max-h-none overflow-hidden md:mt-0 md:h-[100svh] md:max-h-[900px] md:w-[clamp(260px,28vw,440px)]"
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="auto"
              src={publicAssetPath('/hero/hero_white.mp4')}
              className="md:scale-[0.6]"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center bottom',
                transformOrigin: 'center bottom',
                mixBlendMode: 'multiply',
                /* Fade out the very top/bottom edges softly */
                maskImage:
                  'linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
              }}
            />
          </div>
        </div>

        {/* ── RIGHT: CTA buttons ── */}
        <div className="relative -translate-y-6 md:translate-y-0 flex flex-col justify-center md:justify-end items-start md:items-end pl-0 md:pl-6 order-3 pb-8 md:pb-24 space-y-4">
          <div className="font-mono text-xs text-mute uppercase tracking-wider hidden md:block">
            Quick Actions
          </div>

          <div className="flex flex-col gap-3 w-full max-w-[210px]">
            <button
              onClick={() => scrollTo('work')}
              className="w-full px-6 py-3.5 rounded-full bg-ink text-card hover:bg-black font-mono text-xs font-semibold tracking-tight shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-between"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full px-6 py-3.5 rounded-full bg-card border border-line hover:border-ink/40 text-ink font-mono text-xs font-semibold tracking-tight shadow-xs hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Let&apos;s Talk</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-mute" />
            </button>

            <a
              href={publicAssetPath(personalInfo.resumePdf)}
              download
              className="w-full px-6 py-3.5 rounded-full bg-card border border-line hover:border-ink/40 text-ink font-mono text-xs font-semibold tracking-tight shadow-xs hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <FileDown className="w-3.5 h-3.5" />
                <span>Résumé ↓</span>
              </div>
              <span className="font-mono text-[10px] text-mute">PDF</span>
            </a>
          </div>

          <div className="font-mono text-[11px] text-mute flex items-center gap-2 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Immediately Available</span>
          </div>
        </div>
      </div>

      {/* ══ Bottom bar ══ */}
      <div className="absolute bottom-0 left-0 right-0 z-20 container-custom flex items-center justify-center text-xs font-mono text-mute py-3">
        <button
          onClick={() => scrollTo('about')}
          className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
