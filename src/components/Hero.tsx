
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, GraduationCap, Trophy, Briefcase, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-orange-700 font-semibold text-sm">The Complete Hiring Ecosystem</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            ResuHire
          </h1>
          
          {/* Core Positioning */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
              Startups have Y Combinator.
            </p>
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Job seekers have ResuHire.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              The world's first comprehensive EduTech × HrTech ecosystem. We don't just match talent with jobs—we build talent, accelerate careers, and revolutionize how the world works.
            </p>
          </div>

          {/* Platform Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-sm text-gray-600 font-medium">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Partner Companies</div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">$180K</div>
              <div className="text-sm text-gray-600 font-medium">Avg. Starting Salary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
              <Users className="mr-2 w-5 h-5" />
              Apply to ResuHire
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
              <Building className="mr-2 w-5 h-5" />
              Partner with Us
            </Button>
          </div>

          {/* Ecosystem Overview */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">EduTech Platform</h3>
              <p className="text-gray-600 text-sm">Comprehensive learning paths, mentorship, and skill development programs designed for career acceleration.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">HrTech Engine</h3>
              <p className="text-gray-600 text-sm">AI-powered matching, streamlined hiring processes, and data-driven talent acquisition for companies.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Career Accelerator</h3>
              <p className="text-gray-600 text-sm">End-to-end career transformation programs with guaranteed outcomes and lifetime support network.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
