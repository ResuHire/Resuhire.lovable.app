
import React from 'react';
import HeroHeader from './hero/HeroHeader';
import HeroDescription from './hero/HeroDescription';
import HeroStats from './hero/HeroStats';
import HeroActions from './hero/HeroActions';
import HeroMetrics from './hero/HeroMetrics';
import HeroTrust from './hero/HeroTrust';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <HeroHeader />
        <HeroDescription />
        <HeroStats />
        <HeroActions />
        <HeroMetrics />
        <HeroTrust />
      </div>
    </section>
  );
};

export default Hero;
