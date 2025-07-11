
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Rocket, Star, Trophy, Target, Brain, Code, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section className="relative pt-20 pb-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={heroRef}
          className={`text-center transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Emoji + Status badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-purple-200">
            <div className="flex gap-1">
              <span className="text-2xl">🔥</span>
              <span className="text-2xl">🚀</span>
              <span className="text-2xl">💎</span>
            </div>
            <span className="text-purple-700 font-bold text-sm">Building the future of careers</span>
          </div>
          
          {/* Main heading with gradient */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="gradient-text">Skip the resume,</span><br />
            <span className="text-gray-900">land at</span> <span className="gradient-text">FAANG</span>
          </h1>
          
          {/* Subtitle with emojis */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            The world's first AI platform that transforms you into a <span className="text-purple-600 font-bold">FAANG-ready warrior</span> 🥷 
            <br />No resume BS, just pure skill + guaranteed placements ✨
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-2xl card-hover glow-effect">
              <Rocket className="mr-3 w-6 h-6" />
              Start Your Transformation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-10 py-6 text-lg font-bold rounded-2xl card-hover">
              <Sparkles className="mr-3 w-6 h-6" />
              See How It Works
            </Button>
          </div>
        </div>

        {/* Metrics with colorful cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "25K+", label: "Warriors in Pipeline", icon: Trophy, color: "from-yellow-400 to-orange-500" },
            { number: "500+", label: "Target FAANG Partners", icon: Target, color: "from-blue-400 to-cyan-500" },
            { number: "$180K", label: "Target Avg Salary", icon: Zap, color: "from-green-400 to-emerald-500" },
            { number: "98%", label: "Target Success Rate", icon: Star, color: "from-purple-400 to-pink-500" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-xl border border-white/50 card-hover">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 bounce-subtle`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm font-bold text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Process cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          {[
            {
              emoji: "🧠",
              title: "AI Assessment",
              desc: "3 questions → Complete skill map",
              color: "from-indigo-500 to-purple-600"
            },
            {
              emoji: "⚡",
              title: "Warrior Training",
              desc: "12-week transformation bootcamp",
              color: "from-purple-500 to-pink-600"
            },
            {
              emoji: "🎯",
              title: "FAANG Placement",
              desc: "Direct connections + guarantees",
              color: "from-pink-500 to-red-600"
            }
          ].map((step, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 card-hover shadow-xl border border-white/50">
              <div className="text-6xl mb-6 bounce-subtle">{step.emoji}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg font-medium">{step.desc}</p>
              <div className={`h-2 bg-gradient-to-r ${step.color} rounded-full mt-6`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
