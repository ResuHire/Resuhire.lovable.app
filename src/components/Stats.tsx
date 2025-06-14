
import React from 'react';
import { Users, Briefcase, GraduationCap, Zap } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "10K+",
      label: "Warriors Trained",
      color: "text-purple-600"
    },
    {
      icon: Briefcase,
      number: "5K+",
      label: "Jobs Placed",
      color: "text-blue-600"
    },
    {
      icon: GraduationCap,
      number: "500+",
      label: "FAANG Interns",
      color: "text-indigo-600"
    },
    {
      icon: Zap,
      number: "85%",
      label: "Match Success",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
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
