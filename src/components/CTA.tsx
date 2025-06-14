
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join the ecosystem that's reshaping how talent is discovered, developed, and deployed. 
            Apply to ResuHire and become part of the next generation of exceptional professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
              <Users className="mr-2 w-5 h-5" />
              Apply to ResuHire
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold">
              <Building className="mr-2 w-5 h-5" />
              Partner with Us
            </Button>
          </div>

          {/* Program Tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-2">Foundation</h3>
              <p className="text-gray-400 mb-4">Core skill development and career preparation</p>
              <div className="text-2xl font-bold text-orange-400">Free</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-orange-600">
              <h3 className="text-xl font-bold text-white mb-2">Accelerator</h3>
              <p className="text-gray-400 mb-4">Intensive mentorship and job placement</p>
              <div className="text-2xl font-bold text-orange-400">Selective</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-2">Elite</h3>
              <p className="text-gray-400 mb-4">FAANG-level preparation and guarantees</p>
              <div className="text-2xl font-bold text-orange-400">Invite Only</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
