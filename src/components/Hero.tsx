
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
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-6 py-2 text-lg animate-fade-in">
              🚀 Next-Gen HrTech × EduTech Platform
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              The Future
            </span>
            <br />
            <span className="text-foreground">of</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Hiring
            </span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
              is Here
            </span>
          </h1>

          {/* Marketing Message */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
              We Don't Believe in Resumes To Get Hired
            </p>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              Startups Have Y Combinator, Job Seekers Have ResuHire
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 font-medium">
              We're Building the Y Combinator for Talent → $200B Market Opportunity
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 leading-relaxed font-medium">
              The complete <strong className="text-purple-600">HrTech × EduTech platform</strong> that revolutionizes talent discovery, development, and placement through AI-powered matching, skill-based hiring, and comprehensive career acceleration programs
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              From our flagship <strong className="text-orange-600">12-week accelerator</strong> to instant job matching, 
              <strong className="text-green-600"> we're the complete hiring ecosystem</strong> - no resumes required!
            </p>
          </div>

          {/* YC-Style Traction Stats */}
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-xl px-12 py-8 font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              <Zap className="mr-3 w-6 h-6" />
              Get Hired Today
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold transition-all duration-300 transform hover:scale-105">
              <Trophy className="mr-3 w-6 h-6" />
              Partner with Us
            </Button>
          </div>

          {/* Enhanced Market Validation Stats */}
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

          {/* Trust Indicators */}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
