
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ArrowRight, User, Code, Target, Trophy } from 'lucide-react';

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    {
      id: 1,
      title: "Who are you?",
      description: "Tell us about yourself and your goals",
      icon: User,
      time: "30 seconds"
    },
    {
      id: 2,
      title: "What do you know?",
      description: "Quick skill assessment",
      icon: Code,
      time: "2 minutes"
    },
    {
      id: 3,
      title: "How do you do it?",
      description: "Show us your problem-solving approach",
      icon: Target,
      time: "3 minutes"
    },
    {
      id: 4,
      title: "Get matched!",
      description: "Receive your personalized career roadmap",
      icon: Trophy,
      time: "Instant"
    }
  ];

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
            🚀 Simple 3-Step Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Under 5 Minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No lengthy applications or resume uploads. Just answer 3 simple questions and get matched with your dream opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm font-medium text-gray-600">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {steps.map((step) => (
              <Card 
                key={step.id} 
                className={`border-0 shadow-lg transition-all duration-300 ${
                  step.id === currentStep ? 'ring-2 ring-blue-500 scale-105' : 
                  step.id < currentStep ? 'bg-green-50 border-green-200' : 'opacity-60'
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    step.id < currentStep ? 'bg-green-500' :
                    step.id === currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`}>
                    {step.id < currentStep ? (
                      <CheckCircle className="w-8 h-8 text-white" />
                    ) : (
                      <step.icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {step.time}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex gap-4 justify-center mb-6">
              {currentStep > 1 && (
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="px-8 py-3"
                >
                  Previous
                </Button>
              )}
              <Button 
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3"
                disabled={currentStep === totalSteps}
              >
                {currentStep === totalSteps ? 'Complete!' : 'Next Step'}
                {currentStep !== totalSteps && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </div>
            
            <p className="text-sm text-gray-600">
              <strong>No commitment required.</strong> Complete the assessment to see your personalized career roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingFlow;
