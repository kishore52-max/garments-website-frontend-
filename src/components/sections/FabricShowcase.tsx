import React from 'react';
import { Label } from '../ui/Label';
const fabrics = [
{
  name: 'Sea Island Cotton',
  origin: 'West Indies',
  weight: '120 GSM',
  feel: 'Silky & Breathable',
  img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2070&auto=format&fit=crop'
},
{
  name: 'Super 150s Wool',
  origin: 'Biella, Italy',
  weight: '240 GSM',
  feel: 'Fluid & Resilient',
  img: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=2070&auto=format&fit=crop'
},
{
  name: 'Pure Cashmere',
  origin: 'Inner Mongolia',
  weight: '320 GSM',
  feel: 'Cloud-like Softness',
  img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2070&auto=format&fit=crop'
}];

export function FabricShowcase() {
  return (
    <section className="py-32 md:py-48 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <Label className="text-gold mb-4 block">Raw Materials</Label>
          <h2 className="font-serif italic text-5xl md:text-6xl text-cream">
            The Foundation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-1000">
          {fabrics.map((fabric, i) =>
          <div
            key={i}
            className="group relative h-[500px] rounded-sm overflow-hidden transition-all duration-500 hover:z-10"
            style={{
              transformStyle: 'preserve-3d'
            }}>
            
              {/* 3D Hover Effect Container */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:[transform:rotateX(5deg)_rotateY(-5deg)_scale(1.05)]">
                <img
                src={fabric.img}
                alt={fabric.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Border that lights up */}
                <div className="absolute inset-4 border border-white/10 group-hover:border-gold/50 transition-colors duration-500" />

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-serif text-3xl text-cream mb-4">
                    {fabric.name}
                  </h3>

                  <div className="space-y-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <Label className="text-taupe">Origin</Label>
                      <span className="text-cream text-sm font-light">
                        {fabric.origin}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <Label className="text-taupe">Weight</Label>
                      <span className="text-cream text-sm font-light">
                        {fabric.weight}
                      </span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <Label className="text-taupe">Touch</Label>
                      <span className="text-cream text-sm font-light">
                        {fabric.feel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}