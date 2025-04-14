
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import OptimizedAbout from "../components/sections/OptimizedAbout";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import OptimizedBackground from "../components/ui/optimized-background";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Import optimized CSS
import "../components/ui/optimized-animations.css";

// Lazy load less important sections for better initial performance
const LazyExperience = lazy(() => import("../components/sections/Experience"));
const LazyContact = lazy(() => import("../components/sections/Contact"));

const Index = () => {
  return (
    <OptimizedBackground density={4} colorVariety="mixed" className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }} // Reduced animation duration
      >
        <Hero />
        <OptimizedAbout />
        <Skills />
        <Projects />
        
        {/* Lazy load less critical sections for better performance */}
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <LazyExperience />
          <LazyContact />
        </Suspense>
      </motion.main>
      <Footer />
    </OptimizedBackground>
  );
};

export default Index;
