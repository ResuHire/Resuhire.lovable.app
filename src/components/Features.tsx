
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, BookOpen, Users, Brain, Trophy, Rocket, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our AI analyzes skills, personality, and potential to create 85% accurate matches between warriors and opportunities.",
      badge: "AI-Driven",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Trophy,
      title: "FAANG Internships",
      description: "Direct partnerships with Meta, Google, Amazon, Apple & Netflix. Get internships from your first year of college.",
      badge: "Exclusive",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Warrior Training",
      description: "Comprehensive training, workshops, hackathons, mental coaching, and body language mastery.",
      badge: "Complete",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Startup Jobs",
      description: "Connect with innovative startups. Youth-to-youth hiring with no traditional corporate BS.",
      badge: "Innovation",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "No Resume Needed",
      description: "Simple 3-question form: Who are you? What do you know? How do you do it? That's it!",
      badge: "Revolutionary",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "We Are Your Referral",
      description: "Master the skills, and we'll be your referral to land the job. Break traditional hiring limits.",
      badge: "Guaranteed",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            🔥 Game-Changing Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why ResuHire is <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another job platform. We're a complete ecosystem that transforms students into industry-ready warriors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <CardHeader className="relative">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
                  {feature.badge}
                </Badge>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
