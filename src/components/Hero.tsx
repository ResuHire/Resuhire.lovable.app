
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, GraduationCap, Trophy, Briefcase, Target, CheckCircle, Star, TrendingUp, Zap, Shield, Brain } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation();
  const { elementRef: ecosystemRef, isVisible: ecosystemVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Main Hero Content */}
        <div 
          ref={heroRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Pre-seed Badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-700 font-semibold text-sm tracking-wide">PRE-SEED READY • $2.5M TARGET</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            ResuHire
          </h1>
          
          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-4xl font-medium text-gray-800 mb-4 leading-tight">
              The Future of <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">Hiring</span> is Here
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              First platform to guarantee FAANG internships from Year 1 • No resume needed
            </p>
            
            {/* Market positioning */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">For Students & Job Seekers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Guaranteed FAANG placements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Complete skill transformation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>No resume required</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">For Companies & Investors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Pre-vetted talent pipeline</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>85% match accuracy vs 15% traditional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Scalable EdTech + HrTech model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Clear Value Props - YC Feedback */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-blue-800 mb-1">No Resume Needed</h3>
                <p className="text-sm text-blue-600">Just 3 questions: Who are you? What do you know? How do you do it?</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 hover:bg-purple-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                <Trophy className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-purple-800 mb-1">FAANG Internships</h3>
                <p className="text-sm text-purple-600">Guaranteed placements from your first year of college</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 hover:bg-green-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-green-800 mb-1">Complete Training</h3>
                <p className="text-sm text-green-600">Technical + mental + communication + body language coaching</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The world's first EduTech × HrTech ecosystem that will build talent, accelerate careers, 
              and revolutionize how companies hire.
            </p>
          </div>

          {/* Key Metrics for Investors */}
          <div 
            ref={metricsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
              metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-gray-600 font-medium text-sm">Pre-registered Students</div>
              <div className="text-xs text-green-600 font-semibold mt-1">300% growth rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium text-sm">Partner Companies</div>
              <div className="text-xs text-blue-600 font-semibold mt-1">Including FAANG</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">$2.5M</div>
              <div className="text-gray-600 font-medium text-sm">Pre-seed Target</div>
              <div className="text-xs text-purple-600 font-semibold mt-1">18-month runway</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600 font-medium text-sm">Match Accuracy</div>
              <div className="text-xs text-orange-600 font-semibold mt-1">vs 15% traditional</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Join Our Ecosystem
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 px-12 py-4 text-lg font-semibold h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Investor Deck
            </Button>
          </div>
        </div>

        {/* Three Pillars - Why We Win */}
        <div 
          ref={ecosystemRef}
          className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
            ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Guaranteed Outcomes</h3>
            <p className="text-gray-600 leading-relaxed">
              Only platform offering FAANG placement guarantees from Year 1. 
              Our partnerships ensure students get hired, not just trained.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Holistic Transformation</h3>
            <p className="text-gray-600 leading-relaxed">
              Beyond technical skills - we develop communication, mental resilience, 
              and professional presence for complete career readiness.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI-First Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              85% accuracy vs traditional 15%. Our AI understands both talent 
              potential and company culture for perfect matches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
