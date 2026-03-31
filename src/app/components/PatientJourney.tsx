import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Building2, Sparkles, Smile } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book",
    description: "Effortless scheduling from anywhere.",
  },
  {
    icon: Building2,
    title: "Visit",
    description: "Step into a calming, sensory-friendly environment.",
  },
  {
    icon: Sparkles,
    title: "Treat",
    description: "Relax as we use precision technology for a fast, painless procedure.",
  },
  {
    icon: Smile,
    title: "Smile",
    description: "Walk out ready to face the world.",
  },
];

export function PatientJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden" ref={ref}>
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 font-light tracking-tight">
            Your Journey to a <span className="text-blue-500 font-normal">New Smile</span>
          </h2>
          <p className="text-xl text-gray-500 font-light">
            Simple, seamless, and designed exclusively for you.
          </p>
        </motion.div>

        <div className="relative">
          {/* Subtle connection line */}
          <div className="absolute top-24 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent transform -translate-y-1/2 hidden lg:block opacity-50" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon Container with elegant glow */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] group-hover:border-blue-100 transition-all duration-700 ease-out z-10 relative">
                    <step.icon className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
                  </div>
                  {/* Step number subtle placed top right */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-xs font-medium z-20">
                    {index + 1}
                  </div>
                  {/* Outer pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full bg-blue-50 scale-100 group-hover:scale-[1.6] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -z-10" />
                </div>

                {/* Text Content */}
                <h3 className="text-2xl mb-4 text-gray-900 font-normal group-hover:text-blue-600 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
