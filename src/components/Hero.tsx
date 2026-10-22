import React from 'react';
import { ArrowDown, MessageCircle, BookOpen, Sparkles, CheckCircle2, ShieldCheck, TrendingDown } from 'lucide-react';

interface HeroProps {
  onLearnMore: () => void;
  onConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMore, onConsultation }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background soft botanical elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#2E7D32]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#C86D51]/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting (AIDA) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Attention Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gerakan Hidup Minim Sampah Indonesia</span>
            </div>

            {/* H1 Primary Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E3A20] leading-[1.15] tracking-tight font-serif-heading"
            >
              Mulai Hidup Minim Sampah,{' '}
              <span className="text-[#2E7D32] underline decoration-[#81C784]/60 underline-offset-4">
                Mulai dari Hari Ini
              </span>
            </h1>

            {/* Subheading (Interest & Desire) */}
            <p className="mt-6 text-lg sm:text-xl text-[#1E3A20]/80 leading-relaxed max-w-2xl font-normal">
              Bumi tidak membutuhkan segelintir orang yang menjalani <strong className="font-semibold text-[#1E3A20]">zero waste</strong> secara sempurna, melainkan jutaan dari kita yang melangkah konsisten. 
              Temukan cara mudah mengurangi timbulan sampah harian, ide <strong className="font-semibold text-[#1E3A20]">upcycling barang bekas</strong> bernilai guna, dan kurasi <strong className="font-semibold text-[#1E3A20]">produk ramah lingkungan</strong> yang hemat di kantong.
            </p>

            {/* Value check items */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#1E3A20]/85 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>Tanpa rasa bersalah, adaptasi bertahap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>Hemat pengeluaran belanja hingga 35%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>Panduan upcycling botol & kompos dapur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span>Konsultasi AI personal 24/7 gratis</span>
              </div>
            </div>

            {/* Two Distinct CTA Buttons (Action) */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#2E7D32] hover:bg-[#1B5E20] active:scale-[0.98] transition-all duration-200 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2E7D32]/30"
              >
                <BookOpen className="w-5 h-5" />
                <span>Pelajari Zero Waste</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#1E3A20] bg-white hover:bg-[#FAF7F0] active:scale-[0.98] border-2 border-[#2E7D32] hover:border-[#1B5E20] transition-all duration-200 rounded-xl shadow-sm hover:shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2E7D32]/30"
              >
                <MessageCircle className="w-5 h-5 text-[#2E7D32]" />
                <span>Konsultasi Gratis</span>
              </button>
            </div>

            {/* Social Proof metrics */}
            <div className="mt-10 pt-6 border-t border-[#1E3A20]/10 flex flex-wrap items-center gap-6 text-xs text-[#1E3A20]/75">
              <div className="flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-[#2E7D32]" />
                <span><strong>15.200+ kg</strong> sampah plastik terhindari</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                <span><strong>4.800+</strong> pegiat di seluruh Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card with alt text containing target SEO keywords */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Komunitas penggiat hidup minim sampah dan edukasi zero waste memegang tanaman upcycling barang bekas"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient overlay for aesthetic depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#143818]/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid quote badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1E3A20] leading-snug">
                        &ldquo;Mulai dari satu tas kain dan satu botol minum. Perubahan besar berakar dari kebiasaan kecil hari ini.&rdquo;
                      </p>
                      <p className="text-[11px] text-[#2E7D32] font-medium mt-1">
                        — Panduan Kampanye EcoBuddy Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card: Impact Badge */}
              <div className="hidden sm:block absolute -top-4 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-[#2E7D32]/15 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center font-bold text-sm">
                    5R
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E3A20]">Prinsip Berkelanjutan</div>
                    <div className="text-[11px] text-[#1E3A20]/70">Refuse · Reduce · Reuse · Repurpose · Rot</div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card: Community Badge */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-[#2E7D32]/15">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" alt="Sahabat EcoBuddy 1" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Sahabat EcoBuddy 2" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80" alt="Sahabat EcoBuddy 3" />
                  </div>
                  <span className="text-xs font-bold text-[#1E3A20] pl-1">4.8k+ Sahabat</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
