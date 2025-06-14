
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

  const metrics = [
    { icon: Users, value: "25K+", label: "Active Members" },
    { icon: Building, value: "500+", label: "Partner Companies" },
    { icon: Award, value: "$2.5M", label: "Seed Funding" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-3">
                <metric.icon className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Partner Companies */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Trusted by leading companies</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-lg font-semibold text-gray-700">{company}</div>
            ))}
          </div>
        </div>

        {/* Universities */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Alumni from top institutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {universities.map((university, index) => (
              <div key={index} className="text-lg font-semibold text-gray-700">{university}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
