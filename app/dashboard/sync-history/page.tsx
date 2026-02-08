'use client';

import { useState } from "react";
import Image from "next/image";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardTopNav from "../../components/DashboardTopNav";

export default function SyncHistory() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const syncHistory = [
    {
      id: 1,
      timestamp: '2026-02-08 16:30:15',
      source: 'Shopify',
      destination: 'WooCommerce',
      type: 'Inventory Update',
      items: 247,
      status: 'completed',
      duration: '2.3s',
      user: 'Auto Sync',
    },
    {
      id: 2,
      timestamp: '2026-02-08 15:30:12',
      source: 'WooCommerce',
      destination: 'Shopify',
      type: 'Product Sync',
      items: 18,
      status: 'completed',
      duration: '5.1s',
      user: 'John Doe',
    },
    {
      id: 3,
      timestamp: '2026-02-08 14:45:08',
      source: 'Shopify',
      destination: 'All Platforms',
      type: 'Full Sync',
      items: 1523,
      status: 'failed',
      duration: '45.2s',
      user: 'Auto Sync',
      error: 'Connection timeout to WooCommerce',
    },
    {
      id: 4,
      timestamp: '2026-02-08 13:30:05',
      source: 'Manual Upload',
      destination: 'Shopify',
      type: 'Bulk Import',
      items: 89,
      status: 'completed',
      duration: '12.4s',
      user: 'Jane Smith',
    },
    {
      id: 5,
      timestamp: '2026-02-08 12:15:22',
      source: 'WooCommerce',
      destination: 'Shopify',
      type: 'Inventory Update',
      items: 342,
      status: 'completed',
      duration: '3.8s',
      user: 'Auto Sync',
    },
    {
      id: 6,
      timestamp: '2026-02-08 11:00:18',
      source: 'Shopify',
      destination: 'WooCommerce',
      type: 'Price Update',
      items: 156,
      status: 'in_progress',
      duration: '...',
      user: 'Auto Sync',
    },
    {
      id: 7,
      timestamp: '2026-02-08 10:30:45',
      source: 'API Integration',
      destination: 'Shopify',
      type: 'Product Sync',
      items: 45,
      status: 'completed',
      duration: '6.2s',
      user: 'System',
    },
    {
      id: 8,
      timestamp: '2026-02-08 09:15:33',
      source: 'WooCommerce',
      destination: 'All Platforms',
      type: 'Inventory Update',
      items: 678,
      status: 'warning',
      duration: '8.9s',
      user: 'Auto Sync',
      error: '12 items failed validation',
    },
  ];

  const filteredHistory = syncHistory.filter(sync => {
    const matchesStatus = filterStatus === 'all' || sync.status === filterStatus;
    const matchesSearch = sync.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sync.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sync.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300';
      case 'failed':
        return 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300';
      case 'in_progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'failed':
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'in_progress':
        return (
          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="lg:pl-64">
        <DashboardTopNav title="Sync History" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="mb-6 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Syncs</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">3,247</p>
                </div>
                <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-950">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Successful</p>
                  <p className="mt-2 text-3xl font-bold text-green-600 dark:text-green-400">3,102</p>
                </div>
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-950">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Failed</p>
                  <p className="mt-2 text-3xl font-bold text-red-600 dark:text-red-400">87</p>
                </div>
                <div className="rounded-full bg-red-100 p-3 dark:bg-red-950">
                  <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">In Progress</p>
                  <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">58</p>
                </div>
                <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-950">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    filterStatus === 'all'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus('completed')}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    filterStatus === 'completed'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setFilterStatus('failed')}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    filterStatus === 'failed'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Failed
                </button>
                <button
                  onClick={() => setFilterStatus('in_progress')}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    filterStatus === 'in_progress'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  In Progress
                </button>
                <button
                  onClick={() => setFilterStatus('warning')}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    filterStatus === 'warning'
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Warnings
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search syncs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white md:w-64"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sync History Table */}
          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Timestamp</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Source</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Destination</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Items</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">User</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {filteredHistory.map((sync) => (
                    <tr key={sync.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {sync.timestamp}
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          {sync.source}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                          {sync.destination}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {sync.type}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                        {sync.items.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-2 w-fit rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(sync.status)}`}>
                          {getStatusIcon(sync.status)}
                          <span className="capitalize">{sync.status.replace('_', ' ')}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {sync.duration}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {sync.user}
                      </td>
                      <td className="px-6 py-4">
                        <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredHistory.length} of {syncHistory.length} syncs
              </p>
              <div className="flex gap-2">
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  Previous
                </button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  1
                </button>
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  2
                </button>
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  3
                </button>
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  Next
                </button>
              </div>
            </div>
          </div>
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
