'use client';

import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [integrationsOpen, setIntegrationsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-gray-950/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center">
              <Image 
                src="/mountlogo.png" 
                alt="MountSync Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              MountSync
            </span>
          </div>
          
          <div className="hidden items-center gap-8 md:flex">
            {/* Features Dropdown */}
            <div 
              className="relative group"
            >
              <button 
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onMouseEnter={() => setFeaturesOpen(true)}
              >
                Features
                <svg 
                  className={`h-4 w-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {featuresOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-800 dark:bg-gray-900"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  <a href="/features/inventory-syncing" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    Inventory Syncing
                  </a>
                  <a href="/features/product-syncing" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    Product Syncing
                  </a>
                  <a href="/features/order-syncing" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    Order Syncing
                  </a>
                </div>
              )}
            </div>

            {/* Integrations Dropdown */}
            <div 
              className="relative group"
            >
              <button 
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onMouseEnter={() => setIntegrationsOpen(true)}
              >
                Integrations
                <svg 
                  className={`h-4 w-4 transition-transform ${integrationsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {integrationsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-800 dark:bg-gray-900"
                  onMouseEnter={() => setIntegrationsOpen(true)}
                  onMouseLeave={() => setIntegrationsOpen(false)}
                >
                  <a href="/integrations/shopify" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    Shopify
                  </a>
                  <a href="/integrations/woocommerce" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    WooCommerce
                  </a>
                  {/* <a href="#amazon" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    Amazon
                  </a>
                  
                  <a href="#etsy" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    Etsy
                  </a>
                  <a href="#clover" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    Clover
                  </a>
                  <a href="#square" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    Square
                  </a>
                  <a href="#ebay" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    eBay
                  </a>
                  <a href="#tiktok" className="block px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    TikTok
                  </a> */}
                  
                </div>
              )}
            </div>

            <a href="#blog" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Blog
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Contact
            </a>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
  );
}
