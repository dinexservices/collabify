"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import About from '@/components/About';
import Ecosystem from '@/components/Ecosystem';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import Contact from '@/components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <main>
        <div className="animate-in fade-in duration-500">
          <Hero />
          <Partners />
          <About />
          <Ecosystem />
          <Services />
          <Team />

     
        </div>

        <Contact />


      </main>
    </div>
  );
};

export default App;
