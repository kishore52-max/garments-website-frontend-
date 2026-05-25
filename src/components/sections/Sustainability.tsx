import React from 'react';
import { Label } from '../ui/Label';
export function Sustainability() {
  return (
    <section className="py-32 md:py-48 bg-cream text-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 text-center">
          <div>
            <div className="font-serif italic text-7xl md:text-8xl text-black mb-4">
              0
            </div>
            <Label className="text-taupe">Synthetic Dyes Used</Label>
          </div>
          <div>
            <div className="font-serif italic text-7xl md:text-8xl text-black mb-4">
              100<span className="text-5xl">%</span>
            </div>
            <Label className="text-taupe">Traceable Supply Chain</Label>
          </div>
          <div>
            <div className="font-serif italic text-7xl md:text-8xl text-black mb-4">
              12
            </div>
            <Label className="text-taupe">Master Artisans</Label>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />
          <p className="text-charcoal/80 font-light text-xl leading-relaxed">
            Sustainability is not a marketing initiative; it is a prerequisite
            for luxury. We create fewer things, of higher quality, designed to
            last generations. Our commitment to the environment is reflected in
            our absolute refusal to compromise on materials or ethics.
          </p>
        </div>
      </div>
    </section>);

}