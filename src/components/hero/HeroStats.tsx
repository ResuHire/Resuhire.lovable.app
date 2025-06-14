
import React from 'react';

const HeroStats = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-2xl md:text-3xl font-black text-purple-600">25K+</div>
          <div className="text-sm text-muted-foreground font-semibold">Active Users</div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-black text-blue-600">$2.5M</div>
          <div className="text-sm text-muted-foreground font-semibold">Seed Round Raised</div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-black text-indigo-600">500+</div>
          <div className="text-sm text-muted-foreground font-semibold">Partner Companies</div>
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-black text-green-600">85%</div>
          <div className="text-sm text-muted-foreground font-semibold">Match Success Rate</div>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
