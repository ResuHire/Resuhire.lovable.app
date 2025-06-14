
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Users, Star, TrendingUp, Award, Calendar, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 opacity-50"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-6 py-2 text-lg animate-fade-in">
              🚀 The Future of HrTech × EduTech
            </Badge>
          </div>
          
          {/* Main Brand & Vision */}
          <div className="mb-12 space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ResuHire
              </span>
            </h1>
            
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-indigo-600">because, we believe</span>{' '}
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">no Resumes</span>{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">To Get Hired</span>
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              The Complete Hiring Revolution is here
            </h2>
          </div>

          {/* Value Proposition */}
          <div className="mb-12 space-y-6">
            <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              Startups Have Y Combinator, Job Seekers Have ResuHire
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
              We're Building the Y Combinator for Talent → <span className="text-green-600 font-bold">$200B Market Opportunity</span>
            </p>
          </div>

          {/* Key Metrics */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-purple-100 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black text-purple-600">25K+</div>
                <div className="text-sm font-semibold text-muted-foreground">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black text-blue-600">$2.5M</div>
                <div className="text-sm font-semibold text-muted-foreground">Seed Round Raised</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black text-indigo-600">500+</div>
                <div className="text-sm font-semibold text-muted-foreground">Partner Companies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black text-green-600">85%</div>
                <div className="text-sm font-semibold text-muted-foreground">Match Success Rate</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
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
          
          {/* Detailed Description - Moved Here */}
          <div className="max-w-5xl mx-auto mb-12 space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              The world's first <strong className="text-purple-600">complete HrTech × EduTech ecosystem</strong> that revolutionizes how talent is discovered, developed, and placed across the entire hiring spectrum
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From instant AI-powered job matching to comprehensive career acceleration programs, 
              <strong className="text-green-600"> we're rebuilding the entire hiring industry</strong> from the ground up
            </p>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
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
                <Calendar className="w-8 h-8 text-white" />
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

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-muted">
            <p className="text-sm text-muted-foreground mb-6 font-medium">TRUSTED BY TOP COMPANIES</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-blue-600">Google</div>
              <div className="text-2xl font-bold text-blue-500">Meta</div>
              <div className="text-2xl font-bold text-orange-600">Amazon</div>
              <div className="text-2xl font-bold text-gray-600">Apple</div>
              <div className="text-2xl font-bold text-red-600">Netflix</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
