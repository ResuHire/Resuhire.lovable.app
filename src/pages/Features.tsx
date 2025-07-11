
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
      <div className="pt-20">
        <div className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-8 text-foreground tracking-tight">
              Features
            </h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive tools designed to accelerate career transformation.
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
