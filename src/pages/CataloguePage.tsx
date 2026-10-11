import { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { cropCategories, crops } from '@/data/crops';
import { CropCard } from '@/components/CropCard';
import { EnquiryModal } from '@/components/EnquiryModal';

export function CataloguePage() {
  const { navigate } = useRouter();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const filteredCrops = useMemo(() => {
    return crops.filter((crop) => {
      const matchesSearch =
        search === '' ||
        crop.name.toLowerCase().includes(search.toLowerCase()) ||
        crop.scientificName.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' || crop.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  // Bento size assignment for visual variety
  const getCardSize = (index: number): 'large' | 'tall' | 'wide' | 'standard' => {
    const pattern = index % 7;
    if (pattern === 0) return 'large';
    if (pattern === 3) return 'wide';
    if (pattern === 5) return 'tall';
    return 'standard';
  };

  const getColSpan = (size: string): string => {
    if (size === 'large') return 'md:col-span-2 lg:col-span-2 md:row-span-2';
    if (size === 'wide') return 'md:col-span-2 lg:col-span-2';
    return '';
  };

  return (
    <div className="relative z-10 pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-600 uppercase tracking-wider text-aqua-400 mb-2">Crop Catalogue</p>
          <h1 className="font-display text-4xl sm:text-5xl font-900 text-heading mb-3">
            Field Crop Seed Directory
          </h1>
          <p className="text-body max-w-2xl leading-relaxed">
            Browse our complete range of agricultural field crop seeds. Search by name, filter by
            category, and explore detailed crop profiles.
          </p>
        </div>

        {/* Search + filter bar */}
        <div className="glass-strong rounded-2xl p-4 sm:p-5 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search crops by name or scientific name..."
                className="w-full glass rounded-xl pl-11 pr-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-aqua-400/50 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-lg text-muted hover:text-heading hover:bg-white/5 transition-all"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex items-center gap-1.5 text-xs text-muted font-600 mr-1">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filter:
              </div>
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-600 transition-all ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-br from-aqua-500/20 to-aqua-600/10 text-aqua-300 border border-aqua-400/30'
                    : 'glass text-body hover:text-heading'
                }`}
              >
                All Crops
              </button>
              {cropCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-600 transition-all ${
                    activeCategory === cat.slug
                      ? 'text-heading border'
                      : 'glass text-body hover:text-heading'
                  }`}
                  style={
                    activeCategory === cat.slug
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
          </div>

          {/* Active filter states + count */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted">Showing</span>
              <span className="font-700 text-heading">{filteredCrops.length}</span>
              <span className="text-muted">
                of {crops.length} crops
                {activeCategory !== 'all' && (
                  <>
                    {' '}in{' '}
                    <span style={{ color: cropCategories.find((c) => c.slug === activeCategory)?.accentColor }}>
                      {cropCategories.find((c) => c.slug === activeCategory)?.name}
                    </span>
                  </>
                )}
                {search && (
                  <>
                    {' '}matching &ldquo;<span className="text-heading">{search}</span>&rdquo;
                  </>
                )}
              </span>
            </div>

            {(activeCategory !== 'all' || search) && (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearch('');
                }}
                className="flex items-center gap-1 text-xs text-muted hover:text-heading transition-colors"
              >
                <X className="h-3 w-3" />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Bento grid */}
        {filteredCrops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {filteredCrops.map((crop, index) => {
              const size = getCardSize(index);
              return (
                <div key={crop.slug} className={getColSpan(size)}>
                  <CropCard crop={crop} size={size} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="glass rounded-3xl p-16 text-center">
            <Search className="h-12 w-12 text-muted mx-auto mb-4" />
            <h3 className="font-display text-xl font-700 text-heading mb-2">No crops found</h3>
            <p className="text-sm text-body mb-6">
              Try a different search term or clear your filters to see all crops.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearch('');
              }}
              className="btn-secondary"
            >
              <X className="h-4 w-4" />
              Clear filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 glass-strong glass-glow rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl font-700 text-heading mb-3">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="text-sm text-body mb-6 max-w-lg mx-auto">
            Our team can recommend varieties tailored to your specific climate, soil, and farming goals.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => setEnquiryOpen(true)} className="btn-primary">
              Request Personalised Advice
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => navigate('/contact')} className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
