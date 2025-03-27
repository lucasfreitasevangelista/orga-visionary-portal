
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Service {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}
