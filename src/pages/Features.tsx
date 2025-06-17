
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Target, Users, Brain, Shield, Globe, Lightbulb, TrendingUp, Award, MessageSquare, Calendar, CheckCircle } from 'lucide-react';

const FeaturesPage = () => {
  const uniqueFeatures = [
    {
      icon: Target,
      title: "Only Platform with FAANG Internship Guarantees",
      description: "Direct partnerships ensuring placement from year 1 of college",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Complete Human Transformation",
      description: "Technical + Soft + Mental + Physical presence coaching",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI-First Hiring Revolution",
      description: "85% match accuracy vs traditional 15-20% resume success",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "End-to-End Ecosystem",
      description: "From skill gap identification to job placement in one platform",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const detailedFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our advanced AI analyzes skills, personality, and potential to create 85% accurate matches. No more spray-and-pray applications.",
      color: "from-purple-500 to-purple-600",
      badge: "AI-Driven"
    },
    {
      icon: Award,
      title: "FAANG Guarantees",
      description: "Direct partnerships with Meta, Google, Amazon, Apple & Netflix. Get internships from your first year of college with our guarantee.",
      color: "from-orange-500 to-red-500",
      badge: "Exclusive"
    },
    {
      icon: Users,
      title: "Warrior Academy",
      description: "Comprehensive training ecosystem: technical skills, soft skills, mental coaching, body language, and interview mastery.",
      color: "from-blue-500 to-blue-600",
      badge: "Complete"
    },
    {
      icon: MessageSquare,
      title: "Body Language Mastery",
      description: "AI-powered video analysis to perfect your posture, gestures, and presence. Learn to command any room with confidence.",
      color: "from-green-500 to-green-600",
      badge: "Revolutionary"
    },
    {
      icon: Shield,
      title: "Mental Fortress Training",
      description: "Combat interview anxiety, imposter syndrome, and stress. Build unshakeable confidence through psychological coaching.",
      color: "from-indigo-500 to-indigo-600",
      badge: "Wellness"
    },
    {
      icon: TrendingUp,
      title: "Voice & Communication Coaching",
      description: "Perfect your articulation, tone, and delivery. Transform how you present ideas and handle difficult questions.",
      color: "from-pink-500 to-pink-600",
      badge: "Transformative"
    },
    {
      icon: Zap,
      title: "Startup Fast-Track",
      description: "Connect with innovative startups. Youth-to-youth hiring with no corporate bureaucracy. Move fast, break barriers.",
      color: "from-cyan-500 to-cyan-600",
      badge: "Innovation"
    },
    {
      icon: CheckCircle,
      title: "No Resume Revolution",
      description: "Three simple questions: Who are you? What do you know? How do you do it? That's it. Skills over paperwork.",
      color: "from-emerald-500 to-emerald-600",
      badge: "Revolutionary"
    },
    {
      icon: Target,
      title: "Referral Guarantee",
      description: "Master the skills, and we become your referral. We break traditional hiring barriers and get you inside.",
      color: "from-yellow-500 to-orange-500",
      badge: "Guaranteed"
    },
    {
      icon: Globe,
      title: "Enterprise Integration",
      description: "Seamless ATS integration, custom workflows, and white-label solutions for Fortune 500 companies.",
      color: "from-slate-500 to-gray-600",
      badge: "Enterprise"
    },
    {
      icon: Users,
      title: "Global Talent Pool",
      description: "Access opportunities worldwide. Our platform connects talent across continents with real-time matching.",
      color: "from-teal-500 to-teal-600",
      badge: "Global"
    },
    {
      icon: Calendar,
      title: "Real-Time Skill Tracking",
      description: "Dynamic skill assessment that evolves with you. Track progress, identify gaps, and get personalized improvement plans.",
      color: "from-purple-500 to-purple-600",
      badge: "Adaptive"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hackathons",
      description: "Monthly hackathons with FAANG engineers as judges. Build real products, win internships, and showcase talent.",
      color: "from-orange-500 to-red-500",
      badge: "Creative"
    },
    {
      icon: TrendingUp,
      title: "Career Acceleration",
      description: "From student to professional in record time. Our warriors land roles 500% faster than traditional job seekers.",
      color: "from-green-500 to-green-600",
      badge: "Fast-Track"
    },
    {
      icon: Award,
      title: "Merit-Based Placement",
      description: "Your skills determine your placement, not your network or background. True meritocracy in action.",
      color: "from-blue-500 to-blue-600",
      badge: "Fair"
    },
    {
      icon: Zap,
      title: "Real-Time Matching",
      description: "Get matched with opportunities as they arise. No waiting for application reviews - instant connections.",
      color: "from-purple-500 to-pink-500",
      badge: "Instant"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
              🔥 World's Most Comprehensive Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Why ResuHire is <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Unprecedented</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
              The world's first platform that seamlessly integrates HRTech + EdTech + AI with FAANG access, mental preparation, and holistic human development. No other platform offers this complete transformation.
            </p>

            {/* Unique Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {uniqueFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Features />

        {/* Detailed Features Grid */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience the Most <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Complete Career Platform</span> Ever Built?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of warriors who've transformed their entire professional presence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detailedFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
