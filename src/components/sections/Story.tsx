import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Label } from '../ui/Label';
gsap.registerPlugin(ScrollTrigger);
const stories = [
{
  label: 'Heritage',
  title: 'A Legacy of Restraint',
  desc: 'Founded in the quiet corners of Paris, Atelier Noir began as a rebellion against fast fashion. We sought to return to the essence of garment making: exceptional materials, masterful cuts, and an uncompromising dedication to detail.',
  image:
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop'
},
{
  label: 'The Atelier',
  title: 'Where Time Slows Down',
  desc: 'Our workshop is a sanctuary of focus. Here, master tailors work with a quiet intensity, treating every seam as a structural necessity and every stitch as a signature. We produce in limited quantities to ensure absolute perfection.',
  image:
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2070&auto=format&fit=crop'
},
{
  label: 'The Hand',
  title: 'The Human Element',
  desc: 'No machine can replicate the intuition of the human hand. From the initial drape on the mannequin to the final hand-pressed finish, our garments bear the subtle, beautiful imperfections of true craftsmanship.',
  image:
  'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2070&auto=format&fit=crop'
}];

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray('.story-row') as HTMLElement[];
      rows.forEach((row) => {
        const img = row.querySelector('.story-img');
        const text = row.querySelector('.story-text');
        // Parallax image
        gsap.to(img, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: row,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
        // Reveal text
        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 70%'
          }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-32 md:py-48 bg-cream text-black">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32 md:space-y-48">
        {stories.map((story, index) =>
        <div
          key={index}
          className={`story-row flex flex-col gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          
            {/* Image */}
            <div className="w-full lg:w-1/2 h-[60vh] md:h-[80vh] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/5 z-10" />
              <img
              src={story.image}
              alt={story.title}
              className="story-img w-full h-[120%] object-cover absolute top-[-10%] left-0 grayscale hover:grayscale-0 transition-all duration-1000" />
            
            </div>

            {/* Text */}
            <div className="story-text w-full lg:w-1/2 max-w-xl">
              <Label className="text-gold mb-6 block">{story.label}</Label>
              <h3 className="font-serif italic text-4xl md:text-5xl mb-8">
                {story.title}
              </h3>
              <p className="text-charcoal/80 font-light leading-relaxed text-lg">
                {story.desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>);

}