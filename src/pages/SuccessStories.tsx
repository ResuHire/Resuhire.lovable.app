
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import PageTransition from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, TrendingUp, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SuccessStories = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { elementRef: placementsRef, isVisible: placementsVisible } = useScrollAnimation();

  const stats = [
    {
      icon: TrendingUp,
      value: "94%",
      label: "Job Placement Rate",
      description: "Within 6 months of graduation"
    },
    {
      icon: Award,
      value: "$125K",
      label: "Average Starting Salary",
      description: "For our program graduates"
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Success Stories",
      description: "And counting every month"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Alumni Rating",
      description: "Would recommend to others"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          {/* Hero Section */}
          <div 
            ref={heroRef}
            className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:scale-105 transition-transform duration-300 cursor-pointer">
                🌟 Success Stories
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500 cursor-default">
                Real People, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Real Results</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Discover how thousands of ambitious individuals have transformed their careers through ResuHire, 
                landing dream jobs at top companies and startups worldwide.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
                <div 
                  ref={statsRef}
                  className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
                    statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {stats.map((stat, index) => (
                    <Card key={index} className={`border-0 shadow-lg text-center hover-lift hover-glow cursor-pointer group ${statsVisible ? `animate-stagger-${index + 1}` : ''}`}>
                      <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{stat.value}</div>
                        <div className="font-bold text-gray-800 mb-1">{stat.label}</div>
                        <div className="text-sm text-gray-600">{stat.description}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <Testimonials />

          {/* Company Placements */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Where Our Alumni Work</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our graduates join the world's most innovative companies and fast-growing startups
                </p>
              </div>
              
              <div 
                ref={placementsRef}
                className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
                  placementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {['Google', 'Meta', 'Amazon', 'Apple', 'Microsoft', 'Netflix', 'Stripe', 'Airbnb', 'Uber', 'Tesla', 'SpaceX', 'OpenAI'].map((company, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover-scale hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                    <span className="font-bold text-gray-700">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default SuccessStories;
