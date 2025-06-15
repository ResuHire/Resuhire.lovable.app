
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, ChevronDown, ChevronUp, Star } from 'lucide-react';

const ComparisonTable = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const competitors = [
    { name: 'ResuHire', highlight: true, color: 'bg-gradient-to-r from-purple-600 to-blue-600' },
    { name: 'Torre.ai', highlight: false, color: 'bg-gray-100' },
    { name: 'HireArt (YC)', highlight: false, color: 'bg-gray-100' },
    { name: 'Simplify', highlight: false, color: 'bg-gray-100' },
    { name: 'Extern (YC)', highlight: false, color: 'bg-gray-100' },
    { name: 'LinkedIn', highlight: false, color: 'bg-gray-100' }
  ];

  const features = [
    {
      category: "Application Process",
      items: [
        {
          name: "No Resume Needed",
          description: "Apply without traditional resume requirements",
          values: [true, true, true, false, false, false]
        },
        {
          name: "No Cover Letter",
          description: "Skip the tedious cover letter writing process",
          values: [true, true, true, false, false, false]
        },
        {
          name: "Dynamic Form Instead of Resume",
          description: "Interactive assessment replaces static documents",
          values: [true, true, true, false, false, false]
        }
      ]
    },
    {
      category: "Matching & AI",
      items: [
        {
          name: "Skill-Based Matching (85%+)",
          description: "Advanced algorithms match based on actual skills",
          values: [true, true, true, true, false, false]
        },
        {
          name: "AI-Driven Matching",
          description: "Machine learning powers job recommendations",
          values: [true, true, true, true, false, false]
        }
      ]
    },
    {
      category: "Career Development",
      items: [
        {
          name: "End-to-End Career Formation",
          description: "Complete transformation from student to professional",
          values: [true, false, false, false, false, false]
        },
        {
          name: "Technical Training (Hard Skills)",
          description: "Comprehensive coding and technical skill development",
          values: [true, false, false, false, true, false]
        },
        {
          name: "Soft Skills (Body Language, Mindset)",
          description: "Communication, presentation, and interpersonal skills",
          values: [true, false, false, false, false, false]
        },
        {
          name: "Mental & Personal Development",
          description: "Mindset coaching and personal growth programs",
          values: [true, false, false, false, false, false]
        }
      ]
    },
    {
      category: "Opportunities",
      items: [
        {
          name: "FAANG Internships Offered",
          description: "Direct access to top-tier tech company positions",
          values: [true, false, false, false, false, false]
        },
        {
          name: "Jobs at Startups",
          description: "Connections with innovative startup companies",
          values: [true, true, true, true, false, true]
        },
        {
          name: "Hackathons & Bootcamps",
          description: "Hands-on learning through competitive events",
          values: [true, false, false, false, true, false]
        }
      ]
    },
    {
      category: "Community & Support",
      items: [
        {
          name: "Youth-Led, Youth-Focused",
          description: "Built by and for the next generation",
          values: [true, false, false, true, true, false]
        },
        {
          name: "Built-In Referral System",
          description: "Internal network for job referrals and connections",
          values: [true, false, false, false, false, false]
        },
        {
          name: "Community / Mentorship",
          description: "Active peer support and mentor guidance",
          values: [true, false, false, false, false, false]
        }
      ]
    }
  ];

  const toggleFeature = (featureName: string) => {
    setExpandedFeature(expandedFeature === featureName ? null : featureName);
  };

  const getUniqueFeatureCount = () => {
    return features.reduce((total, category) => {
      return total + category.items.filter(item => 
        item.values[0] && !item.values.slice(1).some(v => v)
      ).length;
    }, 0);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            ⚡ Competitive Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ResuHire</span> Leads the Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're the only platform combining AI matching, skill-building, personal growth, FAANG access, and community in one complete solution.
          </p>
          <div className="flex items-center justify-center gap-2 text-lg font-semibold text-purple-600">
            <Star className="w-6 h-6 fill-current" />
            <span>{getUniqueFeatureCount()} Unique Features Only Available on ResuHire</span>
            <Star className="w-6 h-6 fill-current" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-0">
              <div className="grid grid-cols-7 gap-0">
                <div className="p-6">
                  <CardTitle className="text-lg font-bold">Features</CardTitle>
                </div>
                {competitors.map((competitor, index) => (
                  <div key={index} className={`p-6 text-center ${competitor.highlight ? 'bg-white/20' : 'bg-black/10'} hover:bg-white/30 transition-colors`}>
                    <div className="font-bold text-sm">{competitor.name}</div>
                    {competitor.highlight && (
                      <Badge className="mt-2 bg-yellow-400 text-yellow-900 text-xs">
                        YOU
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {features.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="bg-gray-50 px-6 py-3 border-b">
                    <h3 className="font-bold text-gray-700 uppercase text-sm tracking-wide">
                      {category.category}
                    </h3>
                  </div>
                  {category.items.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <div 
                        className="grid grid-cols-7 gap-0 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => toggleFeature(feature.name)}
                      >
                        <div className="p-4 flex items-center justify-between">
                          <span className="font-medium text-gray-800">{feature.name}</span>
                          <div className="flex items-center gap-2">
                            {feature.values[0] && !feature.values.slice(1).some(v => v) && (
                              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                                UNIQUE
                              </Badge>
                            )}
                            {expandedFeature === feature.name ? (
                              <ChevronUp className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        </div>
                        {feature.values.map((value, valueIndex) => (
                          <div key={valueIndex} className={`p-4 text-center ${valueIndex === 0 ? 'bg-purple-50' : ''} hover:bg-opacity-80 transition-colors`}>
                            {value ? (
                              <Check className={`w-6 h-6 mx-auto ${valueIndex === 0 ? 'text-purple-600' : 'text-green-600'} animate-pulse`} />
                            ) : (
                              <X className="w-6 h-6 mx-auto text-gray-300" />
                            )}
                          </div>
                        ))}
                      </div>
                      {expandedFeature === feature.name && (
                        <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 animate-fade-in">
                          <p className="text-gray-700 italic">{feature.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Summary Card */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🏆 The Complete Solution
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              Others focus on parts of the journey (matching, learning, externships)—ResuHire builds warriors from start to hire.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">{getUniqueFeatureCount()}</div>
                <div className="text-sm">Exclusive Features</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-sm">End-to-End Solution</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">1st</div>
                <div className="text-sm">Job Seekers Accelerator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
