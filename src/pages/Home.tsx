
import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import DualValue from '@/components/DualValue';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Brain, Target, Zap } from 'lucide-react';

const Home = () => {
  const uniqueValueProps = [
    {
      icon: Shield,
      title: "Only Platform with FAANG Internship Guarantees",
      description: "Direct partnerships ensuring placement from year 1 of college",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Complete Human Transformation",
      description: "Technical + Soft + Mental + Physical presence coaching",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "AI-First Hiring Revolution",
      description: "85% match accuracy vs traditional 15-20% resume success",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "End-to-End Ecosystem",
      description: "From skill gap identification to job placement in one platform",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SocialProof />
      <Stats />
      
      {/* Why ResuHire is Unprecedented Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
              🔥 World's Most Comprehensive Platform
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Why ResuHire is <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Unprecedented</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The world's first platform that seamlessly integrates HRTech + EdTech + AI with FAANG access, 
              mental preparation, and holistic human development. No other platform offers this complete transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {uniqueValueProps.map((prop, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${prop.color} flex items-center justify-center mb-6`}>
                  <prop.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Additional emphasis */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-purple-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-800">The Complete Solution</span>
              </div>
              <p className="text-gray-700 text-lg">
                While others focus on parts of the journey, ResuHire builds complete warriors from start to hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DualValue />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
