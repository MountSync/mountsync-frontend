'use client';

import { useState } from "react";
import Image from "next/image";

export default function Integrations() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);

  const connectedIntegrations = [
    {
      id: 1,
      name: 'Shopify',
      icon: '🛍️',
      status: 'active',
      lastSync: '2 mins ago',
      products: 1247,
      orders: 543,
      store: 'mystore.myshopify.com'
    },
    {
      id: 2,
      name: 'WooCommerce',
      icon: '🛒',
      status: 'active',
      lastSync: '15 mins ago',
      products: 856,
      orders: 234,
      store: 'mystore.com'
    }
  ];

  const availableIntegrations = [
    {
      id: 3,
      name: 'Amazon',
      icon: '📦',
      description: 'Sync with Amazon Seller Central',
      comingSoon: true
    },
    {
      id: 4,
      name: 'Etsy',
      icon: '🎨',
      description: 'Connect your Etsy shop',
      comingSoon: true
    },
    {
      id: 5,
      name: 'eBay',
      icon: '💼',
      description: 'Integrate with eBay',
      comingSoon: true
    },
    {
      id: 6,
      name: 'Square',
      icon: '⬛',
      description: 'Sync Square POS',
      comingSoon: true
    },
    {
      id: 7,
      name: 'BigCommerce',
      icon: '🏪',
      description: 'Connect BigCommerce store',
      comingSoon: true
    },
    {
      id: 8,
      name: 'Magento',
      icon: '🔶',
      description: 'Integrate with Magento',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen w-64 border-r border-gray-200 bg-white transition-transform dark:border-gray-800 dark:bg-gray-900 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 border-b border-gray-200 px-6 py-4 dark:border-gray-800">
            <Image 
              src="/mountlogo.png" 
              alt="MountSync Logo" 
              width={32} 
              height={32}
              className="object-contain"
            />
            <span className="text-lg font-bold text-gray-900 dark:text-white">MountSync</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            <a href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Overview
            </a>
            <a href="/dashboard/inventory" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Inventory
            </a>
            <a href="/dashboard/products" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Products
            </a>
            <a href="/dashboard/orders" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Orders
            </a>
            <a href="/dashboard/integrations" className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Integrations
            </a>
            <a href="/dashboard/sync-history" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sync History
            </a>
            <a href="/dashboard/settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
          </nav>

          {/* User Profile */}
          <div className="border-t border-gray-200 p-4 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                JD
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Integrations</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <a href="/" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                Logout
              </a>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Connected Integrations */}
          <section className="mb-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Connected Platforms</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Manage your active integrations</p>
              </div>
              <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                + Add Integration
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {connectedIntegrations.map((integration) => (
                <div key={integration.id} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl dark:bg-blue-950">
                        {integration.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{integration.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{integration.store}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
                      Active
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                      <p className="text-xs text-gray-600 dark:text-gray-400">Products</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">{integration.products.toLocaleString()}</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                      <p className="text-xs text-gray-600 dark:text-gray-400">Orders</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">{integration.orders.toLocaleString()}</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                      <p className="text-xs text-gray-600 dark:text-gray-400">Last Sync</p>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">{integration.lastSync}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-blue-950">
                      Configure
                    </button>
                    <button className="flex-1 rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-green-500 hover:bg-green-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-green-500 dark:hover:bg-green-950">
                      Sync Now
                    </button>
                    <button className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-semibold text-red-600 transition-all hover:border-red-500 hover:bg-red-50 dark:border-gray-700 dark:text-red-400 dark:hover:border-red-500 dark:hover:bg-red-950">
                      Disconnect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Available Integrations */}
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Available Integrations</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Connect more platforms to sync your inventory</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {availableIntegrations.map((integration) => (
                <div key={integration.id} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl dark:bg-gray-800">
                      {integration.icon}
                    </div>
                    {integration.comingSoon && (
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{integration.name}</h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{integration.description}</p>
                  <button 
                    disabled={integration.comingSoon}
                    className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                      integration.comingSoon
                        ? 'cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {integration.comingSoon ? 'Coming Soon' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Integration Guide */}
          <section className="mt-8">
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:border-blue-800 dark:from-blue-950 dark:to-indigo-950">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-600 p-3 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Need Help Connecting?</h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Our integration guides walk you through connecting each platform step-by-step. Need assistance? Our support team is here to help.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:shadow-md dark:bg-gray-800 dark:text-blue-400">
                      View Integration Guides
                    </a>
                    <a href="/contact" className="rounded-lg border-2 border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400">
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
