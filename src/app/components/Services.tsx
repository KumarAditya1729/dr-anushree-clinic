import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Shield, Orbit, Activity, Fingerprint, Waves } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Neural Root Canal Therapy",
    description: "Multi-layered micro-optics and automated laser irrigation clear infection completely without drill pain or manual scraping.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: Fingerprint,
    title: "On-Demand Implants",
    description: "Guided by sub-millimeter robotics, bio-compatible titanium roots are mapped and placed with absolute perfection.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: Orbit,
    title: "Smart Aligners",
    description: "4D predictive scanning generates invisible correction paths. We don't take physical molds; we map you in pure code.",
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Photonic Whitening",
    description: "A 5-minute cold light laser activation that shatters deep enamel stains without triggering any nerve sensitivity.",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: Shield,
    title: "Nano-Veneers",
    description: "3D-milled ceramic sheets thinner than a contact lens. Form-fitted by AI to perfectly match your natural bite dynamics.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    icon: Waves,
    title: "Ultrasonic Scaling",
    description: "Gentle acoustic waves instantly vaporize calculus and plaque. A frictionless, deeply refreshing cleaning experience.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 px-6 bg-slate-950 text-white relative overflow-hidden" ref={ref}>
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
              Omni-Disciplinary Platform
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-light tracking-tight">
            Infinite Capabilities.<br className="md:hidden"/> One <span className="text-blue-400 font-normal">Machine.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Every procedure is backed by 2030-era engineering. From zero-pain root canals to 4D scanned aligners.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative h-[420px] rounded-3xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={`${service.title} visualization`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
              </div>

              {/* Protective dark gradients to ensure text stands out cleanly over machinery visuals */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/90 z-10 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-color z-10" />

              {/* Content Block anchored at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <div className="mb-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl group-hover:bg-blue-500/90 transition-colors duration-700">
                  <service.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl text-white font-normal mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-500">
                  {service.title}
                </h3>
                
                {/* Expandable Description */}
                <div className="overflow-hidden">
                  <p className="text-gray-300 font-light leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Subtle glass reflection border inner stroke */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl z-30 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
