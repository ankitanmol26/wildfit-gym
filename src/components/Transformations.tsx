import Image from "next/image";

export default function Transformations() {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            Your Journey <span className="text-primary">Starts Here.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real people. Real effort. Real results.
          </p>
        </div>

        {/* Visual Placeholder for Transformations */}
        <div className="max-w-4xl mx-auto bg-surface border border-border p-8 text-center rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative aspect-[3/4] bg-black border border-border/50 flex flex-col justify-center items-center">
              <span className="text-gray-600 font-bold uppercase tracking-wider mb-2">Before</span>
              <span className="text-gray-800 text-sm">[PLACEHOLDER IMAGE]</span>
            </div>
            <div className="relative aspect-[3/4] bg-black border border-border/50 flex flex-col justify-center items-center">
              <span className="text-primary font-bold uppercase tracking-wider mb-2">After</span>
              <span className="text-gray-800 text-sm">[PLACEHOLDER IMAGE]</span>
            </div>
          </div>
          
          <p className="text-gray-400 italic">
            "Transformation images will be added here once verified with actual gym members."
          </p>
        </div>
      </div>
    </section>
  );
}
