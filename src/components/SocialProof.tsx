
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Building2, TrendingUp, Award } from 'lucide-react';

const SocialProof = () => {
  const partners = [
    { name: "Microsoft", logo: "M", color: "bg-blue-600" },
    { name: "Amazon", logo: "A", color: "bg-orange-600" },
    { name: "Google", logo: "G", color: "bg-green-600" },
    { name: "Meta", logo: "M", color: "bg-blue-700" },
    { name: "Netflix", logo: "N", color: "bg-red-600" },
    { name: "Apple", logo: "A", color: "bg-gray-800" },
    { name: "Tesla", logo: "T", color: "bg-red-500" },
    { name: "Spotify", logo: "S", color: "bg-green-500" }
  ];

  const universities = [
    { name: "MIT", color: "bg-red-600" },
    { name: "Stanford", color: "bg-red-700" },
    { name: "Harvard", color: "bg-red-800" },
    { name: "Berkeley", color: "bg-blue-600" },
    { name: "CMU", color: "bg-red-900" },
    { name: "Caltech", color: "bg-orange-600" }
  ];

  const awards = [
    {
      title: "Best HRTech Innovation 2024",
      organization: "TechCrunch Disrupt",
      icon: Award,
      color: "text-yellow-600"
    },
    {
      title: "Top 10 Startups to Watch",
      organization: "Forbes",
      icon: Star,
      color: "text-purple-600"
    },
    {
      title: "Future of Work Award",
      organization: "World Economic Forum",
      icon: TrendingUp,
      color: "text-blue-600"
    }
  ];

  const metrics = [
    { value: "500+", label: "Enterprise Customers", icon: Building2 },
    { value: "25K+", label: "Active Students", icon: Users },
    { value: "97%", label: "Customer Satisfaction", icon: Star },
    { value: "$50M+", label: "Student Salaries Facilitated", icon: TrendingUp }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Trust Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black text-purple-600 mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Partner Companies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Trusted by Top Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <div className={`w-10 h-10 ${partner.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                  {partner.logo}
                </div>
                <span className="font-semibold text-lg">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* University Partners */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Student Networks</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {universities.map((uni, index) => (
              <div key={index} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className={`w-8 h-8 ${uni.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {uni.name[0]}
                </div>
                <span className="font-semibold">{uni.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <award.icon className={`w-12 h-12 ${award.color} mx-auto mb-4`} />
                  <h4 className="font-bold text-lg mb-2">{award.title}</h4>
                  <p className="text-muted-foreground">{award.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold mb-6">As Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">TechCrunch</div>
            <div className="text-2xl font-bold">Forbes</div>
            <div className="text-2xl font-bold">VentureBeat</div>
            <div className="text-2xl font-bold">Wired</div>
            <div className="text-2xl font-bold">Fast Company</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
