import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Brain, Zap, HeartPulse } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Diagnostics",
    description: "Sub-millimeter precision for proactive and accurate care.",
  },
  {
    icon: Zap,
    title: "Digital Workflows",
    description: "A seamless, paperless experience from end to end.",
  },
  {
    icon: HeartPulse,
    title: "Pain-Free Technology",
    description: "Advanced tools prioritized entirely around your physical comfort.",
  },
];

export function SmartClinic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-10"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light tracking-tight">
              The <span className="text-blue-500 font-normal">2030 Standard</span> of Care
            </h2>
            <p className="text-xl text-gray-500 mb-12 font-light" style={{ lineHeight: 1.8 }}>
              Experience dentistry without the anxiety. With AI-powered diagnostics for pinpoint accuracy and entirely digital, paperless workflows, your visit is seamless. We employ advanced pain-free technology to ensure you feel nothing but comfort.
            </p>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-500">
                    <feature.icon className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-800 font-normal">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 font-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-gray-50 aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                alt="Smart Clinic AI Interface"
                loading="lazy"
                className="w-full h-full object-cover rounded-[2rem]"
              />
              {/* Subtle glass overlay for that extra premium feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay" />
            </div>

            {/* Floating Soft Blur */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl -z-10"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
