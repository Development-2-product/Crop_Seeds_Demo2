import type { CropCategory, Crop } from '@/types';

export const cropCategories: CropCategory[] = [
  {
    slug: 'cereals-grains',
    name: 'Cereals & Grains',
    shortName: 'Cereals',
    description: 'Staple grain crops that feed nations — maize, wheat, rice, sorghum, and barley.',
    icon: 'Wheat',
    accentColor: '#fbbf24',
    accentGlow: 'rgba(251, 191, 36, 0.35)',
  },
  {
    slug: 'millets',
    name: 'Millets',
    shortName: 'Millets',
    description: 'Climate-resilient nutri-cereals for dryland farming — pearl millet and finger millet.',
    icon: 'Sprout',
    accentColor: '#a3e635',
    accentGlow: 'rgba(163, 230, 53, 0.35)',
  },
  {
    slug: 'pulses',
    name: 'Pulses',
    shortName: 'Pulses',
    description: 'Protein-rich legumes that restore soil nitrogen — chickpea and pigeon pea.',
    icon: 'Leaf',
    accentColor: '#34d399',
    accentGlow: 'rgba(52, 211, 153, 0.35)',
  },
  {
    slug: 'oilseeds',
    name: 'Oilseeds',
    shortName: 'Oilseeds',
    description: 'Edible oil crops powering kitchens and industry — soybean, groundnut, and mustard.',
    icon: 'Droplet',
    accentColor: '#f59e0b',
    accentGlow: 'rgba(245, 158, 11, 0.35)',
  },
  {
    slug: 'fibre-crops',
    name: 'Fibre Crops',
    shortName: 'Fibre',
    description: 'Natural fibre crops for textile and industry — cotton and jute.',
    icon: 'Layers',
    accentColor: '#c4b5fd',
    accentGlow: 'rgba(196, 181, 253, 0.3)',
  },
  {
    slug: 'forage-crops',
    name: 'Forage Crops',
    shortName: 'Forage',
    description: 'High-biomass fodder crops for livestock nutrition — alfalfa and fodder maize.',
    icon: 'Wheat',
    accentColor: '#10b981',
    accentGlow: 'rgba(16, 185, 129, 0.35)',
  },
];

