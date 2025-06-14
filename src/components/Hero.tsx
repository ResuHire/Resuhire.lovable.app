
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Users, Star, TrendingUp, Award } from 'lucide-react';
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
              🚀 The Future of Hiring is Here
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              We Don't Believe
            </span>
            <br />
            <span className="text-foreground">in Resumes</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              To Get Hired
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 leading-relaxed font-medium">
              ResuHire merges <strong className="text-purple-600">AI</strong>, <strong className="text-blue-600">HrTech</strong> & <strong className="text-indigo-600">EduTech</strong> to transform fresh grads into <strong className="text-orange-600">warriors</strong>
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Get FAANG internships from year 1, master skills through our training, and land jobs with 
              <strong className="text-green-600"> 85% matching accuracy</strong> - no traditional applications!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-xl px-12 py-8 font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              <Users className="mr-3 w-6 h-6" />
              Become a Warrior
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold transition-all duration-300 transform hover:scale-105">
              <Target className="mr-3 w-6 h-6" />
              For Recruiters
            </Button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2">85%</div>
              <div className="text-sm text-muted-foreground font-semibold">Match Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">FAANG</div>
              <div className="text-sm text-muted-foreground font-semibold">From Year 1</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-indigo-600 mb-2">0</div>
              <div className="text-sm text-muted-foreground font-semibold">Resumes Needed</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-green-600 mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-semibold">Skills Focus</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-muted">
            <p className="text-sm text-muted-foreground mb-6 font-medium">TRUSTED BY STUDENTS AT</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-blue-600">MIT</div>
              <div className="text-2xl font-bold text-red-600">Stanford</div>
              <div className="text-2xl font-bold text-yellow-600">Berkeley</div>
              <div className="text-2xl font-bold text-green-600">Harvard</div>
              <div className="text-2xl font-bold text-purple-600">CMU</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
