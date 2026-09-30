import { business } from "@/data/business";
import { ArrowRight, Dumbbell, User, Activity, Scale } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell size={40} strokeWidth={1.5} />,
  User: <User size={40} strokeWidth={1.5} />,
  Activity: <Activity size={40} strokeWidth={1.5} />,
  Scale: <Scale size={40} strokeWidth={1.5} />,
};

export default function Training() {
  return (
    <section id="training" className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            Training <span className="text-primary">Programs</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the right program to achieve your specific fitness goals at {business.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.programs.map((program, index) => (
            <div 
              key={program.id} 
              className="group relative bg-black p-8 border border-border hover:border-primary transition-colors overflow-hidden"
            >
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform origin-left">
                {iconMap[program.icon] || <Dumbbell size={40} strokeWidth={1.5} />}
              </div>
              
              <div className="text-gray-600 font-display text-4xl font-bold mb-4 opacity-30 absolute top-6 right-6 group-hover:opacity-100 group-hover:text-primary/20 transition-all">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 uppercase">{program.title}</h3>
              <p className="text-gray-400 mb-8 min-h-[80px]">
                {program.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all uppercase text-sm">
                Join Program <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
