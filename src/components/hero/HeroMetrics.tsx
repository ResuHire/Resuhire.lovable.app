
import React from 'react';
import { TrendingUp, Award, Users, Star } from 'lucide-react';

const HeroMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <div className="text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2">300%</div>
        <div className="text-sm text-muted-foreground font-semibold">YoY Growth</div>
      </div>
      <div className="text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <Award className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">$180K</div>
        <div className="text-sm text-muted-foreground font-semibold">Avg Starting Salary</div>
      </div>
      <div className="text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <Users className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl md:text-5xl font-black text-indigo-600 mb-2">3 Days</div>
        <div className="text-sm text-muted-foreground font-semibold">Avg Hire Time</div>
      </div>
      <div className="text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <Star className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl md:text-5xl font-black text-green-600 mb-2">98%</div>
        <div className="text-sm text-muted-foreground font-semibold">Retention Rate</div>
      </div>
    </div>
  );
};

export default HeroMetrics;
