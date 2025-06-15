
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, MessageSquare, Calendar, Building2, Zap, CheckCircle } from 'lucide-react';

const EmployerConnect = () => {
  const liveMatches = [
    {
      company: "Meta",
      role: "Software Engineer Intern",
      match: "96%",
      status: "Hot",
      color: "from-red-500 to-orange-500"
    },
    {
      company: "Google",
      role: "AI Research Intern",
      match: "94%",
      status: "New",
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Amazon",
      role: "Product Manager Intern",
      match: "91%",
      status: "Active",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const recentMessages = [
    {
      recruiter: "Sarah Chen",
      company: "Meta",
      message: "Your AI project caught our attention. Let's schedule a call!",
      time: "2 min ago"
    },
    {
      recruiter: "David Park",
      company: "Google",
      message: "We'd love to discuss the research internship opportunity.",
      time: "1 hour ago"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700">
            🚀 Employer Direct Connect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Direct Line to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Dream Jobs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time job matching, instant recruiter messaging, and seamless interview scheduling.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Live Job Matching */}
          <Card className="border-0 shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                Live Job Matching
                <Badge className="bg-red-100 text-red-700 animate-pulse">
                  3 New Matches
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {liveMatches.map((match, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${match.color} flex items-center justify-center`}>
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold">{match.company}</div>
                        <div className="text-sm text-muted-foreground">{match.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{match.match}</div>
                      <Badge variant={match.status === 'Hot' ? 'destructive' : 'secondary'}>
                        {match.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message Recruiter
                    </Button>
                    <Button size="sm" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Direct Recruiter Messages */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-blue-500" />
                Direct Messages
                <Badge className="bg-blue-100 text-blue-700">
                  2 Unread
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((message, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{message.recruiter[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{message.recruiter}</div>
                      <div className="text-xs text-muted-foreground">{message.company}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{message.time}</div>
                  </div>
                  <p className="text-sm text-gray-700">{message.message}</p>
                </div>
              ))}
              <Button className="w-full mt-4">
                <MessageSquare className="w-4 h-4 mr-2" />
                View All Messages
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Interview Scheduling */}
        <Card className="border-0 shadow-lg max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-green-500" />
              Upcoming Interviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold">Meta - Technical Interview</div>
                  <Badge className="bg-green-100 text-green-700">Tomorrow</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  <div>📅 March 15, 2024 at 2:00 PM PST</div>
                  <div>👥 Sarah Chen, Engineering Manager</div>
                  <div>⏱️ Duration: 45 minutes</div>
                </div>
                <Button size="sm" className="w-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Join Interview
                </Button>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold">Google - Culture Fit</div>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  <div>📅 March 18, 2024 at 10:00 AM PST</div>
                  <div>👥 David Park, Team Lead</div>
                  <div>⏱️ Duration: 30 minutes</div>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Reschedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmployerConnect;
