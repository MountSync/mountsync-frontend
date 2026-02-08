'use client';

import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-950">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Real-Time Syncing</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.1' }}>
              Real-Time Product & Inventory Sync{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Across All Channels
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Sync your products, inventory, and orders in real-time across multiple channels. Scale effortlessly and focus on profitable growth.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-500/50 transition-all hover:shadow-blue-500/60 hover:scale-105">
                <span className="relative z-10">Start Your Free 14-Day Trial</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
              <button className="rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-all hover:border-blue-600 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-gray-800">
                Watch Demo
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
              No Credit Card Required | Cancel Anytime
            </p>
          </div>

          {/* Integration Logos */}
          <div className="mt-20">
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
              Integrated with Multiple Stores
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              {['Shopify', 'Amazon', 'Etsy', 'eBay', 'WooCommerce', 'Square', 'TikTok', 'Clover'].map((brand) => (
                <div key={brand} className="flex h-12 w-24 items-center justify-center rounded-lg bg-white px-4 shadow-sm dark:bg-gray-900">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Your Unsynced Stores Are{' '}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Losing Revenue
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Every un-integrated platform costs you sales. MountSync keeps everything in real-time.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Overselling & Stockouts',
                description: 'Selling items you don\'t have leads to refunds, bad reviews, and suspended accounts.',
                stat: '12–18% Monthly Revenue Loss',
                icon: '❌',
                color: 'red'
              },
              {
                title: 'Manual Stock Updates',
                description: 'Spending hours updating spreadsheets and CSVs every time you make a sale.',
                stat: '8–12 Hours/Week Wasted',
                icon: '⏰',
                color: 'orange'
              },
              {
                title: 'Duplicate Product Data',
                description: 'Inconsistent titles, descriptions, and SKUs across channels create errors.',
                stat: '30% Lower Product Accuracy',
                icon: '📋',
                color: 'yellow'
              },
              {
                title: 'Multi-Store Confusion',
                description: 'Losing track of which warehouse has what inventory leads to fulfillment nightmares.',
                stat: '2x Higher Error Rates',
                icon: '🏪',
                color: 'purple'
              },
              {
                title: 'Slow Fulfillment',
                description: 'Orders in pending status because you didn\'t see them come in from a secondary channel.',
                stat: '24–48 Hours Fulfillment Time',
                icon: '📦',
                color: 'blue'
              },
              {
                title: 'Platform Isolation',
                description: 'Managing stores separately means you never have a single source of truth.',
                stat: '40% More Operational Mistakes',
                icon: '🔗',
                color: 'indigo'
              }
            ].map((problem, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 text-4xl">{problem.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {problem.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {problem.description}
                </p>
                <div className={`inline-block rounded-full bg-${problem.color}-100 px-4 py-2 text-sm font-bold text-${problem.color}-700 dark:bg-${problem.color}-950 dark:text-${problem.color}-300`}>
                  {problem.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 dark:from-gray-900 dark:to-blue-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-bold text-white">
              3 – 2 – 1 & Ready to Sync
            </div>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Start Syncing in 3 Easy Steps
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Zero Hassle. Full Automation.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Connect your stores',
                description: 'Link your Shopify, WooCommerce, Etsy, or Square accounts in just a few clicks. No coding required.',
                icon: '🔗'
              },
              {
                step: '02',
                title: 'Enable sync options',
                description: 'Choose what to sync: inventory, pricing, product details, or orders. Set your master store.',
                icon: '⚙️'
              },
              {
                step: '03',
                title: 'Automation takes over',
                description: 'MountSync runs in the background 24/7, keeping everything perfectly aligned in real-time.',
                icon: '🚀'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-2xl font-black text-white shadow-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
                {idx < 2 && (
                  <div className="absolute left-8 top-20 hidden h-12 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 lg:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Features
            </div>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Powerful Features Making Multi-Store Syncing{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Effortless
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Real-time Inventory Sync', description: 'Instantly update stock levels across all channels when a sale happens in any store.', icon: '📊' },
              { title: 'Product Sync', description: 'Create a product once and push it to Shopify, WooCommerce, and Etsy with a single click.', icon: '🛍️' },
              { title: 'Order Sync', description: 'Centralize all your orders in one dashboard for streamlined picking, packing, and shipping.', icon: '📦' },
              { title: 'Price Rules', description: 'Set different price rules for each channel (e.g., +10% on Amazon to cover fees).', icon: '💰' },
              { title: 'Multi-location Syncing', description: 'Map inventory from specific warehouses to specific sales channels automatically.', icon: '🗺️' },
              { title: 'Automatic SKU Creation', description: 'Automate your inventory management with our seamless SKU creation system!', icon: '🔢' },
              { title: 'Selective Sync Control', description: 'Choose exactly what to sync: individual products, categories, or collections.', icon: '🎯' },
              { title: 'One-click Automation', description: 'Set it and forget it. Automated workflows handle the busy work.', icon: '⚡' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-blue-300 hover:shadow-xl hover:scale-105 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-blue-700"
              >
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 dark:from-gray-900 dark:to-blue-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-4 inline-block text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Pricing
            </div>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Affordable, Transparent, Built for Growth
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Lite Plan',
                price: '$19',
                tagline: 'Start strong without overspending',
                features: [
                  'Accurate inventory sync across stores',
                  'Import and export products instantly',
                  'Automate basics and avoid manual work',
                  'Simple setup with zero learning curve'
                ],
                cta: 'Sign Up',
                popular: false
              },
              {
                name: 'Pro Plan',
                price: '$29',
                tagline: 'Unlock full multichannel power',
                features: [
                  'Real-time inventory syncing',
                  'Product syncing from master store',
                  'Order syncing to prevent overselling',
                  'Faster sync speeds for growing stores'
                ],
                cta: 'Sign Up',
                popular: true
              },
              {
                name: 'Ultra Plan',
                price: '$69',
                tagline: 'The ultimate automation upgrade',
                features: [
                  'Done-for-you setup to save time',
                  'Priority product syncing performance',
                  'Priority order syncing reliability',
                  'Videos, notes, forex & price rules'
                ],
                cta: 'Sign Up',
                popular: false
              }
            ].map((plan, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden rounded-3xl border-2 p-8 transition-all hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl shadow-blue-500/50' 
                    : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-gray-900">
                    POPULAR
                  </div>
                )}
                <div>
                  <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                      /mo
                    </span>
                  </div>
                  <p className={`mt-3 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.tagline}
                  </p>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <svg 
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`mt-8 w-full rounded-full py-3 text-base font-bold transition-all hover:scale-105 ${
                    plan.popular
                      ? 'bg-white text-blue-600 shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
            Your Multi-Channel Chaos Ends Here
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
            Join thousands of merchants who've automated their multichannel operations and safeguard every sale with the market's most accurate syncing engine.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20">
              Start Your Free 14-Day Trial
            </button>
            <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-blue-600">
              Book a Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}