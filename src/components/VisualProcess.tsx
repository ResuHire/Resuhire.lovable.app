
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, UserCheck, BookOpen, Users, Trophy, Clock, CheckCircle, Target } from 'lucide-react';

const VisualProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "3 Simple Questions",
      subtitle: "No Resume Required",
      description: "Who are you? What do you know? How do you do it?",
      duration: "⏱️ 2 minutes",
      features: ["AI-powered assessment", "Skill mapping", "Potential evaluation"],
      color: "from-purple-500 to-pink-500",
      icon: UserCheck
    },
    {
      number: "02", 
      title: "12-Week Transformation",
      subtitle: "Complete Career Formation",
      description: "Technical skills + Soft skills + Mental coaching + Real projects",
      duration: "⏱️ 12 weeks",
      features: ["Live cohort training", "FAANG-level preparation", "Peer collaboration"],
      color: "from-blue-500 to-cyan-500",
      icon: BookOpen
    },
    {
      number: "03",
      title: "Demo Day Preparation", 
      subtitle: "Professional Showcase",
      description: "Practice with mentors, build your presence, perfect your pitch",
      duration: "⏱️ 1 week",
      features: ["Mock interviews", "Presentation skills", "Personal branding"],
      color: "from-green-500 to-emerald-500",
      icon: Users
    },
    {
      number: "04",
      title: "Guaranteed Placement",
      subtitle: "Multiple Job Offers", 
      description: "Demo Day with 50+ employers, choose your dream role",
      duration: "⏱️ Immediate",
      features: ["Direct employer access", "Salary negotiation", "Career support"],
      color: "from-orange-500 to-red-500",
      icon: Trophy
    }
  ];

  const results = [
    { metric: "98%", label: "Placement Rate" },
    { metric: "$180K", label: "Average Salary" },
    { metric: "7 Days", label: "Time to First Interview" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            ✨ Visual Step-by-Step Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ResuHire Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From application to employment in just 12 weeks. Here's exactly how we transform students into hired professionals.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <Badge variant="outline" className="mb-4 text-xs">
                      {step.subtitle}
                    </Badge>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="text-sm font-semibold text-purple-600 mb-4">
                      {step.duration}
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">The Results Speak for Themselves</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black text-purple-600 mb-2">{result.metric}</div>
                <div className="text-muted-foreground font-semibold">{result.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-6 text-lg">
            <Target className="mr-2 w-5 h-5" />
            Start Your Transformation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisualProcess;
