import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'; // Import des icônes Heroicons

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll et changement de couleur de fond
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 ${isScrolled ? 'bg-primary text-text_light shadow-lg shadow-secondary/50' : 'bg-transparent text-text_dark'} transition-all duration-300 z-50`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" className="text-2xl font-semibold">Florian Guiot</a>

        {/* Menu burger (mobile) */}
        <div className="lg:hidden flex items-center">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl"
            animate={{
              rotate: mobileMenuOpen ? 30 : 0, // Rotation de 30° pour transformer en X
              scale: mobileMenuOpen ? 1.2 : 1, // Agrandir l'icône pendant l'animation
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Affichage des icônes en fonction de l'état du menu */}
            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Menu desktop */}
        <div className="hidden lg:flex space-x-4 flex items-center">
          <a href="#home" className="navbar_link">Accueil</a>
          <a href="#projects" className="navbar_link">Mes projets</a>
          <a href="#contact" className="navbar_link">Contact</a>
          <a href="#cv" className={`${isScrolled ? 'btn-border-light' : 'btn-primary'} flex items-center`}><ArrowDownTrayIcon className="h-6 w-6 pr-2" /> <span className='text-nowrap'> Mon CV</span></a>
        </div>

        {/* Menu mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}  // Départ légèrement au-dessus
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            y: mobileMenuOpen ? 0 : -20  // Animation pour remonter si fermé
          }}
          transition={{
            opacity: { duration: 0.3 },
            y: { duration: 0.3 }
          }}
          className={`lg:hidden absolute top-16 left-0 w-full bg-background text-text_dark py-4 px-6`}
        >
          <a href="#home" className="block py-2">Accueil</a>
          <a href="#projects" className="block py-2">Mes projets</a>
          <a href="#contact" className="block py-2">Contact</a>
          <a href="#cv" className="btn-primary py-2 flex items-center"><ArrowDownTrayIcon className="h-6 w-6 pr-2" /> <span className='text-nowrap'> Mon CV</span></a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
