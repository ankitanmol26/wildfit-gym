import { business } from "@/data/business";
import Image from "next/image";

export default function Facilities() {
  const images = [
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section id="facilities" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Premium <span className="text-primary">Facilities</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our state-of-the-art equipment and dedicated training zones.
            </p>
          </div>
          <a href="#gallery" className="text-white hover:text-primary transition-colors font-bold uppercase underline underline-offset-8">
            View Full Gallery
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {business.facilities.map((facility, index) => (
            <div 
              key={facility.id} 
              className={`relative group overflow-hidden ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              } ${index === 3 ? "lg:col-span-3" : ""}`}
            >
              <Image 
                src={images[index % images.length]} 
                alt={facility.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">{facility.name}</h3>
                <p className="text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
