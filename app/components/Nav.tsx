'use client';

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

export default function Nav() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [integrationsOpen, setIntegrationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-gray-950/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-2">
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
          </a>
          
          {/* Desktop Navigation */}
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
            <a href="/contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Contact
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a href="/signup" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
            <div className="space-y-1 px-6 py-4">
              {/* Features Section */}
              <div className="space-y-1">
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                >
                  Features
                  <svg 
                    className={`h-5 w-5 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {featuresOpen && (
                  <div className="ml-4 space-y-1">
                    <a href="/features/inventory-syncing" className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">
                      Inventory Syncing
                    </a>
                    <a href="/features/product-syncing" className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">
                      Product Syncing
                    </a>
                    <a href="/features/order-syncing" className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">
                      Order Syncing
                    </a>
                  </div>
                )}
              </div>

              {/* Integrations Section */}
              <div className="space-y-1">
                <button
                  onClick={() => setIntegrationsOpen(!integrationsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                >
                  Integrations
                  <svg 
                    className={`h-5 w-5 transition-transform ${integrationsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {integrationsOpen && (
                  <div className="ml-4 space-y-1">
                    <a href="/integrations/shopify" className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">
                      Shopify
                    </a>
                    <a href="/integrations/woocommerce" className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">
                      WooCommerce
                    </a>
                  </div>
                )}
              </div>

              <a href="#blog" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                Blog
              </a>
              <a href="/contact" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                Contact
              </a>
              <a href="/login" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                Login
              </a>
              <a href="/signup" className="mt-4 block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </header>
  );
}
