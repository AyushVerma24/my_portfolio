
import { Award, Book, Briefcase, FileCode, Lightbulb, Trophy, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionCard = ({ children, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const FloatingSparkle = ({ delay = 0, size = 10, top, left, color = "#6E44FF" }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        y: [0, -20],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 5,
      }}
    >
      <Sparkles size={size} color={color} />
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  return (
    <section id="about" className="section bg-stellar-dark relative overflow-hidden">
      {/* Floating sparkles */}
      <FloatingSparkle delay={1} size={14} top="10%" left="5%" color="#6E44FF" />
      <FloatingSparkle delay={2.5} size={16} top="15%" left="85%" color="#2563EB" />
      <FloatingSparkle delay={3.2} size={12} top="80%" left="10%" color="#0EA5E9" />
      <FloatingSparkle delay={2} size={14} top="85%" left="80%" color="#EC4899" />
      <FloatingSparkle delay={4} size={12} top="50%" left="95%" color="#10B981" />
      
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 w-96 h-96 bg-stellar-purple/10 rounded-full filter blur-3xl"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-stellar-blue/10 rounded-full filter blur-3xl"
      ></motion.div>
      
      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="section-title pb-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
        
        <div ref={containerRef} className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-5 sm:p-6 md:p-8 relative overflow-hidden backdrop-blur-md">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-stellar-purple/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-stellar-blue/20 rounded-full filter blur-3xl"></div>
              
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gradient"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Technology Enthusiast
                <motion.span 
                  className="inline-block ml-2"
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.2, 1, 1.2, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
                </motion.span>
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4 md:mb-6">
                  I'm a passionate BTech student in my 3rd year and Chief Technical Officer at SOULO L.L.P, dedicated to creating innovative solutions and pushing the boundaries of technology. I blend academic knowledge with practical experience to solve complex problems and drive technological advancement.
                </p>
                
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4 md:mb-6">
                  My journey in technology began with a curiosity about how digital systems work, which evolved into a deep passion for software development, artificial intelligence, and system architecture.
                </p>
                
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  I'm committed to continuous learning, technological innovation, and creating impactful solutions that make a difference.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <MotionCard index={0}>
                <div className="glass-card p-4 sm:p-6 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105 transform backdrop-blur-md">
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-stellar-purple/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-stellar-purple/30 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-stellar-purple" />
                  </motion.div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Leadership</h4>
                  <p className="text-xs sm:text-sm text-white/70">Technical strategy & team collaboration</p>
                </div>
              </MotionCard>
              
              <MotionCard index={1}>
                <div className="glass-card p-4 sm:p-6 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105 transform backdrop-blur-md">
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-stellar-blue/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-stellar-blue/30 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <FileCode className="w-5 h-5 sm:w-6 sm:h-6 text-stellar-blue" />
                  </motion.div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Development</h4>
                  <p className="text-xs sm:text-sm text-white/70">Full-stack software engineering</p>
                </div>
              </MotionCard>
              
              <MotionCard index={2}>
                <div className="glass-card p-4 sm:p-6 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105 transform backdrop-blur-md">
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-stellar-cyan/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-stellar-cyan/30 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-stellar-cyan" />
                  </motion.div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Innovation</h4>
                  <p className="text-xs sm:text-sm text-white/70">Creative problem-solving</p>
                </div>
              </MotionCard>
              
              <MotionCard index={3}>
                <div className="glass-card p-4 sm:p-6 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105 transform backdrop-blur-md">
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-stellar-pink/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-stellar-pink/30 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Book className="w-5 h-5 sm:w-6 sm:h-6 text-stellar-pink" />
                  </motion.div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Education</h4>
                  <p className="text-xs sm:text-sm text-white/70">BTech student, continuous learner</p>
                </div>
              </MotionCard>
            </div>
            
            <MotionCard index={4}>
              <div className="glass-card p-4 sm:p-6 mt-4 sm:mt-6 backdrop-blur-md hover:bg-white/5 transition-colors duration-300">
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-stellar-accent" />
                    <span className="text-xs sm:text-sm text-white/80">BTech 3rd Year</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-stellar-accent" />
                    <span className="text-xs sm:text-sm text-white/80">Technology Enthusiast</span>
                  </motion.div>
                </div>
              </div>
            </MotionCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
