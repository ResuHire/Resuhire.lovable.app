
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, HelpCircle, Shield, Target, Clock, Award, Users, Zap } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      icon: HelpCircle,
      question: "How can you place me without a resume?",
      answer: "We focus on what really matters - your actual skills and potential. Our AI evaluates you through practical assessments, coding challenges, and behavioral analysis. Companies care about what you can DO, not what's on paper. We've placed 12K+ candidates this way with 85% success rate.",
      category: "Process",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      question: "Is the FAANG guarantee real?",
      answer: "Absolutely. We have direct partnerships with Meta, Google, Amazon, Apple, and Netflix. If you complete our Elite Warrior or FAANG Legend program and don't get placed within 6 months, you get 100% money back. We've maintained this guarantee for 2+ years.",
      category: "Guarantee",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      question: "What makes ResuHire different from other platforms?",
      answer: "We're not just a job board - we're a complete career transformation ecosystem. Think Y Combinator for job seekers. We train you, coach you, connect you, and guarantee results. Plus, our youth-to-youth approach means no corporate bureaucracy.",
      category: "Advantage",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      question: "How long does the 12-week program take daily?",
      answer: "Expect 15-20 hours per week: 3-4 hours of live sessions, 8-10 hours of project work, and 2-3 hours of peer collaboration. It's intensive but designed for students who are serious about transforming their careers.",
      category: "Time",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      question: "What if I don't have any coding experience?",
      answer: "Perfect! We've designed our program for complete beginners. 40% of our successful placements started with zero coding experience. Our curriculum builds from absolute basics to industry-ready skills in 12 weeks.",
      category: "Skills",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Users,
      question: "How selective is the admission process?",
      answer: "We admit only 15% of applicants to maintain quality. We look for motivation, learning ability, and commitment - not existing skills. Our 3-question application focuses on potential, not experience.",
      category: "Admission",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Zap,
      question: "Can I get hired while still in college?",
      answer: "Yes! We specialize in placing students from their freshman year onwards. Many of our warriors secure internships in their first/second year and convert to full-time offers before graduation.",
      category: "Students",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      question: "What support do I get after placement?",
      answer: "Lifetime access to our alumni network, continued mentorship for first 6 months, salary negotiation support, and career advancement guidance. We invest in your long-term success, not just initial placement.",
      category: "Support",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
            ❓ Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Know</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We get it - the "no resume" approach sounds revolutionary (because it is!). Here are answers to the most common questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CollapsibleTrigger asChild>
                  <div className="cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${faq.color} flex items-center justify-center`}>
                            <faq.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="text-xs mb-2">
                              {faq.category}
                            </Badge>
                            <h3 className="text-lg font-bold text-left">{faq.question}</h3>
                          </div>
                        </div>
                        <div className="ml-4">
                          {openItems.includes(index) ? (
                            <Minus className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <Plus className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="px-6 pb-6">
                    <div className="ml-16">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 max-w-3xl mx-auto text-white">
            <HelpCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Book a free 15-minute consultation with our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Book Free Call
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
