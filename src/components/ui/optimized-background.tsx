
import { useEffect, useState, useRef, memo } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  density?: number;
  colorVariety?: 'default' | 'purple' | 'blue' | 'mixed';
  className?: string;
}

// Memoize particles to prevent unnecessary recalculations
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
  
  // Reduced number of particles for better performance
  const actualDensity = Math.min(density, 5);
  
  for (let i = 0; i < actualDensity; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20, // Reduced size for better performance
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 10, // Reduced animation duration
    });
  }
  
  return particles;
};

// Using shouldDeferMouseMove to batch mouse movement updates
const useThrottledMouseMove = (delay = 100) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<number | null>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutRef.current !== null) {
        return;
      }
      
      timeoutRef.current = window.setTimeout(() => {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
        timeoutRef.current = null;
      }, delay);
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);
  
  return mousePosition;
};

// Optimize performance with reduced complexity
const AnimatedBackground = ({
  children,
  density = 3, // Reduced default density
  colorVariety = 'default',
  className = "",
}: AnimatedBackgroundProps) => {
  // Only regenerate particles when props change, not on every render
  const [particles] = useState(() => generateParticles(density, colorVariety));
  const mousePosition = useThrottledMouseMove(100);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Using will-change to optimize rendering */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full filter blur-xl will-change-transform"
          style={{
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            willChange: 'transform, opacity',
            // Use composited animations for better performance
            transform: `translate(${mousePosition.x * (particle.id % 2 === 0 ? -10 : 10)}px, ${mousePosition.y * (particle.id % 2 === 0 ? -10 : 10)}px)`,
          }}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [0.8, 0.9, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            // Use performant easing function
            ease: "linear",
          }}
        />
      ))}
      
      {/* Star particles - reduced count for better performance */}
      {Array.from({ length: Math.min(density * 2, 10) }).map((_, i) => (
        <motion.div 
          key={`star-${i}`}
          className="absolute rounded-full bg-white/80 will-change-opacity"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            willChange: 'opacity',
          }}
          initial={{ opacity: 0.2 }}
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(AnimatedBackground);
