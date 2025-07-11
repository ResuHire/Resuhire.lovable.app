
import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import DualValue from '@/components/DualValue';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Brain, Target, Zap, Sparkles, Rocket, Trophy } from 'lucide-react';

const Home = () => {
  const uniqueValueProps = [
    {
      icon: Shield,
      emoji: "🛡️",
      title: "FAANG Internship Guarantees",
      description: "Direct partnerships ensuring placement from your first year of college",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      emoji: "🧠", 
      title: "Complete Human Transformation",
      description: "Technical + soft skills + mental coaching + body language mastery",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      emoji: "⚡",
      title: "AI-First Hiring Revolution", 
      description: "85% match accuracy versus traditional 15-20% resume success rates",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      emoji: "🎯",
      title: "End-to-End Ecosystem",
      description: "From skill development to job placement in one unified platform",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SocialProof />
      <Stats />
      
      {/* Why ResuHire section with Gen Z vibes */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-purple-200">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-bold text-sm">Why we're different</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why <span className="gradient-text">ResuHire</span> hits different 💯
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              The world's first platform that seamlessly integrates HRTech + EdTech + AI 
              with guaranteed access to top companies and complete career transformation. No cap! 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {uniqueValueProps.map((prop, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl card-hover">
                <div className={`w-20 h-20 bg-gradient-to-r ${prop.gradient} rounded-3xl flex items-center justify-center mb-6 bounce-subtle`}>
                  <span className="text-3xl">{prop.emoji}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium text-lg">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Market opportunity callout */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-yellow-300" />
                <span className="text-2xl font-black text-white">$200B+ Market Opportunity</span>
                <span className="text-3xl">💰</span>
              </div>
              <p className="text-white/90 text-xl font-medium">
                Positioned at the intersection of the fastest-growing recruitment and education technology markets.
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
