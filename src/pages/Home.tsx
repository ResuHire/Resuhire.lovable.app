
import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import TractionMetrics from '@/components/TractionMetrics';
import DualValue from '@/components/DualValue';
import InvestorCTA from '@/components/InvestorCTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
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
      
      {/* Simple value proposition section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            We invest US $150K to $500K each in a batch of students, twice a year
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We invest the full amount upon admission. We then work with the students closely on their development for 3 months during the cohort. After 3 months, they present to a select group of employers with the goal of securing a FAANG position.
          </p>
          <div className="mt-8">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              About our program
            </Button>
          </div>
        </div>
      </section>

      {/* Photo grid section - inspired by Iterative's scattered layout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We invest in the world-changing engineers of tomorrow
            </h2>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              See all our success stories
            </Button>
          </div>
          
          {/* Scattered photo layout */}
          <div className="relative max-w-6xl mx-auto h-96">
            <div className="absolute top-0 left-0 w-48 h-32 bg-gray-200 rounded-lg shadow-md transform rotate-3">
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                Student Photo 1
              </div>
            </div>
            <div className="absolute top-16 right-32 w-40 h-28 bg-gray-200 rounded-lg shadow-md transform -rotate-2">
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                Student Photo 2
              </div>
            </div>
            <div className="absolute bottom-20 left-64 w-44 h-30 bg-gray-200 rounded-lg shadow-md transform rotate-1">
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                Student Photo 3
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-52 h-36 bg-gray-200 rounded-lg shadow-md transform -rotate-1">
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                Student Photo 4
              </div>
            </div>
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-36 h-24 bg-gray-200 rounded-lg shadow-md rotate-2">
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                Student Photo 5
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
