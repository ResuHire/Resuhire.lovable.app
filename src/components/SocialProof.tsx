
import React from 'react';

const SocialProof = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground">Join thousands of professionals who've transformed their careers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-muted-foreground">Job Placement Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15 Days</div>
            <p className="text-muted-foreground">Average Time to Hire</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <p className="text-muted-foreground">Success Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
