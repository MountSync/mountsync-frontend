'use client';

import { useState } from "react";
import Image from "next/image";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardTopNav from "../../components/DashboardTopNav";

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
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="lg:pl-64">
        <DashboardTopNav title="Integrations" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
