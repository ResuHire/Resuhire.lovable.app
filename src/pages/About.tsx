
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
              🚀 About ResuHire
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Complete <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Hiring Revolution</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're not just another job platform. We're transforming how talent is discovered, developed, and placed across the entire hiring spectrum.
            </p>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    To revolutionize the hiring process by creating a platform that develops complete professionals, not just job seekers. We bridge the gap between potential and opportunity.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Unlike traditional platforms that focus on matching existing skills, we build warriors from the ground up - combining technical excellence with soft skills and personal development.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    A world where every talented individual has access to top-tier opportunities, regardless of their background or current skill level.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We envision a future where the hiring process is fair, efficient, and focused on potential rather than just experience.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  🏆 Youth-Led, Youth-Focused
                </h3>
                <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
                  Built by the next generation, for the next generation. We understand the challenges because we've lived them.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-2">1st</div>
                    <div className="text-sm">Job Seekers Accelerator</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-2">100%</div>
                    <div className="text-sm">End-to-End Solution</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-2">FAANG</div>
                    <div className="text-sm">Direct Access</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">Ready to Join the Revolution?</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Be part of the platform that's changing how the world thinks about hiring and career development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
