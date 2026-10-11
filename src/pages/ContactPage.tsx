import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Clock, ArrowRight } from 'lucide-react';
import { getSupabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    crop_interest: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const { error } = await getSupabase().from('enquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        crop_interest: form.crop_interest || null,
        message: form.message || null,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', crop_interest: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@agrivanta.seeds',
      sub: 'We reply within 2 business days',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 80 4567 8900',
      sub: 'Mon–Sat, 9 AM – 6 PM IST',
    },
    {
      icon: MapPin,
      label: 'Visit',
      value: 'AgriVanta Research Campus',
      sub: 'Hyderabad, Telangana, India',
    },
  ];

  return (
    <div className="relative z-10 pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-600 uppercase tracking-wider text-aqua-400 mb-2">Contact Us</p>
          <h1 className="font-display text-4xl sm:text-5xl font-900 text-heading mb-3">
            Let&apos;s talk seeds
          </h1>
          <p className="text-body max-w-2xl leading-relaxed">
            Whether you&apos;re a farmer, distributor, or agricultural researcher — our team is ready
            to help you find the right varieties for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact info cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-500/15 border border-aqua-400/20 shrink-0">
                    <info.icon className="h-5 w-5 text-aqua-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted font-600 uppercase tracking-wide mb-1">
                      {info.label}
                    </div>
                    <div className="text-sm font-700 text-heading">{info.value}</div>
                    <div className="text-xs text-muted mt-1">{info.sub}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Hours card */}
            <div className="glass-strong glass-glow rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <Clock className="h-4.5 w-4.5 text-citrus-400" />
                <h3 className="font-display text-sm font-700 text-heading">Response Times</h3>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted">Enquiry form</span>
                  <span className="text-heading font-600">2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Phone support</span>
                  <span className="text-heading font-600">Same day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Sample requests</span>
                  <span className="text-heading font-600">5–7 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="glass-strong glass-glow rounded-3xl p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aqua-500/20 mb-5">
                    <CheckCircle2 className="h-8 w-8 text-aqua-400" />
                  </div>
                  <h3 className="font-display text-2xl font-700 text-heading mb-2">Message Sent</h3>
                  <p className="text-sm text-body mb-6 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within two business days.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-700 text-heading mb-2">Send us a message</h2>
                  <p className="text-sm text-body mb-6">
                    Fill out the form below and we&apos;ll respond with personalised recommendations.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-600 text-body mb-1.5" htmlFor="contact-name">
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange('name')}
                          className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-600 text-body mb-1.5" htmlFor="contact-email">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange('email')}
                          className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-600 text-body mb-1.5" htmlFor="contact-phone">
                          Phone
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange('phone')}
                          className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-600 text-body mb-1.5" htmlFor="contact-crop">
                          Crop of Interest
                        </label>
                        <input
                          id="contact-crop"
                          type="text"
                          value={form.crop_interest}
                          onChange={handleChange('crop_interest')}
                          className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors"
                          placeholder="e.g. Maize, Wheat..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-600 text-body mb-1.5" htmlFor="contact-message">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange('message')}
                        className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors resize-none"
                        placeholder="Tell us about your land, climate, and what you're looking for..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="glass rounded-xl p-4 border-red-400/20">
                        <p className="text-sm text-red-400">
                          Something went wrong submitting your message. Please try again or email us directly at hello@agrivanta.seeds
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full justify-center disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 glass rounded-3xl p-8 sm:p-10 text-center">
          <p className="text-body mb-4">Prefer to explore first?</p>
          <button
            onClick={() => (window.location.hash = '/catalogue')}
            className="btn-secondary"
          >
            Browse Crop Catalogue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
