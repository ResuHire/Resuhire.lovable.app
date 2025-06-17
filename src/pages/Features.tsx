
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
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
