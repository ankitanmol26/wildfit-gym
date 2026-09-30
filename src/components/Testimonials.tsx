import { Star } from "lucide-react";
import { business } from "@/data/business";

export default function Testimonials() {
  // Placeholders as no verified reviews are provided
  const testimonials = [
    {
      name: "John D.",
      text: "Best gym in Isnapur! The equipment is top-notch and the trainers really know their stuff. Great environment to train in.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "I've been to many gyms, but WildFit has the best community. Everyone is supportive, and the facilities are always clean.",
      rating: 5,
    },
    {
      name: "Rahul K.",
      text: "The personal training here changed my life. I've lost 10kg in 3 months and feel stronger than ever.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            What Our <span className="text-primary">Members</span> Say
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here is what the {business.location} fitness community thinks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-black border border-border p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary" size={20} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center font-bold text-gray-500 uppercase">
                  {testimonial.name.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <span className="text-gray-500 text-sm">Gym Member</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
