
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap, Brain, Users, Clock, Target, Rocket, Award, Building, TrendingUp, Star, Shield } from 'lucide-react';

const HiringSolutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Hirexus AI Matching Engine",
      description: "Our proprietary AI analyzes 200+ data points to deliver 85%+ match accuracy - not keywords, but actual capabilities and cultural fit",
      features: ["Multi-dimensional talent profiles", "Real-time skill validation", "Cultural alignment scoring", "Growth trajectory prediction"],
      highlight: "85% Match Accuracy"
    },
    {
      icon: Clock,
      title: "48-Hour Candidate Delivery",
      description: "From job posting to vetted candidate presentation in under 48 hours - eliminating months of traditional recruitment delays",
      features: ["Instant pipeline access", "Pre-screened candidates", "Real-time availability", "Fast-track interviews"],
      highlight: "48 Hour Delivery"
    },
    {
      icon: Shield,
      title: "Pre-Validated Talent Pool",
      description: "Every candidate completes our rigorous 12-week accelerator program - they're not just qualified, they're startup-ready",
      features: ["Technical skill certification", "Soft skill development", "Real project portfolios", "Peer evaluation scores"],
      highlight: "100% Pre-Trained"
    },
    {
      icon: Rocket,
      title: "Startup-Native Mindset",
      description: "Our talent is specifically trained for high-velocity environments - they understand startup DNA and thrive in ambiguity",
      features: ["Agile methodology mastery", "Ownership mentality", "Rapid learning ability", "Cross-functional collaboration"],
      highlight: "Startup-Ready"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Define Your Ideal Warrior",
      description: "Tell us about your team culture, technical requirements, and growth trajectory. Our AI builds a comprehensive hiring profile.",
      icon: Target
    },
    {
      step: "2", 
      title: "Hirexus AI Precision Matching",
      description: "Our algorithm scans our elite talent pipeline using 200+ data points to identify candidates with proven compatibility.",
      icon: Brain
    },
    {
      step: "3",
      title: "Curated Candidate Presentation", 
      description: "Receive 3-5 pre-vetted candidates with detailed profiles, project portfolios, and compatibility scores within 48 hours.",
      icon: Users
    },
    {
      step: "4",
      title: "Streamlined Interview & Hire",
      description: "Fast-track interviews with our support throughout. Our candidates are decision-ready and eager to contribute from Day 1.",
      icon: Award
    }
  ];

  const benefits = [
    {
      icon: Target,
      metric: "85%",
      title: "Match Accuracy",
      description: "Industry-leading precision in candidate-role compatibility"
    },
    {
      icon: Clock,
      metric: "75%",
      title: "Faster Hiring",
      description: "Reduce time-to-hire from months to weeks"
    },
    {
      icon: TrendingUp,
      metric: "96%",
      title: "First-Year Retention",
      description: "Candidates who stay, perform, and grow with your company"
    },
    {
      icon: Building,
      metric: "500+",
      title: "Partner Companies",
      description: "Trusted by startups to Fortune 500 companies"
    }
  ];

  const careerOperatingSystem = [
    {
      title: "No Resume Bottlenecks",
      description: "We eliminate outdated credential systems that reduce talent to keywords"
    },
    {
      title: "Skill-First Evaluation", 
      description: "Focus on actual capabilities, not just academic background"
    },
    {
      title: "Living Talent Profiles",
      description: "Dynamic profiles that evolve as candidates learn and grow"
    },
    {
      title: "Cultural Fit Guarantee",
      description: "Startup-aligned talent trained specifically for high-growth environments"
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
                The world's first Career Operating System. We don't just match resumes - we forge startup-ready talent and deliver 
                pre-validated candidates who contribute from Day 1.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Book a Demo
                </Button>
                <Button size="lg" variant="outline">
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>

          {/* Career Operating System Overview */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700">
                    🚀 YC for Job Seekers
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">The Career Operating System</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Just as Y Combinator transforms startups, ResuHire transforms students into startup-ready talent. 
                    We're not incrementally improving job boards - we're replacing them.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {careerOperatingSystem.map((feature, index) => (
                    <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Star className="w-5 h-5 text-purple-600" />
                          <h3 className="font-bold">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Solutions Overview */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Complete Hiring Solutions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {solutions.map((solution, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{solution.title}</h3>
                            <Badge variant="outline" className="text-green-700 border-green-300">
                              {solution.highlight}
                            </Badge>
                          </div>
                        </div>
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
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Streamlined 4-Step Process</h2>
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                      <div className="flex items-center gap-4">
                        <step.icon className="w-8 h-8 text-green-600" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Why Choose ResuHire's Hiring Solutions</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-8 text-center">
                        <benefit.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <div className="text-3xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                        <h3 className="font-bold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced CTA */}
          <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <Rocket className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Hiring?</h2>
                <p className="text-xl mb-4 opacity-90">
                  Join 500+ companies who've transformed their talent acquisition with ResuHire's Career Operating System.
                </p>
                <p className="text-lg mb-8 opacity-80">
                  Access the world's largest pipeline of pre-trained, startup-ready talent. No resumes. No guesswork. No waste.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Book Your Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                    View Pricing Plans
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold mb-1">48 Hours</div>
                    <div className="text-sm opacity-80">Average Time to Candidate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">$180K</div>
                    <div className="text-sm opacity-80">Average Candidate Salary</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">2,500+</div>
                    <div className="text-sm opacity-80">Successful Placements</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default HiringSolutions;
