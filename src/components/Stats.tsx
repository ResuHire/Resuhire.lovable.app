
import React from 'react';
import { Users, Briefcase, GraduationCap, Zap, TrendingUp, Award, Target, DollarSign } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "25K+",
      label: "Warriors Trained",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Briefcase,
      number: "12K+",
      label: "Jobs Placed",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: GraduationCap,
      number: "2,500+",
      label: "FAANG Placements",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Match Success",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Award,
      number: "45",
      label: "Partner Companies",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: DollarSign,
      number: "$150K",
      label: "Avg Starting Salary",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      icon: Target,
      number: "3 Days",
      label: "Avg Placement Time",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      icon: Zap,
      number: "95%",
      label: "Satisfaction Rate",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-300 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Numbers That <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Speak Volumes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from a platform that's revolutionizing how people get hired and how companies find talent.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${stat.bgColor} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-3`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-semibold text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <div className="mt-16 pt-8 border-t border-muted text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-black text-purple-600 mb-2">500%</div>
              <div className="text-sm text-muted-foreground">Faster than traditional hiring</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-600 mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">Saved in recruitment costs</div>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-600 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">1-year retention rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
