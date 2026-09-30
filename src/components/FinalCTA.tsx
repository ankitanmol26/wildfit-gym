import { business } from "@/data/business";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 uppercase tracking-tight">
          Stop Waiting. <br />
          <span className="text-primary">Start Training.</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Your next level starts with one decision. Join {business.name} today and become part of our local fitness community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#contact" 
            className="bg-primary hover:bg-primary-dark text-black font-bold py-4 px-10 flex items-center justify-center gap-2 transition-transform hover:scale-105 uppercase tracking-wider"
          >
            Enquire Now <ArrowRight size={20} />
          </Link>
          <a 
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-10 flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
          >
            <MapPin size={20} /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
