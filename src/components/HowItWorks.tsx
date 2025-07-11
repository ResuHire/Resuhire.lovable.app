
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, UserCheck, Rocket, Users, Trophy, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HowItWorks = () => {
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation();

  const process = [
    {
      icon: UserCheck,
      title: "Assessment",
      description: "Three-question evaluation to map your potential and create your adaptive talent blueprint.",
      time: "2 minutes"
    },
    {
      icon: Rocket,
      title: "Transformation",
      description: "12-week intensive program combining technical mastery with professional development.",
      time: "12 weeks"
    },
    {
      icon: Users,
      title: "Integration",
      description: "Real project experience with partner companies while building your professional portfolio.",
      time: "Ongoing"
    },
    {
      icon: Trophy,
      title: "Placement",
      description: "Direct matching with our network of 500+ partner companies for guaranteed placement.",
      time: "Immediate"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={processRef}
          className={`transition-all duration-1000 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
              Four-step transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              From potential assessment to professional placement in a structured, proven process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border border-border/50 hover:border-border transition-colors duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">
                        {step.time}
                      </div>
                      <h3 className="text-xl font-medium text-foreground mb-3">{step.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-muted/30 rounded-2xl p-8 max-w-3xl mx-auto border border-border/50">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium text-foreground">Ready to start?</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Join our next cohort and begin your transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Apply now
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
