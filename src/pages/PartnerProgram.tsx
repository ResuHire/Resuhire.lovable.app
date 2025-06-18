import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, Target, Users, TrendingUp, Clock, Award } from 'lucide-react';

const PartnerProgram = () => {
  const partnerTiers = [
    {
      tier: "Startup Partner",
      investment: "Free",
      benefits: [
        "Access to 50+ pre-vetted candidates/month",
        "Basic hiring support",
        "Community forum access",
        "Standard matching algorithm"
      ],
      ideal: "Early-stage startups (1-20 employees)"
    },
    {
      tier: "Growth Partner", 
      investment: "$2,000/month",
      benefits: [
        "Access to 200+ candidates/month",
        "Dedicated account manager",
        "Custom hiring workflows",
        "Advanced matching with cultural fit",
        "Priority candidate access"
      ],
      ideal: "Growing companies (20-100 employees)"
    },
    {
      tier: "Enterprise Partner",
      investment: "Custom pricing",
      benefits: [
        "Unlimited candidate access",
        "White-label solutions",
        "Custom training programs",
        "Dedicated talent pipeline",
        "Strategic partnership opportunities"
      ],
      ideal: "Large organizations (100+ employees)"
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
              <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
                🤝 Partner Program
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Partner with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tomorrow's Talent</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Join leading startups and enterprises who've transformed their hiring through ResuHire's 
                partner program. Get exclusive access to our elite talent pipeline and revolutionize your recruitment.
              </p>
            </div>
          </div>

          {/* Partnership Benefits */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Partner with ResuHire?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-lg text-center">
                    <CardContent className="p-8">
                      <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-4">85% Match Accuracy</h3>
                      <p className="text-gray-600">Our AI-powered matching delivers candidates who succeed, not just interview well.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg text-center">
                    <CardContent className="p-8">
                      <Clock className="w-16 h-16 text-green-600 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-4">75% Faster Hiring</h3>
                      <p className="text-gray-600">Reduce time-to-hire from months to weeks with pre-vetted, startup-ready talent.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg text-center">
                    <CardContent className="p-8">
                      <TrendingUp className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                      <h3 className="text-xl font-bold mb-4">96% Retention Rate</h3>
                      <p className="text-gray-600">Our candidates stick around and grow with your company for the long term.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Partner Tiers */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Choose Your Partnership Level</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {partnerTiers.map((tier, index) => (
                    <Card key={index} className={`border-0 shadow-lg ${index === 1 ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                      <CardContent className="p-8">
                        {index === 1 && (
                          <Badge className="mb-4 bg-blue-500 text-white">Most Popular</Badge>
                        )}
                        <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                        <div className="text-3xl font-bold text-blue-600 mb-4">{tier.investment}</div>
                        <p className="text-gray-600 mb-6">{tier.ideal}</p>
                        <ul className="space-y-3 mb-8">
                          {tier.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Partner Success Stories</h2>
                <div className="space-y-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Handshake className="w-12 h-12 text-blue-600" />
                        <div>
                          <h3 className="font-bold text-lg">TechFlow AI</h3>
                          <p className="text-gray-600">Y Combinator S23</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        "ResuHire helped us scale from 5 to 25 engineers in 6 months. Every hire has been exceptional, 
                        and our engineering velocity has never been higher."
                      </p>
                      <div className="flex justify-center gap-8 text-sm">
                        <div>
                          <div className="font-bold text-blue-600">15</div>
                          <div className="text-gray-600">Hires Made</div>
                        </div>
                        <div>
                          <div className="font-bold text-green-600">3 weeks</div>
                          <div className="text-gray-600">Avg Time to Hire</div>
                        </div>
                        <div>
                          <div className="font-bold text-purple-600">100%</div>
                          <div className="text-gray-600">Retention Rate</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join 500+ companies who've revolutionized their talent acquisition with ResuHire.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Become a Partner
              </Button>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PartnerProgram;
