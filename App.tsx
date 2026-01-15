
import React, { useState } from 'react';
import { Header, BottomNav } from './components/Layout';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { Tab } from './types';
import { SEASONAL_FAVORITES, OCCASIONS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [cartCount] = useState(2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} />

      <main className="flex-1 flex flex-col pb-24 overflow-y-auto">
        {activeTab === 'home' && (
          <>
            <Hero />

            {/* Seasonal Favorites */}
            <section>
              <div className="flex items-center justify-between px-4 pt-8 pb-3">
                <h2 className="text-[#0d1b0d] dark:text-white text-2xl font-serif font-bold">Seasonal Favorites</h2>
                <button className="text-primary text-sm font-semibold hover:underline">View All</button>
              </div>
              <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 pb-4">
                {SEASONAL_FAVORITES.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Shop by Occasion */}
            <section>
              <h2 className="text-[#0d1b0d] dark:text-white text-2xl font-serif font-bold px-4 pt-8 pb-4">Shop by Occasion</h2>
              <div className="grid grid-cols-2 gap-4 px-4">
                {OCCASIONS.map(occasion => (
                  <div 
                    key={occasion.id}
                    className={`relative flex h-32 flex-col items-center justify-center rounded-xl p-4 text-center overflow-hidden transition-all hover:brightness-95 cursor-pointer ${occasion.darkBg}`}
                    style={{ backgroundColor: occasion.bgColor }}
                  >
                    <span className={`material-symbols-outlined ${occasion.textColor} mb-2 text-3xl`}>
                      {occasion.icon}
                    </span>
                    <p className="text-sm font-bold text-[#0d1b0d] dark:text-white">{occasion.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Delivery Banner */}
            <div className="mx-4 mt-8 mb-4 rounded-xl bg-primary/10 dark:bg-primary/5 p-6 flex items-center gap-4 border border-primary/20">
              <div className="bg-primary p-3 rounded-full text-[#0d1b0d]">
                <span className="material-symbols-outlined">electric_bolt</span>
              </div>
              <div>
                <h3 className="font-bold text-[#0d1b0d] dark:text-white">Same-Day Delivery</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Order by 2 PM for delivery today.</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'search' && (
          <div className="p-8 flex flex-col items-center justify-center text-center">
             <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">manage_search</span>
             <h2 className="text-xl font-serif italic mb-2">Search Catalog</h2>
             <p className="text-gray-500">Find the perfect bouquet for any moment.</p>
             <div className="w-full mt-6 px-4">
                <div className="relative">
                   <input 
                    type="text" 
                    placeholder="Search flowers, bouquets..." 
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full focus:ring-primary focus:border-primary outline-none"
                   />
                   <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-400">search</span>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="p-8 flex flex-col items-center justify-center text-center">
             <span className="material-symbols-outlined text-6xl text-pink-200 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
             <h2 className="text-xl font-serif italic mb-2">Your Favorites</h2>
             <p className="text-gray-500">Save arrangements you love for later.</p>
             <button className="mt-6 px-6 py-2 bg-primary/20 text-primary-dark font-bold rounded-full">Explore More</button>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="p-4 flex flex-col">
            <div className="flex items-center gap-4 mb-8 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
                JD
              </div>
              <div>
                <h2 className="text-lg font-bold">Jane Doe</h2>
                <p className="text-sm text-gray-500">jane.doe@example.com</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              {[
                {icon: 'local_shipping', label: 'Order History'},
                {icon: 'location_on', label: 'Delivery Addresses'},
                {icon: 'credit_card', label: 'Payment Methods'},
                {icon: 'notifications', label: 'Notifications'},
                {icon: 'settings', label: 'Settings'}
              ].map((item, idx) => (
                <button key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-white/5 border border-gray-50 dark:border-white/5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
