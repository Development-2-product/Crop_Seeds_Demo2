import { useState } from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { crops, cropCategories } from '@/data/crops';
import { getCategoryBySlug } from '@/data/crops';

export function GalleryPage() {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems = crops.map((crop) => ({
    slug: crop.slug,
    name: crop.name,
    scientificName: crop.scientificName,
    image: crop.image,
    category: crop.category,
  }));

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Varied sizes for masonry feel
  const getSizeClass = (index: number): string => {
    const pattern = index % 5;
    switch (pattern) {
      case 0:
        return 'row-span-2';
      case 2:
        return 'row-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="relative z-10 pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-600 uppercase tracking-wider text-aqua-400 mb-2">Gallery</p>
          <h1 className="font-display text-4xl sm:text-5xl font-900 text-heading mb-3">
            Field Crop Visual Library
          </h1>
          <p className="text-body max-w-2xl leading-relaxed">
            A curated visual journey through our field crop varieties — from golden wheat fields to
            lush rice terraces and golden mustard blooms.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-600 transition-all ${
              activeFilter === 'all'
                ? 'bg-gradient-to-br from-aqua-500/20 to-aqua-600/10 text-aqua-300 border border-aqua-400/30'
                : 'glass text-body hover:text-heading'
            }`}
          >
            All Categories
          </button>
          {cropCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveFilter(cat.slug)}
              className={`px-4 py-2 rounded-lg text-xs font-600 transition-all ${
                activeFilter === cat.slug
                  ? 'text-heading border'
                  : 'glass text-body hover:text-heading'
              }`}
              style={
                activeFilter === cat.slug
                  ? {
                      background: `${cat.accentColor}15`,
                      borderColor: `${cat.accentColor}40`,
                      color: cat.accentColor,
                    }
                  : undefined
              }
            >
              {cat.shortName}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {filteredItems.map((item, index) => {
            const category = getCategoryBySlug(item.category);
            return (
              <button
                key={item.slug}
                onClick={() => navigate(`/crop/${item.slug}`)}
                className={`group relative overflow-hidden rounded-2xl glass glass-hover ${getSizeClass(
                  index
                )}`}
              >
                <img
                  src={item.image}
                  alt={`${item.name} — ${item.scientificName} field crop photography`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category dot */}
                {category && (
                  <div className="absolute top-3 left-3">
                    <span
                      className="block h-2.5 w-2.5 rounded-full ring-2 ring-white/20"
                      style={{ background: category.accentColor }}
                    />
                  </div>
                )}

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <h3 className="font-display text-sm font-700 text-white">{item.name}</h3>
                  <p className="text-[10px] text-white/60 italic">{item.scientificName}</p>
                </div>

                {/* Hover icon */}
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-4 w-4 text-white" />
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 glass-strong glass-glow rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl font-700 text-heading mb-3">
            Explore the full crop profiles
          </h2>
          <p className="text-sm text-body mb-6 max-w-lg mx-auto">
            Each photograph opens a detailed crop profile with growing conditions, characteristics, and available varieties.
          </p>
          <button onClick={() => navigate('/catalogue')} className="btn-primary">
            Browse Catalogue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
