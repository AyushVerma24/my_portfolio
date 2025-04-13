
import { CheckCircle, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillTag = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="skill-tag flex items-center gap-2 group hover:bg-stellar-purple/40 transition-all duration-300 hover:scale-105 cursor-default"
    >
      <span>{skill}</span>
    </motion.div>
  );
};

const TechItem = ({ tech, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3 group"
    >
      <motion.div 
        className="w-16 h-16 rounded-xl bg-white/10 p-3 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
        whileHover={{ 
          scale: 1.1,
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.5 }
        }}
      >
        {/* Hover effect - shine */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"
        />
        
        <img src={tech.image} alt={tech.name} className="w-10 h-10" />
      </motion.div>
      <motion.span 
        className="text-sm text-white/80 font-medium"
        whileHover={{ scale: 1.1, color: "#fff" }}
      >
        {tech.name}
      </motion.span>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="glass-card p-6 sm:p-8 backdrop-blur-md hover:bg-white/5 transition-all duration-300 group mobile-shadow relative overflow-hidden"
      style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
    >
      {/* Decorative corner accents for mobile interest */}
      <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-16 h-16 opacity-30 rounded-full bg-gradient-to-br from-stellar-purple/10 to-stellar-blue/10 blur-xl`}></div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-6 text-gradient flex items-center">
          {category.name}
          <motion.div 
            className="ml-2"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.2, 1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          >
            <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
          </motion.div>
        </h3>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div 
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
            className="flex items-center gap-3 group"
            whileHover={{ x: 5 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-5 h-5 text-stellar-accent" />
            </motion.div>
            <span className="text-white/80 group-hover:text-white transition-colors">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const FloatingSkillTags = () => {
  const tags = [
    "React", "Node.js", "TypeScript", "AWS", "Docker", "JavaScript",
    "Python", "CI/CD", "GraphQL", "MongoDB", "Git", "Agile"
  ];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {tags.map((tag, i) => (
        <motion.div
          key={i}
          className="absolute px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs backdrop-blur-sm border border-white/10"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%` 
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0],
            y: [0, -30],
            x: [0, Math.random() * 20 - 10]
          }}
          transition={{ 
            duration: 8, 
            delay: i * 1, 
            repeat: Infinity,
            repeatDelay: Math.random() * 10 + 5
          }}
        >
          {tag}
        </motion.div>
      ))}
    </div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  // Define skill categories and their respective skills
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Django", "TensorFlow", "Next.js"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Kubernetes", "Linux"]
    },
    {
      name: "Other Skills",
      skills: ["System Architecture", "Project Management", "UI/UX Design", "Agile Methodology", "Database Design", "API Development"]
    }
  ];

  // Tech stack with logos
  const techStack = [
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Animated background elements */}
      <FloatingSkillTags />
      
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-stellar-purple/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-stellar-blue/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 12, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="container mx-auto relative z-10" ref={containerRef}>
        <motion.h2 
          className="section-title pb-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          My Skills
        </motion.h2>
        
        <div className="flex flex-col gap-12">
          {/* Tech stack section */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
            <div className="glass-card p-6 sm:p-10 backdrop-blur-md relative overflow-hidden">
              {/* Decorative elements for visual interest on mobile */}
              <motion.div 
                className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-stellar-purple/10 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-stellar-blue/10 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              />
              
              {/* Honeycomb-like layout for mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={tech.name}
                    className={`${index % 4 === 1 || index % 4 === 2 ? 'sm:translate-y-4' : ''}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <TechItem tech={tech} index={index} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Skills categories with staggered layout for mobile */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ x: 0 }}
                whileInView={{ 
                  x: index % 2 === 0 ? [-10, 0] : [10, 0]
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`transform ${index % 2 === 0 ? 'sm:translate-y-8' : ''}`}
              >
                <SkillCategory category={category} index={index} />
              </motion.div>
            ))}
          </div>
          
          {/* Skill cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Core Competencies</h3>
            <div className="glass-card p-8 backdrop-blur-md">
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "React", "TypeScript", "Node.js", "Python", "Docker", "AWS", 
                  "System Design", "API Development", "Leadership", "Team Management",
                  "Full Stack", "DevOps", "Cloud Architecture", "Database Design"
                ].map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
