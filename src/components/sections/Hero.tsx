import React from 'react';
import { motion } from 'framer-motion';
import { FabricScene } from '../three/FabricScene';
import { Label } from '../ui/Label';
import { Button } from '../ui/Button';
export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* 3D Background */}
      <FabricScene />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)] z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 mt-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}>
          
          <Label className="text-gold mb-8 block">
            Crafted in Silence — Worn in Light
          </Label>
          <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl text-cream tracking-tight mb-12">
            Atelier Noir
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="#collection" variant="primary">
              Explore Collection
            </Button>
            <Button href="#craft" variant="ghost">
              Our Craft
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}>
        
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{
              y: ['-100%', '200%']
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear'
            }} />
          
        </div>
        <Label className="text-taupe">Scroll to Discover</Label>
      </motion.div>
    </section>);

}