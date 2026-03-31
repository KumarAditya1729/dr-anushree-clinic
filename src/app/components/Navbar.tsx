import { motion, useScroll, useTransform } from "motion/react";
import { Calendar } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  
  // Animate only the opacity of the background layer (hardware accelerated)
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div 
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-gray-200/50"
      />
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative z-10 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-blue-500/10 shadow-sm border border-blue-500/20 group-hover:scale-105 transition-transform duration-500">
            <img src="/logo.svg" alt="Dr. Anushree Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-light tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
            Dr. Anushree
          </h1>
          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[10px] text-blue-600 tracking-widest uppercase font-medium">
            2030
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            aria-label="Book a consultation"
            className="group relative flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-full overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <Calendar className="w-4 h-4 relative z-10" />
            <span className="text-sm font-medium relative z-10">Consultation</span>
          </button>
        </motion.div>
      </div>
    </nav>
  );
}
