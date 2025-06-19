
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, UserCheck, BookOpen, Users, Trophy, Calendar, Target, Award, Brain, Rocket, Zap, CheckCircle, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HowItWorks = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation();
  const { elementRef: detailsRef, isVisible: detailsVisible } = useScrollAnimation();
  const { elementRef: curriculumRef, isVisible: curriculumVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const mainProcess = [
    {
      icon: UserCheck,
      title: "Three Questions Assessment",
      subtitle: "No Resume Required",
      description: "Who are you? What do you know? How do you do it? Our AI creates your adaptive talent blueprint.",
      time: "2 minutes",
      color: "from-purple-500 to-pink-500",
      details: [
        "AI-powered potential evaluation",
        "Skill mapping and competency analysis", 
        "Cultural fit assessment",
        "Learning agility measurement"
      ]
    },
    {
      icon: Rocket,
      title: "12-Week Career Transformation",
      subtitle: "Complete Professional Formation",
      description: "Intensive accelerator program combining technical mastery, leadership development, and real-world application.",
      time: "12 weeks",
      color: "from-blue-500 to-cyan-500",
      details: [
        "Live cohort-based training",
        "FAANG-level technical preparation",
        "Soft skills and leadership coaching",
        "Real startup project experience"
      ]
    },
    {
      icon: Users,
      title: "Industry Integration",
      subtitle: "Real-World Application",
      description: "Work on live projects with partner companies, build your portfolio, and get mentored by industry leaders.",
      time: "Ongoing",
      color: "from-green-500 to-emerald-500",
      details: [
        "Paid internship opportunities",
        "Direct employer partnerships",
        "Portfolio development",
        "Professional networking"
      ]
    },
    {
      icon: Trophy,
      title: "Guaranteed Placement",
      subtitle: "Multiple Career Pathways",
      description: "Graduate into our exclusive talent pipeline with direct access to 500+ partner companies.",
      time: "Immediate",
      color: "from-orange-500 to-red-500",
      details: [
        "Direct employer matching",
        "Salary negotiation support",
        "Career trajectory planning",
        "Lifetime alumni network"
      ]
    }
  ];

  const weeklyBreakdown = [
    {
      weeks: "Weeks 1-3",
      title: "Foundation & Mindset",
      focus: "Building Your Professional Identity",
      topics: [
        "Personal brand development",
        "Communication mastery",
        "Goal setting and planning",
        "Industry landscape overview"
      ],
      icon: Brain
    },
    {
      weeks: "Weeks 4-6", 
      title: "Technical Excellence",
      focus: "Core Skill Development",
      topics: [
        "Advanced coding practices",
        "System design thinking",
        "Problem-solving frameworks",
        "Technical project management"
      ],
      icon: Zap
    },
    {
      weeks: "Weeks 7-9",
      title: "Real-World Application",
      focus: "Industry Immersion",
      topics: [
        "Live startup projects",
        "Cross-functional collaboration",
        "Agile methodology practice",
        "Client interaction skills"
      ],
      icon: Target
    },
    {
      weeks: "Weeks 10-12",
      title: "Career Launch Preparation",
      focus: "Professional Deployment",
      topics: [
        "Interview mastery workshops",
        "Salary negotiation training",
        "Portfolio presentation",
        "Network building strategies"
      ],
      icon: Star
    }
  ];

  const uniqueFeatures = [
    {
      title: "Hirexus AI Matching",
      description: "85%+ accuracy in candidate-employer matching using 200+ data points",
      icon: Brain
    },
    {
      title: "Live Project Portfolio",
      description: "Build real solutions for actual companies during your training",
      icon: Rocket
    },
    {
      title: "Peer Learning Network",
      description: "Collaborate with ambitious peers from top universities worldwide",
      icon: Users
    },
    {
      title: "Industry Mentor Access",
      description: "One-on-one coaching from leaders at Meta, Google, Amazon, and more",
      icon: Award
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:scale-105 transition-transform duration-300 cursor-pointer">
            🚀 YC for Job Seekers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The World's First <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Career Operating System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We don't just find you a job—we transform you into startup-ready talent through our comprehensive career accelerator. 
            From raw potential to realized opportunity in 12 weeks.
          </p>
        </div>

        {/* Main Process Flow */}
        <div 
          ref={processRef}
          className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-300 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Complete Career Transformation Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainProcess.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full hover:scale-105">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <Badge variant="secondary" className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs font-bold bg-purple-100 text-purple-700">
                        {step.time}
                      </Badge>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mt-4 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-sm font-semibold text-purple-600 mb-3">{step.subtitle}</p>
                    <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {index < mainProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-muted-foreground hover:text-purple-600 transition-colors duration-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Weekly Breakdown */}
        <div 
          ref={detailsRef}
          className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-600 ${
            detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Comprehensive 12-Week Curriculum</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {weeklyBreakdown.map((period, index) => (
              <Card key={index} className="border border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <period.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-purple-700 border-purple-300 mb-2">
                        {period.weeks}
                      </Badge>
                      <h4 className="text-lg font-bold group-hover:text-purple-600 transition-colors duration-300">{period.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-purple-600 mb-4">{period.focus}</p>
                  <div className="space-y-2">
                    {period.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Unique Features */}
        <div 
          ref={curriculumRef}
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-900 ${
            curriculumVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">What Makes ResuHire Different</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-1000 delay-1200 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 max-w-4xl mx-auto text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Award className="w-12 h-12 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join the Elite Talent Pipeline?
            </h3>
            <p className="text-lg opacity-90 mb-2">
              Applications for Cohort 2025A close in 14 days. Only 20 spots available.
            </p>
            <p className="text-sm opacity-80 mb-6">
              Join 2,500+ successful graduates who landed roles at Meta, Google, Amazon, and top startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Apply Now - Free Assessment
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105">
                Download Full Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
