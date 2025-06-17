
import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import DualValue from '@/components/DualValue';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-lg px-6 py-2">
            🚀 THE COMPLETE ECOSYSTEM
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <div className="mb-2">ResuHire</div>
            <div className="text-3xl md:text-4xl text-muted-foreground font-bold">No Resume to get Hired</div>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform students into hired professionals - no resume required
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto mb-12 shadow-lg border">
            <p className="text-xl font-bold mb-4">Startups have Y Combinator.</p>
            <p className="text-xl font-bold text-purple-600">Job seekers have ResuHire.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Resume Needed</h3>
              <p className="text-muted-foreground">Just 3 questions: Who are you? What do you know? How do you do it?</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">FAANG Internships</h3>
              <p className="text-muted-foreground">Guaranteed placements from your first year of college</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Complete Training</h3>
              <p className="text-muted-foreground">Technical + mental + communication + body language coaching</p>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            The world's first EduTech × HrTech ecosystem that builds talent, accelerates careers, and revolutionizes how companies hire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-6 text-lg">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      <SocialProof />
      <Stats />
      <DualValue />
      
      {/* Market Opportunity Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            💰 $200B Market Opportunity
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Positioned at the <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Intersection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            ResuHire is positioned at the intersection of the fastest-growing segments in both markets
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-black text-purple-600 mb-4">$200B+</div>
              <h3 className="text-xl font-bold mb-2">Global Recruitment Market</h3>
              <p className="text-muted-foreground">Total addressable market across hiring and training</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-black text-blue-600 mb-4">$50B+</div>
              <h3 className="text-xl font-bold mb-2">EdTech Market Share</h3>
              <p className="text-muted-foreground">Corporate training and skill development segment</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-black text-green-600 mb-4">$150B+</div>
              <h3 className="text-xl font-bold mb-2">HrTech Market Share</h3>
              <p className="text-muted-foreground">Recruitment technology and talent acquisition</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
