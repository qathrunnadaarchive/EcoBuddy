import React, { useState } from 'react';
import { Bot, MessageCircle, ExternalLink, Sparkles, Send, CheckCircle2, ArrowRight, Settings2, Edit3, Check } from 'lucide-react';

interface AIConsultationSectionProps {
  customChatbotUrl: string;
  onUpdateChatbotUrl: (newUrl: string) => void;
}

export const AIConsultationSection: React.FC<AIConsultationSectionProps> = ({
  customChatbotUrl,
  onUpdateChatbotUrl,
}) => {
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [urlInput, setUrlInput] = useState(customChatbotUrl);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Quick interactive simulation queries for visitors
  const samplePrompts = [
    {
      q: 'Bagaimana cara mulai hidup minim sampah di kamar kosan?',
      a: 'Mulai dari 3 hal termudah: (1) Selalu bawa tumbler air minum & tolak botol kemasan, (2) Siapkan 1 tas kain di jok motor atau ransel untuk belanja minimarket, (3) Bawa wadah makan sendiri saat beli makanan bungkus. Tiga langkah ini sudah memangkas lebih dari 70% sampah plastik harian Anda!'
    },
    {
      q: 'Ide upcycling botol kaca atau kaleng bekas jadi perabot?',
      a: 'Botol kaca sirup/selai sangat bagus untuk wadah bumbu dapur transparan estetik (labeli dengan spidol kapur). Kaleng biskuit bekas bisa dicat ulang menjadi pot sukulen balkon, wadah alat tulis meja belajar, atau tempat penyimpanan benang jahit.'
    },
    {
      q: 'Bagaimana mengatasi bau pada komposter sisa sayuran dapur?',
      a: 'Bau busuk muncul jika komposter terlalu basah (kelebihan Nitrogen). Solusinya: masukkan bahan Karbon cokelat kering seperti serbuk kayu gergaji, sekam bakar, atau sobekan kardus cokelat polos dalam jumlah seimbang. Tutup rapat dan aduk 3 hari sekali.'
    }
  ];

  const [activePromptIndex, setActivePromptIndex] = useState<number | null>(0);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onUpdateChatbotUrl(urlInput.trim());
      setIsEditingUrl(false);
    }
  };

  const handleOpenChatbot = () => {
    // If the integrated n8n chat widget toggle is present, toggle it open!
    const chatToggle = document.querySelector<HTMLElement>('.chat-window-toggle');
    const chatWindow = document.querySelector<HTMLElement>('.chat-window');
    if (chatToggle) {
      if (!chatWindow) {
        chatToggle.click();
      }
      setTimeout(() => {
        const inputField = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          '.chat-layout textarea, .chat-layout input'
        );
        inputField?.focus();
      }, 300);
      return;
    }

    // Fallback: Check if placeholder is still active
    if (customChatbotUrl === '[TEMPEL URL CHATBOT DI SINI]') {
      setIsEditingUrl(true);
      return;
    }
    window.open(customChatbotUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="konsultasi" className="py-20 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial from-[#2E7D32]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#1E3A20] text-[#F5F0E1] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-[#2E7D32]/30">
          
          {/* Subtle eco pattern watermark */}
          <div className="absolute -right-16 -top-16 opacity-5 pointer-events-none">
            <Bot className="w-96 h-96" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Copywriting following AIDA */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E7D32]/40 text-[#A5D6A7] text-xs font-semibold tracking-wide uppercase mb-6 border border-[#2E7D32]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Konsultasi 1-on-1 AI Berkelanjutan</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-heading leading-tight tracking-tight">
                Punya Tantangan Sampah di Rumah?{' '}
                <span className="text-[#81C784]">Konsultasikan Sekarang</span>
              </h2>

              {/* Subheading (Interest & Desire) */}
              <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed">
                Bingung bagaimana mengolah barang bekas tertentu di rumah? Ingin resep komposter tanpa bau, atau bingung mencari alternatif ramah lingkungan untuk kebutuhan harian Anda? Asisten Konsultasi AI EcoBuddy siap mendampingi Anda 24 jam dengan solusi praktis, ramah pemula, dan gratis.
              </p>

              {/* Key Features */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#81C784] shrink-0" />
                  <span>Rekomendasi upcycling sesuai barang bekas Anda</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#81C784] shrink-0" />
                  <span>Panduan audit & komposting sampah dapur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#81C784] shrink-0" />
                  <span>Alternatif produk zero waste hemat biaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#81C784] shrink-0" />
                  <span>Respon instan 24 jam bebas antre</span>
                </div>
              </div>

              {/* Action Button & Chatbot URL Setting */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleOpenChatbot}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-base font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl active:scale-[0.98] border border-[#81C784]/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#81C784]/40"
                  aria-label="Buka Chatbot Konsultasi"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Mulai Konsultasi 1-on-1 Sekarang</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </button>

                <button
                  onClick={() => setIsEditingUrl(!isEditingUrl)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/15 text-white/90 text-xs font-semibold rounded-xl transition-colors border border-white/15"
                  title="Sesuaikan URL Chatbot"
                  aria-label="Atur link chatbot"
                >
                  <Settings2 className="w-4 h-4" />
                  <span>Atur Tautan Chatbot</span>
                </button>
              </div>

              {/* Current URL indicator */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-white/60">
                <span>Tautan aktif:</span>
                <code className="bg-black/30 px-2 py-0.5 rounded text-white/80 font-mono text-[10px] truncate max-w-xs">
                  {customChatbotUrl === '[TEMPEL URL CHATBOT DI SINI]'
                    ? 'Widget AI EcoBuddy (n8n Webhook Aktif)'
                    : customChatbotUrl}
                </code>
              </div>

              {/* Editable URL Form (if triggered) */}
              {isEditingUrl && (
                <form
                  onSubmit={handleSaveUrl}
                  className="mt-4 p-4 rounded-2xl bg-black/40 border border-[#81C784]/40 space-y-3"
                >
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>Tempel URL Chatbot Anda:</span>
                    <span className="text-[10px] text-white/60">Disimpan lokal</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://t.me/ecobuddy_bot atau https://chat.google.com"
                      className="flex-1 px-3 py-2 text-xs bg-white text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81C784]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#81C784] hover:bg-[#66BB6A] text-slate-900 font-bold text-xs rounded-lg transition-colors flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Simpan</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-white/70 leading-normal">
                    Masukkan URL chatbot Gemini, WhatsApp bot, atau platform AI yang Anda gunakan untuk mengkampanyekan hidup minim sampah.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Live Chat Consultation Interactive Preview */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF7F0] text-[#1E3A20] rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#2E7D32] text-white flex items-center justify-center font-bold">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1E3A20] flex items-center gap-1.5">
                        <span>EcoBuddy AI Assistant</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div className="text-[10px] text-[#2E7D32] font-semibold">Online · Siap Membantu 24 Jam</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#E8F5E9] text-[#2E7D32] font-bold px-2 py-0.5 rounded">
                    Preview Interaktif
                  </span>
                </div>

                {/* Prompt selector */}
                <div className="mt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A20]/60 mb-2">
                    Contoh Pertanyaan Penggiat:
                  </div>
                  <div className="space-y-1.5">
                    {samplePrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePromptIndex(idx)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between gap-2 ${
                          activePromptIndex === idx
                            ? 'bg-[#2E7D32] text-white shadow-xs font-semibold'
                            : 'bg-white hover:bg-[#EFE8D8] text-[#1E3A20] border border-slate-200'
                        }`}
                      >
                        <span className="truncate">{prompt.q}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Conversation Box */}
                {activePromptIndex !== null && (
                  <div className="mt-4 p-4 rounded-2xl bg-white border border-[#2E7D32]/15 shadow-2xs space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        Anda
                      </div>
                      <p className="text-xs font-semibold text-[#1E3A20]">
                        {samplePrompts[activePromptIndex].q}
                      </p>
                    </div>

                    <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-[#2E7D32] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        AI
                      </div>
                      <p className="text-xs text-[#1E3A20]/80 leading-relaxed">
                        {samplePrompts[activePromptIndex].a}
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom CTA to open full chatbot */}
                <div className="mt-5 pt-3">
                  <button
                    onClick={handleOpenChatbot}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1E3A20] hover:bg-[#2E7D32] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Lanjutkan Obrolan Lengkap di Chatbot</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
