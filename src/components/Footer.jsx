import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: Github, link: 'https://github.com/engBeshoyRamy' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/beshoy-ramy-851911338/' },
    { icon: Mail, link: 'https://mail.google.com/mail' }
  ];

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold hover:scale-110 transition-transform duration-300 cursor-pointer">
            <span className="text-white">Eng.</span>
            <span className="text-cyan-400">Beshoy Ramy</span>
          </div>
          <div className="flex space-x-10">
            <a href="#" className="text-gray-400 hover:text-cyan-400  transition-all duration-300 hover:-translate-y-1">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-8">
          © 2025 Eng.Beshoy Ramy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;