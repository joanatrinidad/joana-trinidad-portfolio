import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6 h-full flex flex-col justify-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let's work together</h2>
        <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
          Feel free to reach out to me through any of the following channels. I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <a 
            href="mailto:joanatrinidad2001@gmail.com" 
            className="text-sm sm:text-base hover:text-primary transition-colors"
          >
            joanatrinidad2001@gmail.com
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Linkedin className="w-5 h-5 text-primary" />
          </div>
          <a 
            href="https://www.linkedin.com/in/joanatrinidad" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm sm:text-base hover:text-primary transition-colors"
          >
            linkedin.com/in/joanatrinidad
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <a 
            href="tel:09763139568" 
            className="text-sm sm:text-base hover:text-primary transition-colors"
          >
            09763139568
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 