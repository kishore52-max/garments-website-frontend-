import React from 'react';
import { Label } from '../ui/Label';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <span className="font-serif text-3xl tracking-widest uppercase text-cream block">
              Atelier Noir
            </span>
            <p className="text-taupe font-serif italic text-xl max-w-xs">
              Crafted in silence. Worn in light.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-taupe hover:text-gold transition-colors">
                
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-taupe hover:text-gold transition-colors">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-taupe hover:text-gold transition-colors">
                
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <Label className="text-gold mb-8 block">Explore</Label>
            <ul className="space-y-4">
              {[
              'The House',
              'Collection',
              'Craft',
              'Sustainability',
              'Contact'].
              map((item) =>
              <li key={item}>
                  <a
                  href={`#${item.toLowerCase().split(' ')[0]}`}
                  className="text-cream/70 hover:text-cream transition-colors text-sm">
                  
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <Label className="text-gold mb-8 block">The Atelier Journal</Label>
            <p className="text-taupe text-sm mb-6">
              Subscribe to receive private invitations and editorial pieces.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-3 text-cream placeholder:text-taupe focus:outline-none focus:border-gold transition-colors text-sm" />
              
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gold hover:text-cream transition-colors">
                
                <Label>Subscribe</Label>
              </button>
            </form>
            <div className="mt-8">
              <p className="text-taupe text-sm">
                15 Rue de la Paix
                <br />
                75002 Paris, France
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <Label className="text-taupe">
            © ATELIER NOIR MMXXV. ALL RIGHTS RESERVED.
          </Label>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-taupe hover:text-cream transition-colors text-xs">
              
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-taupe hover:text-cream transition-colors text-xs">
              
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}