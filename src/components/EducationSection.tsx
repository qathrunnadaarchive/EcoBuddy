import React, { useState } from 'react';
import { EDUCATION_GUIDES } from '../data/mockData';
import { EducationGuide } from '../types';
import { GuideModal } from './GuideModal';
import { BookOpen, ArrowRight, Sparkles, Clock, Hammer } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<EducationGuide | null>(null);

  return (
    <section id="edukasi" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with SEO keywords */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase">
            Edukasi Sustainability & Upcycling
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1E3A20] font-serif-heading tracking-tight">
            Belajar Hidup Minim Sampah & Kreasi <span className="text-[#2E7D32]">Upcycling Barang Bekas</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1E3A20]/80 leading-relaxed">
            Panduan aplikatif yang dirancang untuk kehidupan nyata di Indonesia. Tanpa teori rumit, mudah diikuti seluruh anggota keluarga, dan langsung memberi dampak nyata.
          </p>
        </div>

        {/* 3 Education Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION_GUIDES.map((guide) => (
            <article
              key={guide.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#2E7D32]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Descriptive SEO Alt Text */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={guide.image}
                  alt={guide.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Floating subtle category indicator */}
                <div className="absolute top-3 left-3 bg-[#1E3A20]/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {guide.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators (Zero-pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-[#1E3A20]/60 mb-2.5">
                    <span>{guide.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>Tingkat: {guide.difficulty}</span>
                  </div>

                  {/* H3 Heading */}
                  <h3 className="text-xl font-bold text-[#1E3A20] font-serif-heading leading-snug group-hover:text-[#2E7D32] transition-colors">
                    {guide.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-[#1E3A20]/75 leading-relaxed line-clamp-3">
                    {guide.summary}
                  </p>
                </div>

                {/* Card CTA & Impact */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-[#2E7D32] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dampak Teruji</span>
                  </div>

                  <button
                    onClick={() => setSelectedGuide(guide)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E7D32] hover:text-[#1B5E20] group/btn transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-md px-1 py-0.5"
                    aria-label={`Baca panduan lengkap untuk ${guide.title}`}
                  >
                    <span>Baca Panduan</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Community invitation banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#E8F5E9]/60 border border-[#2E7D32]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#1E3A20]">
              Punya ide kreasi upcycling barang bekas lainnya?
            </h4>
            <p className="text-xs text-[#1E3A20]/75 mt-0.5">
              Konsultasikan kelayakan bahan daur ulang Anda langsung bersama asisten ramah lingkungan EcoBuddy.
            </p>
          </div>
          <a
            href="#konsultasi"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#2E7D32] hover:bg-[#1B5E20] rounded-xl transition-colors shadow-sm shrink-0"
          >
            <span>Tanya Solusi Upcycling</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Guide Details Modal */}
      <GuideModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
    </section>
  );
};
