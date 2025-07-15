
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center pt-20">
      {/* Decorative doodle elements - inspired by Iterative VC */}
      <div className="absolute top-32 right-20 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-16 w-12 h-12 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
          <path d="M20 80 Q50 20 80 80" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="20" cy="80" r="3" fill="currentColor" />
          <circle cx="80" cy="80" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        {/* Announcement banner */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm border border-blue-100">
            Pre-seed round opening soon - watch our demo day pitch
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Main headline - inspired by "Founders supporting founders" */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Students becoming <br />
          <span className="relative">
            FAANG engineers
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-500 opacity-20" viewBox="0 0 200 20">
              <path d="M5 15 Q100 5 195 15" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </span>
        </h1>

        {/* Simple subtitle */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We invest <strong>$150K to $500K</strong> in transforming college students into industry-ready engineers, 
          twice a year. Then we guarantee their placement at top tech companies.
        </p>

        {/* Clean CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium"
          >
            Apply for Summer 2025
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md font-medium"
          >
            About our program
          </Button>
        </div>

        {/* Company logos section placeholder */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-6">Our students get hired at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
            <div className="text-2xl font-bold text-gray-400">Apple</div>
            <div className="text-2xl font-bold text-gray-400">Netflix</div>
            <div className="text-2xl font-bold text-gray-400">Amazon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
