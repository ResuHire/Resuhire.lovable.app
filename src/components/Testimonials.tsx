
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Meta",
      avatar: "SC",
      content: "ResuHire got me a Meta internship in my sophomore year! The training was intense but worth every minute. I'm now a full-time engineer earning 6 figures.",
      company: "Meta",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Engineer at Google",
      avatar: "MR",
      content: "No resume, no traditional interview BS - just pure skills assessment. ResuHire's AI matched me perfectly with Google's DeepMind team.",
      company: "Google",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Aisha Patel",
      role: "Product Manager at Amazon",
      avatar: "AP",
      content: "The mental coaching and body language training gave me confidence I never had. Landed my dream PM role at Amazon within 3 months!",
      company: "Amazon",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "David Kim",
      role: "Data Scientist at Netflix",
      avatar: "DK",
      content: "From community college to Netflix - ResuHire made the impossible possible. The hackathons and workshops were game-changers.",
      company: "Netflix",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Emma Thompson",
      role: "iOS Developer at Apple",
      avatar: "ET",
      content: "ResuHire's 3-question application process actually worked! Now I'm building the next generation of iOS apps at Apple.",
      company: "Apple",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Alex Johnson",
      role: "Founder at TechStart",
      avatar: "AJ",
      content: "As a recruiter, ResuHire's 85% matching accuracy is insane. We find perfect candidates without wasting time on irrelevant resumes.",
      company: "Recruiter",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            💬 Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Warriors, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed ordinary students into industry legends at top tech companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-muted-foreground absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`} />
                    <AvatarFallback className={`bg-gradient-to-r ${testimonial.color} text-white font-bold`}>
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {testimonial.company}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
