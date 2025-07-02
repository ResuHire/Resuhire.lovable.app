
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, BookOpen, Users, Brain, Trophy, Rocket, Shield, TrendingUp, Award, Clock, Heart, Mic, Camera, Building2, Globe, GitBranch, Lightbulb, DollarSign, BarChart3, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Matching",
      description: "Proprietary algorithms analyze comprehensive skill profiles and career trajectories to create precise candidate-employer matches with 85% accuracy.",
      badge: "AI-Powered",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Trophy,
      title: "Elite Industry Partnerships",
      description: "Exclusive partnerships with leading technology companies including Meta, Google, Amazon, and Apple for guaranteed placement opportunities.",
      badge: "Premium Access",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Development Program",
      description: "Integrated learning ecosystem combining technical excellence, leadership development, professional communication, and industry best practices.",
      badge: "Complete Solution",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Camera,
      title: "Professional Presence Training",
      description: "Advanced coaching in executive presence, professional communication, and leadership skills through AI-powered assessment and feedback.",
      badge: "Executive Training",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Leadership Development",
      description: "Comprehensive leadership training focused on emotional intelligence, strategic thinking, and high-performance team management.",
      badge: "Leadership Focus",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Mic,
      title: "Executive Communication",
      description: "Professional communication training including public speaking, stakeholder management, and persuasive presentation skills.",
      badge: "Communication Mastery",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Innovation Ecosystem",
      description: "Direct connection to high-growth startups and emerging technology companies seeking exceptional talent and fresh perspectives.",
      badge: "Innovation Network",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Skills-Based Assessment",
      description: "Revolutionary evaluation methodology that prioritizes demonstrated capabilities and potential over traditional credentials.",
      badge: "Skills-First",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Career Guarantee Program",
      description: "Comprehensive support system ensuring successful career placement with ongoing mentorship and professional development.",
      badge: "Success Guarantee",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Building2,
      title: "Enterprise Integration",
      description: "Seamless integration with enterprise systems, custom workflows, and white-label solutions for Fortune 500 organizations.",
      badge: "Enterprise Ready",
      color: "from-slate-500 to-gray-600"
    },
    {
      icon: Globe,
      title: "Global Talent Network",
      description: "International talent ecosystem connecting exceptional professionals with opportunities across multiple markets and industries.",
      badge: "Global Reach",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GitBranch,
      title: "Dynamic Skill Tracking",
      description: "Real-time competency assessment and development tracking with personalized growth recommendations and career pathway optimization.",
      badge: "Adaptive Learning",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Challenges",
      description: "Regular innovation competitions and hackathons with industry leaders, providing real-world project experience and networking opportunities.",
      badge: "Innovation Labs",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Accelerated Career Growth",
      description: "Systematic approach to career advancement resulting in significantly faster professional development and industry recognition.",
      badge: "Fast-Track Success",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Award,
      title: "Merit-Based Placement",
      description: "Transparent, merit-driven selection process ensuring equal opportunity based on demonstrated skills and potential for growth.",
      badge: "Equal Opportunity",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "Real-Time Opportunity Matching",
      description: "Instantaneous matching with emerging opportunities based on current market demands and individual career objectives.",
      badge: "Instant Connection",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Professional Learning Communities",
      description: "Curated peer groups and mentorship networks facilitating collaborative learning and professional relationship building.",
      badge: "Community Network",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Continuous Innovation",
      description: "Platform continuously evolves with industry trends and technological advances to maintain competitive advantage for users.",
      badge: "Future-Ready",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const uniqueValueProps = [
    {
      title: "Exclusive Industry Partnership Network",
      description: "Direct placement pipelines with leading technology companies"
    },
    {
      title: "Comprehensive Professional Development",
      description: "Technical expertise combined with leadership and communication skills"
    },
    {
      title: "AI-Driven Precision Matching",
      description: "85% accuracy versus traditional 15-20% resume-based success rates"
    },
    {
      title: "Integrated Career Operating System",
      description: "Complete solution from skill development to career placement"
    }
  ];

  const marketOpportunity = [
    {
      icon: DollarSign,
      value: "$200B+",
      label: "Global Recruitment Market",
      description: "Total addressable market across hiring and professional development"
    },
    {
      icon: BarChart3,
      value: "$50B+",
      label: "Professional Development Market",
      description: "Corporate training and executive development segment"
    },
    {
      icon: Briefcase,
      value: "$150B+",
      label: "HR Technology Market",
      description: "Recruitment technology and talent management solutions"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            🚀 Comprehensive Career Platform
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Excellence <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Redefined</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            The world's first integrated platform combining advanced HR technology, comprehensive education, 
            and AI-powered matching to transform career development and professional achievement.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-6">$200B Market Opportunity</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {marketOpportunity.map((market, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <market.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-800 mb-2">{market.value}</div>
                  <div className="font-semibold text-green-700 mb-2">{market.label}</div>
                  <div className="text-sm text-green-600">{market.description}</div>
                </div>
              ))}
            </div>
            <p className="text-green-700 mt-6 font-medium">
              ResuHire operates at the intersection of the fastest-growing technology and professional development markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {uniqueValueProps.map((prop, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-sm text-blue-700 mb-2">{prop.title}</h3>
                <p className="text-xs text-blue-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <CardHeader className="relative pb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <Badge variant="secondary" className="absolute top-6 right-6 text-xs font-bold">
                  {feature.badge}
                </Badge>
                <CardTitle className="text-xl font-bold leading-tight">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experience the Future of Professional Development
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of professionals who have transformed their careers through our comprehensive platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Begin Your Professional Journey
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
                Explore Platform Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
