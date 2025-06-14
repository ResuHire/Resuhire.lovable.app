
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, Zap, Shield, TrendingUp, Globe, Cog, Award } from 'lucide-react';

const Enterprise = () => {
  const solutions = [
    {
      icon: Building2,
      title: "White-Label Platform",
      description: "Deploy ResuHire with your company branding for internal talent acquisition.",
      features: ["Custom domain", "Company branding", "Internal workflows"]
    },
    {
      icon: Users,
      title: "Bulk Hiring Solutions",
      description: "Scale your team with our enterprise-grade hiring infrastructure.",
      features: ["Volume discounts", "Dedicated support", "Custom SLAs"]
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamlessly integrate with your existing HR tech stack and ATS systems.",
      features: ["REST APIs", "Webhooks", "Real-time sync"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 compliant with enterprise-grade security and data protection.",
      features: ["SOC2 Type II", "GDPR compliant", "SSO integration"]
    }
  ];

  const stats = [
    { number: "Fortune 500", label: "Companies trust us", icon: Building2 },
    { number: "50K+", label: "Enterprise hires", icon: Users },
    { number: "99.9%", label: "Platform uptime", icon: TrendingUp },
    { number: "24/7", label: "Enterprise support", icon: Shield }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700">
            🏢 Enterprise Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Scale Your <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Enterprise Hiring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Transform your talent acquisition with enterprise-grade features, dedicated support, and unlimited scalability.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-600 mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-600 to-gray-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Enterprise Hiring?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join Fortune 500 companies using ResuHire to hire faster, smarter, and more cost-effectively than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-6 text-lg">
              <Globe className="mr-2 w-5 h-5" />
              Book Enterprise Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-700 px-8 py-6 text-lg">
              <Cog className="mr-2 w-5 h-5" />
              Custom Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
