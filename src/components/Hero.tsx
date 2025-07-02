
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, GraduationCap, Trophy, Briefcase, Target, CheckCircle, Star, TrendingUp, Zap, Shield, Brain, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation();
  const { elementRef: ecosystemRef, isVisible: ecosystemVisible } = useScrollAnimation();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={heroRef}
          className={`text-center mb-20 transition-all duration-1500 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-8 py-4 mb-8 backdrop-blur-sm hover:from-yellow-400/30 hover:to-orange-500/30 transition-all duration-300">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-100 font-bold text-sm tracking-wider uppercase">World's First Career Operating System</span>
            <Rocket className="w-5 h-5 text-orange-400" />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              ResuHire
            </span>
          </h1>
          
          <div className="mb-8">
            <p className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Career Catalyst Revolution
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
              Where untapped ambition becomes startup-ready excellence. The intersection of HRTech, EdTech, and Advanced AI that eliminates the chasm between education and employment.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-slate-800/80 to-purple-900/80 backdrop-blur-xl rounded-2xl p-8 mb-12 max-w-5xl mx-auto border border-purple-500/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                  <span className="text-2xl font-bold text-cyan-400">Hirexus AI</span>
                </div>
                <p className="text-lg text-gray-300 mb-4">
                  Our proprietary intelligence engine that achieves <span className="text-green-400 font-bold">85% match accuracy</span> by analyzing 200+ data points beyond traditional résumé screening.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Skill-First Matching</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Cultural Alignment</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Growth Prediction</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-2">
                  YC
                </div>
                <div className="text-sm text-gray-400 mb-2">for</div>
                <div className="text-2xl font-bold text-white">Job Seekers</div>
                <p className="text-sm text-gray-400 mt-2">Same rigor, velocity & excellence</p>
              </div>
            </div>
          </div>

          <div 
            ref={metricsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto transition-all duration-1500 delay-300 ${
              metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">25K+</div>
                <TrendingUp className="w-6 h-6 text-green-400 ml-2" />
              </div>
              <div className="text-gray-300 font-semibold">Elite Professionals</div>
              <div className="text-sm text-green-400 font-bold">Active Pipeline</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">500+</div>
                <Building className="w-6 h-6 text-blue-400 ml-2" />
              </div>
              <div className="text-gray-300 font-semibold">Enterprise Partners</div>
              <div className="text-sm text-blue-400 font-bold">FAANG + Unicorns</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">$195K</div>
              <div className="text-gray-300 font-semibold">Average Placement</div>
              <div className="text-sm text-purple-400 font-bold">90% Above Market</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3">98%</div>
              <div className="text-gray-300 font-semibold">Success Rate</div>
              <div className="text-sm text-orange-400 font-bold">Guaranteed Outcomes</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 mb-12 max-w-5xl mx-auto border border-amber-500/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="font-black text-white text-xl ml-3">4.9/5</span>
              <span className="text-gray-300 text-lg">from 3,000+ professionals</span>
            </div>
            <blockquote className="text-xl text-gray-200 italic mb-4 font-light leading-relaxed">
              "ResuHire didn't just find me a job—it transformed my entire career trajectory. The platform's approach to skill-based development and elite company access is absolutely game-changing."
            </blockquote>
            <cite className="text-gray-400 font-medium">— Michael Rodriguez, Principal Engineer at Stripe</cite>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-16 py-6 text-xl font-bold h-16 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Launch Your Career
              <Rocket className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-16 py-6 text-xl font-bold h-16 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              Explore the Platform
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>

        <div 
          ref={ecosystemRef}
          className={`grid md:grid-cols-3 gap-12 max-w-6xl mx-auto transition-all duration-1500 delay-600 ${
            ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Elite Education Infrastructure</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Comprehensive learning ecosystem with AI-personalized curriculum, expert mentorship, and industry-recognized certification programs that exceed traditional education standards.
            </p>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-300">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Precision Talent Matching</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Advanced AI-powered assessment engine with intelligent matching algorithms that deliver unparalleled accuracy in connecting exceptional talent with visionary companies.
            </p>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Guaranteed Career Acceleration</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Complete career transformation with guaranteed placement outcomes, exclusive alumni network access, and continuous growth support that ensures long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
