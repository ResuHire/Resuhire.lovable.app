
import React from 'react';

const DualValue = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Dual Value Proposition</h2>
          <p className="text-xl text-muted-foreground">Perfect for both job seekers and employers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">For Job Seekers</h3>
            <p className="text-muted-foreground">Get matched with your dream job instantly using our AI-powered platform</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">For Employers</h3>
            <p className="text-muted-foreground">Find top talent faster with our comprehensive screening and matching system</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualValue;