export const crops: Crop[] = [
  {
    slug: 'maize',
    name: 'Maize',
    scientificName: 'Zea mays',
    category: 'cereals-grains',
    image: 'https://images.pexels.com/photos/20234940/pexels-photo-20234940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif', 'Spring/Summer'],
    overview:
      'Maize is one of the most versatile cereal crops, grown for grain, fodder, and industrial starch. AgriVanta maize hybrids deliver high kernel density, strong stalk lodging resistance, and adaptive maturity windows suited to both rainfed and irrigated systems.',
    idealConditions: {
      temperature: '18–32 °C',
      rainfall: '500–800 mm',
      soil: 'Well-drained loamy soils with pH 5.5–7.0',
    },
    characteristics: [
      'High-yielding hybrid vigour with uniform cob setting',
      'Tolerant to major foliar diseases and stalk rot',
      'Dual-purpose grain and silage compatible varieties',
      'Optimised nitrogen-use efficiency for lower input cost',
    ],
    varieties: [
      { name: 'AV-Maize 701', duration: '110–120 days', yield: '65–75 q/ha', traits: ['Disease-tolerant', 'High grain'] },
      { name: 'AV-Maize 909', duration: '95–105 days', yield: '70–80 q/ha', traits: ['Early maturity', 'Lodging-resistant'] },
      { name: 'AV-Silage Pro', duration: '100–110 days', yield: '350–400 q/ha fodder', traits: ['High biomass', 'Sweet stalk'] },
    ],
    quickFacts: {
      cropGroup: 'Cereal',
      season: 'Kharif / Spring',
      temperature: '18–32 °C',
      rainfall: '500–800 mm',
      soilType: 'Loamy, well-drained',
      duration: '95–120 days',
    },
    featured: true,
  },
  {
    slug: 'wheat',
    name: 'Wheat',
    scientificName: 'Triticum aestivum',
    category: 'cereals-grains',
    image: 'https://images.pexels.com/photos/7891849/pexels-photo-7891849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Rabi'],
    overview:
      'Wheat is the staple food grain of millions. AgriVanta wheat varieties are bred for high grain protein, bold lustrous grains, and resistance to rust diseases — ensuring reliable yields across diverse agro-climatic zones.',
    idealConditions: {
      temperature: '10–25 °C',
      rainfall: '450–600 mm',
      soil: 'Well-drained fertile loam with pH 6.0–7.5',
    },
    characteristics: [
      'Rust-resistant with durable leaf and stripe resistance',
      'High test weight and bold grain appearance',
      'Excellent tillering and uniform maturity',
      'Heat-tolerant terminal stage for late sowing',
    ],
    varieties: [
      { name: 'AV-Wheat 307', duration: '120–140 days', yield: '55–65 q/ha', traits: ['Rust-resistant', 'High protein'] },
      { name: 'AV-Wheat 512', duration: '135–145 days', yield: '60–70 q/ha', traits: ['Bold grain', 'Heat-tolerant'] },
    ],
    quickFacts: {
      cropGroup: 'Cereal',
      season: 'Rabi',
      temperature: '10–25 °C',
      rainfall: '450–600 mm',
      soilType: 'Fertile loam',
      duration: '120–145 days',
    },
    featured: true,
  },
  {
    slug: 'rice',
    name: 'Rice',
    scientificName: 'Oryza sativa',
    category: 'cereals-grains',
    image: 'https://images.pexels.com/photos/15994341/pexels-photo-15994341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif'],
    overview:
      'Rice is the lifeline of lowland and irrigated farming. AgriVanta rice varieties combine high milling recovery, slender aromatic grains, and tolerance to major pests — bred for both transplanted and direct-seeded cultivation.',
    idealConditions: {
      temperature: '22–32 °C',
      rainfall: '1000–1500 mm',
      soil: 'Clay to clay-loam with good water retention',
    },
    characteristics: [
      'High head rice recovery with low breakage',
      'Tolerant to bacterial leaf blight and brown planthopper',
      'Suitable for both transplanted and DSR systems',
      'Non-lodging dwarf plant type with uniform panicle',
    ],
    varieties: [
      { name: 'AV-Rice Slim', duration: '120–130 days', yield: '60–70 q/ha', traits: ['Slender grain', 'BLB-tolerant'] },
      { name: 'AV-Rice Aroma', duration: '135–145 days', yield: '50–55 q/ha', traits: ['Aromatic', 'Premium quality'] },
    ],
    quickFacts: {
      cropGroup: 'Cereal',
      season: 'Kharif',
      temperature: '22–32 °C',
      rainfall: '1000–1500 mm',
      soilType: 'Clay-loam',
      duration: '120–145 days',
    },
    featured: true,
  },
  {
    slug: 'sorghum',
    name: 'Sorghum',
    scientificName: 'Sorghum bicolor',
    category: 'cereals-grains',
    image: 'https://images.pexels.com/photos/4806660/pexels-photo-4806660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif'],
    overview:
      'Sorghum is a drought-tolerant cereal ideal for dryland regions. AgriVanta sorghum varieties offer high grain yield, sweet stalks for fodder, and excellent heat tolerance — a dual-purpose crop for food and feed security.',
    idealConditions: {
      temperature: '25–35 °C',
      rainfall: '350–500 mm',
      soil: 'Wide range, well-drained soils with pH 6.0–8.0',
    },
    characteristics: [
      'Drought-tolerant with deep rooting system',
      'Dual-purpose grain and sweet-stalk fodder',
      'Shoot-fly and stem-borer tolerant hybrids',
      'Performs well in marginal and rainfed soils',
    ],
    varieties: [
      { name: 'AV-Sorghum 88', duration: '110–120 days', yield: '40–50 q/ha', traits: ['Drought-tolerant', 'Dual-purpose'] },
      { name: 'AV-Sorghum Sweet', duration: '100–110 days', yield: '35–45 q/ha grain', traits: ['Sweet stalk', 'High fodder'] },
    ],
    quickFacts: {
      cropGroup: 'Cereal',
      season: 'Kharif',
      temperature: '25–35 °C',
      rainfall: '350–500 mm',
      soilType: 'Well-drained, adaptive',
      duration: '100–120 days',
    },
    featured: false,
  },
  {
    slug: 'barley',
    name: 'Barley',
    scientificName: 'Hordeum vulgare',
    category: 'cereals-grains',
    image: 'https://images.pexels.com/photos/32602419/pexels-photo-32602419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Rabi'],
    overview:
      'Barley is a hardy Rabi cereal valued for food, malt, and feed. AgriVanta barley varieties are bred for bold plump grains, high malt quality, and tolerance to salinity and marginal soils — thriving where other cereals struggle.',
    idealConditions: {
      temperature: '12–25 °C',
      rainfall: '300–450 mm',
      soil: 'Sandy to loamy, tolerates saline and alkaline soils',
    },
    characteristics: [
      'Salinity and alkaline soil tolerant',
      'Bold plump grains with high malt extract',
      'Early maturity for escape from terminal heat',
      'Low water requirement compared to wheat',
    ],
    varieties: [
      { name: 'AV-Barley 55', duration: '110–125 days', yield: '40–50 q/ha', traits: ['Salt-tolerant', 'Bold grain'] },
      { name: 'AV-Barley Malt', duration: '120–130 days', yield: '38–45 q/ha', traits: ['High malt quality', 'Early'] },
    ],
    quickFacts: {
      cropGroup: 'Cereal',
      season: 'Rabi',
      temperature: '12–25 °C',
      rainfall: '300–450 mm',
      soilType: 'Sandy-loam, saline-tolerant',
      duration: '110–130 days',
    },
    featured: false,
  },
  {
    slug: 'pearl-millet',
    name: 'Pearl Millet',
    scientificName: 'Pennisetum glaucum',
    category: 'millets',
    image: 'https://images.pexels.com/photos/16977456/pexels-photo-16977456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif'],
    overview:
      'Pearl millet is the hardiest of all millets, thriving in the hottest and driest regions. AgriVanta pearl millet hybrids deliver high grain iron, rapid early vigour, and consistent yields under moisture stress — a climate-smart nutri-cereal.',
    idealConditions: {
      temperature: '25–40 °C',
      rainfall: '250–500 mm',
      soil: 'Sandy and light soils, pH 6.0–7.5',
    },
    characteristics: [
      'High-iron biofortified grain for nutrition security',
      'Drought-tolerant with rapid early vigour',
      'Downy mildew resistant hybrids',
      'Excellent heat tolerance up to 42 °C',
    ],
    varieties: [
      { name: 'AV-Pearl 99', duration: '80–90 days', yield: '30–40 q/ha', traits: ['High-iron', 'Drought-tolerant'] },
      { name: 'AV-Pearl Early', duration: '75–80 days', yield: '25–35 q/ha', traits: ['Early maturity', 'DM-resistant'] },
    ],
    quickFacts: {
      cropGroup: 'Millet',
      season: 'Kharif',
      temperature: '25–40 °C',
      rainfall: '250–500 mm',
      soilType: 'Sandy, light',
      duration: '75–90 days',
    },
    featured: true,
  },
  {
    slug: 'finger-millet',
    name: 'Finger Millet',
    scientificName: 'Eleusine coracana',
    category: 'millets',
    image: 'https://images.pexels.com/photos/11519186/pexels-photo-11519186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif'],
    overview:
      'Finger millet, or ragi, is a calcium-rich nutri-cereal with excellent storage qualities. AgriVanta finger millet varieties are bred for high grain calcium, blast resistance, and adaptation to hill and rainfed ecosystems.',
    idealConditions: {
      temperature: '20–30 °C',
      rainfall: '400–600 mm',
      soil: 'Red lateritic to loamy soils, pH 5.0–7.0',
    },
    characteristics: [
      'Highest calcium content among cereals',
      'Blast disease resistant varieties',
      'Excellent grain storage with natural pest resistance',
      'Adapted to acid and hill soils',
    ],
    varieties: [
      { name: 'AV-Ragi 1', duration: '110–120 days', yield: '25–35 q/ha', traits: ['High-calcium', 'Blast-resistant'] },
      { name: 'AV-Ragi Hill', duration: '120–135 days', yield: '20–28 q/ha', traits: ['Hill-adapted', 'Stress-tolerant'] },
    ],
    quickFacts: {
      cropGroup: 'Millet',
      season: 'Kharif',
      temperature: '20–30 °C',
      rainfall: '400–600 mm',
      soilType: 'Red lateritic, loamy',
      duration: '110–135 days',
    },
    featured: false,
  },
  {
    slug: 'chickpea',
    name: 'Chickpea',
    scientificName: 'Cicer arietinum',
    category: 'pulses',
    image: 'https://images.pexels.com/photos/5425012/pexels-photo-5425012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Rabi'],
    overview:
      'Chickpea is the premier Rabi pulse, rich in protein and a natural soil nitrogen fixer. AgriVanta chickpea varieties deliver bold grains, wilt resistance, and high pod borer tolerance — ensuring profitable and sustainable pulse production.',
    idealConditions: {
      temperature: '15–25 °C',
      rainfall: '350–500 mm',
      soil: 'Sandy-loam to clay-loam, well-drained, pH 6.0–8.0',
    },
    characteristics: [
      'High protein content with bold attractive grains',
      'Wilt and root-rot resistant varieties',
      'Drought-tolerant with deep taproot system',
      'Biological nitrogen fixation improves soil fertility',
    ],
    varieties: [
      { name: 'AV-Chickpea Bold', duration: '100–115 days', yield: '18–25 q/ha', traits: ['Bold grain', 'Wilt-resistant'] },
      { name: 'AV-Chickpea 77', duration: '95–105 days', yield: '20–28 q/ha', traits: ['Early maturity', 'High-protein'] },
    ],
    quickFacts: {
      cropGroup: 'Pulse',
      season: 'Rabi',
      temperature: '15–25 °C',
      rainfall: '350–500 mm',
      soilType: 'Sandy-loam, well-drained',
      duration: '95–115 days',
    },
    featured: true,
  },
  {
    slug: 'pigeon-pea',
    name: 'Pigeon Pea',
    scientificName: 'Cajanus cajan',
    category: 'pulses',
    image: 'https://images.pexels.com/photos/17975576/pexels-photo-17975576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif'],
    overview:
      'Pigeon pea, or tur, is a staple Kharif pulse with deep rooting and drought tolerance. AgriVanta pigeon pea hybrids offer short-duration maturity, sterility mosaic resistance, and high grain yield — a profitable pulse for rainfed farms.',
    idealConditions: {
      temperature: '20–35 °C',
      rainfall: '500–700 mm',
      soil: 'Wide range, well-drained, pH 6.0–7.5',
    },
    characteristics: [
      'Short-duration hybrids enabling multiple cropping',
      'Sterility mosaic and wilt resistant',
      'Deep taproot for drought resilience',
      'High protein grain with good cooking quality',
    ],
    varieties: [
      { name: 'AV-Tur 21', duration: '120–140 days', yield: '20–28 q/ha', traits: ['Short-duration', 'SM-resistant'] },
      { name: 'AV-Tur Classic', duration: '180–200 days', yield: '25–30 q/ha', traits: ['High-yield', 'Wilt-resistant'] },
    ],
    quickFacts: {
      cropGroup: 'Pulse',
      season: 'Kharif',
      temperature: '20–35 °C',
      rainfall: '500–700 mm',
      soilType: 'Well-drained, adaptive',
      duration: '120–200 days',
    },
    featured: false,
  },
  {
    slug: 'soybean',
    name: 'Soybean',
    scientificName: 'Glycine max',
    category: 'oilseeds',
    image: 'https://images.pexels.com/photos/38740391/pexels-photo-38740391.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif'],
    overview:
      'Soybean is the leading oilseed and protein crop. AgriVanta soybean varieties deliver high oil and protein content, determinate growth habit, and resistance to yellow mosaic — ideal for oil extraction and meal feed.',
    idealConditions: {
      temperature: '20–30 °C',
      rainfall: '600–750 mm',
      soil: 'Well-drained loam with good organic matter, pH 6.0–7.5',
    },
    characteristics: [
      'High oil and protein dual-purpose varieties',
      'Yellow mosaic virus resistant',
      'Determinate growth for uniform maturity',
      'Biological nitrogen fixation enriches soil',
    ],
    varieties: [
      { name: 'AV-Soy 88', duration: '95–110 days', yield: '25–35 q/ha', traits: ['High-oil', 'YMV-resistant'] },
      { name: 'AV-Soy Protein', duration: '100–115 days', yield: '28–38 q/ha', traits: ['High-protein', 'Determinate'] },
    ],
    quickFacts: {
      cropGroup: 'Oilseed',
      season: 'Kharif',
      temperature: '20–30 °C',
      rainfall: '600–750 mm',
      soilType: 'Loam, organic-rich',
      duration: '95–115 days',
    },
    featured: true,
  },
  {
    slug: 'groundnut',
    name: 'Groundnut',
    scientificName: 'Arachis hypogaea',
    category: 'oilseeds',
    image: 'https://images.pexels.com/photos/9799045/pexels-photo-9799045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif', 'Spring/Summer'],
    overview:
      'Groundnut is a premier oilseed and confectionery crop. AgriVanta groundnut varieties produce bold pods, high oil recovery, and early maturity — adapted to both rainfed Kharif and irrigated spring/summer planting.',
    idealConditions: {
      temperature: '22–30 °C',
      rainfall: '500–700 mm',
      soil: 'Sandy-loam, well-drained, pH 6.0–7.0',
    },
    characteristics: [
      'Bold pod with high oil and kernel recovery',
      'Early-maturing for spring/summer planting',
      'Aflatoxin-resistant with good shell integrity',
      'Drought-tolerant Spanish and Virginia types',
    ],
    varieties: [
      { name: 'AV-Groundnut Bold', duration: '100–115 days', yield: '20–28 q/ha', traits: ['Bold pod', 'High-oil'] },
      { name: 'AV-Groundnut Early', duration: '90–100 days', yield: '18–25 q/ha', traits: ['Early maturity', 'Spring-suitable'] },
    ],
    quickFacts: {
      cropGroup: 'Oilseed',
      season: 'Kharif / Spring',
      temperature: '22–30 °C',
      rainfall: '500–700 mm',
      soilType: 'Sandy-loam',
      duration: '90–115 days',
    },
    featured: false,
  },
  {
    slug: 'mustard',
    name: 'Mustard',
    scientificName: 'Brassica juncea',
    category: 'oilseeds',
    image: 'https://images.pexels.com/photos/38277321/pexels-photo-38277321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Rabi'],
    overview:
      'Mustard is the key Rabi oilseed for temperate and sub-tropical regions. AgriVanta mustard varieties deliver high oil content, low erucic acid profiles, and aphid tolerance — ensuring profitable winter oilseed production.',
    idealConditions: {
      temperature: '15–25 °C',
      rainfall: '250–400 mm',
      soil: 'Light to medium loam, well-drained, pH 6.0–7.5',
    },
    characteristics: [
      'High oil content with low erucic acid quality',
      'Aphid and white rust tolerant',
      'Early maturity for Rabi rotation flexibility',
      'Drought and frost tolerant at terminal stage',
    ],
    varieties: [
      { name: 'AV-Mustard 01', duration: '110–130 days', yield: '18–25 q/ha', traits: ['High-oil', 'Low-erucic'] },
      { name: 'AV-Mustard Early', duration: '100–115 days', yield: '16–22 q/ha', traits: ['Early maturity', 'Aphid-tolerant'] },
    ],
    quickFacts: {
      cropGroup: 'Oilseed',
      season: 'Rabi',
      temperature: '15–25 °C',
      rainfall: '250–400 mm',
      soilType: 'Light-medium loam',
      duration: '100–130 days',
    },
    featured: true,
  },
  {
    slug: 'cotton',
    name: 'Cotton',
    scientificName: 'Gossypium hirsutum',
    category: 'fibre-crops',
    image: 'https://images.pexels.com/photos/40103327/pexels-photo-40103327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif', 'Spring/Summer'],
    overview:
      'Cotton is the king of fibre crops. AgriVanta cotton varieties produce high-quality lint with long staple length, bollworm tolerance, and compact plant type for high-density planting — maximising lint yield per hectare.',
    idealConditions: {
      temperature: '22–32 °C',
      rainfall: '600–900 mm',
      soil: 'Deep black cotton soil or well-drained loam, pH 6.0–8.0',
    },
    characteristics: [
      'Long staple high-quality lint fibre',
      'Bollworm tolerant with reduced insecticide need',
      'Compact plant type for high-density planting',
      'Drought and heat tolerant at reproductive stage',
    ],
    varieties: [
      { name: 'AV-Cotton Long', duration: '160–180 days', yield: '25–35 q/ha', traits: ['Long-staple', 'Bollworm-tolerant'] },
      { name: 'AV-Cotton Compact', duration: '140–160 days', yield: '28–38 q/ha', traits: ['High-density', 'Early'] },
    ],
    quickFacts: {
      cropGroup: 'Fibre',
      season: 'Kharif / Spring',
      temperature: '22–32 °C',
      rainfall: '600–900 mm',
      soilType: 'Black cotton soil, loam',
      duration: '140–180 days',
    },
    featured: true,
  },
  {
    slug: 'jute',
    name: 'Jute',
    scientificName: 'Corchorus olitorius',
    category: 'fibre-crops',
    image: 'https://images.pexels.com/photos/17362930/pexels-photo-17362930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif'],
    overview:
      'Jute is a natural bast fibre crop valued for sacks, textiles, and eco-friendly products. AgriVanta jute varieties deliver high fibre yield, strong golden lustre, and resistance to stem rot — a sustainable fibre for a greener economy.',
    idealConditions: {
      temperature: '25–35 °C',
      rainfall: '1200–1500 mm',
      soil: 'Alluvial, slightly acidic to neutral, pH 6.0–7.0',
    },
    characteristics: [
      'High fibre yield with golden lustre',
      'Stem rot and mite resistant varieties',
      'Fast-growing for early harvest and retting',
      'Eco-friendly biodegradable natural fibre',
    ],
    varieties: [
      { name: 'AV-Jute Gold', duration: '120–140 days', yield: '30–40 q/ha', traits: ['High-fibre', 'Golden lustre'] },
      { name: 'AV-Jute 09', duration: '110–130 days', yield: '28–35 q/ha', traits: ['Early maturity', 'Stem-rot-resistant'] },
    ],
    quickFacts: {
      cropGroup: 'Fibre',
      season: 'Kharif',
      temperature: '25–35 °C',
      rainfall: '1200–1500 mm',
      soilType: 'Alluvial, acidic-neutral',
      duration: '110–140 days',
    },
    featured: false,
  },
  {
    slug: 'alfalfa',
    name: 'Alfalfa',
    scientificName: 'Medicago sativa',
    category: 'forage-crops',
    image: 'https://images.pexels.com/photos/2909674/pexels-photo-2909674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Rabi', 'Spring/Summer'],
    overview:
      'Alfalfa, the queen of forages, is a perennial legume rich in protein and highly palatable to livestock. AgriVanta alfalfa varieties offer multi-cut high biomass, deep drought-resistant roots, and persistence for 4–5 years.',
    idealConditions: {
      temperature: '15–30 °C',
      rainfall: '500–800 mm',
      soil: 'Deep well-drained loam with pH 6.5–7.5',
    },
    characteristics: [
      'Multi-cut high-protein perennial fodder',
      'Deep taproot for drought persistence',
      'Fixes atmospheric nitrogen to enrich soil',
      'Highly palatable and digestible for livestock',
    ],
    varieties: [
      { name: 'AV-Alfalfa Pro', duration: 'Perennial — 4–5 years', yield: '800–1000 q/ha/year', traits: ['Multi-cut', 'High-protein'] },
      { name: 'AV-Alfalfa Drought', duration: 'Perennial — 3–4 years', yield: '700–900 q/ha/year', traits: ['Drought-deep-root', 'Persistent'] },
    ],
    quickFacts: {
      cropGroup: 'Forage',
      season: 'Rabi / Spring',
      temperature: '15–30 °C',
      rainfall: '500–800 mm',
      soilType: 'Deep loam, well-drained',
      duration: 'Perennial 4–5 years',
    },
    featured: false,
  },
  {
    slug: 'fodder-maize',
    name: 'Fodder Maize',
    scientificName: 'Zea mays (fodder type)',
    category: 'forage-crops',
    image: 'https://images.pexels.com/photos/34889936/pexels-photo-34889936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    seasons: ['Kharif', 'Spring/Summer'],
    overview:
      'Fodder maize is a fast-growing, high-biomass silage crop for dairy and livestock feed. AgriVanta fodder maize varieties produce tall leafy plants with high digestibility, enabling multiple cuts and year-round green fodder supply.',
    idealConditions: {
      temperature: '20–35 °C',
      rainfall: '500–800 mm',
      soil: 'Well-drained fertile loam with pH 5.5–7.5',
    },
    characteristics: [
      'Tall leafy plants with high green biomass',
      'Fast growth for early first cut at 45–50 days',
      'High digestibility and energy for dairy cattle',
      'Suitable for silage and green chop feeding',
    ],
    varieties: [
      { name: 'AV-Fodder Maize Tall', duration: '60–75 days (first cut)', yield: '400–500 q/ha', traits: ['High-biomass', 'Leafy'] },
      { name: 'AV-Fodder Maize Multi', duration: '55–65 days (first cut)', yield: '450–550 q/ha', traits: ['Multi-cut', 'High-digestibility'] },
    ],
    quickFacts: {
      cropGroup: 'Forage',
      season: 'Kharif / Spring',
      temperature: '20–35 °C',
      rainfall: '500–800 mm',
      soilType: 'Fertile loam',
      duration: '55–75 days first cut',
    },
    featured: false,
  },
];

export function getCategoryBySlug(slug: string): CropCategory | undefined {
  return cropCategories.find((c) => c.slug === slug);
}

export function getCropBySlug(slug: string): Crop | undefined {
  return crops.find((c) => c.slug === slug);
}

export function getCropsByCategory(slug: string): Crop[] {
  return crops.filter((c) => c.category === slug);
}

export function getFeaturedCrops(): Crop[] {
  return crops.filter((c) => c.featured);
}

export function getCropCountByCategory(slug: string): number {
  return crops.filter((c) => c.category === slug).length;
}

export function getSeasonalCrops(season: string): Crop[] {
  return crops.filter((c) => c.seasons.includes(season as never));
}
