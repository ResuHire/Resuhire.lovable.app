
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
      <div className="pt-16">
        <div 
          ref={heroRef}
          className={`py-32 bg-white transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black leading-tight hover:scale-105 transition-transform duration-500 cursor-default">
              Training <span className="text-blue-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive programs designed to transform you from student to professional warrior.
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
