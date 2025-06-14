
import React from 'react';
import { Zap, Target, Award, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Get matched with perfect opportunities using advanced AI algorithms"
    },
    {
      icon: Target,
      title: "Skill Assessment",
      description: "Comprehensive skill evaluation to showcase your true potential"
    },
    {
      icon: Award,
      title: "Career Acceleration",
      description: "Fast-track your career with our proven development programs"
    },
    {
      icon: Users,
      title: "Industry Network",
      description: "Connect with top professionals and industry leaders"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground">Everything you need to succeed in your career</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
