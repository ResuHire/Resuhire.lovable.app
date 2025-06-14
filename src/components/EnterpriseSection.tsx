
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, TrendingUp, Shield, Zap, Target, Clock, Award, DollarSign, CheckCircle } from 'lucide-react';

const EnterpriseSection = () => {
  const enterpriseFeatures = [
    {
      icon: Building2,
      title: "White-Label Solution",
      description: "Customize our platform with your branding and integrate seamlessly into your hiring workflow.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with advanced data encryption and privacy controls for enterprise peace of mind.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Bulk Recruitment",
      description: "Hire 100+ candidates simultaneously with our advanced batch processing and team management tools.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Real-time hiring metrics, ROI tracking, and predictive analytics to optimize your recruitment strategy.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const roiMetrics = [
    { metric: "Cost Reduction", value: "75%", description: "vs traditional recruiting" },
    { metric: "Time to Hire", value: "3 days", description: "average placement time" },
    { metric: "Quality Score", value: "94%", description: "candidate retention rate" },
    { metric: "ROI", value: "340%", description: "return on investment" }
  ];

  const pricingTiers = [
    {
      name: "Enterprise Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for growing companies",
      features: [
        "Up to 50 hires/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "85% matching accuracy"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Enterprise Pro",
      price: "$7,500",
      period: "/month",
      description: "For scale-up organizations",
      features: [
        "Up to 200 hires/month",
        "Advanced analytics & reporting",
        "Dedicated success manager",
        "Custom integrations",
        "White-label options",
        "Priority candidate pool"
      ],
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise Elite",
      price: "Custom",
      description: "For large enterprises",
      features: [
        "Unlimited hires",
        "Custom platform development",
        "On-premise deployment",
        "24/7 dedicated support",
        "Custom AI model training",
        "Global talent pool access"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
            🏢 Enterprise Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Scale Your Hiring with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Enterprise ResuHire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Transform your recruitment process with our enterprise-grade platform. Hire faster, save costs, and access the best talent pool.
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="mb-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Your ROI With ResuHire</CardTitle>
              <p className="text-muted-foreground">Based on average enterprise metrics</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {roiMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-black text-blue-600 mb-2">{metric.value}</div>
                    <div className="font-semibold mb-1">{metric.metric}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Calculate Your Savings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Enterprise-Grade Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enterprise Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Enterprise Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className={`text-center ${tier.popular ? 'pt-12' : 'pt-8'}`}>
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-black">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                  </div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                        : 'bg-gradient-to-r ' + tier.color
                    } text-white font-bold py-6`}
                  >
                    {tier.price === 'Custom' ? 'Contact Sales' : 'Start Enterprise Trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
              <p className="text-xl opacity-90 mb-8">
                Join 500+ companies already using ResuHire to find better talent faster
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Schedule Enterprise Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                  Download Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
