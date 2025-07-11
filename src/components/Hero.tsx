
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, CheckCircle, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div 
          ref={heroRef}
          className={`text-center transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-8 border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-medium text-sm">Now accepting applications</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Get hired at <span className="text-purple-600">top companies</span>
            <br />without the resume game
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We match talented people with great companies based on skills, not credentials. 
            No more black holes. No more rejection emails.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl">
              Start your journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg transition-all">
              See how it works
            </Button>
          </div>
        </div>

        {/* Simple metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "2,500+", label: "People placed", icon: CheckCircle },
            { number: "150+", label: "Partner companies", icon: Star },
            { number: "$145k", label: "Average salary", icon: Zap },
            { number: "3 weeks", label: "Average time to hire", icon: CheckCircle }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
