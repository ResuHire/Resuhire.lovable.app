
import React from 'react';
import { Button } from '@/components/ui/button';

const RecruiterSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">For Recruiters</h2>
          <p className="text-xl text-muted-foreground">Find the perfect candidates faster than ever</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">10x</div>
            <p className="text-muted-foreground">Faster Hiring</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <p className="text-muted-foreground">Match Accuracy</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
            <p className="text-muted-foreground">Cost Reduction</p>
          </div>
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
            Start Recruiting
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecruiterSection;
