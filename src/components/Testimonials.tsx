
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechScale Solutions",
      role: "CEO & Founder",
      content: "Mamut installed a complete outbound system we couldn't build ourselves. In 4 months, we went from 100% inbound to 60% outbound pipeline - with zero hiring overhead.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GrowthFirst",
      role: "Co-founder",
      content: "We were burning budget trying to hire BDRs. Mamut's installation gave us a complete outbound system - team, tools, and strategy - for less than one senior hire.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateCorp",
      role: "VP of Sales",
      content: "The outbound installation was seamless. They plugged directly into our operations and delivered results from day one. Our most predictable revenue channel now.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] to-[#374151] bg-clip-text text-transparent">
            Installation Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how startups are installing complete outbound systems without hiring overhead
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-[#374151]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm font-medium text-[#FF6B35]">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
