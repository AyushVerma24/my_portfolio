
import { Mail, MessageSquare, Send, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/functions/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon."
        });
        
        // Reset form
        reset();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for reuse
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="contact" className="section bg-stellar-dark/50 relative overflow-hidden">
      {/* Background decoration - adjusted for mobile */}
      <motion.div 
        className="absolute top-0 right-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-stellar-purple/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-stellar-blue/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5] 
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title pb-3 md:pb-4 mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div 
              className="glass-card p-5 sm:p-8 relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative mobile-friendly shapes */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-stellar-purple/10 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-stellar-blue/10 blur-lg"></div>
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Contact Information
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base text-white/80 mb-5 sm:mb-8 text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
              </motion.p>
              
              <motion.div 
                className="space-y-4 sm:space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-start gap-3 sm:gap-4"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-stellar-purple/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(155, 135, 245, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-stellar-purple" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                    <motion.a 
                      href="mailto:contact@soulo.com" 
                      className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      verma24122003@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3 sm:gap-4"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-stellar-blue/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-stellar-blue" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Social Media</h4>
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      <motion.a 
                        href="https://www.linkedin.com/in/ayush-verma24" 
                        className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                        whileHover={{ y: -2, color: "rgba(255, 255, 255, 1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        LinkedIn
                      </motion.a>
                      <span className="text-white/40">•</span>
                      <motion.a 
                        href="https://x.com/Ayush241220031" 
                        className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                        whileHover={{ y: -2, color: "rgba(255, 255, 255, 1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        Twitter
                      </motion.a>
                      <span className="text-white/40">•</span>
                      <motion.a 
                        href="https://github.com/AyushVerma24" 
                        className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                        whileHover={{ y: -2, color: "rgba(255, 255, 255, 1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div 
              className="glass-card p-5 sm:p-8 relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative mobile-friendly shapes */}
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-stellar-cyan/10 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-stellar-purple/10 blur-lg"></div>
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Send a Message
              </motion.h3>
              
              <motion.form 
                className="space-y-4 sm:space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <motion.div 
                  className="space-y-1 sm:space-y-2"
                  variants={itemVariants}
                >
                  <label htmlFor="name" className="text-xs sm:text-sm text-white/80 block">Name</label>
                  <motion.input 
                    type="text" 
                    id="name" 
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white text-sm focus:outline-none focus:ring-2 focus:ring-stellar-purple/50 transition-all`}
                    placeholder="Your name"
                    whileFocus={{ borderColor: "rgba(155, 135, 245, 0.5)" }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    {...register("name", { 
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" }
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </motion.div>
                
                <motion.div 
                  className="space-y-1 sm:space-y-2"
                  variants={itemVariants}
                >
                  <label htmlFor="email" className="text-xs sm:text-sm text-white/80 block">Email</label>
                  <motion.input 
                    type="email" 
                    id="email" 
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white text-sm focus:outline-none focus:ring-2 focus:ring-stellar-purple/50 transition-all`}
                    placeholder="Your email"
                    whileFocus={{ borderColor: "rgba(155, 135, 245, 0.5)" }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: "Invalid email address" 
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </motion.div>
                
                <motion.div 
                  className="space-y-1 sm:space-y-2"
                  variants={itemVariants}
                >
                  <label htmlFor="message" className="text-xs sm:text-sm text-white/80 block">Message</label>
                  <motion.textarea 
                    id="message" 
                    rows={4}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white text-sm focus:outline-none focus:ring-2 focus:ring-stellar-purple/50 transition-all resize-none`}
                    placeholder="Your message"
                    whileFocus={{ borderColor: "rgba(155, 135, 245, 0.5)" }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    {...register("message", { 
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must be at least 10 characters" }
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="gradient-button w-full flex items-center justify-center gap-2 button-hover ripple-effect py-2 sm:py-3 text-sm"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: isSubmitting ? "none" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ duration: 0.2 }}
                  variants={itemVariants}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        Sending...
                      </motion.span>
                      <motion.div 
                        className="ml-1"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <circle 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            fill="none" 
                            strokeDasharray="40 60" 
                          />
                        </svg>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.span
                        initial={{ opacity: 1 }}
                        whileHover={{ x: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Send Message
                      </motion.span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
