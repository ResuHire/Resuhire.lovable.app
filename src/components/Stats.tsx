
import React from 'react';
import { Users, Briefcase, GraduationCap, Zap, TrendingUp, Award, Target, DollarSign, Sparkles } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      emoji: "🥷",
      number: "25K+",
      label: "Warriors in Pipeline",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      emoji: "💼",
      number: "12K+",
      label: "Target Job Placements",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: GraduationCap,
      emoji: "🎓",
      number: "2,500+",
      label: "Projected FAANG Placements",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      emoji: "📈",
      number: "85%",
      label: "Target Match Success",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      emoji: "🏆",
      number: "45+",
      label: "Target Partner Companies",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: DollarSign,
      emoji: "💰",
      number: "$150K",
      label: "Target Starting Salary",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Target,
      emoji: "⚡",
      number: "3 Days",
      label: "Target Placement Time",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      emoji: "✨",
      number: "95%",
      label: "Projected Satisfaction",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-purple-200">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-bold text-sm">Vision in Numbers</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Our <span className="gradient-text">Vision</span> is unmatched 🔥
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">
            Ambitious targets for a platform that will revolutionize how people get hired and how companies find talent. Period! 💯
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-xl border border-white/50 card-hover">
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 bounce-subtle`}>
                <span className="text-3xl">{stat.emoji}</span>
              </div>
              <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-bold text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <div className="mt-16 pt-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-white/50 card-hover">
              <div className="text-5xl mb-4">🚀</div>
              <div className="text-4xl font-black gradient-text mb-2">500%</div>
              <div className="text-gray-600 font-bold">Target speed vs traditional hiring</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-white/50 card-hover">
              <div className="text-5xl mb-4">💸</div>
              <div className="text-4xl font-black gradient-text mb-2">$2M+</div>
              <div className="text-gray-600 font-bold">Projected recruitment cost savings</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-white/50 card-hover">
              <div className="text-5xl mb-4">🎯</div>
              <div className="text-4xl font-black gradient-text mb-2">98%</div>
              <div className="text-gray-600 font-bold">Target 1-year retention rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
