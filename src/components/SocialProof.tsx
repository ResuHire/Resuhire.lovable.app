
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Award, TrendingUp, Users } from 'lucide-react';

const SocialProof = () => {
  const partners = [
    "Google", "Meta", "Amazon", "Apple", "Netflix", "Microsoft", "Tesla", "Stripe"
  ];

  const universities = [
    "MIT", "Stanford", "Berkeley", "Harvard", "CMU", "Caltech"
  ];

  const achievements = [
    { icon: Award, text: "YC W24 Batch" },
    { icon: TrendingUp, text: "$2.5M Seed Round" },
    { icon: Users, text: "25K+ Active Users" },
    { icon: Star, text: "4.9/5 Rating" }
  ];

  return (
    <section className="py-16 bg-muted/20 border-b">
      <div className="container mx-auto px-4">
        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-center">
              <achievement.icon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-muted-foreground">{achievement.text}</span>
            </div>
          ))}
        </div>

        {/* Hiring Partners */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            🤝 Hiring Partners
          </Badge>
          <p className="text-sm text-muted-foreground mb-6 font-medium">COMPANIES HIRING THROUGH RESUHIRE</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-xl font-bold text-gray-600">{partner}</div>
            ))}
          </div>
        </div>

        {/* Universities */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6 font-medium">STUDENTS FROM TOP UNIVERSITIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {universities.map((uni, index) => (
              <div key={index} className="text-lg font-bold text-gray-600">{uni}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
