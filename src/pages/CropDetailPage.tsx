import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Thermometer,
  Droplets,
  Mountain,
  Calendar,
  Clock,
  Sprout,
  Check,
  FlaskConical,
  Layers,
  Leaf,
  Mail,
} from 'lucide-react';
import { useRouter } from '@/lib/router';
import { getCropBySlug, getCategoryBySlug, crops } from '@/data/crops';
import { CropCard } from '@/components/CropCard';
import { EnquiryModal } from '@/components/EnquiryModal';

const iconMap: Record<string, typeof Leaf> = {
  Leaf: Leaf,
  Sprout: Sprout,
  Droplet: Droplets,
  Layers: Layers,
  Wheat: Sprout,
};

export function CropDetailPage({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const crop = getCropBySlug(slug);

  if (!crop) {
    return (
      <div className="relative z-10 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-3xl font-700 text-heading mb-3">Crop not found</h1>
          <p className="text-body mb-6">The crop you&apos;re looking for doesn&apos;t exist in our catalogue.</p>
          <button onClick={() => navigate('/catalogue')} className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Catalogue
          </button>
        </div>
      </div>
    );
  }

  const category = getCategoryBySlug(crop.category);
  const relatedCrops = crops
    .filter((c) => c.category === crop.category && c.slug !== crop.slug)
    .slice(0, 3);

  const quickFacts = [
    { icon: Layers, label: 'Crop Group', value: crop.quickFacts.cropGroup },
    { icon: Calendar, label: 'Season', value: crop.quickFacts.season },
    { icon: Thermometer, label: 'Temperature', value: crop.quickFacts.temperature },
    { icon: Droplets, label: 'Rainfall', value: crop.quickFacts.rainfall },
    { icon: Mountain, label: 'Soil Type', value: crop.quickFacts.soilType },
    { icon: Clock, label: 'Duration', value: crop.quickFacts.duration },
  ];

  return (
    <div className="relative z-10">
      {/* Full-width crop hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={crop.image}
          alt={`${crop.name} (${crop.scientificName}) — field crop cultivation`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-900/60 to-abyss-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss-950/60 to-transparent" />

        <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 pt-24">
          <button
            onClick={() => navigate('/catalogue')}
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-4 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Catalogue
          </button>

          {category && (
            <div className="mb-3">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-600 backdrop-blur-md"
                style={{
                  background: `${category.accentColor}15`,
                  color: category.accentColor,
                  border: `1px solid ${category.accentColor}33`,
                }}
              >
                {category.name}
              </span>
            </div>
          )}

          <h1 className="font-display text-4xl sm:text-6xl font-900 text-white mb-2 tracking-tight">
            {crop.name}
          </h1>
          <p className="text-lg text-white/70 italic mb-4">{crop.scientificName}</p>

          <div className="flex flex-wrap gap-2">
            {crop.seasons.map((season) => (
              <span
                key={season}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-600 backdrop-blur-md bg-white/10 text-white/90 border border-white/15"
              >
                <Calendar className="h-3 w-3" />
                {season}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: main content panels */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overview */}
              <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-aqua-500/15 border border-aqua-400/20">
                    <Sprout className="h-4.5 w-4.5 text-aqua-400" />
                  </div>
                  <h2 className="font-display text-2xl font-700 text-heading">Overview</h2>
                </div>
                <p className="text-body leading-relaxed">{crop.overview}</p>
              </div>

              {/* Ideal Conditions */}
              <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/15 border border-gold-400/20">
                    <Thermometer className="h-4.5 w-4.5 text-gold-400" />
                  </div>
                  <h2 className="font-display text-2xl font-700 text-heading">Ideal Conditions</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer className="h-4 w-4 text-gold-400" />
                      <span className="text-xs font-600 text-muted uppercase tracking-wide">Temperature</span>
                    </div>
                    <div className="text-sm font-600 text-heading">{crop.idealConditions.temperature}</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="h-4 w-4 text-aqua-400" />
                      <span className="text-xs font-600 text-muted uppercase tracking-wide">Rainfall</span>
                    </div>
                    <div className="text-sm font-600 text-heading">{crop.idealConditions.rainfall}</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Mountain className="h-4 w-4 text-citrus-400" />
                      <span className="text-xs font-600 text-muted uppercase tracking-wide">Soil</span>
                    </div>
                    <div className="text-sm font-600 text-heading">{crop.idealConditions.soil}</div>
                  </div>
                </div>
              </div>

              {/* Growing Season */}
              <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-iris-400/15 border border-iris-400/20">
                    <Calendar className="h-4.5 w-4.5 text-iris-400" />
                  </div>
                  <h2 className="font-display text-2xl font-700 text-heading">Growing Season</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {crop.seasons.map((season) => (
                    <div
                      key={season}
                      className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 text-sm font-600 text-heading"
                    >
                      <Calendar className="h-4 w-4 text-iris-400" />
                      {season}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-body mt-4 leading-relaxed">
                  {crop.seasons.includes('Kharif') && crop.seasons.includes('Rabi')
                    ? 'This versatile crop can be grown in both Kharif and Rabi seasons, offering flexible planting windows for farmers.'
                    : crop.seasons.includes('Kharif')
                      ? 'A monsoon-fed crop sown with the arrival of the southwest monsoon, typically from June to July.'
                      : crop.seasons.includes('Rabi')
                        ? 'A cool-season crop sown in October–November, relying on stored soil moisture and mild winter temperatures.'
                        : 'A short-duration crop grown in irrigated conditions during the spring and summer months.'}
                </p>
              </div>

              {/* Characteristics */}
              <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-citrus-500/15 border border-citrus-400/20">
                    <FlaskConical className="h-4.5 w-4.5 text-citrus-400" />
                  </div>
                  <h2 className="font-display text-2xl font-700 text-heading">Characteristics</h2>
                </div>
                <ul className="space-y-3">
                  {crop.characteristics.map((trait, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-aqua-500/20 shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-aqua-400" />
                      </div>
                      <span className="text-sm text-body leading-relaxed">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available Varieties */}
              <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-aqua-500/15 border border-aqua-400/20">
                    <Layers className="h-4.5 w-4.5 text-aqua-400" />
                  </div>
                  <h2 className="font-display text-2xl font-700 text-heading">Available Varieties</h2>
                </div>
                <div className="space-y-3">
                  {crop.varieties.map((variety) => (
                    <div key={variety.name} className="glass rounded-xl p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <h4 className="font-display text-lg font-700 text-heading">{variety.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {variety.traits.map((trait) => (
                            <span
                              key={trait}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-600 bg-aqua-500/10 text-aqua-300 border border-aqua-400/20"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-xs text-muted block">Duration</span>
                          <span className="text-heading font-600">{variety.duration}</span>
                        </div>
                        <div>
                          <span className="text-xs text-muted block">Expected Yield</span>
                          <span className="text-heading font-600">{variety.yield}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quick facts side panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Quick facts */}
                <div className="glass-strong glass-glow rounded-2xl p-6">
                  <h3 className="font-display text-lg font-700 text-heading mb-5">Quick Facts</h3>
                  <div className="space-y-3">
                    {quickFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                      >
                        <div className="flex items-center gap-2.5">
                          <fact.icon className="h-4 w-4 text-aqua-400" />
                          <span className="text-xs text-muted font-600 uppercase tracking-wide">{fact.label}</span>
                        </div>
                        <span className="text-sm font-600 text-heading text-right">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Request action */}
                <div className="glass-strong glass-glow rounded-2xl p-6 text-center">
                  {category && (
                    <div className="flex justify-center mb-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                          background: `${category.accentColor}15`,
                          border: `1px solid ${category.accentColor}33`,
                        }}
                      >
                        {(() => {
                          const Icon = iconMap[category.icon] || Sprout;
                          return <Icon className="h-7 w-7" style={{ color: category.accentColor }} />;
                        })()}
                      </div>
                    </div>
                  )}
                  <h3 className="font-display text-lg font-700 text-heading mb-2">
                    Interested in {crop.name}?
                  </h3>
                  <p className="text-xs text-body mb-5 leading-relaxed">
                    Request a sample or talk to our agronomy team about this variety.
                  </p>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="btn-primary w-full justify-center"
                  >
                    <Mail className="h-4 w-4" />
                    Request This Crop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related crops */}
      {relatedCrops.length > 0 && (
        <section className="relative py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs font-600 uppercase tracking-wider text-aqua-400 mb-1.5">
                  More from {category?.name}
                </p>
                <h2 className="font-display text-2xl font-700 text-heading">Related Crops</h2>
              </div>
              <button
                onClick={() => navigate('/catalogue')}
                className="text-sm font-600 text-aqua-300 hover:text-aqua-200 flex items-center gap-1.5 transition-colors"
              >
                All crops
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
              {relatedCrops.map((relatedCrop) => (
                <CropCard key={relatedCrop.slug} crop={relatedCrop} />
              ))}
            </div>
          </div>
        </section>
      )}

      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        cropInterest={crop.name}
      />
    </div>
  );
}
