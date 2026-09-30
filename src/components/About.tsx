import { business } from "@/data/business";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const points = [
    "TRAIN WITH PURPOSE",
    "BUILD STRENGTH",
    "STAY CONSISTENT"
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full bg-surface overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                alt={`${business.name} Training Area`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              More than a <span className="text-primary">workout.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At {business.name}, we believe in discipline, strength, and personal improvement. 
              Located in the heart of {business.location}, our training environment is designed for 
              those who are serious about their fitness community and transformation.
            </p>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-4 text-white font-bold tracking-wide">
                  <CheckCircle2 className="text-primary" size={24} />
                  {point}
                </li>
              ))}
            </ul>
            
            <a href="#training" className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 uppercase transition-colors">
              Discover {business.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
