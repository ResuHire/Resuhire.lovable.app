
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI matching work?",
      answer: "Our AI analyzes your skills, experience, and preferences to match you with the most suitable job opportunities."
    },
    {
      question: "Is ResuHire free to use?",
      answer: "Basic features are free. Premium features are available with our subscription plans."
    },
    {
      question: "How long does it take to get matched?",
      answer: "Most users get their first matches within 24 hours of completing their profile."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Get answers to common questions</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
