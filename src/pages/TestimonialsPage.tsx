
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our community of successful job seekers and companies who found their perfect match.
            </p>
          </div>
        </div>
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
