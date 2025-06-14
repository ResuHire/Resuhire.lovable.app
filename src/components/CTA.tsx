
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="border-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <CardContent className="relative p-12 md:p-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Ready to Become a <span className="text-yellow-300">Warrior</span>?
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Join thousands of students and fresh grads who've transformed their careers. 
                No resumes, no BS - just pure skill and determination.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 font-bold">
                  <Users className="mr-2 w-5 h-5" />
                  Join as Job Seeker
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6 font-bold">
                  <Target className="mr-2 w-5 h-5" />
                  I'm a Recruiter
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div className="opacity-75">Basic Training</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Premium</div>
                  <div className="opacity-75">Advanced Workshops</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Gold</div>
                  <div className="opacity-75">FAANG Guaranteed</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
