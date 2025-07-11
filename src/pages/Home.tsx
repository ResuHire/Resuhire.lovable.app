
import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import DualValue from '@/components/DualValue';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Brain, Target, Zap, Users, Building } from 'lucide-react';

const Home = () => {
  const valueProps = [
    {
      icon: Shield,
      title: "Direct Company Access",
      description: "We work directly with hiring managers at top companies to get you in front of the right people.",
      color: "blue"
    },
    {
      icon: Brain,
      title: "Skills-Based Matching",
      description: "Our platform evaluates your actual abilities, not just your resume or degree.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Fast Track Process",
      description: "Skip the lengthy application process. Get matched and interviewed within weeks, not months.",
      color: "green"
    },
    {
      icon: Target,
      title: "Personalized Preparation",
      description: "Get coached on exactly what each company is looking for before your interview.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600", 
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SocialProof />
      <Stats />
      
      {/* Why ResuHire section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              Why ResuHire
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              A better way to get hired
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're changing how talented people connect with great companies. 
              No more resume black holes or endless applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(prop.color)} rounded-lg flex items-center justify-center mb-6`}>
                  <prop.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Market opportunity */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-sm border border-gray-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building className="w-6 h-6 text-purple-600" />
                <span className="text-lg font-semibold text-gray-900">Trusted by 150+ Companies</span>
              </div>
              <p className="text-gray-600">
                From fast-growing startups to Fortune 500 companies, our partners are actively hiring through our platform.
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
