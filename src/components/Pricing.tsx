
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: ["Basic job matching", "Profile creation", "Limited applications"]
    },
    {
      name: "Pro",
      price: "$29/month",
      features: ["Advanced matching", "Unlimited applications", "Priority support", "Interview prep"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom solutions", "API access", "Dedicated support", "White-label options"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-muted-foreground">Choose the plan that's right for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border text-center">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6 text-purple-600">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
