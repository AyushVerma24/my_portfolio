
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SOULO AI Assistant",
      description: "An AI-powered virtual assistant for enterprise workflow optimization and task automation.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500",
      tags: ["React", "TensorFlow.js", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Quantum Cloud Platform",
      description: "Secure cloud infrastructure with quantum-resistant encryption for sensitive enterprise data.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500",
      tags: ["Python", "AWS", "Docker", "React"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain management system using blockchain technology for verification.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500",
      tags: ["Solidity", "Ethereum", "React", "Web3.js"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool to visualize and understand neural network architecture and data flow.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
      tags: ["TypeScript", "D3.js", "TensorFlow", "Next.js"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-stellar-dark/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stellar-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stellar-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title pb-4 mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group glass-card overflow-hidden rounded-xl transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-stellar-purple/20"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stellar-dark/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-3">
                    <a 
                      href={project.githubUrl} 
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Live Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="gradient-button inline-flex items-center gap-2">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
