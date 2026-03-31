import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ScanFace, Activity, Cpu, Sparkles } from "lucide-react";

const workflowSteps = [
  {
    time: "00:00 - 02:00",
    title: "The Instant Scan",
    description: "Walk in, sit down. No uncomfortable bite molds. A silent AI scanner maps your entire jaw in 8K resolution in under 60 seconds.",
    icon: ScanFace,
  },
  {
    time: "02:00 - 05:00",
    title: "Hybrid Diagnostics",
    description: "Dr. Anushree reviews predictive AI modeling on a holographic display, ensuring absolute precision while answering your questions with extreme human empathy.",
    icon: Activity,
  },
  {
    time: "05:00 - 15:00",
    title: "Robotic-Assisted Treatment",
    description: "A perfect synergy. Advanced robotics handle the microscopic heavy lifting with zero vibration and zero pain, while Dr. Anushree guides the procedure. Fast, silent, and hyper-careful.",
    icon: Cpu,
  },
  {
    time: "15:00 - 20:00",
    title: "Instant Restoration",
    description: "If needed, 3D-printed bio-ceramic crowns are manufactured on-site and fitted immediately. You're out the door in record time, feeling perfectly fine.",
    icon: Sparkles,
  },
];

export function Workflow2030() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden" ref={ref}>
      {/* Dynamic Background Noise/Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"
          animate={{ x: [100, -50, 100], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
              The 20-Minute Protocol
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-light tracking-tight">
            Fast. Precise. <span className="text-blue-400 font-normal">Hyper-Careful.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Step directly into the chair of tomorrow. Experience a clinical workflow orchestrated by advanced machinery and guided by profound human empathy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Vertical Connector Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden md:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-400 z-20 md:flex shadow-[0_0_15px_rgba(96,165,250,0.5)]" />

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500 overflow-hidden w-full max-w-lg">
                      {/* Ambient hover glow inside card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-transparent group-hover:from-blue-500/10 group-hover:to-transparent duration-700 pointer-events-none" />
                      
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                          <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                        </div>
                        <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                          <span className="text-sm font-mono text-blue-300 font-medium">
                            {step.time}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl text-white font-normal mb-3 group-hover:text-blue-300 transition-colors duration-500">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
