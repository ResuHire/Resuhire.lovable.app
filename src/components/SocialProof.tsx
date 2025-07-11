
import React from 'react';
import { Building, Users, Award, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  const companies = [
    "Google", "Meta", "Amazon", "Apple", "Microsoft", "Netflix", "Tesla", "Stripe",
    "OpenAI", "Coinbase", "Uber", "Airbnb"
  ];

  const universities = [
    "MIT", "Stanford", "Harvard", "Berkeley", "CMU", "Caltech", "Princeton", "Yale"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Partner Companies */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Future partners we're targeting
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 items-center max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-light text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Universities */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Targeting talent from top institutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 items-center max-w-3xl mx-auto">
            {universities.map((university, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-light text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                  {university}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
