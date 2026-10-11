import { useState, useEffect, type ReactNode } from 'react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  cropInterest?: string;
  trigger?: ReactNode;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function EnquiryModal({ open, onClose, cropInterest = '' }: EnquiryModalProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    crop_interest: cropInterest,
    message: '',
  });

  useEffect(() => {
    if (open) {
      setForm((prev) => ({ ...prev, crop_interest: cropInterest }));
      setStatus('idle');
    }
  }, [open, cropInterest]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const { error } = await supabase.from('enquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        crop_interest: form.crop_interest || null,
        message: form.message || null,
      });
      if (error) throw error;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative glass-strong rounded-3xl w-full max-w-lg p-6 sm:p-8 animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {status === 'success' ? (
          <div className="flex flex-col items-center text-center py-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aqua-500/20 mb-5">
              <CheckCircle2 className="h-8 w-8 text-aqua-400" />
            </div>
            <h3 className="font-display text-2xl font-700 text-heading mb-2">Enquiry Sent</h3>
            <p className="text-sm text-body mb-6 max-w-sm">
              Thank you for your interest in AgriVanta Seeds. Our team will reach out within two business days.
            </p>
            <button onClick={onClose} className="btn-secondary">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl font-700 text-heading">Enquire Now</h3>
                <p className="text-sm text-body mt-1">
                  Tell us about your needs and we&apos;ll prepare a tailored seed recommendation.
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-body hover:text-heading hover:bg-white/5 transition-all shrink-0"
                aria-label="Close enquiry form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-600 text-body mb-1.5" htmlFor="enq-name">
                    Full Name
                  </label>
                  <input
                    id="enq-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange('name')}
                    className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-600 text-body mb-1.5" htmlFor="enq-email">
                    Email
                  </label>
                  <input
                    id="enq-email"
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
                  <label className="block text-xs font-600 text-body mb-1.5" htmlFor="enq-phone">
                    Phone
                  </label>
                  <input
                    id="enq-phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="block text-xs font-600 text-body mb-1.5" htmlFor="enq-crop">
                    Crop of Interest
                  </label>
                  <input
                    id="enq-crop"
                    type="text"
                    value={form.crop_interest}
                    onChange={handleChange('crop_interest')}
                    className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors"
                    placeholder="e.g. Maize, Wheat..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-600 text-body mb-1.5" htmlFor="enq-message">
                  Message
                </label>
                <textarea
                  id="enq-message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange('message')}
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors resize-none"
                  placeholder="Tell us about your land, climate, and requirements..."
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email us directly.
                </p>
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
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
