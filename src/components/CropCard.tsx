import { ArrowRight } from 'lucide-react';
import type { Crop } from '@/types';
import { getCategoryBySlug } from '@/data/crops';
import { useRouter } from '@/lib/router';

interface CropCardProps {
  crop: Crop;
  size?: 'standard' | 'large' | 'tall' | 'wide';
}

export function CropCard({ crop, size = 'standard' }: CropCardProps) {
  const { navigate } = useRouter();
  const category = getCategoryBySlug(crop.category);

  const heightClass =
    size === 'large'
      ? 'h-[420px]'
      : size === 'tall'
        ? 'h-[380px]'
        : size === 'wide'
          ? 'h-[260px]'
          : 'h-[320px]';

  return (
    <button
      onClick={() => navigate(`/crop/${crop.slug}`)}
      className={`group relative w-full ${heightClass} rounded-2xl overflow-hidden glass glass-hover text-left`}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={crop.image}
          alt={`${crop.name} — ${crop.scientificName} field crop`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/90 via-abyss-900/40 to-transparent" />
      </div>

      {/* Category badge */}
      {category && (
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-600 backdrop-blur-md"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              color: category.accentColor,
              border: `1px solid ${category.accentColor}33`,
            }}
          >
            {category.shortName}
          </span>
        </div>
      )}

      {/* Season tags */}
      <div className="absolute top-4 right-4 flex flex-wrap gap-1.5 justify-end">
        {crop.seasons.map((season) => (
          <span
            key={season}
            className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-600 backdrop-blur-md bg-abyss-950/40 text-white/80 border border-white/10"
          >
            {season}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-xl font-700 text-white mb-0.5">{crop.name}</h3>
        <p className="text-xs text-white/60 italic mb-3">{crop.scientificName}</p>
        <div className="flex items-center gap-1.5 text-xs font-600 text-aqua-300 group-hover:text-aqua-200 transition-colors">
          View profile
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}
