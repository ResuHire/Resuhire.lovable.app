
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, GraduationCap, Trophy, Briefcase, Target, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation();
  const { elementRef: ecosystemRef, isVisible: ecosystemVisible } = useScrollAnimation();

  return (
    <section className="pt-20 pb-32 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Clean, minimal hero section */}
        <div 
          ref={heroRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Minimal status badge */}
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-8 text-sm font-medium">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">Building the future of hiring</span>
          </div>
          
          {/* Clean main heading */}
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-foreground tracking-tight">
            Transform talent,<br />
            <span className="font-medium">accelerate careers</span>
          </h1>
          
          {/* Simple value proposition */}
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            The world's first platform combining AI-powered matching with comprehensive career transformation. 
            No resume needed—just talent, ambition, and results.
          </p>
          
          {/* Clean CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-medium rounded-lg">
              Join the revolution
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted px-8 py-4 text-base font-medium rounded-lg">
              See how it works
            </Button>
          </div>
        </div>

        {/* Clean metrics section */}
        <div 
          ref={metricsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300 ${
            metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-foreground mb-2">25K+</div>
            <div className="text-sm text-muted-foreground font-medium">Warriors in pipeline</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-foreground mb-2">500+</div>
            <div className="text-sm text-muted-foreground font-medium">Target partners</div>
          </div>
          <div className="text-3xl md:text-4xl font-light text-foreground mb-2">$180K</div>
          <div className="text-sm text-muted-foreground font-medium">Target avg. salary</div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-foreground mb-2">98%</div>
            <div className="text-sm text-muted-foreground font-medium">Target placement rate</div>
          </div>
        </div>

        {/* Clean ecosystem cards */}
        <div 
          ref={ecosystemRef}
          className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-600 ${
            ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium text-card-foreground mb-4">Learn & Grow</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive skill development with personalized mentorship and cutting-edge curriculum.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium text-card-foreground mb-4">Get Matched</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered matching connects you with the right opportunities based on skills and potential.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium text-card-foreground mb-4">Land Your Dream Job</h3>
            <p className="text-muted-foreground leading-relaxed">
              Guaranteed placements at top companies with comprehensive career support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
