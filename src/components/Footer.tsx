import { Sprout, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useRouter } from '@/lib/router';

export function Footer() {
  const { navigate } = useRouter();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400 to-aqua-600 shadow-lg shadow-aqua-500/30">
                  <Sprout className="h-5 w-5 text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <span className="font-display text-lg font-700 text-heading">AgriVanta</span>
                  <span className="ml-1 text-xs font-medium text-body uppercase tracking-wide">Seeds</span>
                </div>
              </div>
              <p className="text-sm text-body leading-relaxed">
                Better seeds for stronger seasons. Agricultural intelligence meets premium field crop genetics.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-600 uppercase tracking-wider text-muted mb-4">Explore</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Crop Catalogue', path: '/catalogue' },
                  { label: 'Gallery', path: '/gallery' },
                  { label: 'About Us', path: '/about' },
                ].map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-body hover:text-aqua-300 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Crops */}
            <div>
              <h4 className="text-xs font-600 uppercase tracking-wider text-muted mb-4">Crop Categories</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Cereals & Grains', path: '/catalogue' },
                  { label: 'Millets', path: '/catalogue' },
                  { label: 'Pulses', path: '/catalogue' },
                  { label: 'Oilseeds', path: '/catalogue' },
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-body hover:text-aqua-300 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-600 uppercase tracking-wider text-muted mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-body">
                  <Mail className="h-4 w-4 mt-0.5 text-aqua-400 shrink-0" />
                  <span>hello@agrivanta.seeds</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-body">
                  <Phone className="h-4 w-4 mt-0.5 text-aqua-400 shrink-0" />
                  <span>+91 80 4567 8900</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-body">
                  <MapPin className="h-4 w-4 mt-0.5 text-aqua-400 shrink-0" />
                  <span>AgriVanta Research Campus, Hyderabad, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} AgriVanta Seeds. Field crop seed intelligence for stronger seasons.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-body hover:text-aqua-300 transition-colors"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        <div className="h-8" />
      </div>
    </footer>
  );
}
