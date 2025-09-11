import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Typewriter } from 'react-simple-typewriter';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, currentTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: 'public/Archita Manasvis Resume.pdf', target: '_blank' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  const handleMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  const navbarClasses = `fixed w-full transition-all duration-300 z-50 
    ${isScrolled 
      ? `${currentTheme.background.secondary} shadow-lg backdrop-blur-sm bg-opacity-90` 
      : `${theme === 'dark' ? 'bg-gray-900 bg-opacity-50' : 'bg-transparent'}`
    }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${currentTheme.text.accent} hover:scale-110 transition-transform duration-300`}>
                AM
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.target || '_self'}
                  className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} 
                    transition-colors relative group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pretty-blue 
                    transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              <button
                onClick={handleThemeToggle}
                className={`p-2 rounded-full ${currentTheme.background.accent} 
                  hover:ring-2 ring-pretty-blue transition-all duration-300`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-pretty-blue" />
                ) : (
                  <Sun className="w-5 h-5 text-pretty-blue" />
                )}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={handleThemeToggle}
                className={`z-50 p-2 rounded-full ${currentTheme.background.accent} 
                  hover:ring-2 ring-pretty-blue transition-all duration-300`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-pretty-blue" />
                ) : (
                  <Sun className="w-5 h-5 text-pretty-blue" />
                )}
              </button>
              
              <button
                onClick={handleMenuToggle}
                className={`z-50 ${currentTheme.text.primary} hover:${currentTheme.text.accent}`}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className={`md:hidden fixed inset-0 top-16 ${currentTheme.background.secondary} z-40`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.target || '_self'}
                  className={`block px-3 py-2 rounded-md ${currentTheme.text.primary} 
                    hover:${currentTheme.background.accent} transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-20 min-h-screen flex items-center ${currentTheme.background.primary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className={`block ${currentTheme.text.primary}`}>Hi, I'm</span>
              <span className="block text-pretty-blue">
                <Typewriter
                  words={['Archita Manasvi']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className={`mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ${currentTheme.text.secondary}`}>
              CS Student at Georgia Tech | Interest in DS, Product, AI, and Consulting
            </p>
            
            <div className="mt-5 flex justify-center space-x-6">
              <a href="https://github.com/amanasvi2" className={`${currentTheme.text.secondary} hover:text-pretty-blue`} target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/archita-manasvi/" className={`${currentTheme.text.secondary} hover:text-pretty-blue`} target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:architamanasvi@gmail.com" className={`${currentTheme.text.secondary} hover:text-pretty-blue`}>
                <Mail size={24} />
              </a>
            </div>
            
            <div className="mt-8">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pretty-blue hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
                <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavigationBar;