import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Impact from '@/components/Impact';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-card overflow-x-hidden">
      {/* 4.0 Navigation */}
      <Navigation />

      {/* 4.1 Hero Section */}
      <Hero />

      {/* 4.2 About: Hanging Lanyard ID Card */}
      <About />

      {/* 4.3 Skills: Periodic Table */}
      <Skills />

      {/* 4.4 Work: Expanding Accordion Gallery */}
      <Work />

      {/* 4.5 Experience: Unified Path */}
      <Experience />

      {/* 4.6 Production Impact (Achievements) */}
      <Impact />

      {/* 4.7 Contact & Footer */}
      <Contact />
    </main>
  );
}
