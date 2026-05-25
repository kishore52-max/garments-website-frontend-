import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Label } from '../ui/Label';
const categories = ['All', 'Men', 'Women', 'Fabrics'];
const products = [
{
  id: 1,
  name: 'Le Manteau Noir',
  desc: 'Wool Overcoat',
  price: '€1,240',
  category: 'Men',
  image:
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1974&auto=format&fit=crop'
},
{
  id: 2,
  name: 'Soie Naturelle',
  desc: 'Silk Camisole',
  price: '€450',
  category: 'Women',
  image:
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop'
},
{
  id: 3,
  name: 'Atelier Trouser',
  desc: 'Italian Wool',
  price: '€680',
  category: 'Men',
  image:
  'https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1964&auto=format&fit=crop'
},
{
  id: 4,
  name: "L'Écharpe",
  desc: 'Cashmere Scarf',
  price: '€320',
  category: 'Women',
  image:
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2070&auto=format&fit=crop'
},
{
  id: 5,
  name: 'Raw Silk Roll',
  desc: '100% Mulberry',
  price: '€120/m',
  category: 'Fabrics',
  image:
  'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1974&auto=format&fit=crop'
},
{
  id: 6,
  name: 'La Chemise',
  desc: 'Crisp Poplin',
  price: '€390',
  category: 'Men',
  image:
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2070&auto=format&fit=crop'
}];

export function Collection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProducts =
  activeFilter === 'All' ?
  products :
  products.filter((p) => p.category === activeFilter);
  return (
    <section id="collection" className="py-32 md:py-48 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <Label className="text-gold mb-4 block">The Archive</Label>
            <h2 className="font-serif italic text-5xl md:text-6xl text-cream">
              Permanent Collection
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-6">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="relative group py-2">
              
                <Label
                className={`${activeFilter === cat ? 'text-cream' : 'text-taupe group-hover:text-cream'} transition-colors`}>
                
                  {cat}
                </Label>
                {activeFilter === cat &&
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold" />

              }
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) =>
            <motion.div
              layout
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.95
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              key={product.id}
              className="group cursor-pointer">
              
                <div className="relative h-[600px] overflow-hidden mb-6 bg-charcoal">
                  <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Label className="text-white border border-white/30 px-6 py-3 rounded-full backdrop-blur-sm">
                      View Details
                    </Label>
                  </div>
                </div>

                <div className="flex justify-between items-end overflow-hidden">
                  <div className="transform transition-transform duration-500">
                    <h3 className="font-serif text-2xl text-cream mb-1">
                      {product.name}
                    </h3>
                    <p className="text-taupe text-sm font-light">
                      {product.desc}
                    </p>
                  </div>
                  <div className="text-gold font-serif italic text-xl">
                    {product.price}
                  </div>
                </div>
                <div className="w-full h-[1px] bg-white/10 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

}