
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, UserCheck, BookOpen, Users, Trophy, Calendar, Target, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HowItWorks = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { elementRef: curriculumRef, isVisible: curriculumVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const steps = [
    {
      icon: UserCheck,
      title: "Application & Selection",
      description: "Apply with just 3 questions. No resume needed. Our AI evaluates your potential and admits only 15% of applicants.",
      color: "from-purple-500 to-pink-500",
      week: "Week 0"
    },
    {
      icon: BookOpen,
      title: "12-Week Warrior Training",
      description: "Intensive cohort-based program: technical skills, soft skills, mental coaching, and real-world projects with peers.",
      color: "from-blue-500 to-cyan-500",
      week: "Weeks 1-10"
    },
    {
      icon: Users,
      title: "Demo Day Preparation",
      description: "Prepare your warrior showcase with mentors. Practice pitching yourself to top employers and build your professional presence.",
      color: "from-green-500 to-emerald-500",
      week: "Week 11"
    },
    {
      icon: Trophy,
      title: "Graduation & Placement",
      description: "Demo Day with 50+ employers. Get multiple offers, choose your path, and join our exclusive alumni network.",
      color: "from-orange-500 to-red-500",
      week: "Week 12"
    }
  ];

  const weeklyHighlights = [
    { week: "Weeks 1-3", focus: "Foundation Building", topics: "Mindset, Communication, Personal Brand" },
    { week: "Weeks 4-6", focus: "Technical Mastery", topics: "Coding, Problem Solving, System Design" },
    { week: "Weeks 7-9", focus: "Industry Immersion", topics: "Real Projects, Mentorship, Peer Learning" },
    { week: "Weeks 10-12", focus: "Career Launch", topics: "Demo Prep, Employer Meetings, Job Placement" },
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
            🎓 12-Week Accelerator Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The World's First <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Job Seekers Accelerator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Just like Y Combinator transforms startups, we transform students into industry-ready warriors through our intensive cohort-based program.
          </p>
        </div>

        {/* Program Overview */}
        <div 
          ref={stepsRef}
          className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
            stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <Badge variant="secondary" className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs font-bold bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors duration-300">
                        {step.week}
                      </Badge>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mt-4 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-muted-foreground hover:text-purple-600 transition-colors duration-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Breakdown */}
        <div 
          ref={curriculumRef}
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-600 ${
            curriculumVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Program Curriculum Breakdown</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {weeklyHighlights.map((period, index) => (
              <Card key={index} className="border border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                    <Badge variant="outline" className="text-purple-700 border-purple-300 group-hover:bg-purple-50 transition-colors duration-300">
                      {period.week}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">{period.focus}</h4>
                  <p className="text-muted-foreground">{period.topics}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-1000 delay-900 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 max-w-4xl mx-auto text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Award className="w-12 h-12 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Cohort 2025A?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Applications close in 14 days. Only 20 spots available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Apply Now - Free
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105">
                Download Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
