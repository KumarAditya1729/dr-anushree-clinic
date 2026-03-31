import { Heart, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 px-6 bg-slate-950 text-white border-t border-white/5 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="text-2xl font-light tracking-tight text-white flex items-center gap-2">
              Dr. Anushree
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-blue-300 tracking-widest uppercase font-medium">
              2030
            </span>
          </div>
          <p className="text-gray-400 font-light max-w-sm">
            Designing the future of your smile with AI diagnostics, robotic assistance, and total comfort.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-500 font-light flex items-center gap-1 group">
            Privacy Policy
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-500 font-light flex items-center gap-1 group">
            Terms of Service
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm font-light">
          © 2030 Smart Dental Clinic. Uncompromising Care.
        </p>
        <p className="text-gray-500 text-sm font-light flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-red-500/50" fill="currentColor" /> for the future.
        </p>
      </div>
    </footer>
  );
}
