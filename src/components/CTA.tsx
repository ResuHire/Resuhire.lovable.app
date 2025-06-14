
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of professionals who've found success with ResuHire</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="text-purple-600 border-white hover:bg-white">
            Start Free Trial
          </Button>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
