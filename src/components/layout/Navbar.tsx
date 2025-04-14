
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 sm:py-3 bg-stellar-dark/80 backdrop-blur-md shadow-lg"
          : "py-3 sm:py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl sm:text-3xl font-bold tracking-tight inline-block">
          <span className="text-gradient bg-gradient-to-r from-stellar-purple to-stellar-blue bg-clip-text text-transparent">AV</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-sm lg:text-base">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - enhanced with professional styling and staggered animation */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-to-b from-stellar-dark/95 to-stellar-dark backdrop-blur-lg z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } pt-16 sm:pt-20 overflow-hidden`}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-stellar-purple/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-stellar-blue/5 blur-3xl"></div>
        
        <nav className="flex flex-col items-center gap-5 sm:gap-6 p-4 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              style={{ 
                animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s',
                opacity: 0,
                animation: isMenuOpen ? 'fade-in 0.5s forwards' : 'none'
              }}
              className="text-lg sm:text-xl nav-link py-2 px-4 w-full text-center hover:bg-white/5 hover:scale-105 rounded-md transition-all mobile-shadow relative overflow-hidden"
              onClick={toggleMenu}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-stellar-purple/10 to-stellar-blue/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
