/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ZeroWasteIntro } from './components/ZeroWasteIntro';
import { EducationSection } from './components/EducationSection';
import { ProductSection } from './components/ProductSection';
import { AIConsultationSection } from './components/AIConsultationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [chatbotUrl, setChatbotUrl] = useState<string>(() => {
    return localStorage.getItem('ecobuddy_chatbot_url') || '[TEMPEL URL CHATBOT DI SINI]';
  });

  const handleUpdateChatbotUrl = (newUrl: string) => {
    setChatbotUrl(newUrl);
    localStorage.setItem('ecobuddy_chatbot_url', newUrl);
  };

  const handleLearnMore = () => {
    const el = document.getElementById('tentang');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultation = () => {
    const chatToggle = document.querySelector<HTMLElement>('.chat-window-toggle');
    const chatWindow = document.querySelector<HTMLElement>('.chat-window');
    if (chatToggle && !chatWindow) {
      chatToggle.click();
    }
    const el = document.getElementById('konsultasi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E1] text-[#1E3A20] selection:bg-[#2E7D32] selection:text-white">
      {/* 1. Navbar */}
      <Navbar onOpenConsultation={handleConsultation} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onLearnMore={handleLearnMore} onConsultation={handleConsultation} />

        {/* 3. Apa itu Zero Waste */}
        <ZeroWasteIntro />

        {/* 4. Edukasi Sustainability dan Upcycling */}
        <EducationSection />

        {/* 5. Produk Ramah Lingkungan */}
        <ProductSection />

        {/* 6. Konsultasi AI */}
        <AIConsultationSection
          customChatbotUrl={chatbotUrl}
          onUpdateChatbotUrl={handleUpdateChatbotUrl}
        />

        {/* 7. Testimoni */}
        <TestimonialsSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
