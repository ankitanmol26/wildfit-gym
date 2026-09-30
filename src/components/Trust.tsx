import { business } from "@/data/business";
import { Star } from "lucide-react";

export default function Trust() {
  return (
    <div className="bg-surface border-y border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary" size={24} />
              ))}
            </div>
            <div className="text-white font-bold">
              <span className="text-2xl mr-2">{business.rating}</span>
              <span className="text-gray-400 text-sm font-normal">Google Rating ({business.reviewCount}+ Reviews)</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-border"></div>
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-display font-bold text-xl uppercase tracking-wider">Trusted by Local Members</h3>
            <p className="text-gray-400 text-sm">The premier training facility in {business.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
