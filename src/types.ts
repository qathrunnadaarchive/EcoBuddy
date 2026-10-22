export interface EducationGuide {
  id: string;
  title: string;
  subtitle: string;
  category: 'Langkah Awal' | 'Upcycling Kreatif' | 'Dapur & Organik';
  readTime: string;
  difficulty: 'Sangat Mudah' | 'Mudah' | 'Menengah';
  summary: string;
  image: string;
  imageAlt: string;
  toolsNeeded: string[];
  steps: {
    title: string;
    description: string;
  }[];
  ecoImpact: string;
}

export interface EcoProduct {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  imageAlt: string;
  materials: string;
  features: string[];
  ecoBenefit: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  quote: string;
  highlight: string;
  rating: number;
  verified: boolean;
}
