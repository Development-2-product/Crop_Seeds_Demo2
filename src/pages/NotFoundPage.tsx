import { Home, ArrowLeft, Sprout } from 'lucide-react';
import { useRouter } from '@/lib/router';

export function NotFoundPage() {
  const { navigate } = useRouter();

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center pt-32 pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <span className="font-display text-[120px] sm:text-[180px] font-900 leading-none bg-gradient-to-br from-aqua-300 via-citrus-300 to-gold-300 bg-clip-text text-transparent">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sprout className="h-16 w-16 text-aqua-400/20 animate-float" />
            </div>
          </div>
        </div>

        <div className="glass-strong glass-glow rounded-3xl p-8 sm:p-12">
          <h1 className="font-display text-3xl font-700 text-heading mb-3">
            This field hasn&apos;t been planted yet
          </h1>
          <p className="text-body mb-8 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
            back to fertile ground.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => navigate('/')} className="btn-primary">
              <Home className="h-4 w-4" />
              Back to Home
            </button>
            <button onClick={() => navigate('/catalogue')} className="btn-secondary">
              <ArrowLeft className="h-4 w-4" />
              Browse Catalogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
