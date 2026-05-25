import React, { useEffect, useRef, createElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function Statement() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!textRef.current) return;
    // Split text into words for animation (simple implementation)
    const text = textRef.current;
    const words = text.innerText.split(' ');
    text.innerHTML = '';
    words.forEach((word) => {
      const span = document.createElement('span');
      span.innerText = word + ' ';
      span.style.opacity = '0.2';
      span.style.display = 'inline-block';
      text.appendChild(span);
    });
    const spans = text.querySelectorAll('span');
    gsap.to(spans, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'center center',
        scrub: 1
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <section
      ref={containerRef}
      className="py-32 md:py-48 bg-black border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2
              ref={textRef}
              className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-cream leading-tight">
              
              We don't follow seasons. We outlast them.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-12">
            <div className="w-12 h-[1px] bg-gold mb-8" />
            <p className="text-taupe font-light leading-relaxed text-lg">
              True luxury is not defined by trends, but by permanence. Every
              garment we create is an exercise in restraint, designed to age
              gracefully and remain relevant long after the season fades.
            </p>
          </div>
        </div>
      </div>
    </section>);

}