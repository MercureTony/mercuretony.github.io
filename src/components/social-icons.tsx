import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const iconClasses = "w-5 h-5 text-neutral-400 hover:text-neutral-200 transition-colors";

export function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a 
        href="mailto:anthony.m.uyende@gmail.com" 
        className="rounded-lg p-2 hover:bg-neutral-800/50 transition-all"
        aria-label="Email"
      >
        <Mail className={iconClasses} />
      </a>
      
      <a 
        href="tel:+1234567890" 
        className="rounded-lg p-2 hover:bg-neutral-800/50 transition-all"
        aria-label="Phone"
      >
        <Phone className={iconClasses} />
      </a>
      
      <a 
        href="https://github.com/MercureTony" 
        target="_blank" 
        rel="noopener noreferrer"
        className="rounded-lg p-2 hover:bg-neutral-800/50 transition-all"
        aria-label="GitHub"
      >
        <Github className={iconClasses} />
      </a>
      
      <a 
        href="https://linkedin.com/in/anthonyuyende" 
        target="_blank" 
        rel="noopener noreferrer"
        className="rounded-lg p-2 hover:bg-neutral-800/50 transition-all"
        aria-label="LinkedIn"
      >
        <Linkedin className={iconClasses} />
      </a>
      
      <a 
        href="https://twitter.com/auyende" 
        target="_blank" 
        rel="noopener noreferrer"
        className="rounded-lg p-2 hover:bg-neutral-800/50 transition-all"
        aria-label="Twitter"
      >
        <Twitter className={iconClasses} />
      </a>
    </div>
  );
} 