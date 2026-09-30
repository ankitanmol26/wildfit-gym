import { business } from "@/data/business";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Straightforward pricing. No hidden fees. Choose the plan that fits your commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.membershipPlans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-surface border border-border p-8 flex flex-col hover:border-primary transition-colors relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-border group-hover:bg-primary transition-colors"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">{plan.name}</h3>
              <div className="mb-6 pb-6 border-b border-border">
                <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">/ {plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="#contact" 
                className="block w-full py-4 text-center border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-black transition-colors"
              >
                Enquire Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
