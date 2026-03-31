import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate a secure API submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Securely submitting payload:", data);
    setIsSubmitted(true);
  };

  return (
    <section className="py-40 px-6 bg-slate-950 text-white relative overflow-hidden" ref={ref}>
      {/* Subtle ambient cyber blur */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top transition gentle gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 font-light tracking-tight">
            Experience it <span className="text-blue-400 font-normal">Yourself</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Book a consultation to see what the future of dental care feels like.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 md:p-12 ring-1 ring-blue-500/5 min-h-[500px] flex flex-col justify-center relative overflow-hidden">
               {/* Internal ambient card glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-10 relative z-10"
                >
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl text-white font-medium">Request Received</h3>
                  <p className="text-gray-400 font-light text-lg max-w-sm">
                    Thank you! Our concierge AI system has processed your request. Our human team will reach out within 2 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2 text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-8 relative z-10" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                      <input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-white placeholder-gray-600 font-light"
                        placeholder="Jane Doe"
                      />
                      {errors.name && <p className="text-red-400 text-xs ml-1 mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-white placeholder-gray-600 font-light"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && <p className="text-red-400 text-xs ml-1 mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                      })}
                      className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-white placeholder-gray-600 font-light"
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs ml-1 mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">How can we help?</label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-white placeholder-gray-600 font-light resize-none flex-grow"
                      placeholder="Briefly describe your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-500 transition-colors duration-500 font-medium text-lg mt-4 group relative overflow-hidden disabled:opacity-70 disabled:hover:bg-blue-600"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          Processing Request
                          <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Request Appointment
                          <motion.span 
                            className="inline-block"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.3 }}
                          >→</motion.span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Details Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Dr. Anushree's clinic on WhatsApp"
              className="block bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-500 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-green-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-green-500/30 group-hover:bg-green-500 group-hover:scale-105 transition-all duration-500">
                  <MessageCircle className="w-6 h-6 text-green-400 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1 group-hover:text-green-300 transition-colors duration-500">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-gray-400 font-light text-sm">
                    Instant human support
                  </p>
                </div>
              </div>
            </a>

            {/* Other details in simple minimal list */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="mt-1 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-500">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Clinic Address</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    123 Innovation Drive<br />
                    Bandra West, Mumbai 400050
                  </p>
                </div>
              </div>
              
              <div className="h-px bg-white/10 w-full" />
              
              <div className="flex items-start gap-5 group">
                <div className="mt-1 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-500">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Direct Line</h4>
                  <p className="text-gray-400 font-light">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10 w-full" />

              <div className="flex items-start gap-5 group">
                <div className="mt-1 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-500">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Email</h4>
                  <p className="text-gray-400 font-light">
                    hello@dranushree.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
