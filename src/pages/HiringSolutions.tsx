import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap, Brain, Users, Clock, Target } from 'lucide-react';

const HiringSolutions = () => {
  const solutions = [
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Our Hirexus AI analyzes 200+ data points to deliver 85% match accuracy",
      features: ["Cultural fit analysis", "Skill compatibility scoring", "Growth potential assessment", "Team dynamics prediction"]
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "From job posting to candidate presentation in under 48 hours",
      features: ["Instant candidate sourcing", "Automated screening", "Real-time availability", "Fast-track interviews"]
    },
    {
      icon: Brain,
      title: "Pre-Validated Talent",
      description: "Every candidate completes our rigorous 16-week training program",
      features: ["Technical skill validation", "Soft skill assessment", "Project portfolio review", "Peer evaluation scores"]
    },
    {
      icon: Users,
      title: "Startup-Ready Mindset",
      description: "Candidates trained specifically for fast-paced startup environments",
      features: ["Agile methodology", "Ownership mentality", "Rapid learning ability", "Collaboration skills"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Define Requirements",
      description: "Tell us about your ideal candidate, team culture, and specific needs"
    },
    {
      step: "2", 
      title: "AI Matching",
      description: "Our algorithm identifies the best candidates from our talent pipeline"
    },
    {
      step: "3",
      title: "Candidate Presentation", 
      description: "Receive 3-5 pre-screened candidates with detailed profiles and portfolios"
    },
    {
      step: "4",
      title: "Interview & Hire",
      description: "Streamlined interview process with our support throughout"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          {/* Hero Section */}
          <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-700">
                ⚡ Hiring Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Revolutionary <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Hiring Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Transform your recruitment with AI-powered matching, pre-validated talent, and streamlined processes 
                that deliver exceptional candidates in record time.
              </p>
            </div>
          </div>

          {/* Solutions Overview */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Complete Hiring Solutions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {solutions.map((solution, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mb-6">
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                        <p className="text-gray-600 mb-6">{solution.description}</p>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our 4-Step Process</h2>
                <div className="space-y-8">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Why Choose Our Hiring Solutions</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold mb-2">85% Match Accuracy</h3>
                      <p className="text-gray-600">Industry-leading precision in candidate matching</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold mb-2">75% Faster Hiring</h3>
                      <p className="text-gray-600">Reduce time-to-hire from months to weeks</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold mb-2">96% Success Rate</h3>
                      <p className="text-gray-600">Candidates who stay and succeed long-term</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Hiring?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join hundreds of companies who've transformed their talent acquisition with ResuHire's solutions.
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default HiringSolutions;
