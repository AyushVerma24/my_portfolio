
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  density?: number;
  colorVariety?: 'default' | 'purple' | 'blue' | 'mixed';
  className?: string;
}

const generateParticles = (
  density: number,
  colorVariety: 'default' | 'purple' | 'blue' | 'mixed'
) => {
  const particles = [];
  
  const colorOptions = {
    default: ['#6E44FF20', '#2563EB20', '#0EA5E920'],
    purple: ['#6E44FF20', '#9B59B620', '#8B5CF620'],
    blue: ['#2563EB20', '#0EA5E920', '#38BDF820'],
    mixed: ['#6E44FF20', '#2563EB20', '#0EA5E920', '#EC489920', '#10B98120'],
  };
  
  const colors = colorOptions[colorVariety];
  
  for (let i = 0; i < density; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    });
  }
  
  return particles;
};

export const AnimatedBackground = ({
  children,
  density = 5,
  colorVariety = 'default',
  className = "",
}: AnimatedBackgroundProps) => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setParticles(generateParticles(density, colorVariety));
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [density, colorVariety]);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full filter blur-3xl"
          style={{
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transition: 'transform 0.3s ease-out',
            transform: `translate(${mousePosition.x * (particle.id % 2 === 0 ? -15 : 15)}px, ${mousePosition.y * (particle.id % 2 === 0 ? -15 : 15)}px)`,
          }}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      
      {/* Star particles */}
      {Array.from({ length: density * 4 }).map((_, i) => (
        <motion.div 
          key={`star-${i}`}
          className="absolute rounded-full bg-white/80"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0.2 }}
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
