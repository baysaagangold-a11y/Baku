
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="@container w-full">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:rounded-xl items-center justify-end pb-12 px-4 text-center transition-opacity duration-700"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvQtd_N1x79voSLIfig_2o3OFrMbRLuc-SnkodcX7HdRccMz1VvBNOQJGZsRHhfwWVLzxtGMvR05YF9rlZMebb0YlOkD3_Aq_1XKnl7sdJIpnkk0-EGmLFiz9mAgH_Kzs-dMvYRYESGinX_DB9ZAG9O5hsnvQOcg0GsVGbbUSJw8hCwCnCIwJKtp1st03BnZHdXqTdPGukOkQkOIGuRbZPiQAgU815MoLr54atIQs25akGJ4FW2E2ZYi-NANbQ1qcVTqJU4cyKFA4Y")`
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-serif italic @[480px]:text-6xl">
              Elegance in Every Petal
            </h1>
            <p className="text-white/90 text-sm font-normal max-w-[300px] mx-auto @[480px]:text-base">
              Curated floral arrangements delivered to your doorstep with love and care.
            </p>
          </div>
          <button className="mt-4 flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-[#0d1b0d] text-base font-bold transition-transform active:scale-95 shadow-lg">
            <span className="truncate">Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
