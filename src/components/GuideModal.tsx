import React from 'react';
import { EducationGuide } from '../types';
import { X, Clock, CheckCircle2, AlertCircle, Share2, Sparkles, BookOpen } from 'lucide-react';

interface GuideModalProps {
  guide: EducationGuide | null;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose }) => {
  if (!guide) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Tautan panduan berhasil disalin ke papan klip!');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-guide-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F0] rounded-3xl shadow-2xl border border-[#2E7D32]/20 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
          <img
            src={guide.image}
            alt={guide.imageAlt}
            className="w-full h-full object-cover brightness-90"
          />
          <button
            onClick={onClose}
            aria-label="Tutup panduan"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Unboxed clean metadata banner on image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs font-semibold text-[#A5D6A7] tracking-wider uppercase mb-1">
              {guide.category} · {guide.difficulty} · {guide.readTime}
            </div>
            <h3 id="modal-guide-title" className="text-xl sm:text-2xl font-bold font-serif-heading leading-tight drop-shadow-sm">
              {guide.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Subtitle / summary */}
          <p className="text-base text-[#1E3A20] leading-relaxed font-medium">
            {guide.subtitle}
          </p>

          {/* Eco Impact Box */}
          <div className="p-4 rounded-2xl bg-[#E8F5E9] border border-[#2E7D32]/20 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#2E7D32] uppercase tracking-wide">Dampak Ekologis</div>
              <p className="text-xs sm:text-sm text-[#1E3A20]/85 font-medium mt-0.5">
                {guide.ecoImpact}
              </p>
            </div>
          </div>

          {/* Tools & Materials Needed */}
          <div>
            <h4 className="text-sm font-bold text-[#1E3A20] uppercase tracking-wider mb-3">
              Perlengkapan & Bahan yang Dibutuhkan:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {guide.toolsNeeded.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#2E7D32]/10 text-xs sm:text-sm text-[#1E3A20]">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h4 className="text-sm font-bold text-[#1E3A20] uppercase tracking-wider mb-4">
              Langkah Demi Langkah:
            </h4>
            <div className="space-y-4">
              {guide.steps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#2E7D32]/10 shadow-2xs">
                  <h5 className="font-bold text-sm text-[#1E3A20] mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#2E7D32] text-white text-xs flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step.title.replace(/^\d+\.\s*/, '')}</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-[#1E3A20]/75 leading-relaxed pl-8">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips note */}
          <div className="p-4 rounded-xl bg-[#F5F0E1] border border-[#C86D51]/30 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#C86D51] shrink-0 mt-0.5" />
            <p className="text-xs text-[#1E3A20]/80 leading-relaxed">
              <strong>Tips EcoBuddy:</strong> Jangan berkecil hati jika percobaan pertama belum sempurna. Konsistensi kecil setiap hari jauh lebih bernilai bagi bumi dibanding kesempurnaan sesaat.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#2E7D32]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#1E3A20] bg-[#F5F0E1] hover:bg-[#EFE8D8] rounded-xl transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Bagikan Panduan Ini</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-[#2E7D32] hover:bg-[#1B5E20] rounded-xl transition-colors shadow-sm"
          >
            Tutup & Mulai Praktikkan
          </button>
        </div>
      </div>
    </div>
  );
};
