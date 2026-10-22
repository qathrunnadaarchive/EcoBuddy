import React, { useState } from 'react';
import { ZERO_WASTE_BENEFITS, ZERO_WASTE_PRINCIPLES_5R } from '../data/mockData';
import { Coins, Home, Globe, Calculator, Sparkles, Check, ArrowRight } from 'lucide-react';

export const ZeroWasteIntro: React.FC = () => {
  // Interactive mini calculator states
  const [familyMembers, setFamilyMembers] = useState(2);
  const [avoidBottlesPerDay, setAvoidBottlesPerDay] = useState(2);
  const [avoidBagsPerWeek, setAvoidBagsPerWeek] = useState(7);

  // Calculations:
  // Water bottle ~ Rp 4,500/bottle
  // Plastic bag ~ Rp 500/bag or indirect cost
  // Total saved per year:
  const annualBottlesSaved = avoidBottlesPerDay * familyMembers * 365;
  const annualBagsSaved = avoidBagsPerWeek * familyMembers * 52;
  const estimatedMoneySaved = annualBottlesSaved * 4500 + annualBagsSaved * 500;
  const carbonSavedKg = Math.round((annualBottlesSaved * 0.0828 + annualBagsSaved * 0.033) * 10) / 10;

  const getBenefitIcon = (name: string) => {
    switch (name) {
      case 'Coins':
        return <Coins className="w-7 h-7 text-[#2E7D32]" />;
      case 'Home':
        return <Home className="w-7 h-7 text-[#2E7D32]" />;
      case 'Globe':
        return <Globe className="w-7 h-7 text-[#2E7D32]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#2E7D32]" />;
    }
  };

  return (
    <section id="tentang" className="py-20 bg-white/70 border-y border-[#2E7D32]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase">
            Filosofi & Fondasi
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1E3A20] font-serif-heading tracking-tight">
            Apa Itu Gaya Hidup <span className="text-[#2E7D32]">Zero Waste</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1E3A20]/80 leading-relaxed">
            <strong>Zero Waste</strong> atau <strong>hidup minim sampah</strong> adalah filosofi kehidupan sadar (mindful living) yang berfokus pada pencegahan timbulan sampah dengan memanfaatkan kembali sumber daya secara maksimal. Tujuannya bukan menghasilkan &ldquo;nol sampah secara mutlak&rdquo; seketika, melainkan mengalihkan sebanyak mungkin limbah agar tidak berakhir di tempat pembuangan akhir (TPA) atau lautan.
          </p>
        </div>

        {/* 5R Principles Banner */}
        <div className="mt-12 bg-[#F5F0E1] rounded-2xl p-6 sm:p-8 border border-[#2E7D32]/15 shadow-sm">
          <div className="text-center sm:text-left mb-6">
            <h3 className="text-lg font-bold text-[#1E3A20] flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]" />
              Panduan Inti: Rumus 5R Menuju Hidup Minim Sampah
            </h3>
            <p className="text-xs sm:text-sm text-[#1E3A20]/75 mt-1">
              Urutan tindakan terbukti paling ampuh sebelum sampah sempat diproduksi:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ZERO_WASTE_PRINCIPLES_5R.map((item, index) => (
              <div
                key={item.name}
                className="bg-white/90 rounded-xl p-4 border border-[#2E7D32]/10 hover:border-[#2E7D32]/40 transition-colors shadow-2xs"
              >
                <div className="text-xs font-bold text-[#2E7D32] mb-1">
                  0{index + 1}. Prinsip
                </div>
                <div className="font-bold text-sm text-[#1E3A20] mb-2">
                  {item.name}
                </div>
                <p className="text-xs text-[#1E3A20]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Benefits Grid (Hemat, Rapi, Sehat) */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
              Manfaat Nyata
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E3A20] font-serif-heading mt-1">
              3 Manfaat Nyata yang Langsung Anda Rasakan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ZERO_WASTE_BENEFITS.map((benefit) => (
              <article
                key={benefit.id}
                className="bg-[#F5F0E1]/80 rounded-2xl p-6 sm:p-8 border border-[#2E7D32]/15 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                    {getBenefitIcon(benefit.iconName)}
                  </div>

                  <h4 className="text-xl font-bold text-[#1E3A20] font-serif-heading mb-2">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-xs font-semibold text-[#2E7D32] mb-3">
                    {benefit.tagline}
                  </p>

                  <p className="text-sm text-[#1E3A20]/75 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#2E7D32]/15 flex items-baseline justify-between">
                  <span className="text-xl font-extrabold text-[#2E7D32]">
                    {benefit.stat}
                  </span>
                  <span className="text-xs text-[#1E3A20]/60 text-right">
                    {benefit.statLabel}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Interactive Feature: Kalkulator Simulasi Penghematan */}
        <div className="mt-16 bg-gradient-to-br from-[#1E3A20] to-[#2E7D32] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
            <Globe className="w-96 h-96" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Left: Sliders */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wide uppercase mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulasi Interaktif EcoBuddy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-heading">
                Hitung Potensi Penghematan Sampah & Rupiah Anda
              </h3>
              <p className="text-sm sm:text-base text-white/85 mt-2">
                Geser nilai berikut sesuai kebiasaan rumah tangga Anda dan lihat dampak nyata penghematan hidup minim sampah selama satu tahun:
              </p>

              <div className="mt-6 space-y-5">
                {/* Slider 1: Anggota Keluarga */}
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-1.5">
                    <span>Jumlah Anggota Keluarga</span>
                    <span className="text-[#A5D6A7] font-bold">{familyMembers} Orang</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={familyMembers}
                    onChange={(e) => setFamilyMembers(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#81C784]"
                    aria-label="Jumlah anggota keluarga"
                  />
                  <div className="flex justify-between text-[11px] text-white/60 mt-1">
                    <span>1 (Pribadi/Kosan)</span>
                    <span>3 Orang</span>
                    <span>6+ Orang</span>
                  </div>
                </div>

                {/* Slider 2: Botol Air Minum */}
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-1.5">
                    <span>Konsumsi Botol Kemasan Plastik / Orang / Hari</span>
                    <span className="text-[#A5D6A7] font-bold">{avoidBottlesPerDay} Botol</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={avoidBottlesPerDay}
                    onChange={(e) => setAvoidBottlesPerDay(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#81C784]"
                    aria-label="Botol plastik per hari"
                  />
                  <div className="flex justify-between text-[11px] text-white/60 mt-1">
                    <span>0 (Sudah bawa tumbler)</span>
                    <span>2 Botol</span>
                    <span>5 Botol/hari</span>
                  </div>
                </div>

                {/* Slider 3: Kantong Kresek */}
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-1.5">
                    <span>Kantong Kresek Belanja / Keluarga / Minggu</span>
                    <span className="text-[#A5D6A7] font-bold">{avoidBagsPerWeek} Kantong</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={avoidBagsPerWeek}
                    onChange={(e) => setAvoidBagsPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#81C784]"
                    aria-label="Kantong kresek per minggu"
                  />
                  <div className="flex justify-between text-[11px] text-white/60 mt-1">
                    <span>0</span>
                    <span>10 Kantong</span>
                    <span>20+ Kantong/minggu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator Right: Output Metrics Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#1E3A20] rounded-2xl p-6 sm:p-7 shadow-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-[#2E7D32] mb-1">
                  Estimasi Dampak 1 Tahun
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1B5E20] font-serif-heading">
                  Rp {estimatedMoneySaved.toLocaleString('id-ID')}
                </div>
                <div className="text-xs text-[#1E3A20]/70 pb-4 border-b border-slate-200">
                  Uang tunai yang dapat Anda tabung atau alihkan ke kebutuhan lain.
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#1E3A20]/80">Botol plastik dicegah:</span>
                    <span className="font-bold text-[#2E7D32]">{annualBottlesSaved.toLocaleString('id-ID')} botol</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#1E3A20]/80">Kantong kresek dicegah:</span>
                    <span className="font-bold text-[#2E7D32]">{annualBagsSaved.toLocaleString('id-ID')} lembar</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#1E3A20]/80">Jejak karbon dikurangi:</span>
                    <span className="font-bold text-[#C86D51]">~{carbonSavedKg} kg CO₂e</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-150">
                  <a
                    href="#edukasi"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Mulai Sekarang Lewat Edukasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
