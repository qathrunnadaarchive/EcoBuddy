import React, { useState, useEffect } from 'react';
import { Sprout, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['tentang', 'edukasi', 'produk', 'konsultasi', 'testimoni', 'kontak'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang', id: 'tentang' },
    { name: 'Edukasi', href: '#edukasi', id: 'edukasi' },
    { name: 'Produk', href: '#produk', id: 'produk' },
    { name: 'Konsultasi', href: '#konsultasi', id: 'konsultasi' },
    { name: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F0E1]/95 backdrop-blur-md shadow-sm border-b border-[#2E7D32]/10 py-3'
          : 'bg-[#F5F0E1]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-lg"
            aria-label="EcoBuddy - Beranda"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2E7D32] text-[#F5F0E1] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1E3A20] flex items-center gap-1 font-serif-heading">
                EcoBuddy
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#2E7D32]/80">
                Hidup Minim Sampah
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-[#2E7D32] font-semibold'
                      : 'text-[#1E3A20]/80 hover:text-[#2E7D32] hover:bg-[#2E7D32]/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#2E7D32] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#2E7D32] hover:bg-[#1B5E20] active:scale-95 transition-all duration-200 rounded-lg shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              aria-label="Konsultasi cepat"
              className="p-2 text-white bg-[#2E7D32] hover:bg-[#1B5E20] rounded-lg text-xs font-medium flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="sr-only sm:not-sr-only">Konsul</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1E3A20] hover:bg-[#2E7D32]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2E7D32]/10 bg-[#F5F0E1] px-4 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col space-y-1" aria-label="Navigasi Ponsel">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-[#1E3A20] hover:bg-[#2E7D32]/10 hover:text-[#2E7D32] transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#2E7D32]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#2E7D32] text-white font-medium text-sm shadow hover:bg-[#1B5E20] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi AI 1-on-1 Gratis</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
