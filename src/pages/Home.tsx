
import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import TractionMetrics from '@/components/TractionMetrics';
import DualValue from '@/components/DualValue';
import InvestorCTA from '@/components/InvestorCTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Brain, Target, Zap, Building, Users, Award } from 'lucide-react';

const Home = () => {
  const competitiveAdvantages = [
    {
      icon: Shield,
      title: "Placement Guarantees",
      description: "Only platform offering FAANG internship guarantees from Year 1 of college",
      color: "from-blue-500 to-cyan-500",
      metric: "98% placement rate"
    },
    {
      icon: Brain,
      title: "Holistic Development",
      description: "Complete transformation: technical skills + communication + mental resilience",
      color: "from-purple-500 to-pink-500",
      metric: "360° approach"
    },
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Proprietary algorithm achieves 85% match accuracy vs 15% traditional methods",
      color: "from-green-500 to-emerald-500",
      metric: "5x better accuracy"
    },
    {
      icon: Building,
      title: "Dual Revenue Model",
      description: "B2C subscriptions + B2B enterprise recruiting = scalable growth",
      color: "from-orange-500 to-red-500",
      metric: "Multiple revenue streams"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SocialProof />
      <TractionMetrics />
      
      {/* Competitive Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200">
              💼 Investment Opportunity
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why ResuHire <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">Wins</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The world's first platform combining EdTech + HrTech with guaranteed outcomes. 
              Addressing a $240B market with a defensible, scalable solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                      <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        {advantage.metric}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Market Opportunity */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 max-w-4xl mx-auto text-white">
              <h3 className="text-2xl font-bold mb-6">Massive Market Opportunity</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">$240B</div>
                  <div className="text-gray-300">Global EdTech Market</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">$15B</div>
                  <div className="text-gray-300">Recruiting Software TAM</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">73M</div>
                  <div className="text-gray-300">College Students Globally</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DualValue />
      <InvestorCTA />
      <Footer />
    </div>
  );
};

export default Home;
