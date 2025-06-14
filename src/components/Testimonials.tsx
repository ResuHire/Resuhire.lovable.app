
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      quote: "ResuHire helped me land my dream job in just 2 weeks!"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateInc",
      quote: "The AI matching was incredible - found the perfect fit immediately."
    },
    {
      name: "Emily Davis",
      role: "Data Scientist",
      company: "DataFlow",
      quote: "Best career decision I ever made. The support was amazing."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground">Hear from our successful candidates</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
