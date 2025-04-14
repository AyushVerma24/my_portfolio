
import { CheckCircle, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

// Optimized tag component - simplified animation
const SkillTag = ({ skill, index }) => {
  // Memoize the transition delay calculation
  const delay = useMemo(() => Math.min(index * 0.03, 0.5), [index]);
  
  return (
    <div
      className="skill-tag flex items-center gap-2 group hover:bg-stellar-purple/40 
                transition-all duration-300 hover:scale-105 cursor-default opacity-0 translate-y-2"
      style={{
        animation: `fadeIn 0.5s ease forwards`,
        animationDelay: `${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      <span>{skill}</span>
    </div>
  );
};

// Optimized tech item component - reduced animations
const TechItem = ({ tech, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center gap-3 group opacity-0 translate-y-4 transition-all duration-500 ease-out`}
      style={{ 
        transitionDelay: `${Math.min(index * 0.05, 0.5)}s`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(16px)',
        willChange: 'opacity, transform'
      }}
    >
      <div 
        className="w-16 h-16 rounded-xl bg-white/10 p-3 flex items-center justify-center 
                  group-hover:bg-white/20 transition-all duration-300 relative overflow-hidden
                  hover:scale-110 will-change-transform"
      >
        {/* Static element instead of animated div */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full 
                      group-hover:translate-x-full transition-all duration-1000" />
        
        <img src={tech.image} alt={tech.name} className="w-10 h-10" />
      </div>
      <span className="text-sm text-white/80 font-medium group-hover:text-white 
                      group-hover:scale-105 transition-all duration-300">
        {tech.name}
      </span>
    </div>
  );
};

// Optimized skill category component - simplified animations
const SkillCategory = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <div 
      ref={ref}
      className="glass-card p-6 sm:p-8 backdrop-blur-md hover:bg-white/5 transition-all 
                duration-300 group mobile-shadow relative overflow-hidden opacity-0"
      style={{ 
        opacity: isInView ? 1 : 0,
        transform: isInView ? 
                  `rotate(${index % 2 === 0 ? -1 : 1}deg) translateX(0)` : 
                  `rotate(${index % 2 === 0 ? -1 : 1}deg) translateX(${index % 2 === 0 ? -30 : 30}px)`,
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        transitionDelay: `${Math.min(index * 0.1, 0.4)}s`,
        willChange: 'opacity, transform'
      }}
    >
      {/* Static decorative element */}
      <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} 
                    w-16 h-16 opacity-30 rounded-full bg-gradient-to-br 
                    from-stellar-purple/10 to-stellar-blue/10 blur-xl`}></div>
      
      <h3 className="text-xl font-semibold mb-6 text-gradient flex items-center">
        {category.name}
        <span className="ml-2">
          <Star className="h-4 w-4 text-yellow-300 fill-yellow-300 optimized-pulse" />
        </span>
      </h3>
      
      <div className="grid grid-cols-1 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <div 
            key={skill}
            className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transitionDelay: `${Math.min((index * 0.05) + (skillIndex * 0.05), 0.8)}s`
            }}
          >
            <span className="transform hover:scale-110 hover:rotate-12 transition-transform duration-300 inline-block">
              <CheckCircle className="w-5 h-5 text-stellar-accent" />
            </span>
            <span className="text-white/80 group-hover:text-white transition-colors">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Static background bubbles instead of animated ones
const BackgroundBubbles = () => (
  <>
    <div 
      className="absolute top-0 left-0 w-64 h-64 bg-stellar-purple/10 rounded-full filter blur-3xl optimized-pulse"
    />
    
    <div 
      className="absolute bottom-0 right-0 w-64 h-64 bg-stellar-blue/10 rounded-full filter blur-3xl optimized-pulse"
      style={{ animationDelay: '1s' }}
    />
  </>
);

// Significantly simplified floating tags
const OptimizedFloatingTags = () => {
  // Only show 6 tags at a time for better performance
  const visibleTags = [
    "React", "TypeScript", "Node.js", 
    "AWS", "Docker", "JavaScript"
  ];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {visibleTags.map((tag, i) => (
        <div
          key={i}
          className="absolute px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs 
                    backdrop-blur-sm border border-white/10 optimized-float"
          style={{ 
            top: `${15 + (i * 15)}%`, 
            left: `${10 + (i * 13)}%`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.7
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

const OptimizedSkills = () => {
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
      {/* Static background elements */}
      <OptimizedFloatingTags />
      <BackgroundBubbles />
      
      <div className="container mx-auto relative z-10" ref={containerRef}>
        <h2 
          className="section-title pb-4 mb-16 opacity-0 translate-y-4"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(-16px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            willChange: 'opacity, transform'
          }}
        >
          My Skills
        </h2>
        
        <div className="flex flex-col gap-12">
          {/* Tech stack section */}
          <div 
            className="w-full opacity-0 translate-y-4"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: '0.2s',
              willChange: 'opacity, transform'
            }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
            <div className="glass-card p-6 sm:p-10 backdrop-blur-md relative overflow-hidden">
              {/* Static decorative elements */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-stellar-purple/10 blur-xl optimized-pulse" />
              <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-stellar-blue/10 blur-xl optimized-pulse" 
                  style={{ animationDelay: '1s' }} />
              
              {/* Optimized grid layout for better rendering */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                {techStack.map((tech, index) => (
                  <div key={tech.name} className={`${index % 4 === 1 || index % 4 === 2 ? 'sm:translate-y-4' : ''}`}>
                    <TechItem tech={tech} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills categories with staggered layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.name}
                className={`transform ${index % 2 === 0 ? 'sm:translate-y-8' : ''}`}
              >
                <SkillCategory category={category} index={index} />
              </div>
            ))}
          </div>
          
          {/* Skill cloud - optimized */}
          <div
            className="opacity-0 translate-y-4"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: '0.4s',
              willChange: 'opacity, transform'
            }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedSkills;
