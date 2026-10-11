import { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Wheat,
  Sprout,
  Leaf,
  Droplet,
  Layers,
  Search,
  HandHelping,
  FlaskConical,
  MapPin,
  Award,
  Users,
  ShieldCheck,
  TrendingUp,
  Calendar,
  MousePointerClick,
  Sprout as Seedling,
  Wheat as WheatIcon,
  Mail,
} from 'lucide-react';
import { useRouter } from '@/lib/router';
import { cropCategories, crops, getFeaturedCrops, getCropCountByCategory, getSeasonalCrops } from '@/data/crops';
import { CropCard } from '@/components/CropCard';
import { EnquiryModal } from '@/components/EnquiryModal';

const iconMap: Record<string, typeof Wheat> = {
  Wheat: Wheat,
  Sprout: Sprout,
  Leaf: Leaf,
  Droplet: Droplet,
  Layers: Layers,
};

const seasons = ['Kharif', 'Rabi', 'Spring/Summer'] as const;
type SeasonTab = (typeof seasons)[number];

const seasonDescriptions: Record<SeasonTab, string> = {
  Kharif: 'Sown with the monsoon rains from June to July. These crops thrive in warm, wet conditions and are harvested in autumn.',
  Rabi: 'Sown in the cool post-monsoon months from October to November. These crops rely on stored soil moisture and mild winter temperatures.',
  'Spring/Summer': 'Sown from February to March in irrigated areas. These short-duration crops bridge the gap between main seasons.',
};

