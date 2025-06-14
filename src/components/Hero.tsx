
import React from 'react';
import HeroHeader from './hero/HeroHeader';
import HeroStats from './hero/HeroStats';
import HeroActions from './hero/HeroActions';
import HeroDescription from './hero/HeroDescription';
import HeroMetrics from './hero/HeroMetrics';
import HeroTrust from './hero/HeroTrust';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 opacity-50"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <HeroHeader />
        <HeroStats />
        <HeroActions />
        <HeroDescription />
        <HeroMetrics />
        <HeroTrust />
      </div>
    </section>
  );
};

export default Hero;
