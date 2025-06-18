
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, TrendingUp, Users, Clock, Target, Eye } from 'lucide-react';

const AnalyticsDashboard = () => {
  const metrics = [
    {
      category: "Hiring Performance",
      icon: Target,
      metrics: [
        { name: "Match Accuracy", value: "85%", trend: "+5% vs last quarter" },
        { name: "Time to Hire", value: "21 days", trend: "-30% vs industry avg" },
        { name: "Candidate Quality Score", value: "9.2/10", trend: "+0.3 vs last month" },
        { name: "Offer Acceptance Rate", value: "94%", trend: "+15% vs traditional" }
      ]
    },
    {
      category: "Talent Pipeline",
      icon: Users,
      metrics: [
        { name: "Active Candidates", value: "2,847", trend: "+12% this month" },
        { name: "Ready to Interview", value: "423", trend: "Real-time updates" },
        { name: "Skills Match Rate", value: "78%", trend: "+8% improvement" },
        { name: "Geographic Coverage", value: "47 states", trend: "Expanding globally" }
      ]
    },
    {
      category: "ROI & Efficiency",
      icon: TrendingUp,
      metrics: [
        { name: "Cost per Hire", value: "$3,200", trend: "-65% vs traditional" },
        { name: "Revenue per Employee", value: "$180K", trend: "+25% above average" },
        { name: "Retention Rate (1 year)", value: "96%", trend: "+31% vs industry" },
        { name: "Productivity Score", value: "142%", trend: "Above baseline" }
      ]
    }
  ];

  const dashboardFeatures = [
    {
      feature: "Real-Time Pipeline View",
      description: "Monitor candidate progress through each stage of your pipeline",
      benefits: ["Live candidate tracking", "Stage conversion rates", "Bottleneck identification"]
    },
    {
      feature: "Predictive Analytics",
      description: "AI-powered insights to forecast hiring needs and outcomes",
      benefits: ["Demand forecasting", "Success probability scoring", "Market trend analysis"]
    },
    {
      feature: "Custom Reporting",
      description: "Build reports tailored to your stakeholders and KPIs",
      benefits: ["Drag-and-drop builder", "Automated scheduling", "Executive summaries"]
    },
    {
      feature: "Benchmark Comparisons",
      description: "See how your hiring performance compares to industry standards",
      benefits: ["Industry benchmarks", "Peer comparisons", "Best practice insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
              📊 Analytics Dashboard
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data-Driven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hiring Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Make informed hiring decisions with comprehensive analytics, real-time metrics, 
              and predictive insights that optimize your talent acquisition strategy.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Performance Metrics</h2>
              <Tabs defaultValue="hiring" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
                  <TabsTrigger value="hiring">Hiring</TabsTrigger>
                  <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
                  <TabsTrigger value="roi">ROI</TabsTrigger>
                </TabsList>

                {metrics.map((category, categoryIndex) => (
                  <TabsContent key={categoryIndex} value={category.category.toLowerCase().split(' ')[0]}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.metrics.map((metric, index) => (
                        <Card key={index} className="border-0 shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="font-bold text-lg">{metric.name}</h3>
                                <div className="text-3xl font-bold text-blue-600 my-2">{metric.value}</div>
                              </div>
                              <category.icon className="w-8 h-8 text-gray-400" />
                            </div>
                            <div className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                              {metric.trend}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Dashboard Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Dashboard Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {dashboardFeatures.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4">{feature.feature}</h3>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700">{benefit}</span>
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

        {/* Sample Dashboard View */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Sample Dashboard View</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <BarChart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">85%</div>
                      <div className="text-sm text-gray-600">Match Accuracy</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">21</div>
                      <div className="text-sm text-gray-600">Days to Hire</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-600">423</div>
                      <div className="text-sm text-gray-600">Ready to Interview</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                      <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-600">96%</div>
                      <div className="text-sm text-gray-600">Retention Rate</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Real-Time Pipeline Overview
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Sourcing</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-4">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">2,847 candidates</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Screening</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-4">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">1,281 candidates</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Interview Ready</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-4">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">423 candidates</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See Your Data?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get actionable insights into your hiring performance with our comprehensive analytics dashboard.
            </p>
            <Badge className="mb-4 bg-white text-blue-600">
              Request Demo
            </Badge>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AnalyticsDashboard;
