
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, GraduationCap, Trophy, Briefcase, Target, CheckCircle, Star, TrendingUp, Sparkles, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation();
  const { elementRef: ecosystemRef, isVisible: ecosystemVisible } = useScrollAnimation();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Hero Content */}
        <div 
          ref={heroRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-8 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-orange-700 font-semibold text-sm tracking-wide">THE COMPLETE ECOSYSTEM</span>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900 tracking-tight hover:scale-105 transition-transform duration-500 cursor-default animate-bounce-in">
            <span className="text-gradient">ResuHire</span>
          </h1>
          
          {/* Enhanced Taglines */}
          <div className="space-y-3 mb-8">
            <p className="text-2xl md:text-3xl font-light text-gray-700 tracking-wide animate-fade-in stagger-1">
              No Resume to get Hired
            </p>
            <p className="text-lg md:text-xl font-light text-gray-500 tracking-wide animate-fade-in stagger-2">
              Transform students into hired professionals - no resume required
            </p>
          </div>
          
          {/* Y Combinator Comparison with Enhanced Styling */}
          <div className="glass-card rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-purple-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group animate-slide-up stagger-3">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-yellow-500 mr-2 group-hover:animate-pulse" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Revolutionary Comparison</span>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Startups have <span className="text-orange-600 font-bold hover:text-orange-700 transition-colors">Y Combinator</span>.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              Job seekers have <span className="text-purple-600 font-bold hover:text-purple-700 transition-colors">ResuHire</span>.
            </p>
          </div>
          
          {/* Enhanced Value Props Grid */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bento-grid mb-8">
              <div className="bento-item hover-lift group animate-scale-in stagger-4">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-blue-800 mb-2 text-lg">No Resume Needed</h3>
                <p className="text-sm text-blue-600 leading-relaxed">Just 3 questions: Who are you? What do you know? How do you do it?</p>
              </div>
              <div className="bento-item hover-lift group animate-scale-in stagger-5">
                <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-purple-800 mb-2 text-lg">FAANG Internships</h3>
                <p className="text-sm text-purple-600 leading-relaxed">Guaranteed placements from your first year of college</p>
              </div>
              <div className="bento-item hover-lift group animate-scale-in stagger-6">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-green-800 mb-2 text-lg">Complete Training</h3>
                <p className="text-sm text-green-600 leading-relaxed">Technical + mental + communication + body language coaching</p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 animate-fade-in stagger-4">
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                The world's first <span className="font-semibold text-purple-600">EduTech × HrTech</span> ecosystem that builds talent, accelerates careers, 
                and revolutionizes how companies hire.
              </p>
            </div>
          </div>

          {/* Enhanced Traction Metrics */}
          <div 
            ref={metricsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
              metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { value: '25K+', label: 'Active Warriors', growth: '+300% growth', icon: TrendingUp, color: 'text-green-500' },
              { value: '500+', label: 'Partner Companies', detail: 'Including FAANG', icon: Building, color: 'text-blue-500' },
              { value: '$180K', label: 'Avg. Salary', detail: '85% above market', icon: Target, color: 'text-purple-500' },
              { value: '98%', label: 'Placement Rate', detail: 'Within 6 months', icon: Trophy, color: 'text-orange-500' }
            ].map((metric, index) => (
              <div key={index} className="text-center interactive-card glass-card rounded-xl p-6 group">
                <div className="flex items-center justify-center mb-3">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                  <metric.icon className={`w-6 h-6 ${metric.color} ml-2 group-hover:animate-pulse`} />
                </div>
                <div className="text-gray-600 font-medium mb-1">{metric.label}</div>
                <div className={`text-xs font-semibold ${metric.color.replace('text-', 'text-')}`}>{metric.detail || metric.growth}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Social Proof */}
          <div className="glass-card rounded-2xl p-8 mb-8 max-w-4xl mx-auto hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in stagger-3">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current hover:scale-125 transition-transform duration-200 cursor-pointer" />
              ))}
              <span className="font-bold text-gray-800 ml-3 text-lg">4.9/5</span>
              <span className="text-gray-600">from 2,500+ reviews</span>
            </div>
            <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
              "ResuHire got me a Meta internship in my sophomore year. The transformation was incredible - 
              not just technically but mentally and professionally."
            </blockquote>
            <cite className="text-sm text-gray-600 font-medium">— Sarah Chen, Software Engineer at Meta</cite>
          </div>

          {/* Enhanced Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="btn-modern bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-12 py-4 text-lg font-semibold h-16 hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
              <span className="relative z-10">Start Your Transformation</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-lg font-semibold h-16 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Enhanced Ecosystem Overview */}
        <div 
          ref={ecosystemRef}
          className={`grid md:grid-cols-3 gap-12 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
            ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            {
              icon: GraduationCap,
              title: 'EduTech Platform',
              description: 'Comprehensive learning infrastructure with personalized curriculum, expert mentorship, and skill certification programs.',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Briefcase,
              title: 'HrTech Engine',
              description: 'AI-powered talent matching, streamlined recruitment processes, and data-driven hiring solutions for enterprise partners.',
              gradient: 'from-green-500 to-emerald-500'
            },
            {
              icon: Trophy,
              title: 'Career Accelerator',
              description: 'End-to-end career transformation with guaranteed outcomes, lifetime alumni network, and continuous growth support.',
              gradient: 'from-purple-500 to-pink-500'
            }
          ].map((item, index) => (
            <div key={index} className="text-center interactive-card glass-card rounded-2xl p-8 group">
              <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
