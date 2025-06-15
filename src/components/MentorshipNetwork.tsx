
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Video, Calendar, Star, Building2, MessageSquare } from 'lucide-react';

const MentorshipNetwork = () => {
  const industryExperts = [
    {
      name: "Sarah Johnson",
      role: "Senior Engineering Manager",
      company: "Meta",
      avatar: "SJ",
      specialties: ["System Design", "Leadership", "Career Growth"],
      rating: 4.9,
      sessions: 150,
      nextAvailable: "Tomorrow at 2 PM",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "David Chen",
      role: "Principal Software Engineer",
      company: "Google",
      avatar: "DC",
      specialties: ["AI/ML", "Backend Development", "Interview Prep"],
      rating: 4.8,
      sessions: 200,
      nextAvailable: "Today at 4 PM",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      company: "Amazon",
      avatar: "ER",
      specialties: ["Product Strategy", "PM Skills", "Stakeholder Management"],
      rating: 5.0,
      sessions: 120,
      nextAvailable: "Friday at 10 AM",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const upcomingSessions = [
    {
      mentor: "Alex Kim",
      topic: "System Design Review",
      time: "Today, 3:00 PM",
      duration: "45 min",
      type: "1-on-1"
    },
    {
      mentor: "Lisa Zhang",
      topic: "Mock Interview Practice",
      time: "Tomorrow, 1:00 PM", 
      duration: "60 min",
      type: "Coaching"
    }
  ];

  const mentorMatching = [
    {
      title: "Technical Skills Gap",
      match: "Sarah Johnson",
      reason: "Perfect match for system design and leadership mentoring",
      matchPercentage: 96
    },
    {
      title: "Career Transition",
      match: "David Chen",
      reason: "Specializes in helping juniors transition to senior roles",
      matchPercentage: 94
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-teal-100 text-green-700">
            🎯 Mentorship Network
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn from <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Industry Legends</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized guidance from top professionals at FAANG companies and leading startups.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mb-12">
          {/* Industry Expert Profiles */}
          <Card className="border-0 shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-green-500" />
                Industry Expert Profiles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {industryExperts.map((expert, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`} />
                      <AvatarFallback className={`bg-gradient-to-r ${expert.color} text-white font-bold text-lg`}>
                        {expert.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{expert.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{expert.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{expert.role} at {expert.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {expert.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {expert.sessions} sessions completed • Next available: {expert.nextAvailable}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Session
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Sessions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Video className="w-6 h-6 text-blue-500" />
                1-on-1 Coaching
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="font-medium mb-1">{session.topic}</div>
                  <div className="text-sm text-muted-foreground mb-2">
                    with {session.mentor}
                  </div>
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span>📅 {session.time}</span>
                    <Badge variant="outline">{session.type}</Badge>
                  </div>
                  <Button size="sm" className="w-full">
                    <Video className="w-4 h-4 mr-2" />
                    Join Session ({session.duration})
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                View All Sessions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Success Mentor Matching */}
        <Card className="border-0 shadow-lg max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Star className="w-6 h-6 text-purple-500" />
              AI-Powered Mentor Matching
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {mentorMatching.map((match, index) => (
                <div key={index} className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{match.title}</h3>
                    <Badge className="bg-purple-100 text-purple-700">
                      {match.matchPercentage}% Match
                    </Badge>
                  </div>
                  <div className="mb-4">
                    <div className="font-medium text-purple-700 mb-2">Recommended: {match.match}</div>
                    <p className="text-sm text-muted-foreground">{match.reason}</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">
                    Connect with Mentor
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MentorshipNetwork;
