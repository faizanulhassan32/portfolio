'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/lib/data';
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-14 md:pt-32 md:pb-16 border-t border-line/70">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mono-tag mb-4">Contact</div>
          <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight">
            Let&apos;s build something{' '}
            <span className="heading-serif-accent font-serif italic text-mute">
              together.
            </span>
          </h2>
          <p className="text-mute text-base sm:text-lg mt-4 max-w-xl">
            Currently exploring remote opportunities as an AI Full-Stack Developer. Immediately
            available to design, build, and deploy production LLM applications and multi-agent
            workflows.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Main Direct-Copy Email Card (8 cols) */}
          <div className="md:col-span-8 card-premium p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-mute uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5 text-ink" />
                <span>Primary Email Channel</span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-ink break-all">
                {personalInfo.email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-line">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-card hover:bg-black font-mono text-xs font-semibold tracking-tight transition-all duration-200 active:scale-95 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied to Clipboard ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper hover:bg-card border border-line text-ink font-mono text-xs font-semibold transition-all duration-200"
              >
                <span>Open Mail Client</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-mute" />
              </a>
            </div>
          </div>

          {/* Quick Direct Links Card (4 cols) */}
          <div className="md:col-span-4 card-premium p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono text-mute uppercase tracking-wider mb-4">
                Direct Channels
              </div>

              <div className="space-y-3 font-mono text-xs">
                {/* Phone */}
                <a
                  href="https://wa.me/923185152543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-paper/70 hover:bg-paper border border-line transition-colors text-ink"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-mute" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-mute" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-paper/70 hover:bg-paper border border-line transition-colors text-ink"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-3.5 h-3.5 text-mute" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-mute" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-paper/70 hover:bg-paper border border-line transition-colors text-ink"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-3.5 h-3.5 text-mute" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-mute" />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-line text-[11px] font-mono text-mute flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for Remote Roles</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mute">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-mute/80">Design template by Lohitha Damisetti</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
