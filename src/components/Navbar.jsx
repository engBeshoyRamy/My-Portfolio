import React from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ isMenuOpen, setIsMenuOpen, scrolled, activeSection, scrollToSection }) {
  const menuItems = ['home', 'about', 'services','experience',  'projects', 'contact'];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300" 
            onClick={() => scrollToSection('home')}
          >
            <span className="text-white">Eng.</span>
            <span className="text-cyan-400 animate-pulse">Beshoy Ramy</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 ${activeSection === item ? 'text-cyan-400 scale-110' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Let's Talk
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden hover:scale-110 transition-transform duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-slideDown">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize hover:text-cyan-400 transition-all duration-300 py-2 hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;