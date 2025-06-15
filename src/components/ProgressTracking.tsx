
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Users, Clock, Award, BarChart3 } from 'lucide-react';

const ProgressTracking = () => {
  const skillMetrics = [
    { skill: "Technical Skills", progress: 85, trend: "+12%" },
    { skill: "Communication", progress: 78, trend: "+8%" },
    { skill: "Problem Solving", progress: 92, trend: "+15%" },
    { skill: "Leadership", progress: 67, trend: "+22%" }
  ];

  const weeklyMetrics = [
    { metric: "Coding Hours", value: "42h", change: "+18%" },
    { metric: "Projects Completed", value: "3", change: "+50%" },
    { metric: "Peer Interactions", value: "28", change: "+12%" },
    { metric: "Mentor Sessions", value: "4", change: "0%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700">
            📊 Real-Time Progress Tracking
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Track Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your skills development, weekly metrics, and peer comparisons in real-time.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
          {/* Skills Development Dashboard */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                Skills Development Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillMetrics.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.skill}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{skill.progress}%</span>
                      <Badge variant="secondary" className="text-green-600 bg-green-50">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {skill.trend}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={skill.progress} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Transformation Metrics */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
                Weekly Transformation Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {weeklyMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700 mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground mb-2">{metric.metric}</div>
                    <Badge variant="outline" className={metric.change.startsWith('+') ? 'text-green-600 border-green-300' : 'text-gray-600'}>
                      {metric.change}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Peer Comparison */}
        <Card className="border-0 shadow-lg max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="w-6 h-6 text-purple-600" />
              Anonymous Peer Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">Top 15%</div>
              <p className="text-muted-foreground">You're performing better than 85% of your cohort</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="font-bold">Rank #3</div>
                <div className="text-sm text-muted-foreground">Overall Performance</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="font-bold">42% Faster</div>
                <div className="text-sm text-muted-foreground">Problem Solving</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-bold">98% Accuracy</div>
                <div className="text-sm text-muted-foreground">Code Quality</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgressTracking;
