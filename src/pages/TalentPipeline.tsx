
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Brain, Code, Rocket, Filter, Target } from 'lucide-react';

const TalentPipeline = () => {
  const pipelineStages = [
    {
      stage: "Sourcing",
      icon: Users,
      candidates: "10,000+",
      description: "Global talent acquisition from top universities and bootcamps",
      color: "from-blue-500 to-cyan-500"
    },
    {
      stage: "Screening", 
      icon: Filter,
      candidates: "2,500",
      description: "AI-powered assessment of technical and soft skills",
      color: "from-purple-500 to-pink-500"
    },
    {
      stage: "Training",
      icon: Brain,
      candidates: "1,000",
      description: "16-week intensive program with real-world projects",
      color: "from-green-500 to-emerald-500"
    },
    {
      stage: "Validation",
      icon: Code,
      candidates: "800",
      description: "Industry challenges and peer evaluation",
      color: "from-orange-500 to-red-500"
    },
    {
      stage: "Deployment",
      icon: Rocket,
      candidates: "600+",
      description: "Job-ready talent matched to company needs",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const talentCategories = [
    {
      category: "Software Engineers",
      count: "40%",
      skills: ["Full-Stack Development", "Backend Systems", "Mobile Development", "DevOps"],
      companies: ["Google", "Meta", "Amazon", "Netflix"]
    },
    {
      category: "Product Managers",
      count: "25%", 
      skills: ["Product Strategy", "User Research", "Data Analysis", "Growth Hacking"],
      companies: ["Stripe", "Airbnb", "Uber", "Notion"]
    },
    {
      category: "Data Scientists",
      count: "20%",
      skills: ["Machine Learning", "Data Engineering", "Analytics", "AI Development"],
      companies: ["OpenAI", "Tesla", "Microsoft", "Apple"]
    },
    {
      category: "Designers",
      count: "15%",
      skills: ["UI/UX Design", "Product Design", "Design Systems", "User Research"],
      companies: ["Figma", "Adobe", "Spotify", "Slack"]
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
              🚀 Talent Pipeline
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Elite Talent <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Pipeline</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Access our continuously flowing pipeline of startup-ready talent. Each candidate is rigorously 
              trained, validated, and matched to your specific needs using advanced AI technology.
            </p>
          </div>
        </div>

        {/* Pipeline Visualization */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our 5-Stage Pipeline Process</h2>
              <div className="space-y-6">
                {pipelineStages.map((stage, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-8">
                        <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${stage.color} flex items-center justify-center flex-shrink-0`}>
                          <stage.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-2xl font-bold">{stage.stage}</h3>
                            <Badge variant="secondary" className="text-lg px-3 py-1">
                              {stage.candidates} candidates
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-lg">{stage.description}</p>
                        </div>
                        <div className="text-4xl font-bold text-gray-300">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Talent Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Talent by Category</h2>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Detailed Breakdown</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="grid md:grid-cols-2 gap-6">
                    {talentCategories.map((category, index) => (
                      <Card key={index} className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg">{category.category}</h3>
                            <div className="text-2xl font-bold text-blue-600">{category.count}</div>
                          </div>
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Key Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Placed at:</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.companies.map((company, companyIndex) => (
                                <span key={companyIndex} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                  {company}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="details">
                  <Card>
                    <CardContent className="p-8">
                      <Target className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold mb-4">Pipeline Metrics</h3>
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">600+</div>
                          <div className="text-gray-600">Ready to Hire</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">200+</div>
                          <div className="text-gray-600">New Graduates/Month</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">94%</div>
                          <div className="text-gray-600">Placement Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">15</div>
                          <div className="text-gray-600">Avg Days to Match</div>
                        </div>
                      </div>
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

export default TalentPipeline;
