import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Cpu, Bot, Boxes, Glasses } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "AI Diagnostics",
    description: "Sub-millimeter precision for proactive planning.",
  },
  {
    icon: Bot,
    title: "Robotic Assistance",
    description: "Flawless technical outcomes with guided systems.",
  },
  {
    icon: Boxes,
    title: "3D Printing",
    description: "Custom, perfectly fitted crowns ready in minutes.",
  },
  {
    icon: Glasses,
    title: "AR/VR Visualization",
    description: "See your final smile mapped out before we even begin.",
  },
];

export function Future2030() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 px-6 bg-slate-950 text-white relative overflow-hidden" ref={ref}>
      {/* Sophisticated light sweep animation background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-32 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent blur-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/4 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"
          animate={{ x: [-50, 50, -50], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-block mb-6 px-5 py-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-blue-300 text-sm font-medium tracking-widest uppercase">
              Beyond Next Generation
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-light tracking-tight">
            Welcome to <span className="text-blue-400 font-normal">Tomorrow</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Where advanced algorithms and immaculate precision redefine dental care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1.2, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/[0.08] transition-all duration-700 ease-out h-full box-border">
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-500/20 transition-all duration-700 ease-out">
                    <tech.icon className="w-7 h-7 text-blue-300" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-2xl mb-3 text-white font-normal group-hover:text-blue-300 transition-colors duration-500">
                  {tech.title}
                </h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  {tech.description}
                </p>

                {/* Hover subtle internal glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-transparent group-hover:from-blue-500/5 group-hover:to-transparent rounded-3xl transition-colors duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
