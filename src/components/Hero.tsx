import { business } from "@/data/business";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-reveal">
          <div className="inline-block bg-primary/20 border border-primary text-primary px-4 py-1.5 mb-6 font-bold tracking-wider text-sm">
            {business.location.toUpperCase()} • {business.city.toUpperCase()}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-6 uppercase">
            Build your <br />
            <span className="text-primary">stronger</span> self.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
            Train with purpose. Build strength. Stay consistent. 
            Join the premium fitness community at {business.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact" 
              className="bg-primary hover:bg-primary-dark text-black font-bold py-3 sm:py-4 px-6 sm:px-8 flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              JOIN NOW <ArrowRight size={20} />
            </Link>
            <a 
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-bold py-3 sm:py-4 px-6 sm:px-8 flex items-center justify-center transition-colors text-center"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
