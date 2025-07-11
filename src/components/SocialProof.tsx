
import React from 'react';
import { Building, Users, Award, TrendingUp, Sparkles } from 'lucide-react';

const SocialProof = () => {
  const companies = [
    { name: "Google", emoji: "🔍" },
    { name: "Meta", emoji: "👥" },
    { name: "Amazon", emoji: "📦" },
    { name: "Apple", emoji: "🍎" },
    { name: "Microsoft", emoji: "💻" },
    { name: "Netflix", emoji: "🎬" },
    { name: "Tesla", emoji: "⚡" },
    { name: "Stripe", emoji: "💳" },
    { name: "OpenAI", emoji: "🤖" },
    { name: "Coinbase", emoji: "₿" },
    { name: "Uber", emoji: "🚗" },
    { name: "Airbnb", emoji: "🏠" }
  ];

  const universities = [
    { name: "MIT", emoji: "🎓" },
    { name: "Stanford", emoji: "🌲" },
    { name: "Harvard", emoji: "📚" },
    { name: "Berkeley", emoji: "🐻" },
    { name: "CMU", emoji: "🤖" },
    { name: "Caltech", emoji: "🔬" },
    { name: "Princeton", emoji: "🏛️" },
    { name: "Yale", emoji: "🦬" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Partner Companies */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-blue-200">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-bold text-sm">Future FAANG partners we're targeting</span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center max-w-5xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 card-hover">
                <div className="text-4xl mb-3 bounce-subtle">{company.emoji}</div>
                <div className="text-lg font-bold text-gray-700">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Universities */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-purple-200">
            <Award className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-bold text-sm">Targeting talent from top institutions</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-4xl mx-auto">
            {universities.map((university, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 card-hover">
                <div className="text-4xl mb-3 bounce-subtle">{university.emoji}</div>
                <div className="text-lg font-bold text-gray-700">{university.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
