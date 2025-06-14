
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, BookOpen, Users, Brain, Trophy, Rocket, Shield, TrendingUp, Award, Clock, Heart, Mic, Camera, Building2, Globe, GitBranch, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our advanced AI analyzes skills, personality, and potential to create 85% accurate matches. No more spray-and-pray applications.",
      badge: "AI-Driven",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Trophy,
      title: "FAANG Guarantees",
      description: "Direct partnerships with Meta, Google, Amazon, Apple & Netflix. Get internships from your first year of college with our guarantee.",
      badge: "Exclusive",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Warrior Academy",
      description: "Comprehensive training ecosystem: technical skills, soft skills, mental coaching, body language, and interview mastery.",
      badge: "Complete",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Camera,
      title: "Body Language Mastery",
      description: "AI-powered video analysis to perfect your posture, gestures, and presence. Learn to command any room with confidence.",
      badge: "Revolutionary",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Mental Fortress Training",
      description: "Combat interview anxiety, imposter syndrome, and stress. Build unshakeable confidence through psychological coaching.",
      badge: "Wellness",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Mic,
      title: "Voice & Communication Coaching",
      description: "Perfect your articulation, tone, and delivery. Transform how you present ideas and handle difficult questions.",
      badge: "Transformative",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Startup Fast-Track",
      description: "Connect with innovative startups. Youth-to-youth hiring with no corporate bureaucracy. Move fast, break barriers.",
      badge: "Innovation",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "No Resume Revolution",
      description: "Three simple questions: Who are you? What do you know? How do you do it? That's it. Skills over paperwork.",
      badge: "Revolutionary",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Referral Guarantee",
      description: "Master the skills, and we become your referral. We break traditional hiring barriers and get you inside.",
      badge: "Guaranteed",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Building2,
      title: "Enterprise Integration",
      description: "Seamless ATS integration, custom workflows, and white-label solutions for Fortune 500 companies.",
      badge: "Enterprise",
      color: "from-slate-500 to-gray-600"
    },
    {
      icon: Globe,
      title: "Global Talent Pool",
      description: "Access opportunities worldwide. Our platform connects talent across continents with real-time matching.",
      badge: "Global",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GitBranch,
      title: "Real-Time Skill Tracking",
      description: "Dynamic skill assessment that evolves with you. Track progress, identify gaps, and get personalized improvement plans.",
      badge: "Adaptive",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hackathons",
      description: "Monthly hackathons with FAANG engineers as judges. Build real products, win internships, and showcase talent.",
      badge: "Creative",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Career Acceleration",
      description: "From student to professional in record time. Our warriors land roles 500% faster than traditional job seekers.",
      badge: "Fast-Track",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Award,
      title: "Merit-Based Placement",
      description: "Your skills determine your placement, not your network or background. True meritocracy in action.",
      badge: "Fair",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "Real-Time Matching",
      description: "Get matched with opportunities as they arise. No waiting for application reviews - instant connections.",
      badge: "Instant",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Peer Learning Pods",
      description: "Small cohort groups for intensive learning. Study together, solve problems together, get hired together.",
      badge: "Community",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Continuous Evolution",
      description: "We adapt to market changes in real-time. Our platform evolves with industry needs to keep you always relevant.",
      badge: "Adaptive",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const uniqueValueProps = [
    {
      title: "Only Platform with FAANG Internship Guarantees",
      description: "Direct partnerships ensuring placement from year 1 of college"
    },
    {
      title: "Complete Human Transformation",
      description: "Technical + Soft + Mental + Physical presence coaching"
    },
    {
      title: "AI-First Hiring Revolution",
      description: "85% match accuracy vs traditional 15-20% resume success"
    },
    {
      title: "End-to-End Ecosystem",
      description: "From skill gap identification to job placement in one platform"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            🔥 World's Most Comprehensive Platform
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why ResuHire is <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Unprecedented</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            The world's first platform that seamlessly integrates HRTech + EdTech + AI with FAANG access, 
            mental preparation, and holistic human development. No other platform offers this complete transformation.
          </p>

          {/* Unique Value Props */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {uniqueValueProps.map((prop, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-bold text-sm text-purple-700 mb-2">{prop.title}</h3>
                <p className="text-xs text-purple-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105">
              <CardHeader className="relative pb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Most Complete Career Platform Ever Built?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of warriors who've transformed their entire professional presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Start Your Complete Transformation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors">
                See Full Feature Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
