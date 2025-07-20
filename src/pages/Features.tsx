
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import VisualProcess from '@/components/VisualProcess';
import ProgressTracking from '@/components/ProgressTracking';
import Gamification from '@/components/Gamification';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="py-32 bg-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black leading-tight">
              Powerful <span className="text-blue-600">Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover all the innovative features that make ResuHire the complete hiring revolution platform.
            </p>
          </div>
        </div>
        <Features />
        <VisualProcess />
        <ProgressTracking />
        <Gamification />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
