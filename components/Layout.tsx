
import React from 'react';
import { Tab } from '../types';

interface HeaderProps {
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount }) => (
  <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-white/10">
    <div className="flex size-10 items-center justify-center">
      <span className="material-symbols-outlined text-2xl text-primary">local_florist</span>
    </div>
    <h2 className="text-[#0d1b0d] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-serif italic">
      Boutique Blooms
    </h2>
    <div className="flex items-center gap-2">
      <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#0d1b0d] dark:text-white">
        <span className="material-symbols-outlined">search</span>
      </button>
      <button className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#0d1b0d] dark:text-white">
        <span className="material-symbols-outlined">shopping_bag</span>
        {cartCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-[#0d1b0d]">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  </header>
);

interface NavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const BottomNav: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: Tab; icon: string; label: string }[] = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'search', icon: 'search', label: 'Search' },
    { id: 'saved', icon: 'favorite', label: 'Saved' },
    { id: 'profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 pb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === tab.id ? 'text-primary' : 'text-gray-400 dark:text-gray-500'
          }`}
        >
          <span 
            className="material-symbols-outlined" 
            style={{ fontVariationSettings: activeTab === tab.id ? "'FILL' 1" : "'FILL' 0" }}
          >
            {tab.icon}
          </span>
          <span className="text-[10px] font-medium">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};
