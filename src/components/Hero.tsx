
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Users, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
            🚀 Revolutionizing Recruitment & Education
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              We Don't Believe in Resumes
            </span>
            <br />
            <span className="text-foreground">To Get Hired</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            ResuHire merges HrTech, EduTech & AI to transform fresh grads into <strong>warriors</strong>. 
            Get FAANG internships from year 1, master skills through our training, and land jobs with 
            <strong> 85% matching accuracy</strong> - no traditional monkey banana applications!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6">
              Become a Warrior
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              For Recruiters
              <Target className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-muted-foreground">Match Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">FAANG</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">0</div>
              <div className="text-sm text-muted-foreground">Resumes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-muted-foreground">Skills Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
