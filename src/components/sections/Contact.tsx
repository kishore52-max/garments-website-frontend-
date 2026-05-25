import React, { useState } from 'react';
import { Label } from '../ui/Label';
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <section
      id="contact"
      className="py-32 md:py-48 bg-black border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Form */}
          <div>
            <Label className="text-gold mb-6 block">Private Appointments</Label>
            <h2 className="font-serif italic text-5xl md:text-6xl text-cream mb-16">
              Begin a conversation.
            </h2>

            {submitted ?
            <div className="py-12 border-t border-b border-white/10 text-center">
                <h3 className="font-serif italic text-3xl text-cream mb-4">
                  Message Received
                </h3>
                <p className="text-taupe font-light">
                  Our concierge will contact you shortly.
                </p>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="relative">
                  <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-cream placeholder:text-taupe focus:outline-none focus:border-gold transition-colors peer" />
                
                </div>
                <div className="relative">
                  <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-cream placeholder:text-taupe focus:outline-none focus:border-gold transition-colors peer" />
                
                </div>
                <div className="relative">
                  <input
                  type="text"
                  placeholder="Subject (Optional)"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-cream placeholder:text-taupe focus:outline-none focus:border-gold transition-colors peer" />
                
                </div>
                <div className="relative">
                  <textarea
                  required
                  rows={1}
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-cream placeholder:text-taupe focus:outline-none focus:border-gold transition-colors resize-none peer" />
                
                </div>

                <button type="submit" className="group relative inline-block">
                  <Label className="text-cream group-hover:text-gold transition-colors">
                    Send Inquiry
                  </Label>
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </form>
            }
          </div>

          {/* Right: Info */}
          <div className="lg:pl-24 lg:border-l border-white/10 flex flex-col justify-center space-y-16">
            <div>
              <Label className="text-taupe mb-4 block">The Atelier</Label>
              <p className="text-cream font-light text-lg">
                15 Rue de la Paix
                <br />
                75002 Paris, France
              </p>
            </div>

            <div>
              <Label className="text-taupe mb-4 block">Contact</Label>
              <p className="text-cream font-light text-lg">
                concierge@ateliernoir.com
                <br />
                +33 1 42 68 53 00
              </p>
            </div>

            <div>
              <Label className="text-taupe mb-4 block">Hours</Label>
              <p className="text-cream font-light text-lg">
                Monday — Friday
                <br />
                10:00 — 19:00 CET
                <br />
                <span className="text-taupe text-sm mt-2 block">
                  By appointment only.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}