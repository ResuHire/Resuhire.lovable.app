
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, UserCheck, BookOpen, Users, Trophy, Calendar, Target, Award, Sparkles, Zap } from 'lucide-react';
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
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-background via-purple-50/20 to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            <span className="text-purple-700 font-semibold text-sm tracking-wide">12-WEEK ACCELERATOR PROGRAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The World's First <span className="text-gradient">Job Seekers Accelerator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Just like Y Combinator transforms startups, we transform students into industry-ready warriors through our intensive cohort-based program.
          </p>
        </div>

        {/* Enhanced Program Overview */}
        <div 
          ref={stepsRef}
          className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
            stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full interactive-card glass-card">
                  <CardContent className="p-8 text-center relative">
                    <div className="relative mb-6">
                      <Badge variant="secondary" className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors duration-300 glass-card">
                        {step.week}
                      </Badge>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mt-4 shadow-xl`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 text-purple-600 hover:text-purple-700 transition-colors duration-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Weekly Breakdown */}
        <div 
          ref={curriculumRef}
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-600 ${
            curriculumVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Program Curriculum Breakdown</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="bento-grid">
            {weeklyHighlights.map((period, index) => (
              <Card key={index} className="bento-item border-0 hover:shadow-xl transition-all duration-300 cursor-pointer group glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-purple-700 border-purple-300 group-hover:bg-purple-50 transition-colors duration-300 glass">
                      {period.week}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">{period.focus}</h4>
                  <p className="text-muted-foreground leading-relaxed">{period.topics}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-1000 delay-900 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-10 max-w-4xl mx-auto text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full group-hover:animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full group-hover:animate-pulse" style={{animationDelay: '0.5s'}}></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-16 h-16 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <Zap className="w-8 h-8 ml-2 text-yellow-300 group-hover:animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Cohort 2025A?
              </h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Applications close in <span className="font-bold text-yellow-300">14 days</span>. Only <span className="font-bold text-yellow-300">20 spots</span> available.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="glass bg-white text-purple-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Apply Now - Free
                </button>
                <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 glass">
                  Download Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
