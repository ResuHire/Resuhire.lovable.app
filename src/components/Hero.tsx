
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, GraduationCap, Trophy, Briefcase, Target, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Institutional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-orange-700 font-semibold text-sm tracking-wide">THE COMPLETE ECOSYSTEM</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 tracking-tight">
            ResuHire
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-6 leading-relaxed">
              Startups have Y Combinator.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              Job seekers have ResuHire.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The world's most comprehensive EduTech × HrTech ecosystem. We don't just place talent—we build it, 
              accelerate it, and revolutionize how the global economy works.
            </p>
          </div>

          {/* Institutional Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-gray-600 font-medium">Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">$180K</div>
              <div className="text-gray-600 font-medium">Avg. Salary</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-lg font-semibold h-14">
              Apply to ResuHire
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-lg font-semibold h-14">
              Partner with Us
            </Button>
          </div>
        </div>

        {/* Ecosystem Overview */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">EduTech Platform</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive learning infrastructure with personalized curriculum, 
              expert mentorship, and skill certification programs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">HrTech Engine</h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered talent matching, streamlined recruitment processes, 
              and data-driven hiring solutions for enterprise partners.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Accelerator</h3>
            <p className="text-gray-600 leading-relaxed">
              End-to-end career transformation with guaranteed outcomes, 
              lifetime alumni network, and continuous growth support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
