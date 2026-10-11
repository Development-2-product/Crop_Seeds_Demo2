import { useState, useEffect } from 'react';
import { Sprout, Menu, X, Sun, Moon } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { useTheme } from '@/lib/theme';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Catalogue', path: '/catalogue' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const { path, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (to: string) => {
    navigate(to);
    setMobileOpen(false);
  };

  const isActive = (linkPath: string) => {
    if (linkPath === '/') return path === '/';
    return path.startsWith(linkPath);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
              scrolled ? 'glass-strong' : 'glass'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => handleNavigate('/')}
              className="flex items-center gap-2.5 group"
              aria-label="AgriVanta Seeds home"
            >
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400 to-aqua-600 shadow-lg shadow-aqua-500/30 transition-transform group-hover:scale-105">
                  <Sprout className="h-5 w-5 text-white" strokeWidth={2.2} />
                </div>
                <div className="absolute inset-0 rounded-xl bg-aqua-400/30 blur-lg -z-10" />
              </div>
              <div className="hidden sm:block text-left">
                <span className="font-display text-lg font-700 tracking-tight text-heading">
                  AgriVanta
                </span>
                <span className="ml-1 text-xs font-medium text-body tracking-wide uppercase">
                  Seeds
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-aqua-300'
                      : 'text-body hover:text-heading hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gradient-to-r from-aqua-400 to-citrus-400" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-body hover:text-heading hover:bg-white/5 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
              </button>

              <button
                onClick={() => handleNavigate('/contact')}
                className="hidden sm:inline-flex btn-primary"
              >
                Request Catalogue
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-body hover:text-heading hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-in">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavigate(link.path)}
                    className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-all ${
                      isActive(link.path)
                        ? 'text-aqua-300 bg-aqua-500/10'
                        : 'text-body hover:text-heading hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavigate('/contact')}
                  className="mt-2 btn-primary justify-center"
                >
                  Request Catalogue
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
