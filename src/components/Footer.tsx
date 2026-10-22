import React, { useState } from 'react';
import { Sprout, Instagram, Mail, MessageCircle, Heart, Send, CheckCircle2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 5000);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail && contactMessage) {
      setContactSent(true);
      setTimeout(() => {
        setContactName('');
        setContactEmail('');
        setContactMessage('');
        setContactSent(false);
      }, 6000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-[#142B16] text-[#F5F0E1] pt-16 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact & Consultation Inquiry Form */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#1E3A20] border border-[#2E7D32]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#81C784]">
                Mari Terhubung
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">
                Punya Pertanyaan atau Ingin Kolaborasi Workshop?
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                EcoBuddy terbuka untuk undangan sharing session komunitas, workshop upcycling di sekolah/kampus, maupun pertanyaan seputar produk ramah lingkungan.
              </p>

              <div className="pt-2 space-y-3 text-sm text-white/90">
                <a
                  href="mailto:halo@ecobuddy.id"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2E7D32] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/60">Email Resmi</div>
                    <div className="font-semibold text-white group-hover:text-[#81C784] transition-colors">
                      halo@ecobuddy.id
                    </div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/ecobuddy.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2E7D32] flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/60">Instagram Komunitas</div>
                    <div className="font-semibold text-white group-hover:text-[#81C784] transition-colors">
                      @ecobuddy.id
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2E7D32] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/60">WhatsApp Hotline</div>
                    <div className="font-semibold text-white group-hover:text-[#81C784] transition-colors">
                      +62 812-3456-7890
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Quick Message Form */}
            <div className="lg:col-span-7 bg-[#FAF7F0] text-[#1E3A20] rounded-2xl p-6 sm:p-8 shadow-md">
              <h4 className="text-lg font-bold font-serif-heading mb-1 text-[#1E3A20]">
                Kirim Pesan ke Tim EcoBuddy
              </h4>
              <p className="text-xs text-[#1E3A20]/70 mb-5">
                Kami merespon dalam waktu maksimal 1x24 jam kerja.
              </p>

              {contactSent ? (
                <div className="p-6 rounded-xl bg-[#E8F5E9] border border-[#2E7D32]/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#2E7D32] mx-auto" />
                  <div className="font-bold text-[#1E3A20]">Pesan Anda Berhasil Terkirim!</div>
                  <p className="text-xs text-[#1E3A20]/80">
                    Terima kasih telah menyapa. Sahabat EcoBuddy akan segera membalas ke email Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold mb-1">
                        Alamat Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="email@domain.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold mb-1">
                      Pesan atau Topik Kolaborasi
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={3}
                      placeholder="Ceritakan rencana Anda atau pertanyaan seputar zero waste..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2E7D32] text-[#F5F0E1] flex items-center justify-center shadow-md">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-serif-heading">
                EcoBuddy
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed pr-4">
              EcoBuddy adalah inisiatif independen yang mengampanyekan gaya hidup minim sampah (zero waste), edukasi keberlanjutan praktis, upcycling barang bekas bernilai guna, dan akses terhadap produk ramah lingkungan pilihan di Indonesia.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/ecobuddy.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2E7D32] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram EcoBuddy"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:halo@ecobuddy.id"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2E7D32] text-white flex items-center justify-center transition-colors"
                aria-label="Email Resmi EcoBuddy"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2E7D32] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp EcoBuddy"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#81C784]">
              Navigasi Cepat
            </div>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Apa Itu Zero Waste?
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Manfaat & Prinsip 5R
                </a>
              </li>
              <li>
                <a href="#edukasi" className="hover:text-white transition-colors">
                  Edukasi Upcycling Botol Bekas
                </a>
              </li>
              <li>
                <a href="#edukasi" className="hover:text-white transition-colors">
                  Panduan Pilah Sampah Dapur
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-white transition-colors">
                  Produk Ramah Lingkungan
                </a>
              </li>
              <li>
                <a href="#konsultasi" className="hover:text-white transition-colors">
                  Konsultasi AI 1-on-1
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white transition-colors">
                  Cerita & Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Eco Tips Newsletter */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#81C784]">
              Buletin Mingguan EcoBuddy
            </div>
            <p className="text-xs text-white/75 leading-relaxed">
              Dapatkan 1 tips praktis hidup minim sampah dan ide upcycling akhir pekan langsung di inbox email Anda. Bebas spam, bisa berhenti kapan saja.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-1">
              <div className="flex gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Ketik email Anda..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-white/10 text-white placeholder-white/50 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#81C784]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#81C784] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Terima kasih! Anda telah terdaftar di buletin mingguan.</span>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <span>© 2026 EcoBuddy Indonesia. Seluruh hak cipta dilindungi.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#81C784]">
              <span>Dibuat dengan</span>
              <Heart className="w-3 h-3 fill-current text-rose-400 inline" />
              <span>untuk Bumi Nusantara</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Kembali ke atas"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
