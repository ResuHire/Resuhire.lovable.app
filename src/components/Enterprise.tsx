
import React from 'react';
import { Button } from '@/components/ui/button';

const Enterprise = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Enterprise Solutions</h2>
          <p className="text-xl text-muted-foreground">Scale your hiring with our enterprise platform</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose ResuHire Enterprise?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Advanced analytics and reporting</li>
              <li>• Custom integration options</li>
              <li>• Dedicated account management</li>
              <li>• White-label solutions available</li>
            </ul>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
