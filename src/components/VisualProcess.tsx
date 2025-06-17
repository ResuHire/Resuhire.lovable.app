
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, UserCheck, BookOpen, Users, Trophy, Rocket, Target, Award, CheckCircle } from 'lucide-react';

const VisualProcess = () => {
  const processSteps = [
    {
      step: "01",
      icon: UserCheck,
      title: "3 Simple Questions",
      subtitle: "No Resume Required",
      description: "Who are you? What do you know? How do you do it?",
      time: "2 minutes",
      color: "from-blue-500 to-cyan-500",
      features: ["AI-powered assessment", "Skill mapping", "Potential evaluation"]
    },
    {
      step: "02",
      icon: Rocket,
      title: "12-Week Transformation",
      subtitle: "Complete Career Formation",
      description: "Technical skills + Soft skills + Mental coaching + Real projects",
      time: "12 weeks",
      color: "from-purple-500 to-pink-500",
      features: ["Live cohort training", "FAANG-level preparation", "Peer collaboration"]
    },
    {
      step: "03",
      icon: Users,
      title: "Demo Day Preparation",
      subtitle: "Professional Showcase",
      description: "Practice with mentors, build your presence, perfect your pitch",
      time: "1 week",
      color: "from-green-500 to-emerald-500",
      features: ["Mock interviews", "Presentation skills", "Personal branding"]
    },
    {
      step: "04",
      icon: Trophy,
      title: "Guaranteed Placement",
      subtitle: "Multiple Job Offers",
      description: "Demo Day with 50+ employers, choose your dream role",
      time: "Immediate",
      color: "from-orange-500 to-red-500",
      features: ["Direct employer access", "Salary negotiation", "Career support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
            ✨ Visual Step-by-Step Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ResuHire</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From application to employment in just 12 weeks. Here's exactly how we transform students into hired professionals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Process Steps */}
            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                    <CardContent className="p-8">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-8">
                        <div className="w-12 h-12 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-lg group-hover:border-purple-300 transition-colors">
                          {step.step}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-sm font-semibold text-purple-600 mb-3">{step.subtitle}</p>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <Badge variant="outline" className="text-xs">
                          ⏱️ {step.time}
                        </Badge>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">The Results Speak for Themselves</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div>Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$180K</div>
                  <div>Average Salary</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">7 Days</div>
                  <div>Time to First Interview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualProcess;
