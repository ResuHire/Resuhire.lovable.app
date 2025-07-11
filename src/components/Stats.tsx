
import React from 'react';
import { Users, Briefcase, GraduationCap, Zap, TrendingUp, Award, Target, DollarSign, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "People successfully placed",
      color: "purple"
    },
    {
      icon: Briefcase,
      number: "150+",
      label: "Partner companies",
      color: "blue"
    },
    {
      icon: DollarSign,
      number: "$145K",
      label: "Average starting salary",
      color: "green"
    },
    {
      icon: Clock,
      number: "3 weeks",
      label: "Average time to hire",
      color: "orange"
    },
    {
      icon: TrendingUp,
      number: "87%",
      label: "Interview success rate",
      color: "indigo"
    },
    {
      icon: Award,
      number: "95%",
      label: "One year retention rate",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-600",
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600",
      indigo: "from-indigo-500 to-indigo-600",
      pink: "from-pink-500 to-pink-600"
    };
    return colors[color as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Results that speak for themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our approach is working. Here's what we've accomplished so far.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(stat.color)} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
