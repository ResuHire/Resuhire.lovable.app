
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import ComparisonTable from '@/components/ComparisonTable';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HowItWorksPage = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div 
          ref={heroRef}
          className={`py-32 bg-white transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black leading-tight hover:scale-105 transition-transform duration-500 cursor-default">
              How <span className="text-blue-600">It Works</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understand the complete process from application to hire and see why we're different.
            </p>
          </div>
        </div>
        <HowItWorks />
        <ComparisonTable />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
