import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 bg-white/60 border-t border-[#2E7D32]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase">
            Cerita Sahabat Bumi
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1E3A20] font-serif-heading tracking-tight">
            Pengalaman Nyata Memulai <span className="text-[#2E7D32]">Hidup Minim Sampah</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1E3A20]/80 leading-relaxed">
            Perjalanan sustainability bukan tentang kompetisi, melainkan berbagi inspirasi. Simak bagaimana langkah kecil telah mengubah keseharian mereka:
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-[#FAF7F0] rounded-3xl p-7 sm:p-8 border border-[#2E7D32]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#2E7D32]/30 group-hover:text-[#2E7D32]/60 transition-colors" />
                </div>

                {/* Highlight banner in clean text style */}
                <div className="text-xs font-bold text-[#2E7D32] mb-3 leading-snug">
                  &ldquo;{item.highlight}&rdquo;
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#1E3A20]/80 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-[#2E7D32]/10 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={`Foto ${item.name}, penggiat hidup minim sampah dari ${item.city}`}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#2E7D32]/30"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[#1E3A20] flex items-center gap-1.5 truncate font-serif-heading">
                    <span>{item.name}</span>
                    {item.verified && (
                      <span title="Terverifikasi" className="inline-flex">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#1E3A20]/65 truncate">
                    {item.role} · {item.city}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Impact statement badge */}
        <div className="mt-14 max-w-xl mx-auto text-center p-4 rounded-2xl bg-white border border-[#2E7D32]/15 shadow-xs">
          <p className="text-xs text-[#1E3A20]/75">
            Ingin berbagi cerita atau hasil kreasi <strong className="font-semibold text-[#2E7D32]">upcycling barang bekas</strong> Anda? Hubungi kami lewat Instagram atau form kontak di bawah!
          </p>
        </div>

      </div>
    </section>
  );
};
