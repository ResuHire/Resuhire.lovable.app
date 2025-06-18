
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Brain, Target, Zap, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const keyBenefits = [
    {
      icon: Rocket,
      title: "All-in-One Career Accelerator",
      description: "From training to validation to hiring in a single workflow"
    },
    {
      icon: Target,
      title: "Transparent Talent Metrics",
      description: "Recruiters view verified skills, project results, and peer feedback"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Skill Evolution",
      description: "Profiles grow as candidates learn and complete challenges"
    },
    {
      icon: Users,
      title: "Startup-Ready Talent Pool",
      description: "Culturally aligned, technically proficient, mentally prepared"
    }
  ];

  const whyChooseUs = [
    {
      title: "Category Creation, Not Competition",
      description: "We're not incrementally improving job boards—we're replacing them. ResuHire is defining a new product category: a Career Operating System.",
      icon: Brain
    },
    {
      title: "Deep YC Alignment",
      description: "Just as YC transforms early-stage ideas into investable companies, ResuHire transforms early-stage people into startup-ready talent.",
      icon: Rocket
    },
    {
      title: "Market Readiness & Timing",
      description: "Gen Z is entering the workforce en masse, demanding more flexible, purpose-driven, skill-based pathways to employment.",
      icon: TrendingUp
    },
    {
      title: "B2B2C Flywheel Advantage",
      description: "Our model grows symbiotically: the more learners we train and place, the more startups trust our pipeline.",
      icon: Target
    },
    {
      title: "Designed by Gen Z, for Gen Z",
      description: "We are not theorizing what this generation wants—we are part of it. From UX to pedagogy to culture, ResuHire speaks the language of tomorrow's workforce.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
              🚀 About ResuHire
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The World's First <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Career Operating System</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              ResuHire is not just another hiring platform. It's a category-creating, B2B2C career operating system built at the intersection of HRTech, EdTech, and Advanced AI.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 max-w-2xl mx-auto border border-orange-200">
              <p className="text-lg font-semibold text-gray-800">
                "YC builds the next generation of startups.<br />
                ResuHire builds the next generation of startup talent."
              </p>
            </div>
          </div>
        </div>

        {/* The Problem Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Structural Failure We're Solving</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4 text-red-800">Traditional Job Boards</h3>
                    <p className="text-red-700">LinkedIn, Indeed, and AI-powered sourcing tools are outdated relics that reduce candidates to oversimplified profiles.</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4 text-orange-800">The Chasm</h3>
                    <p className="text-orange-700">Between education and employment, between emerging talent and meaningful work, between raw potential and realized opportunity.</p>
                  </CardContent>
                </Card>
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4 text-yellow-800">Gen Z Disconnect</h3>
                    <p className="text-yellow-700">These platforms were never designed for Gen Z, nor for the velocity of modern work.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We're Building */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We're Building</h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">A Living Ecosystem That Transforms Ambition Into Talent</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Instead of uploading résumés, candidates answer three foundational questions:
                  </p>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white max-w-2xl mx-auto">
                    <p className="text-xl font-semibold">
                      "Who are you? What do you know? How do you do it?"
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">For Candidates</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <span>Technical training and certifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <span>Soft skill development (mindset, communication, leadership)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <span>Peer-to-peer coaching and collaborative learning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <span>Hackathons, scenario-based simulations, and industry challenges</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <span>Real-time performance analytics and growth metrics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4">For Startups & Employers</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span>No resumes, no guesswork, no waste</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span>Direct access to high-signal, high-performing candidates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span>85%+ precision matching with Hirexus AI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span>Ready-to-contribute talent from Day 1</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                        <span>Streamlined recruitment for early- and growth-stage startups</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Benefits at a Glance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {keyBenefits.map((benefit, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why ResuHire Should Be Chosen */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why ResuHire Should Be Chosen</h2>
              <div className="space-y-8">
                {whyChooseUs.map((reason, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                          <reason.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              To embed ResuHire as the default pipeline for YC-backed startups and venture-backed tech companies globally—delivering talent who are trained, inspired, and aligned with startup DNA.
            </p>
            <div className="bg-white/20 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-2xl font-bold mb-2">ResuHire: YC for Early-Stage Job Seekers</p>
              <p className="text-lg opacity-90">
                We take raw human potential, forge it through real-world learning and validation, and deploy it directly into the modern economy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Join the Career Revolution?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the platform that's redefining how talent is discovered, developed, and deployed in the modern economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                Partner with Us
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
