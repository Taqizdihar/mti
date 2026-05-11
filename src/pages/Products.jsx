import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShoppingBag, ExternalLink } from 'lucide-react';

const Products = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold mb-2">My Products</h2>
        <div className="w-20 h-1 bg-white/30 rounded-full mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.products.map((product, index) => (
            <div key={index} className="glass p-6 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <ShoppingBag size={24} />
                </div>
                <span className="text-2xl font-bold text-white/90">{product.price}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{product.description}</p>
              <a 
                href={product.link}
                className="inline-flex items-center gap-2 glass px-6 py-2 rounded-xl text-sm font-medium group-hover:bg-white/20 transition-all"
              >
                Learn More <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
