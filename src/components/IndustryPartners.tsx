
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, TrendingUp, Award, Star, CheckCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const IndustryPartners = () => {
  const partnerDetails = [
    {
      company: "Meta",
      logo: "M",
      partnership: "Exclusive Internship Pipeline",
      hired: 156,
      avgSalary: "$185K",
      successRate: "94%",
      color: "from-blue-500 to-blue-600",
      details: "Direct access to Reality Labs and AI Research teams"
    },
    {
      company: "Google",
      logo: "G", 
      partnership: "DeepMind Research Program",
      hired: 134,
      avgSalary: "$192K",
      successRate: "96%",
      color: "from-green-500 to-green-600",
      details: "Priority placement in AI/ML and Cloud divisions"
    },
    {
      company: "Amazon",
      logo: "A",
      partnership: "AWS Innovation Track",
      hired: 189,
      avgSalary: "$178K",
      successRate: "92%",
      color: "from-orange-500 to-orange-600",
      details: "Fast-track to Senior SDE roles within 18 months"
    },
    {
      company: "Apple",
      logo: "🍎",
      partnership: "Hardware Engineering Initiative", 
      hired: 87,
      avgSalary: "$195K",
      successRate: "98%",
      color: "from-gray-500 to-gray-600",
      details: "Exclusive access to unreleased product teams"
    }
  ];

  const recruiterTestimonials = [
    {
      name: "Jennifer Walsh",
      role: "VP of Engineering",
      company: "Meta",
      avatar: "JW",
      testimonial: "ResuHire delivers the highest quality interns we've ever seen. 98% of our hires from them are promoted within their first year.",
      hires: 45,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "David Kim", 
      role: "Director of Talent",
      company: "Google",
      avatar: "DK",
      testimonial: "Their warriors come pre-trained on our tech stack. We've reduced our onboarding time from 3 months to 3 weeks.",
      hires: 38,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Sarah Chen",
      role: "Head of University Relations", 
      company: "Amazon",
      avatar: "SC",
      testimonial: "ResuHire has become our #1 source for early-career talent. The quality and cultural fit is unmatched.",
      hires: 52,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const placementStats = [
    { metric: "Total Placements", value: "2,500+", growth: "+150%" },
    { metric: "Average Salary", value: "$185K", growth: "+25%" },
    { metric: "Retention Rate", value: "96%", growth: "+12%" },
    { metric: "Promotion Rate", value: "89%", growth: "+35%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700">
            🤝 Industry Partners Showcase
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond logos - see real partnership details, recruiter testimonials, and placement statistics.
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {placementStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-muted-foreground mb-2">{stat.metric}</div>
                  <Badge className="bg-green-100 text-green-700">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.growth}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Details */}
        <div className="max-w-7xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Partnership Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerDetails.map((partner, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${partner.color} flex items-center justify-center`}>
                      <span className="text-white text-2xl font-bold">{partner.logo}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{partner.company}</CardTitle>
                      <div className="text-muted-foreground">{partner.partnership}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{partner.hired}</div>
                      <div className="text-xs text-muted-foreground">Hired</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{partner.avgSalary}</div>
                      <div className="text-xs text-muted-foreground">Avg Salary</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{partner.successRate}</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {partner.details}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recruiter Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">What Recruiters Say</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {recruiterTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`} />
                      <AvatarFallback className={`bg-gradient-to-r ${testimonial.color} text-white font-bold`}>
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {testimonial.hires} hires from ResuHire
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-lg max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Join Our Partner Network?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Access pre-trained, interview-ready talent from our warrior program
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Partner with ResuHire
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors">
                  View Partnership Plans
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartners;
