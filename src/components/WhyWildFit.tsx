import { business } from "@/data/business";

export default function WhyWildFit() {
  const benefits = [
    { num: "01", title: "FOCUSED TRAINING", desc: "No distractions. Just you, the iron, and your goals." },
    { num: "02", title: "CONSISTENCY OVER EXCUSES", desc: "An environment that makes you want to show up every day." },
    { num: "03", title: "A SERIOUS TRAINING ENVIRONMENT", desc: "Surround yourself with people who push you to be better." },
    { num: "04", title: "GOAL-ORIENTED FITNESS", desc: "Structured programs designed for real, measurable progress." },
    { num: "05", title: "COMMUNITY & ACCOUNTABILITY", desc: "Train alongside a supportive local fitness community." },
    { num: "06", title: "PROGRESS THAT YOU CAN TRACK", desc: "Expert guidance to ensure you never hit a plateau." },
  ];

  return (
    <section className="py-24 bg-surface border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center uppercase">
          Why Train At <span className="text-primary">{business.name}?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-display font-bold text-border absolute -top-8 -left-4 z-0 pointer-events-none select-none">
                {benefit.num}
              </div>
              <div className="relative z-10 pl-6 border-l-2 border-primary">
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
