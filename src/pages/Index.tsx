
import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import DualValue from '@/components/DualValue';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import RecruiterSection from '@/components/RecruiterSection';
import Testimonials from '@/components/Testimonials';
import Enterprise from '@/components/Enterprise';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SocialProof />
      <Stats />
      <DualValue />
      <Features />
      <HowItWorks />
      <RecruiterSection />
      <Testimonials />
      <Enterprise />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
