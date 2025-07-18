
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, GraduationCap, Trophy, Briefcase, Target, CheckCircle, Star, TrendingUp, Brain } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: metricsRef, isVisible: metricsVisible } = useScrollAnimation();
  const { elementRef: ecosystemRef, isVisible: ecosystemVisible } = useScrollAnimation();

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Main Heading */}
        <div className="mb-16">
          <p className="text-primary text-lg font-semibold mb-4 tracking-wide uppercase">
            12 WEEKS. $500K PRE-SEED.
          </p>
          
          <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight tracking-tight">
            Your Fast-Track<br />
            Into <span className="text-primary">Career Success</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            A 12-week immersive experience bringing you together with FAANG mentors, 
            global training across 3 countries, and guaranteed job placement.
          </p>
          
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg rounded-full mb-16">
            Apply Now
          </Button>
        </div>

        {/* Photo Grid - ZFellows Style */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 mb-20">
          {[
            'photo-1486312338219-ce68d2c6f44d',
            'photo-1518770660439-4636190af475', 
            'photo-1581091226825-a6a2a5aee158',
            'photo-1531297484001-80022131f5a1',
            'photo-1498050108023-c5249f4df085',
            'photo-1488590528505-98d2b5aba04b',
            'photo-1486312338219-ce68d2c6f44d',
            'photo-1518770660439-4636190af475',
            'photo-1581091226825-a6a2a5aee158',
            'photo-1531297484001-80022131f5a1',
            'photo-1498050108023-c5249f4df085',
            'photo-1488590528505-98d2b5aba04b',
            'photo-1486312338219-ce68d2c6f44d',
            'photo-1518770660439-4636190af475',
            'photo-1581091226825-a6a2a5aee158',
            'photo-1531297484001-80022131f5a1',
          ].map((photo, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src={`https://images.unsplash.com/${photo}?w=400&h=400&fit=crop&auto=format`}
                alt={`Career accelerator participant ${index + 1}`}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Success Pattern Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            There's a pattern among the most successful careers.
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            They all started by learning from those who have built multi-billion dollar companies.
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Getting mentored by proven industry leaders is the fastest way to accelerate.
          </p>
          <p className="text-2xl font-bold text-black">
            Success leaves clues—follow them.
          </p>
        </div>

        {/* How ResuHire Works */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            <span className="text-primary">ResuHire</span> connects really early builders with multi-billion dollar mentors.
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-left">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">AI Career Matching</h3>
              <p className="text-gray-600">Hirexus AI chats with you to find your perfect career path instantly</p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Global Training</h3>
              <p className="text-gray-600">12-week intensive program across 3 countries with real-world experience</p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">FAANG Mentors</h3>
              <p className="text-gray-600">Learn directly from engineers and founders at top-tier companies</p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Guaranteed Placement</h3>
              <p className="text-gray-600">Land a paid job or internship within 3 weeks of graduation</p>
            </div>
          </div>
        </div>

        {/* Traction Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="text-3xl md:text-4xl font-black text-black">1,000+</div>
            <div className="text-gray-600 font-medium">Waitlist Applicants</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-black">20+</div>
            <div className="text-gray-600 font-medium">Hiring Partners</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-black">$200B+</div>
            <div className="text-gray-600 font-medium">Market Opportunity</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-black">90%+</div>
            <div className="text-gray-600 font-medium">Target Placement Rate</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
