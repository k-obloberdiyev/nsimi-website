import React, { useEffect, useState } from 'react';
import { siteContactInfo } from '../data/siteData';
import { HeadingSeparator } from '../components/ui/HeadingSeparator';
import { Button } from '../components/ui/Button';
import { Toast } from '../components/ui/Toast';
import type { ToastMessage } from '../components/ui/Toast';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact – Navoiy Shahridagi 1-IMI';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setToast({
        id: Date.now().toString(),
        type: 'error',
        message: 'Iltimos, barcha maydonlarni to\'ldiring.',
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
      setToast({
        id: Date.now().toString(),
        type: 'success',
        message: 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.',
      });
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_30%] md:bg-[center_32%]"
          style={{
            backgroundImage: `url('/images/school-entrance.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/80 backdrop-blur-[0.5px]" />

        <div className="relative site-container py-24 sm:py-28 md:py-36 text-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Biz bilan bog'lanish
          </h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="text-[#0a0001] font-bold text-2xl sm:text-3xl tracking-tight">
                Savolingizni yozib qoldiring
              </h2>
              <HeadingSeparator align="left" />

              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-semibold text-[#222222] mb-1.5">
                    Ismingiz <span className="text-[#fb2056]">*</span>
                  </label>
                  <input
                    id="contact_name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name "
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fb2056] focus:ring-1 focus:ring-[#fb2056] outline-none text-base transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact_email" className="block text-sm font-semibold text-[#222222] mb-1.5">
                    E-mail address <span className="text-[#fb2056]">*</span>
                  </label>
                  <input
                    id="contact_email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fb2056] focus:ring-1 focus:ring-[#fb2056] outline-none text-base transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact_message" className="block text-sm font-semibold text-[#222222] mb-1.5">
                    Habaringiz <span className="text-[#fb2056]">*</span>
                  </label>
                  <textarea
                    id="contact_message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fb2056] focus:ring-1 focus:ring-[#fb2056] outline-none text-base transition-colors bg-white"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Yuborilmoqda...' : "Habarni jo'natish"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-[#0a0001] font-bold text-2xl sm:text-3xl tracking-tight">
                  Aloqa
                </h2>
                <HeadingSeparator align="left" />

                <div className="space-y-6 mt-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-50 text-[#fb2056] flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0a0001] mb-1">Manzil</h3>
                      <p className="text-[#3a3a3a] text-base leading-relaxed">
                        {siteContactInfo.address}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-50 text-[#fb2056] flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0a0001] mb-1">E-pochta</h3>
                      <a
                        href={`mailto:${siteContactInfo.email}`}
                        className="text-[#fb2056] hover:underline text-base font-medium"
                      >
                        {siteContactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-50 text-[#fb2056] flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0a0001] mb-1">Telefon raqam</h3>
                      <a
                        href={`tel:${siteContactInfo.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-[#3a3a3a] hover:text-[#fb2056] text-base font-medium transition-colors"
                      >
                        {siteContactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-50 text-[#fb2056] flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0a0001] mb-1">Telegram Kanal</h3>
                      <a
                        href={siteContactInfo.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#fb2056] hover:underline text-base font-medium"
                      >
                        @navoiy_shahar_IMI
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive map snippet */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[16/9] bg-gray-100">
                <iframe
                  title="Navoiy 1-IMI joylashuvi"
                  src="https://maps.google.com/maps?q=51-uy%20Navoiy%20ko'chasi%20Navoiy%20shahri&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
};
