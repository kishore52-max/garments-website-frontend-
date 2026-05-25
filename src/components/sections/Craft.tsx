import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Label } from '../ui/Label';
gsap.registerPlugin(ScrollTrigger);
const steps = [
{
  num: '01',
  title: 'Selection',
  desc: 'Sourcing only the finest natural fibers from ethical producers globally.',
  img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2070&auto=format&fit=crop'
},
{
  num: '02',
  title: 'Weaving',
  desc: 'Partnering with heritage mills in Como and Yorkshire for bespoke textiles.',
  img: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1974&auto=format&fit=crop'
},
{
  num: '03',
  title: 'Cutting',
  desc: 'Single-piece pattern cutting to ensure perfect drape and alignment.',
  img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2070&auto=format&fit=crop'
},
{
  num: '04',
  title: 'Stitching',
  desc: 'Hand-finished seams and structural reinforcements by master tailors.',
  img: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2070&auto=format&fit=crop'
},
{
  num: '05',
  title: 'Finishing',
  desc: 'Rigorous pressing, quality inspection, and archival packaging.',
  img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2076&auto=format&fit=crop'
}];

export function Craft() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Only apply horizontal scroll on desktop
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const sections = gsap.utils.toArray('.craft-step') as HTMLElement[];
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + scrollContainerRef.current?.offsetWidth
        }
      });
    });
    return () => mm.revert();
  }, []);
  return (
    <section
      id="craft"
      ref={sectionRef}
      className="bg-cream text-black overflow-hidden relative">
      
      {/* Mobile Layout (Vertical) */}
      <div className="lg:hidden py-32 px-6 space-y-24">
        <div className="mb-16">
          <Label className="text-gold mb-4 block">The Process</Label>
          <h2 className="font-serif italic text-5xl">Manufacturing</h2>
        </div>

        {steps.map((step, i) =>
        <div key={i} className="space-y-6">
            <div className="text-gold font-serif text-3xl italic">
              {step.num}
            </div>
            <h3 className="font-serif text-4xl">{step.title}</h3>
            <p className="text-charcoal/80 font-light">{step.desc}</p>
            <img
            src={step.img}
            alt={step.title}
            className="w-full h-64 object-cover grayscale" />
          
          </div>
        )}
      </div>

      {/* Desktop Layout (Horizontal Scroll) */}
      <div
        className="hidden lg:flex h-screen items-center"
        ref={scrollContainerRef}
        style={{
          width: `${steps.length * 100}vw`
        }}>
        
        {steps.map((step, i) =>
        <div
          key={i}
          className="craft-step w-screen h-full flex items-center justify-center px-24 relative">
          
            {/* Background Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif italic text-black/5 pointer-events-none select-none z-0">
              {step.num}
            </div>

            <div className="grid grid-cols-2 gap-24 items-center w-full max-w-[1400px] z-10">
              <div className="space-y-8">
                <Label className="text-gold block">Step {step.num}</Label>
                <h3 className="font-serif italic text-7xl">{step.title}</h3>
                <p className="text-charcoal/80 font-light text-xl max-w-md leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="relative h-[60vh] overflow-hidden">
                <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}