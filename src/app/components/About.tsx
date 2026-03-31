import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/5 bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Dr. Anushree" 
                loading="lazy"
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light tracking-tight">
              Care Beyond Dentistry
            </h2>
            <p className="text-xl text-gray-500 mb-8 font-light" style={{ lineHeight: 1.8 }}>
              "My journey started with a simple belief: dental care shouldn't be something to fear. I designed this clinic to be your safe space—where cutting-edge technology meets a gentle, human touch."
            </p>
            <p className="text-xl text-gray-500 mb-10 font-light" style={{ lineHeight: 1.8 }}>
              "We are here to listen, understand, and redefine your smile in total comfort."
            </p>
            
            <div className="pt-6 border-t border-gray-100">
              <p className="text-2xl text-gray-800" style={{ fontFamily: "Outfit, sans-serif" }}>
                Dr. Anushree
              </p>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest font-medium">Founder & Lead Designer of Smiles</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
