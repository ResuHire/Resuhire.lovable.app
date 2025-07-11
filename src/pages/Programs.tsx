
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MentorshipNetwork from '@/components/MentorshipNetwork';
import EmployerConnect from '@/components/EmployerConnect';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Programs = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div 
          ref={heroRef}
          className={`py-24 bg-background transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-8 text-foreground tracking-tight">
              Programs
            </h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Structured pathways from potential to professional excellence.
            </p>
          </div>
        </div>
        <MentorshipNetwork />
        <EmployerConnect />
      </div>
      <Footer />
    </div>
  );
};

export default Programs;
