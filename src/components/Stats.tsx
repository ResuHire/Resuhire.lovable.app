
import React from 'react';

const Stats = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <p className="text-muted-foreground">Graduates</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">$120K</div>
            <p className="text-muted-foreground">Average Salary</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
            <p className="text-muted-foreground">Partner Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
