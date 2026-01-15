
import { Product, Occasion } from './types';

export const SEASONAL_FAVORITES: Product[] = [
  {
    id: '1',
    name: 'Sun-kissed Peonies',
    category: 'Signature Vase',
    price: 85.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmf2ssFOQr24gWTQhJ93X_dsVQNo_qfDuTsYJgcF3QLTLYQ8ijtFicpJ4q4aykHkZjdDr89V8BvRrlBML__Y-Udqz0EHn1DzdsrCvuID21TgvH0mcP3Y-SuJowgBtdu0W3PeK8bzPKzyGydJDwGH-v402AxpoWK53wmjIBs41hJDd9WdkRX6LkbhTBXzhWbeg5CD83zFCk76KTXk24C03ewZhOhbcCZ71JR88sLuJ7HIBdTtQcyXdVdxzCct3A0Ihm-_-Z8TIK7Hg_',
    description: 'Elegant yellow and white peonies.'
  },
  {
    id: '2',
    name: 'Lavender Fields',
    category: 'Farm Fresh',
    price: 72.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQaPd_ZKtBCRZtegoOYook5_08ISGQE3n9rZULItiECZxI6_tUVrP8JxULTypBldnkUb58VHnhkzmeOz_wjPFKg322YBnZktA540ErTMp1G7Gc2V3qgqVCoBMs1nJ80u0vibY4HnjoVh9HFjlQDQOHdFzcYbeCAdJKdbrKwJq9AgytwVwQ_BmpprNF0ysyBwhl0kcZwOFiBhoN_FNdRh3qaopbgxEIa6nAvgU4UNecgV94W8frkT-eED6oat-KWOK48gjci4vD3GA3',
    description: 'Fresh purple lavender bundle.'
  },
  {
    id: '3',
    name: 'Midnight Orchids',
    category: 'Rare Collection',
    price: 95.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc2nSpkn2Y4lqU-p7SfwF3hohBBJQr2M1Pje35iuEupR0EwqMFbnp_QC_NuCQb1pEkPCkKbLJw7pBHZA1SfUx9iRdx1s9YK-XvtazDj5iUUM5XSUkZHM2OVY4yWuEvURQ1TW5odxPi-EqRxJWybzGk-ixQ5i9dZhp_268JLunc8haaVukaL-3pkVKdYegrM4sEAPYAxHDr-OIxs6EPhBfR-2kro3tkzluFhTf7MdasMmqC6UeLkwwpz9zcdPCOuQhNpkabFtRQYGQs',
    description: 'Modern deep purple orchids.'
  }
];

export const OCCASIONS: Occasion[] = [
  {
    id: 'birthdays',
    name: 'Birthdays',
    icon: 'cake',
    bgColor: '#fff4f4',
    textColor: 'text-pink-400',
    darkBg: 'dark:bg-pink-900/20'
  },
  {
    id: 'anniversaries',
    name: 'Anniversaries',
    icon: 'favorite',
    bgColor: '#f0f9ff',
    textColor: 'text-blue-400',
    darkBg: 'dark:bg-blue-900/20'
  },
  {
    id: 'just-because',
    name: 'Just Because',
    icon: 'spa',
    bgColor: '#f5f3ff',
    textColor: 'text-purple-400',
    darkBg: 'dark:bg-purple-900/20'
  },
  {
    id: 'congratulations',
    name: 'Congratulations',
    icon: 'wb_sunny',
    bgColor: '#fefce8',
    textColor: 'text-yellow-500',
    darkBg: 'dark:bg-yellow-900/20'
  }
];
