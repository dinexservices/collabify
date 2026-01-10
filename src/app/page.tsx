"use client";

import React from 'react';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TargetAudience from '@/components/TargetAudience';
import Features from '@/components/Features';
import EarlyAccess from '@/components/EarlyAccess';
import SocialProof from '@/components/SocialProof';
import LaunchTeaser from '@/components/LaunchTeaser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* Navbar is typically in layout, but previous file didn't show it here. 
          Assuming Layout handles Navbar, or if I need to include it. 
          The previous file did NOt include Navbar in the render, so I will stick to that.
          However, line 10 in original file was imports.
          Wait, previous file imports: Partners, About, Ecosystem, Services, Footer, Team, Contact.
          It did NOT import Navbar. Navbar is likely in layout.tsx.
          I will remove Navbar import if it's not needed, but typically it is in layout.
          Let's check layout.tsx in next step if needed, but for now I will stick to what was there minus the standard components.
      */}
      <main>
        <div className="animate-in fade-in duration-500">
          <Hero />
          <ProblemSection />
          <SolutionSection />
          <TargetAudience />
          <Features />
          <EarlyAccess />
          <Team/>
          <SocialProof />
          <LaunchTeaser />
        </div>
      </main>
    </div>
  );
};

export default App;
