
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Code, Users, Trophy, Calendar, Target } from 'lucide-react';

const ProgramStructure = () => {
  const phases = [
    {
      phase: "Foundation",
      duration: "Weeks 1-4",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      modules: [
        "Mindset & Mental Preparation",
        "Communication Fundamentals", 
        "Technical Skill Assessment",
        "Learning Path Customization"
      ]
    },
    {
      phase: "Development", 
      duration: "Weeks 5-12",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      modules: [
        "Advanced Technical Training",
        "Project-Based Learning",
        "Peer Collaboration",
        "Industry Simulations"
      ]
    },
    {
      phase: "Application",
      duration: "Weeks 13-16", 
      icon: Target,
      color: "from-green-500 to-emerald-500",
      modules: [
        "Real-World Projects",
        "Startup Challenges",
        "Leadership Training",
        "Portfolio Development"
      ]
    },
    {
      phase: "Deployment",
      duration: "Week 17+",
      icon: Trophy,
      color: "from-orange-500 to-red-500", 
      modules: [
        "Job Matching & Placement",
        "Interview Preparation",
        "Salary Negotiation",
        "Career Mentorship"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
              📚 Program Structure
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Structured Path to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Success</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Our comprehensive 16+ week program transforms raw potential into startup-ready talent through 
              a carefully designed curriculum that balances technical skills, soft skills, and real-world application.
            </p>
          </div>
        </div>

        {/* Program Phases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">4-Phase Transformation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {phases.map((phase, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center flex-shrink-0`}>
                          <phase.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold">{phase.phase}</h3>
                            <Badge variant="secondary">{phase.duration}</Badge>
                          </div>
                          <ul className="space-y-2">
                            {phase.modules.map((module, moduleIndex) => (
                              <li key={moduleIndex} className="text-gray-600 flex items-center gap-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                {module}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Formats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How You'll Learn</h2>
              <Tabs defaultValue="live" className="w-full">
                <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                  <TabsTrigger value="live">Live Sessions</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="peer">Peer Learning</TabsTrigger>
                  <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
                </TabsList>

                <TabsContent value="live" className="space-y-6">
                  <Card>
                    <CardContent className="p-8">
                      <Calendar className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold mb-4">Interactive Live Sessions</h3>
                      <p className="text-gray-600 mb-4">
                        Join expert-led workshops, coding sessions, and Q&A forums 3-4 times per week.
                      </p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Technical workshops with industry experts</li>
                        <li>• Career guidance sessions</li>
                        <li>• Mock interviews and feedback</li>
                        <li>• Guest speakers from FAANG companies</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projects" className="space-y-6">
                  <Card>
                    <CardContent className="p-8">
                      <Code className="w-12 h-12 text-purple-600 mb-4" />
                      <h3 className="text-xl font-bold mb-4">Real-World Projects</h3>
                      <p className="text-gray-600 mb-4">
                        Build actual products and solutions that matter, guided by industry professionals.
                      </p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Startup challenge simulations</li>
                        <li>• Open source contributions</li>
                        <li>• Industry partnership projects</li>
                        <li>• Portfolio development guidance</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="peer" className="space-y-6">
                  <Card>
                    <CardContent className="p-8">
                      <Users className="w-12 h-12 text-green-600 mb-4" />
                      <h3 className="text-xl font-bold mb-4">Collaborative Learning</h3>
                      <p className="text-gray-600 mb-4">
                        Learn alongside ambitious peers in a supportive, competitive environment.
                      </p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Study groups and coding circles</li>
                        <li>• Peer code reviews</li>
                        <li>• Team hackathons</li>
                        <li>• Knowledge sharing sessions</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="mentorship" className="space-y-6">
                  <Card>
                    <CardContent className="p-8">
                      <Trophy className="w-12 h-12 text-orange-600 mb-4" />
                      <h3 className="text-xl font-bold mb-4">1:1 Mentorship</h3>
                      <p className="text-gray-600 mb-4">
                        Get personalized guidance from experienced professionals who've been where you want to go.
                      </p>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Weekly 1:1 sessions with industry mentors</li>
                        <li>• Personalized career planning</li>
                        <li>• Technical skill development</li>
                        <li>• Network building opportunities</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramStructure;
