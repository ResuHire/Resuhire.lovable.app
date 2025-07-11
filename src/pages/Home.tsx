
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
      title: "FAANG Internship Guarantees",
      description: "Direct partnerships ensuring placement from your first year of college",
      color: "text-blue-600"
    },
    {
      icon: Brain,
      title: "Complete Human Transformation",
      description: "Technical + soft skills + mental coaching + body language mastery",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "AI-First Hiring Revolution",
      description: "85% match accuracy versus traditional 15-20% resume success rates",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "End-to-End Ecosystem",
      description: "From skill development to job placement in one unified platform",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SocialProof />
      <Stats />
      
      {/* Clean Why ResuHire section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Why <span className="font-medium">ResuHire</span> is different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The world's first platform that seamlessly integrates HRTech + EdTech + AI 
              with guaranteed access to top companies and complete career transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {uniqueValueProps.map((prop, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <prop.icon className={`w-6 h-6 ${prop.color}`} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-card-foreground">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Market opportunity callout */}
          <div className="text-center mt-16">
            <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto border border-border">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium text-foreground">$200B+ Market Opportunity</span>
              </div>
              <p className="text-muted-foreground text-lg">
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
