
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
        {/* Clear Value Proposition - YC Feedback */}
        <div 
          ref={heroRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-full px-6 py-3 mb-8 hover:bg-orange-100 transition-colors duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-700 font-semibold text-sm tracking-wide">THE COMPLETE ECOSYSTEM</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900 tracking-tight hover:scale-105 transition-transform duration-500 cursor-default">
            ResuHire
          </h1>
          
          {/* Enhanced Taglines - User Feedback */}
          <p className="text-2xl md:text-3xl font-light text-gray-600 mb-2 tracking-wide">
            No Resume to get Hired
          </p>
          <p className="text-lg md:text-xl font-light text-gray-500 mb-6 tracking-wide">
            Transform students into hired professionals - no resume required
          </p>
          
          {/* Y Combinator Comparison */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              Startups have <span className="text-orange-600 font-bold">Y Combinator</span>.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">
              Job seekers will have <span className="text-purple-600 font-bold">ResuHire</span>.
            </p>
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

          {/* Enhanced Traction Metrics - YC Feedback */}
          <div 
            ref={metricsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
              metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center justify-center mb-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">25K+</div>
                <TrendingUp className="w-5 h-5 text-green-500 ml-2" />
              </div>
              <div className="text-gray-600 font-medium">Active Warriors in Sights</div>
              <div className="text-xs text-green-600 font-semibold">Securing +300% growth</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center justify-center mb-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">500+</div>
                <Building className="w-5 h-5 text-blue-500 ml-2" />
              </div>
              <div className="text-gray-600 font-medium">Future Partners</div>
              <div className="text-xs text-blue-600 font-semibold">Including FAANG</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">$180K</div>
              <div className="text-gray-600 font-medium">Target Avg. Salary</div>
              <div className="text-xs text-purple-600 font-semibold">85% above market</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Target Placement Rate</div>
              <div className="text-xs text-orange-600 font-semibold">Within 6 months</div>
            </div>
          </div>

          {/* Enhanced Social Proof - YC Feedback */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 max-w-4xl mx-auto hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current hover:scale-125 transition-transform duration-200" />
              ))}
              <span className="font-bold text-gray-800 ml-2">4.9/5</span>
              <span className="text-gray-600">projected from beta users</span>
            </div>
            <p className="text-gray-700 italic">
              "ResuHire will revolutionize how we think about career preparation. The transformation approach is incredible - 
              not just technically but mentally and professionally."
            </p>
            <p className="text-sm text-gray-600 mt-2">- Early Beta Tester</p>
          </div>

          {/* Primary Actions with Clear UX - YC Feedback */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-lg font-semibold h-14 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              Join the Revolution
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-lg font-semibold h-14 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              See Our Vision
            </Button>
          </div>
        </div>

        {/* Ecosystem Overview */}
        <div 
          ref={ecosystemRef}
          className={`grid md:grid-cols-3 gap-12 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
            ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 group-hover:shadow-lg transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">EduTech Platform</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive learning infrastructure with personalized curriculum, 
              expert mentorship, and skill certification programs.
            </p>
          </div>
          <div className="text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 group-hover:shadow-lg transition-all duration-300">
              <Briefcase className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">HrTech Engine</h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered talent matching, streamlined recruitment processes, 
              and data-driven hiring solutions for enterprise partners.
            </p>
          </div>
          <div className="text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 group-hover:shadow-lg transition-all duration-300">
              <Trophy className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
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
