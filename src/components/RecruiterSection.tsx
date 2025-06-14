
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, Target, Users, TrendingUp, Zap, Shield, Award } from 'lucide-react';

const RecruiterSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "500% Faster Hiring",
      description: "Skip resume screening, phone screens, and first-round interviews. Get straight to qualified candidates.",
      stat: "3 days avg",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      description: "Eliminate recruitment agency fees, job board costs, and internal screening overhead.",
      stat: "$50K+ saved",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Perfect Skill Matching",
      description: "Our AI ensures candidates have the exact technical and soft skills you need.",
      stat: "85% accuracy",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All candidates are pre-trained and verified. 98% first-year retention rate.",
      stat: "98% retention",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    "Access to 25K+ pre-vetted candidates",
    "Real-time skill assessments",
    "Direct integration with your ATS",
    "Custom hiring workflows",
    "Dedicated success manager",
    "Performance analytics dashboard"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700">
            🎯 For Recruiters & Hiring Managers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Wasting Time on <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Bad Hires</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Access the world's largest pool of pre-trained, skill-verified candidates. No more resume gambling or interview marathons.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">{benefit.stat}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Why Top Companies Choose ResuHire
            </h3>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View Pricing
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="text-center">Startup Package</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">$2,999<span className="text-lg text-muted-foreground">/month</span></div>
                  <div className="text-muted-foreground">Up to 10 hires per month</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Access to entire talent pool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm">AI-powered matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated success manager</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterSection;
