
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Target, Brain, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('assessment');
  const [isPlaying, setIsPlaying] = useState(false);

  const demoScenarios = [
    {
      id: 'assessment',
      title: 'AI Skill Assessment',
      description: 'See how our AI evaluates candidates in real-time',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'matching',
      title: 'Smart Matching',
      description: 'Watch our 85% accurate matching algorithm in action',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'recruiter',
      title: 'Recruiter Dashboard',
      description: 'Experience the recruiter side of the platform',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const assessmentQuestions = [
    {
      question: "Who are you?",
      answer: "CS student passionate about AI and machine learning",
      score: 95
    },
    {
      question: "What do you know?",
      answer: "Python, TensorFlow, React, Node.js, AWS",
      score: 88
    },
    {
      question: "How do you do it?",
      answer: "Built 3 ML projects, contributed to open source",
      score: 92
    }
  ];

  const matchResults = [
    {
      company: "Meta",
      role: "AI Engineer Intern",
      match: 94,
      salary: "$8,500/month",
      status: "Interview Ready"
    },
    {
      company: "Google",
      role: "Software Engineer Intern",
      match: 89,
      salary: "$8,000/month",
      status: "Skills Review"
    },
    {
      company: "Netflix",
      role: "Data Science Intern",
      match: 87,
      salary: "$7,800/month",
      status: "Pending"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            🎯 Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See ResuHire <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our revolutionary platform from both student and recruiter perspectives
          </p>
        </div>

        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {demoScenarios.map((scenario) => (
              <TabsTrigger key={scenario.id} value={scenario.id} className="flex items-center gap-2">
                <scenario.icon className="w-4 h-4" />
                {scenario.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="assessment" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                  <Brain className="w-6 h-6 text-purple-600" />
                  AI-Powered Assessment
                </CardTitle>
                <p className="text-muted-foreground">Our revolutionary 3-question assessment</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {assessmentQuestions.map((q, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-muted/20">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-purple-600">{q.question}</h4>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        Score: {q.score}%
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{q.answer}</p>
                  </div>
                ))}
                <div className="text-center pt-4">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg px-6 py-2">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Overall Score: 92% - FAANG Ready!
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matching" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  Smart Matching Results
                </CardTitle>
                <p className="text-muted-foreground">Real-time matches based on your assessment</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {matchResults.map((match, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg">{match.company}</h4>
                        <p className="text-muted-foreground">{match.role}</p>
                        <p className="text-green-600 font-semibold">{match.salary}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{match.match}%</div>
                        <Badge 
                          variant={match.status === 'Interview Ready' ? 'default' : 'secondary'}
                          className={match.status === 'Interview Ready' ? 'bg-green-500' : ''}
                        >
                          {match.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center pt-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Apply to All Matches
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recruiter" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                  <Users className="w-6 h-6 text-green-600" />
                  Recruiter Dashboard
                </CardTitle>
                <p className="text-muted-foreground">How recruiters see and interact with candidates</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Top Candidates This Week</h4>
                    {[
                      { name: "Sarah Chen", skills: "AI/ML, Python", score: 94, university: "MIT" },
                      { name: "Marcus Rodriguez", skills: "Full-Stack, React", score: 89, university: "Stanford" },
                      { name: "Aisha Patel", skills: "Data Science, R", score: 87, university: "Berkeley" }
                    ].map((candidate, index) => (
                      <div key={index} className="border rounded-lg p-3 bg-muted/10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold">{candidate.name}</h5>
                            <p className="text-sm text-muted-foreground">{candidate.university}</p>
                            <p className="text-sm text-blue-600">{candidate.skills}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">{candidate.score}%</div>
                            <Button size="sm" variant="outline">Interview</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Hiring Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">15</div>
                        <div className="text-sm text-muted-foreground">Active Positions</div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">127</div>
                        <div className="text-sm text-muted-foreground">Qualified Matches</div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">3.2x</div>
                        <div className="text-sm text-muted-foreground">Faster Hiring</div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">$47K</div>
                        <div className="text-sm text-muted-foreground">Cost Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4">
            <Play className="w-5 h-5 mr-2" />
            Request Full Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
