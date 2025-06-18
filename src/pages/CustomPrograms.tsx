
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wrench, Target, Users, Code, Briefcase, Zap } from 'lucide-react';

const CustomPrograms = () => {
  const programTypes = [
    {
      type: "Technical Bootcamp",
      duration: "8-12 weeks",
      icon: Code,
      description: "Intensive training programs tailored to your technology stack and engineering practices",
      features: [
        "Your specific tech stack (React, Python, Go, etc.)",
        "Company coding standards and practices", 
        "Real projects from your backlog",
        "Mentorship from your senior engineers"
      ]
    },
    {
      type: "Leadership Pipeline",
      duration: "12-16 weeks", 
      icon: Users,
      description: "Develop future leaders with management and strategic thinking skills",
      features: [
        "Leadership fundamentals",
        "Strategic decision making",
        "Team management skills",
        "Company culture immersion"
      ]
    },
    {
      type: "Domain Expertise",
      duration: "6-10 weeks",
      icon: Target,
      description: "Deep-dive training in your industry vertical or business domain",
      features: [
        "Industry-specific knowledge",
        "Regulatory compliance",
        "Business process understanding",
        "Customer empathy training"
      ]
    }
  ];

  const successStories = [
    {
      company: "FinTech Startup",
      program: "Blockchain Development Bootcamp",
      participants: 25,
      outcome: "100% hired as blockchain engineers",
      timeframe: "10 weeks"
    },
    {
      company: "Healthcare AI",
      program: "Medical AI Specialist Program", 
      participants: 15,
      outcome: "Built core ML pipeline team",
      timeframe: "12 weeks"
    },
    {
      company: "E-commerce Giant",
      program: "Product Management Track",
      participants: 30,
      outcome: "Filled entire PM organization",
      timeframe: "14 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-purple-100 text-orange-700">
              🛠️ Custom Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tailored Training <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">For Your Needs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Design custom training programs that align perfectly with your company's technology stack, 
              culture, and specific hiring needs. Build exactly the talent pipeline you need.
            </p>
          </div>
        </div>

        {/* Program Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Custom Program Types</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {programTypes.map((program, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center mb-6">
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">{program.type}</h3>
                        <Badge variant="secondary">{program.duration}</Badge>
                      </div>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How Custom Programs Work</h2>
              <Tabs defaultValue="discovery" className="w-full">
                <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto mb-12">
                  <TabsTrigger value="discovery">Discovery</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="delivery">Delivery</TabsTrigger>
                  <TabsTrigger value="deployment">Deployment</TabsTrigger>
                </TabsList>

                <TabsContent value="discovery">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Wrench className="w-16 h-16 text-orange-600 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Discovery Phase</h3>
                      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        We work closely with your team to understand your specific needs, technology stack, 
                        company culture, and hiring goals.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Technical Assessment</h4>
                          <p className="text-sm text-gray-600">Analyze your tech stack and requirements</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Culture Mapping</h4>
                          <p className="text-sm text-gray-600">Understand your company values and culture</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="design">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Program Design</h3>
                      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Create a custom curriculum that perfectly matches your needs, incorporating your 
                        methodologies, tools, and success metrics.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Curriculum Development</h4>
                          <p className="text-sm text-gray-600">Tailored learning objectives</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Project Integration</h4>
                          <p className="text-sm text-gray-600">Real company challenges</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Assessment Framework</h4>
                          <p className="text-sm text-gray-600">Custom evaluation criteria</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="delivery">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Zap className="w-16 h-16 text-green-600 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Program Delivery</h3>
                      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Execute the training program with your team's involvement, ensuring candidates 
                        learn exactly what they need to succeed at your company.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Expert Instruction</h4>
                          <p className="text-sm text-gray-600">Industry professionals and your team</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Hands-on Projects</h4>
                          <p className="text-sm text-gray-600">Real work scenarios and challenges</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="deployment">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Briefcase className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Talent Deployment</h3>
                      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Seamlessly integrate graduates into your team with confidence, knowing they're 
                        perfectly prepared for your environment and challenges.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Smooth Onboarding</h4>
                          <p className="text-sm text-gray-600">Pre-integrated knowledge</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Immediate Impact</h4>
                          <p className="text-sm text-gray-600">Day-one productivity</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Ongoing Support</h4>
                          <p className="text-sm text-gray-600">Continued mentorship</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Custom Program Success Stories</h2>
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl text-orange-600">{story.company}</h3>
                          <p className="text-gray-600">{story.program}</p>
                        </div>
                        <Badge variant="secondary">{story.timeframe}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-lg font-semibold">{story.outcome}</div>
                          <div className="text-gray-600">{story.participants} participants</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Custom Program?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's design a training program that creates exactly the talent your company needs to succeed.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Start Your Custom Program
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CustomPrograms;
