import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback: "I used to dread the dentist. Dr. Anushree completely changed that. It felt like visiting a spa.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    feedback: "The technology here is incredible. I saw my new smile on a screen before we even began. Pure magic.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    feedback: "A completely painless and serene experience from the moment I walked in. Highly recommended.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 font-light tracking-tight">
            Stories of <span className="text-blue-500 font-normal">Transformation</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Real experiences from people who have discovered an entirely new standard of care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 items-start">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`pt-${index === 1 ? '12 md:pt-16' : '0'}`} // Staggered middle layout
            >
              <div className="bg-gray-50/50 backdrop-blur-xl border border-gray-100 rounded-[2rem] p-10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-700 ease-out h-full flex flex-col relative overflow-hidden group">
                {/* Large decorative quote mark */}
                <div className="absolute -top-4 -right-2 text-[120px] leading-none font-serif text-blue-50 opacity-50 select-none group-hover:scale-110 group-hover:text-blue-100 transition-all duration-700 ease-out">
                  "
                </div>

                <div className="relative z-10 flex-grow flex flex-col">
                  {/* Feedback */}
                  <p className="text-gray-600 mb-10 text-xl font-light italic leading-relaxed flex-grow">
                    "{testimonial.feedback}"
                  </p>

                  {/* Footer Name and Stars */}
                  <div className="mt-auto">
                    <p className="text-lg text-gray-900 font-medium mb-2">
                      {testimonial.name}
                    </p>
                    {/* Stars */}
                    <div className="flex gap-1.5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
