
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
      icon: Brain,
      title: "Hirexus AI Matching",
      description: "Smart AI chats with candidates to instantly match them with the most fitting career paths based on skills and market demand",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "12-Week Immersive Program",
      description: "Hands-on training rotating through 3 countries with 120-200 participants per cohort engaging in hackathons and workshops",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Top-Tier Mentorship",
      description: "FAANG engineers, startup founders, and product managers coach each cohort with real industry experience",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Guaranteed Placement",
      description: "Every graduate lands a paid internship or job within 3 weeks of finishing - backed by our hiring partner network",
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
              💰 Raising $500K Pre-Seed
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              The Problem We're <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Solving</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Over 60% of college graduates feel unprepared for the workforce, companies waste billions annually on sourcing talent, 
              and bootcamps fail to deliver guaranteed outcomes. Job boards flood the market with noise but don't solve the real problem.
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
                A full-stack career catalyst operating on a hybrid B2B2C model - candidates pay $5/week, companies pay for vetted talent access.
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
