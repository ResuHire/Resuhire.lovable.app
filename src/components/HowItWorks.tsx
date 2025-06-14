
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, UserPlus, BookOpen, Target, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Join as a Warrior",
      description: "Sign up and tell us who you are, what you know, and how you do it. No resume, no BS.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Master Your Skills",
      description: "Access our training programs, workshops, hackathons, and mental coaching to become job-ready.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Get Matched",
      description: "Our AI matches you with perfect opportunities at FAANG companies or innovative startups.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Trophy,
      title: "Land Your Dream Role",
      description: "We become your referral and help you break into your dream company. No traditional interviews!",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            ⚡ Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Student to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Warrior</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our revolutionary 4-step process transforms any student or fresh grad into an industry-ready professional.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
