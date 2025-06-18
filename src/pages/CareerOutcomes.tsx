
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, DollarSign, Clock, MapPin, Building, Users } from 'lucide-react';

const CareerOutcomes = () => {
  const salaryData = [
    { role: "Software Engineer", entry: "$95K", senior: "$180K", company: "FAANG" },
    { role: "Product Manager", entry: "$110K", senior: "$220K", company: "Tech Startups" },
    { role: "Data Scientist", entry: "$105K", senior: "$200K", company: "AI Companies" },
    { role: "DevOps Engineer", entry: "$100K", senior: "$190K", company: "Cloud Providers" }
  ];

  const timeToHire = [
    { metric: "Average Time to First Interview", value: "2 weeks", improvement: "75% faster" },
    { metric: "Time to Job Offer", value: "6 weeks", improvement: "60% faster" },
    { metric: "Job Placement Rate", value: "94%", improvement: "vs 23% traditional" },
    { metric: "Retention After 1 Year", value: "96%", improvement: "vs 65% industry avg" }
  ];

  const locations = [
    { city: "San Francisco", jobs: "1,200+", avgSalary: "$145K" },
    { city: "New York", jobs: "980+", avgSalary: "$125K" },
    { city: "Seattle", jobs: "750+", avgSalary: "$130K" },
    { city: "Austin", jobs: "620+", avgSalary: "$110K" },
    { city: "Remote", jobs: "2,500+", avgSalary: "$115K" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-700">
              💰 Career Outcomes
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Future <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Starts Here</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              See the concrete results our alumni achieve: higher salaries, faster hiring, 
              better job satisfaction, and accelerated career growth at top companies.
            </p>
          </div>
        </div>

        {/* Outcomes Tabs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="salary" className="w-full">
                <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                  <TabsTrigger value="salary">Salaries</TabsTrigger>
                  <TabsTrigger value="speed">Hiring Speed</TabsTrigger>
                  <TabsTrigger value="locations">Locations</TabsTrigger>
                  <TabsTrigger value="growth">Career Growth</TabsTrigger>
                </TabsList>

                <TabsContent value="salary">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Salary Outcomes</h2>
                    <p className="text-gray-600">Our alumni earn 40-60% more than traditional bootcamp graduates</p>
                  </div>
                  <div className="space-y-4">
                    {salaryData.map((role, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-lg">{role.role}</h3>
                              <p className="text-gray-600">at {role.company}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex gap-4">
                                <div>
                                  <div className="text-sm text-gray-500">Entry Level</div>
                                  <div className="font-bold text-green-600">{role.entry}</div>
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500">Senior Level</div>
                                  <div className="font-bold text-blue-600">{role.senior}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="speed">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Hiring Speed</h2>
                    <p className="text-gray-600">Get hired faster with our precision matching technology</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {timeToHire.map((item, index) => (
                      <Card key={index}>
                        <CardContent className="p-6 text-center">
                          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                          <h3 className="font-bold mb-2">{item.metric}</h3>
                          <div className="text-2xl font-bold text-blue-600 mb-2">{item.value}</div>
                          <Badge variant="secondary" className="text-green-600">{item.improvement}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="locations">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Job Locations</h2>
                    <p className="text-gray-600">Work anywhere, from tech hubs to remote positions</p>
                  </div>
                  <div className="space-y-4">
                    {locations.map((location, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                              <MapPin className="w-6 h-6 text-blue-600" />
                              <div>
                                <h3 className="font-bold">{location.city}</h3>
                                <p className="text-gray-600">{location.jobs} opportunities</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Avg Salary</div>
                              <div className="font-bold text-green-600">{location.avgSalary}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="growth">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Career Growth</h2>
                    <p className="text-gray-600">Accelerated promotion timelines and leadership opportunities</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Promotion Rate</h3>
                        <div className="text-2xl font-bold text-green-600">87%</div>
                        <p className="text-gray-600">promoted within 18 months</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Leadership Roles</h3>
                        <div className="text-2xl font-bold text-blue-600">62%</div>
                        <p className="text-gray-600">in leadership within 3 years</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Building className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                        <h3 className="font-bold mb-2">Startup Founders</h3>
                        <div className="text-2xl font-bold text-purple-600">23%</div>
                        <p className="text-gray-600">started their own companies</p>
                      </CardContent>
                    </Card>
                  </div>
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

export default CareerOutcomes;
