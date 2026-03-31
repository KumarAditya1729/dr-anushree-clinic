import { motion } from "motion/react";
import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with slow fade in */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Extra soft white overlay for text legibility if needed */}
      <div className="absolute inset-0 z-0 bg-white/20 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl tracking-tight mb-6 text-gray-900 font-light" style={{ lineHeight: 1.1 }}>
            Designing the Future <br />
            of Your Smile
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Advanced, AI-powered, and patient-first dentistry by Dr. Anushree.
        </motion.p>

        <motion.button
          className="px-12 py-4 bg-gray-900/50 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-gray-900 hover:shadow-2xl hover:shadow-gray-900/20 transition-all duration-700 flex items-center gap-3 mx-auto text-lg font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Calendar className="w-5 h-5 opacity-80" />
          <span>Book Appointment</span>
        </motion.button>
      </div>
    </section>
  );
}
