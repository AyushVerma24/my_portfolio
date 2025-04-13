
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stellar-dark border-t border-white/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-stellar-purple">A</span><span className="text-white">V</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              BTech Student & Aspiring Technology Professional
            </p>
          </div>

          <div className="flex gap-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/AyushVerma24" 
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayush-verma24" 
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/Ayush241220031" 
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:verma24122003@gmail.com" 
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Ayush Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
