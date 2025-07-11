
import React from 'react';
import { Building, Award, Users, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  const companies = [
    { name: "Google", logo: "🔍" },
    { name: "Meta", logo: "👥" },
    { name: "Amazon", logo: "📦" },
    { name: "Apple", logo: "🍎" },
    { name: "Microsoft", logo: "💻" },
    { name: "Netflix", logo: "🎬" },
    { name: "Tesla", logo: "⚡" },
    { name: "Stripe", logo: "💳" },
    { name: "Airbnb", logo: "🏠" },
    { name: "Uber", logo: "🚗" },
    { name: "Coinbase", logo: "₿" },
    { name: "Spotify", logo: "🎵" }
  ];

  const universities = [
    { name: "MIT", logo: "🎓" },
    { name: "Stanford", logo: "🌲" },
    { name: "Harvard", logo: "📚" },
    { name: "Berkeley", logo: "🐻" },
    { name: "CMU", logo: "🤖" },
    { name: "Caltech", logo: "🔬" },
    { name: "Princeton", logo: "🏛️" },
    { name: "Yale", logo: "🦬" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Companies */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-8 border border-blue-200">
            <Building className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">Partner companies</span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">{company.logo}</div>
                <div className="text-sm font-medium text-gray-700">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Universities */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-8 border border-green-200">
            <Award className="w-4 h-4 text-green-600" />
            <span className="text-green-700 font-medium text-sm">Top talent from</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-3xl mx-auto">
            {universities.map((university, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">{university.logo}</div>
                <div className="text-sm font-medium text-gray-700">{university.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
