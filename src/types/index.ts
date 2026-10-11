export type CropCategorySlug =
  | 'cereals-grains'
  | 'millets'
  | 'pulses'
  | 'oilseeds'
  | 'fibre-crops'
  | 'forage-crops';

export type Season = 'Kharif' | 'Rabi' | 'Spring/Summer';

export interface CropCategory {
  slug: CropCategorySlug;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  accentColor: string;
  accentGlow: string;
}

export interface CropVariety {
  name: string;
  duration: string;
  yield: string;
  traits: string[];
}

export interface Crop {
  slug: string;
  name: string;
  scientificName: string;
  category: CropCategorySlug;
  image: string;
  seasons: Season[];
  overview: string;
  idealConditions: {
    temperature: string;
    rainfall: string;
    soil: string;
  };
  characteristics: string[];
  varieties: CropVariety[];
  quickFacts: {
    cropGroup: string;
    season: string;
    temperature: string;
    rainfall: string;
    soilType: string;
    duration: string;
  };
  featured?: boolean;
}

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  crop_interest: string;
  message: string;
}
