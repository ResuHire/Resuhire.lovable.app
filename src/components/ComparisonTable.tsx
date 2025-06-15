
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, X, Trophy, Target } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    { feature: "No Resume Needed", resuhire: true, torre: true, hireart: true, simplify: false, extern: false, linkedin: false },
    { feature: "No Cover Letter", resuhire: true, torre: true, hireart: true, simplify: false, extern: false, linkedin: false },
    { feature: "Skill-Based Matching (85%+)", resuhire: true, torre: true, hireart: true, simplify: true, extern: false, linkedin: false },
    { feature: "AI-Driven Matching", resuhire: true, torre: true, hireart: true, simplify: true, extern: false, linkedin: false },
    { feature: "Dynamic Form Instead of Resume", resuhire: true, torre: true, hireart: true, simplify: false, extern: false, linkedin: false },
    { feature: "End-to-End Career Formation", resuhire: true, torre: false, hireart: false, simplify: false, extern: false, linkedin: false },
    { feature: "Technical Training (Hard Skills)", resuhire: true, torre: false, hireart: false, simplify: false, extern: true, linkedin: false },
    { feature: "Soft Skills (Body Language, Mindset)", resuhire: true, torre: false, hireart: false, simplify: false, extern: false, linkedin: false },
    { feature: "Mental & Personal Development", resuhire: true, torre: false, hireart: false, simplify: false, extern: false, linkedin: false },
    { feature: "Hackathons & Bootcamps", resuhire: true, torre: false, hireart: false, simplify: false, extern: true, linkedin: false },
    { feature: "FAANG Internships Offered", resuhire: true, torre: false, hireart: false, simplify: false, extern: false, linkedin: false },
    { feature: "Jobs at Startups", resuhire: true, torre: true, hireart: true, simplify: true, extern: false, linkedin: true },
    { feature: "Youth-Led, Youth-Focused", resuhire: true, torre: false, hireart: false, simplify: true, extern: true, linkedin: false },
    { feature: "Built-In Referral System", resuhire: true, torre: false, hireart: false, simplify: false, extern: false, linkedin: false },
    { feature: "Community / Mentorship", resuhire: true, torre: false, hireart: false, simplify: false, extern: false, linkedin: false },
  ];

  const competitors = [
    { name: "ResuHire", key: "resuhire", color: "bg-purple-600", highlight: true },
    { name: "Torre.ai", key: "torre", color: "bg-gray-400", highlight: false },
    { name: "HireArt (YC)", key: "hireart", color: "bg-gray-400", highlight: false },
    { name: "Simplify", key: "simplify", color: "bg-gray-400", highlight: false },
    { name: "Extern (YC)", key: "extern", color: "bg-gray-400", highlight: false },
    { name: "LinkedIn", key: "linkedin", color: "bg-gray-400", highlight: false },
  ];

  const CheckIcon = ({ value, isResuhire = false }) => {
    if (value) {
      return <CheckCircle className={`w-5 h-5 ${isResuhire ? 'text-purple-600' : 'text-green-500'}`} />;
    }
    return <X className="w-5 h-5 text-red-400" />;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            🚀 Competitive Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ResuHire vs <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">The Competition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why ResuHire is the only platform that combines AI matching, skill-building, personal growth, FAANG access, and community in one complete solution.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-2xl">Feature Comparison</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-bold text-gray-900 sticky left-0 bg-gray-50 z-10 min-w-[280px]">
                        Feature / Platform
                      </TableHead>
                      {competitors.map((competitor) => (
                        <TableHead 
                          key={competitor.key} 
                          className={`text-center font-bold min-w-[120px] ${
                            competitor.highlight 
                              ? 'bg-purple-100 text-purple-800 border-l-4 border-purple-600' 
                              : 'text-gray-700'
                          }`}
                        >
                          {competitor.name}
                          {competitor.highlight && (
                            <div className="text-xs font-normal text-purple-600 mt-1">(You)</div>
                          )}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {features.map((row, index) => (
                      <TableRow 
                        key={index} 
                        className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}
                      >
                        <TableCell className="font-medium sticky left-0 bg-inherit z-10 border-r">
                          {row.feature}
                        </TableCell>
                        <TableCell className="text-center bg-purple-25 border-l-4 border-purple-600">
                          <CheckIcon value={row.resuhire} isResuhire={true} />
                        </TableCell>
                        <TableCell className="text-center">
                          <CheckIcon value={row.torre} />
                        </TableCell>
                        <TableCell className="text-center">
                          <CheckIcon value={row.hireart} />
                        </TableCell>
                        <TableCell className="text-center">
                          <CheckIcon value={row.simplify} />
                        </TableCell>
                        <TableCell className="text-center">
                          <CheckIcon value={row.extern} />
                        </TableCell>
                        <TableCell className="text-center">
                          <CheckIcon value={row.linkedin} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Why ResuHire Wins</h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                You're the only platform combining AI matching, skill-building, personal growth, FAANG access, and community in one complete ecosystem.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">Complete Solution</div>
                <p className="opacity-90">End-to-end career transformation, not just matching</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">FAANG Access</div>
                <p className="opacity-90">Direct pipeline to top tech companies</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">Holistic Development</div>
                <p className="opacity-90">Technical + soft skills + mental coaching</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-semibold">
                Others focus on parts of the journey—ResuHire builds heroes from start to hire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