export function HomePage() {
  const { navigate } = useRouter();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeSeason, setActiveSeason] = useState<SeasonTab>('Kharif');

  const featuredCrops = getFeaturedCrops();
  const seasonalCrops = getSeasonalCrops(activeSeason);

  const trustMetrics = [
    { icon: Sprout, value: '120+', label: 'Crop Varieties', accent: 'text-aqua-400' },
    { icon: MapPin, value: '18', label: 'Research Regions', accent: 'text-citrus-400' },
    { icon: ShieldCheck, value: '100%', label: 'Quality-Tested Lots', accent: 'text-gold-400' },
    { icon: Users, value: '50K+', label: 'Farmer Support', accent: 'text-iris-400' },
  ];

  const seedJourney = [
    {
      icon: MousePointerClick,
      step: '01',
      title: 'Select',
      description: 'Browse our catalogue of 120+ field crop varieties. Filter by category, season, and growing conditions to find your ideal seed.',
    },
    {
      icon: Seedling,
      step: '02',
      title: 'Sow',
      description: 'Receive certified, quality-tested seed with detailed agronomy guides. Our team supports you through land preparation and sowing.',
    },
    {
      icon: WheatIcon,
      step: '03',
      title: 'Harvest',
      description: 'Benefit from stronger genetics and resilient varieties. Our research-backed seeds deliver higher yields and consistent seasons.',
    },
  ];

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Headline and actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 animate-fade-in">
                <Sparkles className="h-3.5 w-3.5 text-aqua-400" />
                <span className="text-xs font-600 text-body tracking-wide">Agricultural Seed Intelligence</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-900 leading-[1.05] tracking-tight text-heading animate-fade-in-up">
                Better Seeds.
                <br />
                <span className="bg-gradient-to-r from-aqua-300 via-citrus-300 to-gold-300 bg-clip-text text-transparent">
                  Stronger Seasons.
                </span>
              </h1>

              <p className="text-lg text-body leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                AgriVanta Seeds combines decades of field research with modern genetics to deliver
                premium field crop seeds — from cereals and millets to pulses, oilseeds, fibre, and forage.
              </p>

              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <button onClick={() => navigate('/catalogue')} className="btn-primary">
                  Explore Crop Seeds
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => setEnquiryOpen(true)} className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  Request Catalogue
                </button>
              </div>

              {/* Trust metrics mini */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="glass rounded-xl p-3.5">
                    <metric.icon className={`h-4.5 w-4.5 ${metric.accent} mb-2`} />
                    <div className="font-display text-xl font-700 text-heading">{metric.value}</div>
                    <div className="text-[10px] text-muted uppercase tracking-wide">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero visual with floating glass panel */}
            <div className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-3xl overflow-hidden h-[500px] glass glass-glow">
                <img
                  src="https://images.pexels.com/photos/11782286/pexels-photo-11782286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Aerial view of diverse agricultural crop fields showing patchwork patterns"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/80 via-transparent to-transparent" />

                {/* Floating Seed Intelligence panel */}
                <div className="absolute bottom-5 left-5 right-5 glass-strong rounded-2xl p-5 animate-float">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-aqua-500/20">
                      <FlaskConical className="h-4 w-4 text-aqua-400" />
                    </div>
                    <span className="text-sm font-600 text-heading">Seed Intelligence</span>
                  </div>
                  <p className="text-xs text-body leading-relaxed mb-3">
                    Every AgriVanta variety is field-tested across 18 research regions for yield
                    stability, disease resistance, and climate adaptability.
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1 text-aqua-300">
                      <TrendingUp className="h-3 w-3" />
                      <span className="font-600">+22% avg yield</span>
                    </div>
                    <div className="w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-1 text-citrus-300">
                      <ShieldCheck className="h-3 w-3" />
                      <span className="font-600">Certified lots</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigator */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-600 uppercase tracking-wider text-aqua-400 mb-2">Crop Categories</p>
              <h2 className="font-display text-4xl font-700 text-heading">Six families of field crops</h2>
            </div>
            <button
              onClick={() => navigate('/catalogue')}
              className="text-sm font-600 text-aqua-300 hover:text-aqua-200 flex items-center gap-1.5 transition-colors"
            >
              View all crops
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cropCategories.map((category, index) => {
              const Icon = iconMap[category.icon] || Wheat;
              const count = getCropCountByCategory(category.slug);
              return (
                <button
                  key={category.slug}
                  onClick={() => navigate(`/catalogue`)}
                  className="group glass glass-hover glass-glow rounded-2xl p-6 text-left animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                      style={{
                        background: `${category.accentColor}15`,
                        border: `1px solid ${category.accentColor}33`,
                      }}
                    >
                      <Icon className="h-6 w-6" style={{ color: category.accentColor }} />
                    </div>
                    <span
                      className="text-3xl font-display font-900"
                      style={{ color: `${category.accentColor}40` }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-700 text-heading mb-2">{category.name}</h3>
                  <p className="text-sm text-body leading-relaxed mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs font-600 text-muted uppercase tracking-wide">
                      {count} {count === 1 ? 'crop' : 'crops'}
                    </span>
                    <ArrowRight className="h-4 w-4 text-body group-hover:text-aqua-300 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Crops - bento layout */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-600 uppercase tracking-wider text-citrus-400 mb-2">Featured Varieties</p>
            <h2 className="font-display text-4xl font-700 text-heading">Premium picks for this season</h2>
          </div>

          {/* Bento grid - asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {featuredCrops.slice(0, 6).map((crop, index) => {
              const size =
                index === 0 ? 'large'
                : index === 3 ? 'wide'
                : index === 5 ? 'tall'
                : 'standard';
              const colSpan =
                size === 'large' ? 'md:col-span-2 lg:col-span-2 md:row-span-2'
                : size === 'wide' ? 'md:col-span-2 lg:col-span-2'
                : '';
              return (
                <div key={crop.slug} className={colSpan}>
                  <CropCard crop={crop} size={size} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasonal Planning */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-600 uppercase tracking-wider text-gold-400 mb-2">Seasonal Planning</p>
            <h2 className="font-display text-4xl font-700 text-heading">Plan your cropping calendar</h2>
            <p className="text-body mt-2 max-w-2xl">
              Explore the right crops for each Indian cropping season — from monsoon-fed Kharif to winter Rabi and irrigated Spring/Summer.
            </p>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            {/* Season tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {seasons.map((season) => (
                <button
                  key={season}
                  onClick={() => setActiveSeason(season)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-600 transition-all flex items-center gap-2 ${
                    activeSeason === season
                      ? 'bg-gradient-to-br from-aqua-500/20 to-aqua-600/10 text-aqua-300 border border-aqua-400/30'
                      : 'glass text-body hover:text-heading'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  {season}
                </button>
              ))}
            </div>

            <p className="text-sm text-body mb-6 leading-relaxed">{seasonDescriptions[activeSeason]}</p>

            {/* Seasonal crops grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {seasonalCrops.slice(0, 8).map((crop) => (
                <button
                  key={crop.slug}
                  onClick={() => navigate(`/crop/${crop.slug}`)}
                  className="group glass glass-hover rounded-xl p-4 text-left"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={crop.image}
                      alt={`${crop.name} crop field`}
                      loading="lazy"
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-display text-sm font-700 text-heading">{crop.name}</div>
                      <div className="text-[10px] text-muted italic">{crop.scientificName}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-600 text-aqua-300 group-hover:translate-x-1 transition-transform">
                    View profile <ArrowRight className="h-3 w-3" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seed Journey */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-600 uppercase tracking-wider text-iris-400 mb-2">The Seed Journey</p>
            <h2 className="font-display text-4xl font-700 text-heading">Select. Sow. Harvest.</h2>
            <p className="text-body mt-2 max-w-xl mx-auto">
              Three simple steps from choosing the right variety to a stronger harvest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {seedJourney.map((item, index) => (
              <div
                key={item.title}
                className="group glass glass-hover rounded-2xl p-8 relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="absolute -top-2 -right-2 font-display text-8xl font-900 text-white/[0.03] select-none">
                  {item.step}
                </span>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-500/20 to-aqua-600/10 border border-aqua-400/20 mb-5">
                    <item.icon className="h-7 w-7 text-aqua-400" />
                  </div>
                  <div className="text-xs font-700 text-aqua-400 mb-2 tracking-wider">STEP {item.step}</div>
                  <h3 className="font-display text-2xl font-700 text-heading mb-3">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{item.description}</p>
                </div>

                {/* Connector arrow */}
                {index < seedJourney.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <ArrowRight className="h-5 w-5 text-aqua-400/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics - expanded */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong glass-glow rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sprout, value: '120+', label: 'Crop Varieties', sub: 'Across 6 categories', accent: 'text-aqua-400' },
                { icon: MapPin, value: '18', label: 'Research Regions', sub: 'Nationwide trials', accent: 'text-citrus-400' },
                { icon: Award, value: '100%', label: 'Quality-Tested Lots', sub: 'Germination certified', accent: 'text-gold-400' },
                { icon: HandHelping, value: '50K+', label: 'Farmer Support', sub: 'Active agronomy help', accent: 'text-iris-400' },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass">
                      <metric.icon className={`h-6 w-6 ${metric.accent}`} />
                    </div>
                  </div>
                  <div className="font-display text-4xl font-900 text-heading mb-1">{metric.value}</div>
                  <div className="text-sm font-600 text-heading">{metric.label}</div>
                  <div className="text-xs text-muted mt-0.5">{metric.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative glass-strong glass-glow rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
            <div
              className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4), transparent)' }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(163, 230, 53, 0.4), transparent)' }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5">
                <Search className="h-3.5 w-3.5 text-aqua-400" />
                <span className="text-xs font-600 text-body tracking-wide">Get Personalised Recommendations</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-900 text-heading mb-4 leading-tight">
                Ready to find your
                <br />
                <span className="bg-gradient-to-r from-aqua-300 to-citrus-300 bg-clip-text text-transparent">
                  perfect seed variety?
                </span>
              </h2>
              <p className="text-body max-w-xl mx-auto mb-8 leading-relaxed">
                Tell us about your land, climate, and goals. Our agronomy team will curate the right
                AgriVanta varieties for your fields.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button onClick={() => setEnquiryOpen(true)} className="btn-primary">
                  <Mail className="h-4 w-4" />
                  Enquire Now
                </button>
                <button onClick={() => navigate('/catalogue')} className="btn-secondary">
                  Browse Catalogue
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
