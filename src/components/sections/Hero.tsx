
import { ChevronDown, Github, Linkedin, Mail, Twitter, Sparkle, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite, pulse-slow ${Math.random() * 5 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

const FadeInText = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    // Only add mouse move listener on non-mobile devices
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative pt-16 md:pt-20 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(110, 68, 255, 0.2) 0%, transparent 70%)",
      }}
    >
      {/* Animated background elements - smaller and better positioned on mobile */}
      <div 
        className="absolute top-20 left-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-stellar-purple/20 rounded-full filter blur-3xl animate-pulse-slow"
        style={{ 
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-stellar-blue/20 rounded-full filter blur-3xl animate-pulse-slow" 
        style={{ 
          animationDelay: "2s",
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse-slow" 
        style={{ 
          animationDelay: "3s",
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      {/* Particle effect */}
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile image for mobile (at top) */}
          <div className="md:hidden w-full flex justify-center mb-6">
            <FadeInText delay={300} className="relative">
              {/* Simple decorative elements for mobile */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-stellar-purple/30 animate-pulse-slow"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-stellar-blue/30 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
              
              {/* Simplified image container for mobile */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-full p-1 bg-stellar-dark/50 backdrop-blur-sm border border-white/10 shadow-xl">
                  <img 
                    src="/lovable-uploads/c568f281-ffc6-4add-abaf-7b54ccd59e4f.png"
                    alt="Profile" 
                    className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-stellar-purple/10 via-transparent to-stellar-blue/10 mix-blend-overlay"></div>
                </div>
              </div>
            </FadeInText>
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <FadeInText delay={300}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient text-shadow inline-block animate-float">Ayush Verma</span>
                <span className="inline-block ml-2 animate-float" style={{ animationDelay: "0.5s" }}>
                  <Sparkle className="text-yellow-300 h-5 w-5 md:h-6 md:w-6" />
                </span>
              </h1>
            </FadeInText>
            
            <FadeInText delay={600}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-4 md:mb-6">
                BTech 3rd Year Student & CTO @ SOULO L.L.P
              </h2>
            </FadeInText>
            
            <FadeInText delay={900}>
              <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8 mx-auto md:mx-0 max-w-lg">
                Passionate tech enthusiast with expertise in innovative software solutions.
                Building the future of digital experiences one line of code at a time.
              </p>
            </FadeInText>
            
            <FadeInText delay={1200}>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
                <a href="#contact" className="gradient-button group relative overflow-hidden text-sm md:text-base py-2 md:py-3 px-4 md:px-6">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
                <a href="#projects" className="outline-button group text-sm md:text-base py-2 md:py-3 px-4 md:px-6">
                  <span className="flex items-center">
                    View Projects
                    <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </FadeInText>
            
            <FadeInText delay={1500}>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6">
                <span className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-0">Connect with me:</span>
                <div className="flex gap-5">
                  <a 
                    href="https://github.com/AyushVerma24" 
                    className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 transform"
                    aria-label="GitHub"
                  >
                    <Github size={18} className="hover:rotate-6 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ayush-verma24" 
                    className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 transform"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} className="hover:rotate-6 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://x.com/Ayush241220031" 
                    className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 transform"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} className="hover:rotate-6 transition-transform duration-300" />
                  </a>
                  <a 
                    href="mailto:verma24122003@gmail.com" 
                    className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 transform"
                    aria-label="Email"
                  >
                    <Mail size={18} className="hover:rotate-6 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </FadeInText>
          </div>
          
          {/* Profile image for desktop (right side) */}
          <div className="hidden md:flex md:w-1/2 justify-center">
            <FadeInText delay={600} className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-stellar-purple/30 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-stellar-blue/30 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 rounded-full bg-pink-500/20 animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
              
              {/* Gradient border */}
              <div className="absolute -inset-1 bg-gradient-conic rounded-full blur-md opacity-70 animate-float group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image container with blend effects */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-stellar-purple/40 to-stellar-blue/40 mix-blend-overlay rounded-full"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,68,255,0.5),transparent_70%)] mix-blend-color-dodge animate-pulse-slow"></div>
                </div>
                <div className="relative overflow-hidden rounded-full p-1 bg-stellar-dark/50 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-stellar-purple/20 transition-all duration-500 hover:scale-[1.02] transform">
                  <img 
                    src="/lovable-uploads/c568f281-ffc6-4add-abaf-7b54ccd59e4f.png"
                    alt="Profile" 
                    className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                  />
                  
                  {/* Overlay gradient for blending with background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-stellar-purple/10 via-transparent to-stellar-blue/10 mix-blend-overlay opacity-70 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000"></div>
                </div>
              </div>
            </FadeInText>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-5 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          aria-label="Scroll down"
          className="bg-white/5 backdrop-blur-sm p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
