import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Label } from '../ui/Label';
import { MenuIcon, XIcon } from 'lucide-react';
const links = [
{
  name: 'The House',
  href: '#story'
},
{
  name: 'Collection',
  href: '#collection'
},
{
  name: 'Craft',
  href: '#craft'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="z-50 relative">
            
            <span className="font-serif text-2xl tracking-widest uppercase text-cream">
              Atelier Noir
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {links.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative py-2">
              
                <Label className="text-cream/70 group-hover:text-gold transition-colors duration-300">
                  {link.name}
                </Label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="border border-gold px-6 py-3 rounded-full hover:bg-gold hover:text-black transition-colors duration-500">
              
              <Label>Book a Fitting</Label>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 relative text-cream"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            
            {mobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: '-100%'
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: '-100%'
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="fixed inset-0 z-40 bg-black flex flex-col justify-center px-6">
          
            <div className="flex flex-col gap-8">
              {links.map((link, i) =>
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.5
              }}
              className="font-serif text-5xl italic text-cream hover:text-gold transition-colors">
              
                  {link.name}
                </motion.a>
            )}
              <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.6
              }}
              className="mt-8 pt-8 border-t border-white/10">
              
                <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-block border border-gold px-8 py-4 rounded-full text-gold">
                
                  <Label>Book a Fitting</Label>
                </a>
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}