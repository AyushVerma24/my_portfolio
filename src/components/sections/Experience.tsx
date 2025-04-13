
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      title: "Chief Technology Officer",
      company: "SOULO LLP",
      period: "2022 - Present",
      location: ", India",
      description: "Leading technical strategy and product development. Managing a team of developers and overseeing all technological aspects of the company.",
      skills: ["Leadership", "System Architecture", "Product Strategy", "Team Management"]
    },
    {
      title: "IoT Team Lead",
      company: "GDGoC PSIT Kanpur",
      period: "2024 - 2025",
      location: "Remote",
      description: "Led the IoT team at GDGOC Kanpur, driving innovative hardware-software projects and fostering a culture of tech-driven problem solving.",
      skills: ["C++", "Arduino IDE", "Microcontrollers"]
    },

  ];
  
  const educationData = [
    {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science",
      institution: "Pranveer Singh Institute of Technology",
      period: "2020 - Present",
      location: "Kanpur, India",
      description: "Focusing on AI, machine learning, IoT and software engineering. Part of the university's honors program.",
      achievements: ["Dean's List", "Iot Team Leader @ GDGoC"]
    }
  ];

  // Animation variants for reuse
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background decoration - smaller and better positioned for mobile */}
      <motion.div 
        className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-stellar-purple/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-stellar-blue/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6] 
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title pb-3 sm:pb-4 mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Experience & Education
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Professional Experience */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-5 sm:mb-8 text-gradient animated-gradient-text text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional Experience
            </motion.h3>
            
            <motion.div 
              className="relative border-l-2 border-stellar-purple/50 pl-5 sm:pl-8 space-y-6 sm:space-y-12 ml-3 sm:ml-4 before:content-[''] before:absolute before:top-0 before:left-[-5px] before:w-2 before:h-2 before:rounded-full before:bg-stellar-purple/80 before:shadow-glow-sm before:animate-pulse"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={exp.title + exp.company}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute -left-[1.65rem] sm:-left-[2.6rem] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-stellar-purple"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                  />
                  
                  {/* Content card - enhanced for mobile */}
                  <motion.div 
                    className="glass-card p-4 sm:p-6 hover:bg-white/5 transition-colors mobile-shadow relative overflow-hidden"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Mobile decoration */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-stellar-purple/5 blur-lg"></div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1">{exp.title}</h4>
                    <h5 className="text-base sm:text-lg text-stellar-cyan mb-2 sm:mb-3">{exp.company}</h5>
                    
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.skills.map(skill => (
                        <motion.span 
                          key={skill} 
                          className="skill-tag text-xs px-2 py-0.5 sm:text-sm sm:px-3 sm:py-1"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Education */}
          <motion.div 
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-5 sm:mb-8 text-gradient text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Education
            </motion.h3>
            
            <motion.div 
              className="relative border-l-2 border-stellar-blue/50 pl-5 sm:pl-8 ml-3 sm:ml-4 before:content-[''] before:absolute before:top-0 before:left-[-5px] before:w-2 before:h-2 before:rounded-full before:bg-stellar-blue/80 before:shadow-glow-sm before:animate-pulse"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {educationData.map((edu, index) => (
                <motion.div 
                  key={edu.degree}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute -left-[1.65rem] sm:-left-[2.6rem] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-stellar-blue"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                  />
                  
                  {/* Content card - enhanced for mobile */}
                  <motion.div 
                    className="glass-card p-4 sm:p-6 hover:bg-white/5 transition-colors mobile-shadow relative overflow-hidden"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transform: 'rotate(-0.5deg)' }}
                  >
                    {/* Mobile decoration */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-stellar-blue/5 blur-lg"></div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1">{edu.degree}</h4>
                    <h5 className="text-base sm:text-lg text-stellar-cyan mb-2 sm:mb-3">{edu.field}</h5>
                    <h6 className="text-sm sm:text-md text-white mb-2 sm:mb-3">{edu.institution}</h6>
                    
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">{edu.description}</p>
                    
                    <motion.h6 
                      className="font-semibold mb-1 sm:mb-2 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      Achievements:
                    </motion.h6>
                    <motion.ul 
                      className="list-disc list-inside text-xs sm:text-sm text-white/80 space-y-0.5 sm:space-y-1"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {edu.achievements.map((achievement, i) => (
                        <motion.li 
                          key={achievement}
                          variants={itemVariants}
                          custom={i}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Certifications or additional education */}
            <motion.div 
              className="mt-6 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.h3 
                className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient text-center lg:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Certifications
              </motion.h3>
              <motion.div 
                className="glass-card p-4 sm:p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.ul 
                  className="space-y-3 sm:space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li 
                    className="flex items-start gap-2 sm:gap-3"
                    variants={itemVariants}
                    custom={0}
                  >
                    <motion.div 
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(155, 135, 245, 0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">AWS Certified Solutions Architect</h4>
                      <p className="text-xs sm:text-sm text-white/70">Amazon Web Services, 2023</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-2 sm:gap-3"
                    variants={itemVariants}
                    custom={1}
                  >
                    <motion.div 
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">TensorFlow Developer Certificate</h4>
                      <p className="text-xs sm:text-sm text-white/70">Google, 2022</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-2 sm:gap-3"
                    variants={itemVariants}
                    custom={2}
                  >
                    <motion.div 
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Full Stack Web Development</h4>
                      <p className="text-xs sm:text-sm text-white/70">Udemy, 2021</p>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
