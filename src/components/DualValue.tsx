
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Building2, Zap, Target, TrendingUp, Clock, DollarSign, Award } from 'lucide-react';

const DualValue = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            🎯 Two-Sided Marketplace
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Platform, <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Two Revolutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're transforming both sides of hiring - turning students into skilled warriors while giving companies access to the best talent without traditional barriers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* For Job Seekers */}
          <Card className="border-0 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For Job Seekers</h3>
                  <p className="text-muted-foreground">Students, Fresh Grads & Career Switchers</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span>No resume needed - just show your skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span>85% match accuracy with dream companies</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span>FAANG internships from year 1</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span>Complete warrior training program</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">$150K+</div>
                  <div className="text-sm text-muted-foreground">Average starting salary</div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                Become a Warrior
              </Button>
            </CardContent>
          </Card>

          {/* For Companies */}
          <Card className="border-0 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For Companies</h3>
                  <p className="text-muted-foreground">Startups, Scale-ups & Enterprises</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Hire 500% faster than traditional methods</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <span>Save $50K+ per hire in recruitment costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span>Access pre-vetted, trained talent pools</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>98% first-year retention rate</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">3 Days</div>
                  <div className="text-sm text-muted-foreground">Average time to hire</div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg py-6">
                Start Hiring
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-8 border-t border-muted text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">25K+</div>
              <div className="text-sm text-muted-foreground">Active job seekers</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Hiring companies</div>
            </div>
            <div>
              <div className="text-4xl font-black text-green-600 mb-2">12K+</div>
              <div className="text-sm text-muted-foreground">Successful matches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualValue;
