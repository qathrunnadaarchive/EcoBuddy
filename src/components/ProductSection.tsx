import React, { useState } from 'react';
import { ECO_PRODUCTS } from '../data/mockData';
import { EcoProduct } from '../types';
import { OrderModal } from './OrderModal';
import { ShoppingBag, Star, Sparkles, Check, ArrowRight } from 'lucide-react';

export const ProductSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<EcoProduct | null>(null);

  return (
    <section id="produk" className="py-20 bg-white/70 border-y border-[#2E7D32]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase">
            Katalog Starter Kit EcoBuddy
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1E3A20] font-serif-heading tracking-tight">
            Koleksi <span className="text-[#2E7D32]">Produk Ramah Lingkungan</span> Esensial
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1E3A20]/80 leading-relaxed">
            Dipilih khusus dengan standar kualitas tinggi, bebas plastik sekali pakai, dan terbukti tahan bertahun-tahun untuk mendukung perjalanan hidup minim sampah Anda.
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ECO_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="bg-[#FAF7F0] rounded-3xl overflow-hidden border border-[#2E7D32]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#2E7D32] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      {product.badge}
                    </div>
                  )}

                  {/* Rating indicator */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-md text-xs font-semibold text-[#1E3A20] flex items-center gap-1 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Materials unboxed metadata */}
                  <div className="text-[11px] font-medium text-[#2E7D32] uppercase tracking-wide mb-1 truncate">
                    {product.materials.split(',')[0]}
                  </div>

                  <h3 className="text-lg font-bold text-[#1E3A20] font-serif-heading leading-snug group-hover:text-[#2E7D32] transition-colors">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#1E3A20]/70 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Bullet features */}
                  <ul className="mt-3.5 space-y-1 text-xs text-[#1E3A20]/80">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 truncate">
                        <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="pt-3 border-t border-[#2E7D32]/10 mb-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-[#1E3A20]/60 block">Harga Komunitas</span>
                    <span className="text-xl font-extrabold text-[#2E7D32]">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      Rp {product.originalPrice.toLocaleString('id-ID')}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-2.5 px-4 bg-[#2E7D32] hover:bg-[#1B5E20] active:scale-[0.98] text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
                  aria-label={`Pesan ${product.name}`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Pesan Sekarang</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Zero Waste Packaging Pledge */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F5F0E1] border border-[#2E7D32]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1E3A20]">
                Komitmen Pengiriman 100% Bebas Plastik
              </h4>
              <p className="text-xs text-[#1E3A20]/75">
                Setiap pesanan dibungkus menggunakan kardus upcycle, tali rami alami, dan lakban kertas berbahan dasar tepung tapioka.
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold text-[#2E7D32] bg-white px-3 py-1.5 rounded-lg border border-[#2E7D32]/15 shrink-0">
            🌱 Bebas Bubble Wrap Sintetis
          </div>
        </div>

      </div>

      {/* Order Modal Component */}
      <OrderModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};
