import React, { useState } from 'react';
import { EcoProduct } from '../types';
import { X, MessageCircle, ShoppingBag, Check, ShieldCheck, Sparkles, Copy } from 'lucide-react';

interface OrderModalProps {
  product: EcoProduct | null;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const totalPrice = product.price * quantity;

  // WhatsApp Order Link generator (standard Indonesian ecommerce pattern)
  const generateWhatsAppMessage = () => {
    const text = `Halo Admin EcoBuddy Indonesia! 🌱%0A%0ASaya ingin memesan *${encodeURIComponent(
      product.name
    )}*:%0A- Jumlah: *${quantity} pcs*%0A- Total: *Rp ${totalPrice.toLocaleString(
      'id-ID'
    )}*%0A- Nama: *${encodeURIComponent(customerName || 'Sahabat Bumi')}*%0A- Kota/Alamat: *${encodeURIComponent(
      customerCity || 'Jabodetabek'
    )}*%0A${notes ? `- Catatan: ${encodeURIComponent(notes)}%0A` : ''}%0AMohon info ketersediaan stok & ongkos kirim ya. Terima kasih!`;

    return `https://wa.me/6281234567890?text=${text}`;
  };

  const handleCopyOrderText = () => {
    const plainText = `Halo Admin EcoBuddy Indonesia! 🌱\n\nSaya ingin memesan *${product.name}*:\n- Jumlah: ${quantity} pcs\n- Total: Rp ${totalPrice.toLocaleString('id-ID')}\n- Nama: ${customerName || 'Sahabat Bumi'}\n- Kota/Alamat: ${customerCity || 'Jabodetabek'}\n${notes ? `- Catatan: ${notes}\n` : ''}\nMohon info ketersediaan stok & ongkir ya.`;
    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-order-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF7F0] rounded-3xl shadow-2xl border border-[#2E7D32]/20 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#2E7D32]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-order-title" className="text-base font-bold text-[#1E3A20] font-serif-heading">
                Formulir Pemesanan Produk
              </h3>
              <p className="text-xs text-[#1E3A20]/60">Kemasan 100% bebas plastik & amanah</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup formulir"
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product summary card */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#2E7D32]/10">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="w-20 h-20 object-cover rounded-xl"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-semibold text-[#2E7D32]">{product.badge || 'Produk Pilihan'}</span>
              <h4 className="text-sm font-bold text-[#1E3A20] truncate">{product.name}</h4>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-base font-extrabold text-[#2E7D32]">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    Rp {product.originalPrice.toLocaleString('id-ID')}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Eco Impact Note */}
          <div className="p-3 rounded-xl bg-[#E8F5E9] border border-[#2E7D32]/20 flex items-center gap-2 text-xs text-[#1E3A20]/80">
            <Sparkles className="w-4 h-4 text-[#2E7D32] shrink-0" />
            <span><strong>Dampak positif:</strong> {product.ecoBenefit}</span>
          </div>

          {/* Quantity selector */}
          <div>
            <label className="block text-xs font-bold text-[#1E3A20] uppercase tracking-wider mb-2">
              Jumlah Pesanan
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-xl bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 active:scale-95 transition-all"
                aria-label="Kurangi jumlah"
              >
                -
              </button>
              <span className="w-12 text-center font-bold text-base text-[#1E3A20]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-xl bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 active:scale-95 transition-all"
                aria-label="Tambah jumlah"
              >
                +
              </button>
              <div className="ml-auto text-right">
                <span className="text-xs text-slate-500 block">Subtotal Produk</span>
                <span className="text-lg font-extrabold text-[#2E7D32]">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>

          {/* Customer info form */}
          <div className="space-y-3 pt-2">
            <div>
              <label htmlFor="customerName" className="block text-xs font-semibold text-[#1E3A20] mb-1">
                Nama Pemesan
              </label>
              <input
                id="customerName"
                type="text"
                placeholder="Contoh: Sarah Anindita"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="customerCity" className="block text-xs font-semibold text-[#1E3A20] mb-1">
                Kota / Wilayah Pengiriman
              </label>
              <input
                id="customerCity"
                type="text"
                placeholder="Contoh: Bandung / Jakarta Selatan"
                value={customerCity}
                onChange={(e) => setCustomerCity(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-xs font-semibold text-[#1E3A20] mb-1">
                Catatan Khusus (Opsional)
              </label>
              <textarea
                id="notes"
                rows={2}
                placeholder="Permintaan warna khusus atau instruksi kemasan tanpa bubble wrap sintetis..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
              />
            </div>
          </div>

          {/* Eco Packaging Guarantee */}
          <div className="flex items-center gap-2 text-xs text-[#1E3A20]/75 bg-[#F5F0E1] p-3 rounded-xl border border-[#2E7D32]/10">
            <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
            <span>Garansi 100% kemasan kardus daur ulang & isolasi berbahan dasar selulosa (biodegradable).</span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#2E7D32]/10 space-y-2">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Lanjut Pesan via WhatsApp (Rp {totalPrice.toLocaleString('id-ID')})</span>
          </a>

          <button
            type="button"
            onClick={handleCopyOrderText}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Format Pesanan Disalin!' : 'Salin Format Teks Pesanan'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
