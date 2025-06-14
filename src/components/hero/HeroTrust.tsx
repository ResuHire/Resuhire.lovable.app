
import React from 'react';

const HeroTrust = () => {
  return (
    <div className="mt-16 pt-8 border-t border-muted">
      <p className="text-sm text-muted-foreground mb-6 font-medium">TRUSTED BY TOP COMPANIES</p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
        <div className="text-2xl font-bold text-blue-600">Google</div>
        <div className="text-2xl font-bold text-blue-500">Meta</div>
        <div className="text-2xl font-bold text-orange-600">Amazon</div>
        <div className="text-2xl font-bold text-gray-600">Apple</div>
        <div className="text-2xl font-bold text-red-600">Netflix</div>
      </div>
    </div>
  );
};

export default HeroTrust;
