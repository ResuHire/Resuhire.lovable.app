import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle, Briefcase, Calendar, Globe, Award } from 'lucide-react';

const AlumniNetwork = () => {
  const networkBenefits = [
    {
      icon: Users,
      title: "10,000+ Alumni Worldwide",
      description: "Connect with successful professionals across 50+ countries and 200+ companies"
    },
    {
      icon: MessageCircle,
      title: "Exclusive Community Access",
      description: "Private Slack channels, Discord servers, and regional meetup groups"
    },
    {
      icon: Briefcase,
      title: "Job Referral Network",
      description: "Internal referrals lead to 5x higher hiring rates at top companies"
    },
    {
      icon: Calendar,
      title: "Monthly Events",
      description: "Virtual and in-person networking events, workshops, and career panels"
    }
  ];

  const alumni = [
    {
      name: "Sarah Kim",
      role: "Senior PM at Google",
      location: "Mountain View, CA",
      expertise: "Product Strategy",
      graduated: "2022"
    },
    {
      name: "Marcus Chen",
      role: "Engineering Manager at Meta",
      location: "Menlo Park, CA", 
      expertise: "Full-Stack Development",
      graduated: "2021"
    },
    {
      name: "Priya Patel",
      role: "Data Scientist at Netflix",
      location: "Los Angeles, CA",
      expertise: "Machine Learning",
      graduated: "2023"
    },
    {
      name: "David Rodriguez",
      role: "Founder & CEO at TechStart",
      location: "Austin, TX",
      expertise: "Entrepreneurship",
      graduated: "2020"
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
              <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
                🤝 Alumni Network
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Lifelong <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Career Network</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Join an exclusive community of successful professionals who support each other's growth, 
                share opportunities, and build the future of tech together.
              </p>
            </div>
          </div>

          {/* Network Benefits */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Network Benefits</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {networkBenefits.map((benefit, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Alumni */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Alumni</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {alumni.map((person, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-lg">{person.name}</h3>
                            <p className="text-gray-600">{person.role}</p>
                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                              <Globe className="w-4 h-4" />
                              {person.location}
                            </p>
                          </div>
                          <Badge variant="secondary">Class of {person.graduated}</Badge>
                        </div>
                        <div className="mb-4">
                          <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                            {person.expertise}
                          </span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Connect
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Community Stats */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Community Impact</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-3xl font-black text-purple-600 mb-2">10,000+</div>
                    <div className="text-gray-600">Active Alumni</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-orange-600 mb-2">95%</div>
                    <div className="text-gray-600">Stay Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Network?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start your journey with ResuHire and become part of an elite community that will support your entire career.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Apply Now
              </Button>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AlumniNetwork;
