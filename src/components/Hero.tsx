
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, GraduationCap, Trophy, Briefcase, Target, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation();
  const { elementRef: ecosystemRef, isVisible: ecosystemVisible } = useScrollAnimation();

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={heroRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8 hover:bg-blue-100 transition-colors duration-300">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-700 font-semibold text-sm tracking-wide">CAREER OPERATING SYSTEM</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            ResuHire
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-gray-700 mb-3 tracking-wide">
            Revolutionary Career Acceleration Platform
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8 tracking-wide max-w-3xl mx-auto">
            Transform ambitious talent into industry-ready professionals through AI-powered matching and comprehensive career development
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-blue-200">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              What <span className="text-orange-600 font-bold">Y Combinator</span> is to startups,
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              <span className="text-purple-600 font-bold">ResuHire</span> is to career development.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-blue-800 mb-2 text-lg">Skills-First Approach</h3>
                <p className="text-sm text-blue-700">Advanced AI evaluation based on capabilities, not credentials</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-purple-800 mb-2 text-lg">Elite Partnerships</h3>
                <p className="text-sm text-purple-700">Direct access to top-tier companies and exclusive opportunities</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-green-800 mb-2 text-lg">Comprehensive Development</h3>
                <p className="text-sm text-green-700">Technical excellence, leadership skills, and professional growth</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The world's first integrated EduTech × HrTech ecosystem that develops talent, 
              accelerates careers, and transforms how organizations hire.
            </p>
          </div>

          <div 
            ref={metricsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
              metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">25K+</div>
                <TrendingUp className="w-5 h-5 text-green-500 ml-2" />
              </div>
              <div className="text-gray-600 font-medium">Active Professionals</div>
              <div className="text-xs text-green-600 font-semibold">300% Annual Growth</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">500+</div>
                <Building className="w-5 h-5 text-blue-500 ml-2" />
              </div>
              <div className="text-gray-600 font-medium">Partner Organizations</div>
              <div className="text-xs text-blue-600 font-semibold">Including Fortune 500</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">$180K</div>
              <div className="text-gray-600 font-medium">Average Salary</div>
              <div className="text-xs text-purple-600 font-semibold">85% Above Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
              <div className="text-xs text-orange-600 font-semibold">Within 6 Months</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8 max-w-4xl mx-auto border border-gray-200">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
              <span className="font-bold text-gray-800 ml-2">4.9/5</span>
              <span className="text-gray-600">from 2,500+ professionals</span>
            </div>
            <p className="text-gray-700 text-lg italic mb-2">
              "ResuHire provided me with the comprehensive development and industry connections 
              that transformed my career trajectory. The platform's approach to skill-based matching 
              and professional development is truly revolutionary."
            </p>
            <p className="text-sm text-gray-600">- Sarah Chen, Senior Software Engineer at Meta</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold h-14">
              Begin Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-lg font-semibold h-14">
              Explore Our Approach
            </Button>
          </div>
        </div>

        <div 
          ref={ecosystemRef}
          className={`grid md:grid-cols-3 gap-12 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
            ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300 border border-blue-200">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive learning infrastructure with personalized curriculum, 
              expert mentorship, and industry-recognized certification programs.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300 border border-green-200">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Talent Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered talent assessment, intelligent matching algorithms, 
              and data-driven recruitment solutions for enterprise partners.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 transition-colors duration-300 border border-purple-200">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Acceleration</h3>
            <p className="text-gray-600 leading-relaxed">
              End-to-end career transformation with guaranteed outcomes, 
              professional alumni network, and continuous growth support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
