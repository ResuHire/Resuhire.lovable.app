
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
      <div className="pt-16">
        <div className="py-32 bg-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black leading-tight">
              Partner <span className="text-blue-600">Companies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the amazing companies that trust ResuHire to find their next great hires.
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
