import {
  Sprout,
  FlaskConical,
  MapPin,
  Award,
  Users,
  ShieldCheck,
  Target,
  Eye,
  ArrowRight,
  TrendingUp,
  Leaf,
} from 'lucide-react';
import { useRouter } from '@/lib/router';
import { cropCategories, getCropCountByCategory } from '@/data/crops';

export function AboutPage() {
  const { navigate } = useRouter();

  const values = [
    {
      icon: ShieldCheck,
      title: 'Quality First',
      description: 'Every seed lot is germination-tested and certified before it reaches a farmer\'s field.',
      accent: 'text-aqua-400',
    },
    {
      icon: FlaskConical,
      title: 'Research-Driven',
      description: 'We operate 18 research stations across diverse agro-climatic zones to breed resilient varieties.',
      accent: 'text-citrus-400',
    },
    {
      icon: Leaf,
      title: 'Climate-Smart',
      description: 'Our breeding programme prioritises drought tolerance, disease resistance, and resource efficiency.',
      accent: 'text-gold-400',
    },
    {
      icon: Users,
      title: 'Farmer-Centric',
      description: '50,000+ farmers trust our agronomy support — from variety selection to post-harvest guidance.',
      accent: 'text-iris-400',
    },
  ];

  const stats = [
    { value: '25+', label: 'Years of Research' },
    { value: '120+', label: 'Crop Varieties' },
    { value: '18', label: 'Research Stations' },
    { value: '50K+', label: 'Farmers Supported' },
  ];

  return (
    <div className="relative z-10 pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-16">
          <p className="text-xs font-600 uppercase tracking-wider text-aqua-400 mb-2">About AgriVanta</p>
          <h1 className="font-display text-4xl sm:text-6xl font-900 text-heading mb-6 leading-tight">
            Seeds bred for
            <br />
            <span className="bg-gradient-to-r from-aqua-300 to-citrus-300 bg-clip-text text-transparent">
              stronger seasons.
            </span>
          </h1>
          <p className="text-lg text-body max-w-3xl leading-relaxed">
            AgriVanta Seeds is an agricultural intelligence company dedicated to breeding, testing, and
            delivering premium field crop seeds. For over two decades, we&apos;ve combined traditional
            breeding wisdom with modern genetics to help farmers grow more with less — across cereals,
            millets, pulses, oilseeds, fibre, and forage crops.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass glass-hover glass-glow rounded-2xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-500/15 border border-aqua-400/20 mb-5">
                <Target className="h-6 w-6 text-aqua-400" />
              </div>
              <h2 className="font-display text-2xl font-700 text-heading mb-3">Our Mission</h2>
              <p className="text-body leading-relaxed">
                To empower every farmer with seeds that deliver higher yields, withstand climate
                stresses, and improve soil health — making each season stronger than the last.
              </p>
            </div>
            <div className="glass glass-hover glass-glow rounded-2xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrus-500/15 border border-citrus-400/20 mb-5">
                <Eye className="h-6 w-6 text-citrus-400" />
              </div>
              <h2 className="font-display text-2xl font-700 text-heading mb-3">Our Vision</h2>
              <p className="text-body leading-relaxed">
                A future where agricultural intelligence is accessible to every farm — where
                data-driven seed selection and resilient genetics ensure food security for generations.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="glass-strong glass-glow rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl sm:text-5xl font-900 bg-gradient-to-br from-aqua-300 to-citrus-300 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wide font-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-600 uppercase tracking-wider text-citrus-400 mb-2">What We Stand For</p>
            <h2 className="font-display text-3xl font-700 text-heading">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group glass glass-hover rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl glass shrink-0">
                    <value.icon className={`h-6 w-6 ${value.accent}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-700 text-heading mb-2">{value.title}</h3>
                    <p className="text-sm text-body leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories overview */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-600 uppercase tracking-wider text-gold-400 mb-2">Our Scope</p>
            <h2 className="font-display text-3xl font-700 text-heading">Six categories, one mission</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {cropCategories.map((cat, index) => (
              <div
                key={cat.slug}
                className="glass glass-hover rounded-xl p-5 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg mx-auto mb-3"
                  style={{
                    background: `${cat.accentColor}15`,
                    border: `1px solid ${cat.accentColor}33`,
                  }}
                >
                  <Sprout className="h-5 w-5" style={{ color: cat.accentColor }} />
                </div>
                <div className="font-display text-2xl font-900 text-heading">
                  {getCropCountByCategory(cat.slug)}
                </div>
                <div className="text-[10px] text-muted uppercase tracking-wide mt-1">{cat.shortName}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Process highlight */}
        <section className="mb-16">
          <div className="glass-strong glass-glow rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-600 uppercase tracking-wider text-aqua-400 mb-2">Our Process</p>
                <h2 className="font-display text-3xl font-700 text-heading mb-4">
                  From research station to your field
                </h2>
                <p className="text-body leading-relaxed mb-6">
                  Every AgriVanta variety passes through years of field trials across multiple
                  agro-climatic zones. We test for yield stability, disease resistance, climate
                  adaptability, and grain quality before a single seed reaches the market.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: FlaskConical, text: 'Multi-location field trials across 18 research stations' },
                    { icon: ShieldCheck, text: 'Germination and genetic purity certification' },
                    { icon: TrendingUp, text: 'Yield benchmarking against industry standards' },
                    { icon: MapPin, text: 'Region-specific variety recommendations' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-aqua-500/15 shrink-0">
                        <item.icon className="h-4 w-4 text-aqua-400" />
                      </div>
                      <span className="text-sm text-body">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-[350px]">
                <img
                  src="https://images.pexels.com/photos/15182672/pexels-photo-15182672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Hands holding soil with seeds, symbolizing agricultural research and growth"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="glass-strong glass-glow rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="font-display text-3xl font-700 text-heading mb-4">
              Let&apos;s grow stronger seasons together
            </h2>
            <p className="text-body max-w-xl mx-auto mb-8">
              Explore our catalogue or reach out to our agronomy team for personalised recommendations.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={() => navigate('/catalogue')} className="btn-primary">
                Explore Crop Seeds
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => navigate('/contact')} className="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
