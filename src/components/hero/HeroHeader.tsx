
import React from 'react';
import { Badge } from '@/components/ui/badge';

const HeroHeader = () => {
  return (
    <div className="text-center max-w-5xl mx-auto">
      <div className="flex justify-center mb-6">
        <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-6 py-2 text-lg animate-fade-in">
          🚀 The Future of HrTech × EduTech
        </Badge>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in">
        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          ResuHire
        </span>
        <br />
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
          <span className="text-indigo-600">because, we believe</span>{' '}
          <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">no Resumes</span>{' '}
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">To Get Hired</span>
        </span>
        <br />
        <span className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent mt-4 block">
          The Complete Hiring Revolution is here
        </span>
      </h1>

      <div className="mb-8">
        <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-4">
          Startups Have Y Combinator, Job Seekers Have ResuHire
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          We're Building the Y Combinator for Talent → <span className="text-green-600 font-bold">$200B Market Opportunity</span>
        </p>
      </div>
    </div>
  );
};

export default HeroHeader;
