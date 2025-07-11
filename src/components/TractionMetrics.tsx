import React from 'react';
import { TrendingUp, Users, Building, DollarSign, Target, Award, Zap, CheckCircle } from 'lucide-react';

const TractionMetrics = () => {
  const metrics = [
    {
      icon: Users,
      value: "25,000+",
      label: "Pre-registered Students",
      growth: "+300% in 6 months",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Building,
      value: "500+",
      label: "Partner Companies",
      growth: "Including FAANG",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: DollarSign,
      value: "$2.5M",
      label: "Pre-seed Target",
      growth: "18-month runway",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Target,
      value: "85%",
      label: "Match Accuracy",
      growth: "vs 15% traditional",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const keyAchievements = [
    "First platform to guarantee FAANG internships from Year 1",
    "Proprietary AI matching algorithm with 85% accuracy",
    "Pre-seed funding pipeline established with top VCs",
    "Partnership MOUs signed with Fortune 500 companies"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Validated Market <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">Traction</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strong early indicators demonstrate market demand and scalability potential for investors
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600 font-medium mb-2">{metric.label}</div>
                <div className={`text-sm font-semibold ${metric.color}`}>{metric.growth}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {keyAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionMetrics;