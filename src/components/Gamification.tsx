
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Award, Zap, Target, Crown, Star, Medal, Flame } from 'lucide-react';

const Gamification = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Code Warrior",
      description: "Complete 50 coding challenges",
      progress: 42,
      max: 50,
      earned: false,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Crown,
      title: "Interview King",
      description: "Ace 5 mock interviews",
      progress: 5,
      max: 5,
      earned: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Team Player",
      description: "Help 10 peers with their projects",
      progress: 7,
      max: 10,
      earned: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Flame,
      title: "Learning Streak",
      description: "Study for 30 consecutive days",
      progress: 23,
      max: 30,
      earned: false,
      color: "from-red-500 to-orange-500"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 2850, badge: "👑" },
    { rank: 2, name: "Sarah Kim", points: 2720, badge: "🥈" },
    { rank: 3, name: "You", points: 2680, badge: "🥉", isUser: true },
    { rank: 4, name: "Marcus Johnson", points: 2650, badge: "" },
    { rank: 5, name: "Emily Rodriguez", points: 2590, badge: "" }
  ];

  const challenges = [
    {
      title: "Weekly Coding Sprint",
      description: "Solve 20 problems this week",
      reward: "500 XP + Special Badge",
      timeLeft: "3 days",
      participants: 127,
      difficulty: "Medium"
    },
    {
      title: "System Design Challenge",
      description: "Design a scalable chat application",
      reward: "1000 XP + Interview Guarantee",
      timeLeft: "1 week",
      participants: 89,
      difficulty: "Hard"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700">
            🏆 Gamification Elements
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Level Up Your <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Career Game</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn achievements, compete with peers, and unlock exclusive opportunities through our gamified learning experience.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mb-12">
          {/* Achievement Badges */}
          <Card className="border-0 shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-500" />
                Achievement Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-4 rounded-lg border ${achievement.earned ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center ${!achievement.earned && 'opacity-50'}`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                    {achievement.earned && (
                      <Badge className="bg-green-100 text-green-700">
                        Earned!
                      </Badge>
                    )}
                  </div>
                  {!achievement.earned && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{achievement.progress}/{achievement.max}</span>
                        <span>{Math.round((achievement.progress / achievement.max) * 100)}%</span>
                      </div>
                      <Progress value={(achievement.progress / achievement.max) * 100} className="h-2" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Cohort Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {leaderboard.map((player, index) => (
                <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${player.isUser ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                  <div className="text-lg font-bold w-8">#{player.rank}</div>
                  <div className="text-xl">{player.badge}</div>
                  <div className="flex-1">
                    <div className={`font-medium ${player.isUser ? 'text-blue-700' : ''}`}>{player.name}</div>
                    <div className="text-sm text-muted-foreground">{player.points} XP</div>
                  </div>
                  {player.isUser && (
                    <Badge className="bg-blue-100 text-blue-700">You</Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Active Challenges */}
        <Card className="border-0 shadow-lg max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="w-6 h-6 text-purple-500" />
              Active Challenge Competitions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">{challenge.title}</h3>
                    <Badge variant={challenge.difficulty === 'Hard' ? 'destructive' : 'secondary'}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>🎁 Reward: {challenge.reward}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>⏰ Time left: {challenge.timeLeft}</span>
                      <span>👥 {challenge.participants} participants</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                    Join Challenge
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Gamification;
