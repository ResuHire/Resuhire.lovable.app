import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Calendar, FileText, Users } from 'lucide-react';

const InvestorCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400 to-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join the Future of <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Hiring</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Be part of the revolution that transforms how students become professionals and how companies find talent
          </p>
        </div>

        {/* Dual CTA Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* For Investors */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Investors</h3>
              <p className="text-gray-300 leading-relaxed">
                $2.5M pre-seed round • Massive EdTech + HrTech market opportunity • Proven traction
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <FileText className="w-5 h-5 text-green-400" />
                <span>Pitch deck & financials available</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-green-400" />
                <span>18-month runway to profitability</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Users className="w-5 h-5 text-green-400" />
                <span>Experienced founding team</span>
              </div>
            </div>

            <Button size="lg" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              View Investment Deck
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* For Students/Job Seekers */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Future Warriors</h3>
              <p className="text-gray-300 leading-relaxed">
                Join 25K+ students already in our ecosystem • FAANG placement guarantee • No resume needed
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <FileText className="w-5 h-5 text-orange-400" />
                <span>Complete skill transformation program</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-orange-400" />
                <span>Guaranteed internships from Year 1</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>Lifetime career support network</span>
              </div>
            </div>

            <Button size="lg" className="w-full bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4">Ready to discuss partnership opportunities?</p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Mail className="mr-2 w-4 h-4" />
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestorCTA;