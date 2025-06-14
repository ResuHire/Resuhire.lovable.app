
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Building2, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Testimonials = () => {
  const candidateTestimonials = [
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
    }
  ];

  const recruiterTestimonials = [
    {
      name: "Jennifer Walsh",
      role: "VP of Engineering at Scale AI",
      avatar: "JW",
      content: "We hired 15 engineers through ResuHire in 2 months. Each one was perfectly matched to our needs. Our traditional hiring would have taken 8+ months for the same quality.",
      company: "Scale AI",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "David Kim",
      role: "CTO at Stripe",
      avatar: "DK", 
      content: "ResuHire's candidates come pre-trained and ready to contribute from day one. We've saved over $200K in recruitment costs and our time-to-hire dropped by 75%.",
      company: "Stripe",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Alex Thompson",
      role: "Head of Talent at Notion",
      avatar: "AT",
      content: "The quality of candidates is exceptional. 98% of our ResuHire hires are still with us after 1 year, compared to 65% from traditional channels.",
      company: "Notion",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const TestimonialCard = ({ testimonial, showCompanyBadge = true }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
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
            {showCompanyBadge && (
              <Badge variant="secondary" className="text-xs mt-1">
                {testimonial.company}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            💬 Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Both Sides</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed careers and revolutionized hiring for companies worldwide.
          </p>
        </div>

        <Tabs defaultValue="candidates" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="candidates" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Job Seekers
            </TabsTrigger>
            <TabsTrigger value="recruiters" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Companies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="candidates">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {candidateTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recruiters">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recruiterTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom Stats */}
        <div className="mt-16 pt-8 border-t border-muted text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-black text-purple-600 mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Candidate satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-600 mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Recruiter satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-black text-green-600 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Would recommend</div>
            </div>
            <div>
              <div className="text-3xl font-black text-orange-600 mb-2">12K+</div>
              <div className="text-sm text-muted-foreground">Success stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
