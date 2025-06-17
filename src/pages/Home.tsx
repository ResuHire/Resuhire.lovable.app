
import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import DualValue from '@/components/DualValue';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SocialProof />
      <Stats />
      <DualValue />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
