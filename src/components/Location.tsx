import { business } from "@/data/business";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Find <span className="text-primary">{business.name}.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Stop by for a tour of the facility and see where your transformation begins.
            </p>

            <div className="bg-surface border border-border p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">{business.name}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="text-primary shrink-0 mt-1" size={24} />
                  <div>
                    <span className="block text-white font-bold mb-1">Address</span>
                    <span className="text-gray-400">{business.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="text-primary shrink-0 mt-1" size={24} />
                  <div>
                    <span className="block text-white font-bold mb-1">Phone</span>
                    <span className="text-gray-400">{business.phone}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-black font-bold py-4 px-8 flex items-center justify-center transition-colors text-center uppercase"
              >
                Get Directions
              </a>
              <a 
                href={`https://wa.me/${business.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black font-bold py-4 px-8 flex items-center justify-center gap-2 transition-colors text-center uppercase"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative aspect-square w-full bg-surface border border-border">
            {/* Embedded Map Placeholder / Simulated Map */}
            <div className="absolute inset-0 bg-[#1a1a1a] flex flex-col items-center justify-center p-6 text-center">
              <MapPin size={48} className="text-primary mb-4" />
              <h4 className="text-white font-bold text-xl mb-2">{business.name}</h4>
              <p className="text-gray-400 mb-6">{business.city}, {business.state}</p>
              <a 
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-6 py-2 hover:bg-primary hover:text-black transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
