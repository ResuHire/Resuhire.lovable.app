
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Zap, Shield, Rocket, Users, Trophy, Star, TrendingUp, CheckCircle, Globe, Cpu } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Features = () => {
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { elementRef: aiRef, isVisible: aiVisible } = useScrollAnimation();

  const powerFeatures = [
    {
      icon: Brain,
      title: "Hirexus AI Engine",
      description: "Proprietary intelligence that analyzes 200+ data points for unprecedented 85% match accuracy",
      gradient: "from-cyan-500 to-blue-600",
      stats: "85% Accuracy",
      highlight: "Advanced Neural Networks"
    },
    {
      icon: Rocket,
      title: "Career Acceleration Matrix",
      description: "Systematic transformation pipeline that compresses 4-year career development into 12 intensive weeks",
      gradient: "from-purple-500 to-pink-600",
      stats: "12 Weeks",
      highlight: "4x Faster Development"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Validation",
      description: "Rigorous assessment protocols ensuring only top-tier talent enters our exclusive pipeline",
      gradient: "from-green-500 to-emerald-600",
      stats: "15% Accept Rate",
      highlight: "Elite Standards"
    },
    {
      icon: Target,
      title: "Precision Placement Engine",
      description: "Direct integration with 500+ elite companies for guaranteed placement outcomes",
      gradient: "from-orange-500 to-red-600",
      stats: "98% Success",
      highlight: "Guaranteed Outcomes"
    },
    {
      icon: Globe,
      title: "Global Talent Network",
      description: "Worldwide ecosystem connecting exceptional talent with visionary companies across continents",
      gradient: "from-indigo-500 to-purple-600",
      stats: "50+ Countries",
      highlight: "Global Reach"
    },
    {
      icon: Trophy,
      title: "Executive Alumni Network",
      description: "Exclusive access to industry leaders, C-suite executives, and successful entrepreneurs",
      gradient: "from-yellow-500 to-orange-600",
      stats: "25K+ Alumni",
      highlight: "Elite Network"
    }
  ];

  const aiCapabilities = [
    {
      title: "Deep Learning Assessment",
      desc: "Neural networks analyze coding patterns, problem-solving approaches, and learning velocity",
      accuracy: "94%"
    },
    {
      title: "Cultural Compatibility Analysis",
      desc: "Advanced psychometric profiling for perfect team and company culture alignment",
      accuracy: "91%"
    },
    {
      title: "Growth Trajectory Prediction",
      desc: "Predictive modeling to forecast candidate potential and career advancement paths",
      accuracy: "87%"
    },
    {
      title: "Real-time Skill Evolution",
      desc: "Dynamic profiling that adapts as candidates complete challenges and gain experience",
      accuracy: "96%"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={featuresRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg font-bold">
            🚀 Revolutionary Technology Stack
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Platform
            </span>
            <br />
            <span className="text-slate-700">Capabilities</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed">
            Experience the world's most advanced career acceleration technology. Built at the intersection of 
            <span className="font-semibold text-blue-600"> HRTech</span>, 
            <span className="font-semibold text-purple-600"> EdTech</span>, and 
            <span className="font-semibold text-pink-600"> Advanced AI</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {powerFeatures.map((feature, index) => (
            <Card key={index} className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden hover:scale-105 ${
              featuresVisible ? `animate-fade-in delay-${index * 100}` : 'opacity-0'
            }`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{feature.title}</CardTitle>
                <div className="flex justify-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-semibold">
                    {feature.stats}
                  </Badge>
                  <Badge variant="outline" className="border-purple-300 text-purple-600">
                    {feature.highlight}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Capabilities Section */}
        <div 
          ref={aiRef}
          className={`bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white mb-20 transition-all duration-1000 ${
            aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cpu className="w-12 h-12 text-cyan-400" />
              <h3 className="text-4xl font-black">Hirexus AI Capabilities</h3>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our proprietary AI engine represents the pinnacle of talent assessment technology, 
              delivering insights that traditional methods simply cannot achieve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">{capability.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-black text-green-400">{capability.accuracy}</div>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{capability.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-8 py-4 backdrop-blur-sm border border-cyan-400/30">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-xl font-bold">Industry-Leading 85% Match Accuracy</span>
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>

        {/* Power Statistics */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Platform Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">500%</div>
              <div className="text-gray-600 font-semibold">Faster Hiring</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">$2M+</div>
              <div className="text-gray-600 font-semibold">Cost Savings</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-gray-600 font-semibold">Data Points</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">AI Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
