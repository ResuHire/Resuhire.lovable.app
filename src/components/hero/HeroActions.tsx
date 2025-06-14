
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Trophy } from 'lucide-react';

const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-xl px-12 py-8 font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
        <Zap className="mr-3 w-6 h-6" />
        Start Your Journey
        <ArrowRight className="ml-3 w-6 h-6" />
      </Button>
      <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold transition-all duration-300 transform hover:scale-105">
        <Trophy className="mr-3 w-6 h-6" />
        Partner with Us
      </Button>
    </div>
  );
};

export default HeroActions;
