
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-3 min-w-[240px] group cursor-pointer">
      <div 
        className="w-full aspect-[4/5] bg-cover bg-center rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url(${product.image})` }}
      >
      </div>
      <div>
        <p className="text-[#0d1b0d] dark:text-white text-base font-bold">{product.name}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-gray-500 dark:text-gray-400 text-sm">{product.category}</p>
          <p className="text-[#0d1b0d] dark:text-primary text-base font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
