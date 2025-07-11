
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IndustryPartners from '@/components/IndustryPartners';
import RecruiterSection from '@/components/RecruiterSection';
import Enterprise from '@/components/Enterprise';

const Companies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-8 text-foreground tracking-tight">
              Companies
            </h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building partnerships with industry leaders who value transformed talent.
            </p>
          </div>
        </div>
        <IndustryPartners />
        <RecruiterSection />
        <Enterprise />
      </div>
      <Footer />
    </div>
  );
};

export default Companies;
