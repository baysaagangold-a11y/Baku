
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface Occasion {
  id: string;
  name: string;
  icon: string;
  bgColor: string;
  textColor: string;
  darkBg: string;
}

export type Tab = 'home' | 'search' | 'saved' | 'profile';
