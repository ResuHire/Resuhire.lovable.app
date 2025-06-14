
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Zap, Target, Star, Building2, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing = () => {
  const candidatePlans = [
    {
      name: "Warrior",
      price: "Free",
      description: "Perfect for students getting started",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      features: [
        "Basic skill assessments",
        "Access to workshops",
        "Community support",
        "Job matching",
        "Resume-free applications"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Elite Warrior",
      price: "$49",
      period: "/month",
      description: "For serious career builders",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      features: [
        "Everything in Warrior",
        "Advanced training programs",
        "1-on-1 mentorship sessions",
        "Priority job matching",
        "Interview preparation",
        "Mental coaching",
        "Body language training",
        "Hackathon access"
      ],
      cta: "Go Elite",
      popular: true
    },
    {
      name: "FAANG Legend",
      price: "$199",
      period: "/month",
      description: "Guaranteed FAANG placement",
      icon: Crown,
      color: "from-orange-500 to-red-500",
      features: [
        "Everything in Elite Warrior",
        "FAANG internship guarantee",
        "Direct recruiter connections",
        "Custom career roadmap",
        "We become your referral",
        "85% match guarantee",
        "Unlimited retakes",
        "Alumni network access",
        "Salary negotiation support"
      ],
      cta: "Become Legend",
      popular: false
    }
  ];

  const companyPlans = [
    {
      name: "Startup",
      price: "$2,999",
      period: "/month",
      description: "Perfect for growing teams",
      icon: Zap,
      color: "from-green-500 to-green-600",
      features: [
        "Up to 10 hires per month",
        "Access to entire talent pool",
        "AI-powered matching",
        "Basic analytics",
        "Email support"
      ],
      cta: "Start Hiring",
      popular: false,
      note: "No setup fees"
    },
    {
      name: "Scale",
      price: "$9,999",
      period: "/month", 
      description: "For rapidly scaling companies",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      features: [
        "Up to 50 hires per month",
        "Everything in Startup",
        "Dedicated success manager",
        "Advanced analytics",
        "Priority support",
        "Custom workflows",
        "ATS integration"
      ],
      cta: "Scale Up",
      popular: true,
      note: "Most popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      icon: Building2,
      color: "from-purple-500 to-purple-600",
      features: [
        "Unlimited hires",
        "Everything in Scale",
        "White-label platform",
        "API access",
        "Custom integrations",
        "24/7 support",
        "Training & onboarding",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false,
      note: "Volume discounts"
    }
  ];

  const PricingCard = ({ plan, isCompany = false }) => (
    <Card 
      className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
        plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-bold">
          {plan.note || 'MOST POPULAR'}
        </div>
      )}
      
      <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
          <plan.icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
        <div className="text-center mb-4">
          <span className="text-4xl font-black">{plan.price}</span>
          {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
        </div>
        <p className="text-muted-foreground">{plan.description}</p>
        {plan.note && !plan.popular && (
          <Badge variant="secondary" className="mx-auto">{plan.note}</Badge>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full mt-6 ${
            plan.popular 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
              : 'bg-gradient-to-r ' + plan.color
          } text-white font-bold py-6`}
        >
          {plan.cta}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            💰 Flexible Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Plans for <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a student starting your journey or an enterprise scaling your team, we have the perfect plan for you.
          </p>
        </div>

        <Tabs defaultValue="candidates" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="candidates" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              For Job Seekers
            </TabsTrigger>
            <TabsTrigger value="companies" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              For Companies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="candidates">
            <div className="grid md:grid-cols-3 gap-8">
              {candidatePlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                <strong>Money-back guarantee:</strong> If we don't place you in 6 months, get 100% refund
              </p>
            </div>
          </TabsContent>

          <TabsContent value="companies">
            <div className="grid md:grid-cols-3 gap-8">
              {companyPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} isCompany={true} />
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                <strong>ROI guarantee:</strong> Save at least 10x your subscription cost or get your money back
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground mt-8">
          <span className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            No setup fees
          </span>
          <span className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            Cancel anytime
          </span>
          <span className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            Results guaranteed
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
