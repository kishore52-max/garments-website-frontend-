import React, { useEffect } from 'react';
import { CustomCursor } from './components/layout/CustomCursor';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Statement } from './components/sections/Statement';
import { Story } from './components/sections/Story';
import { Collection } from './components/sections/Collection';
import { Craft } from './components/sections/Craft';
import { FabricShowcase } from './components/sections/FabricShowcase';
import { Sustainability } from './components/sections/Sustainability';
import { Contact } from './components/sections/Contact';
export function App() {
  useEffect(() => {
    // Native smooth scroll fallback (Lenis unavailable in this environment)
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = previous;
    };
  }, []);
  return (
    <div className="relative bg-black min-h-screen selection:bg-gold selection:text-black">
      <CustomCursor />
      <Nav />

      <main>
        <Hero />
        <Statement />
        <Story />
        <Collection />
        <Craft />
        <FabricShowcase />
        <Sustainability />
        <Contact />
      </main>

      <Footer />
    </div>);

}