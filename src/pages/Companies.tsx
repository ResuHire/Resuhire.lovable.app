
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
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Companies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
