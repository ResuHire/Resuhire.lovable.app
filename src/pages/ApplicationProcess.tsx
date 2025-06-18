
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Users, FileText, Video, Award } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Initial Application",
      description: "Submit your basic information and answer our foundational questions: Who are you? What do you know? How do you do it?",
      duration: "15 minutes"
    },
    {
      icon: Video,
      title: "Video Interview",
      description: "Complete a brief video assessment where you showcase your personality, communication skills, and motivation.",
      duration: "30 minutes"
    },
    {
      icon: Users,
      title: "Peer Assessment",
      description: "Participate in a collaborative challenge with other candidates to demonstrate teamwork and problem-solving skills.",
      duration: "2 hours"
    },
    {
      icon: Award,
      title: "Final Review",
      description: "Our AI analyzes your performance across all stages and provides personalized feedback and program recommendations.",
      duration: "24 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
              🚀 Join ResuHire
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Journey to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">FAANG Starts Here</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Our streamlined application process is designed to identify your potential, not just your current skills. 
              Join thousands of ambitious individuals who've transformed their careers through ResuHire.
            </p>
          </div>
        </div>

        {/* Application Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Simple 4-Step Process</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold">Step {index + 1}: {step.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">What We're Looking For</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Growth Mindset</h3>
                  <p className="text-gray-600">Eager to learn, adapt, and continuously improve</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Team Player</h3>
                  <p className="text-gray-600">Collaborative spirit with strong communication skills</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Startup Passion</h3>
                  <p className="text-gray-600">Interest in fast-paced, innovative environments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the next generation of startup talent. Your FAANG career starts with a single application.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Application
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationProcess;
