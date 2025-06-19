
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, DollarSign, TrendingUp } from 'lucide-react';

const IndustryPartners = () => {
  const partners = [
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
      program: "Exclusive Internship Pipeline",
      hired: 156,
      avgSalary: "$185K",
      successRate: "94%",
      description: "Direct access to Reality Labs and AI Research teams",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      program: "DeepMind Research Program",
      hired: 134,
      avgSalary: "$192K",
      successRate: "96%",
      description: "Priority placement in AI/ML and Cloud divisions",
      color: "from-red-500 to-yellow-500",
      bgColor: "bg-red-50"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      program: "AWS Innovation Track",
      hired: 189,
      avgSalary: "$178K",
      successRate: "92%",
      description: "Fast-track to Senior SDE roles within 18 months",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png",
      program: "Hardware Engineering Initiative",
      hired: 87,
      avgSalary: "$195K",
      successRate: "98%",
      description: "Exclusive access to unreleased product teams",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700">
            🚀 Elite Partner Network
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Warriors</span> Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Direct placement pipelines with the world's most innovative companies. Your dream job is just 12 weeks away.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${partner.bgColor}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{partner.name}</CardTitle>
                    <p className="text-muted-foreground">{partner.program}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${partner.color} flex items-center justify-center mx-auto mb-2`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold">{partner.hired}</div>
                    <div className="text-xs text-muted-foreground">Hired</div>
                  </div>
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${partner.color} flex items-center justify-center mx-auto mb-2`}>
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold">{partner.avgSalary}</div>
                    <div className="text-xs text-muted-foreground">Avg Salary</div>
                  </div>
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${partner.color} flex items-center justify-center mx-auto mb-2`}>
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold">{partner.successRate}</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-center font-medium">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 max-w-4xl mx-auto text-white">
            <Building2 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">500+ Partner Companies Hiring</h3>
            <p className="text-lg opacity-90 mb-6">
              From Fortune 500 to fast-growing startups, our graduates are in demand everywhere.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold">2,500+</div>
                <div className="text-sm opacity-80">Successful Placements</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$180K</div>
                <div className="text-sm opacity-80">Average Starting Salary</div>
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-80">Job Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartners;
