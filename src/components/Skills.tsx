'use client';

import React, { useState } from 'react';
import { periodicSkills, SkillElement, categoryTones } from '@/lib/data';
import { Sparkles, Info } from 'lucide-react';

const categories = [
  'All',
  'Languages',
  'Frameworks & Libraries',
  'AI & LLMs',
  'Databases',
  'Cloud & DevOps',
  'Architecture & Tools',
] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillElement>(periodicSkills[0]);

  // Handle category filter click and cleanly reset selected skill to first matching element
  const handleCategoryFilter = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSelectedSkill(periodicSkills[0]);
    } else {
      const match = periodicSkills.find((s) => s.category === cat);
      if (match) {
        setSelectedSkill(match);
      }
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line/70">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="mono-tag mb-3">Skills</div>
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-ink">
              The Engineering <span className="heading-serif-accent font-serif italic text-mute">table.</span>
            </h2>
          </div>

          <p className="text-mute text-sm max-w-md">
            Organized as an elemental system. Every skill represents hardened production experience
            deployed in live AI agents, data backends, and full-stack platforms.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const tone = cat === 'All' ? undefined : categoryTones[cat];
            return (
              <button
                key={cat}
                onClick={() => handleCategoryFilter(cat)}
                style={
                  isSelected && tone
                    ? {
                        backgroundColor: tone.bg,
                        color: tone.text,
                        borderColor: tone.border,
                      }
                    : undefined
                }
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? `${cat === 'All' ? 'bg-ink text-card border-ink' : ''} font-semibold shadow-xs`
                    : 'bg-card text-mute border-line hover:text-ink hover:border-ink/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Main Grid + Inspector Side Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Periodic Table Grid (8 columns on lg) with progressive shaded tones */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
              {periodicSkills.map((skill) => {
                const isMatch =
                  activeCategory === 'All' || skill.category === activeCategory;
                const isSelected = selectedSkill.symbol === skill.symbol;
                const tone = categoryTones[skill.category];

                return (
                  <button
                    key={`${skill.number}-${skill.symbol}`}
                    onClick={() => {
                      if (isMatch) setSelectedSkill(skill);
                    }}
                    onMouseEnter={() => {
                      if (isMatch) setSelectedSkill(skill);
                    }}
                    style={{
                      backgroundColor: tone.bg,
                      color: tone.text,
                      borderColor: isSelected ? '#0d0d0d' : tone.border,
                    }}
                    className={`relative p-2.5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between aspect-square border shadow-xs ${
                      isSelected
                        ? 'ring-2 ring-ink ring-offset-2 ring-offset-paper scale-[1.06] z-10 shadow-lg'
                        : isMatch
                        ? 'hover:scale-[1.03] hover:shadow-md cursor-pointer'
                        : 'opacity-15 pointer-events-none cursor-default'
                    }`}
                  >
                    {/* Top: Atomic Number & Brand Color Accent Dot */}
                    <div className="flex items-center justify-between w-full text-[9px] font-mono">
                      <span
                        style={{ color: tone.subtleText }}
                        className="font-bold font-mono"
                      >
                        {String(skill.number).padStart(2, '0')}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full shadow-xs"
                        style={{ backgroundColor: skill.brandColor }}
                      />
                    </div>

                    {/* Center: 2-Letter Symbol */}
                    <div className="my-auto text-center w-full">
                      <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
                        {skill.symbol}
                      </span>
                    </div>

                    {/* Bottom: Name */}
                    <div className="w-full text-center">
                      <div
                        style={{ color: tone.subtleText }}
                        className="text-[9px] sm:text-[10px] font-mono truncate font-medium"
                      >
                        {skill.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-end text-xs font-mono text-mute px-1">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Hover any active element to inspect
              </span>
            </div>
          </div>

          {/* Side Inspector Panel (4 columns on lg) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="card-premium p-6 sm:p-7 space-y-6">
              {/* Element Header Badge */}
              <div className="flex items-start justify-between border-b border-line pb-5">
                <div className="flex items-center gap-4">
                  {/* Selected skill symbol */}
                  <div
                    className="w-14 h-14 rounded-2xl bg-paper border border-line flex items-center justify-center p-3 relative shadow-inner"
                    style={{
                      boxShadow: `0 0 20px -4px ${selectedSkill.brandColor}35`,
                    }}
                  >
                    <span className="font-display text-xl font-bold text-ink">
                      {selectedSkill.symbol}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-mute font-semibold">
                      No. {String(selectedSkill.number).padStart(2, '0')}
                    </span>
                    <h3 className="heading-display text-xl sm:text-2xl font-bold text-ink mt-0.5">
                      {selectedSkill.name}
                    </h3>
                    {/* Group shown directly below the title */}
                    <div className="text-xs font-mono text-mute mt-1">
                      {selectedSkill.groupName}
                    </div>
                  </div>
                </div>

              </div>

              {/* Description Section */}
              <div className="space-y-2">
                <p className="text-sm text-ink-2 leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Real World Production Impact & Use */}
              <div className="pt-4 border-t border-line/70 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-ink font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Production Impact & Use</span>
                </div>
                <p className="text-xs text-mute leading-relaxed font-mono bg-paper/60 p-3.5 rounded-xl border border-line">
                  {selectedSkill.realWorldUse}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
