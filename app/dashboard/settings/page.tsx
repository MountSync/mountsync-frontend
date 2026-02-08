'use client';

import { useState } from "react";
import Image from "next/image";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardTopNav from "../../components/DashboardTopNav";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="lg:pl-64">
        <DashboardTopNav title="Settings" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200 dark:border-gray-800">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('general')}
                className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === 'general'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                General
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === 'profile'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === 'notifications'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Notifications
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === 'security'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Security
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === 'billing'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Billing
              </button>
            </nav>
          </div>

          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Business Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Business Name
                    </label>
                    <input
                      type="text"
                      defaultValue="My Store"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Business Email
                    </label>
                    <input
                      type="email"
                      defaultValue="contact@mystore.com"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Time Zone
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                      <option>UTC (GMT+0:00)</option>
                      <option>EST (GMT-5:00)</option>
                      <option>PST (GMT-8:00)</option>
                      <option>EAT (GMT+3:00)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Currency
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                      <option>GBP - British Pound</option>
                      <option>KES - Kenyan Shilling</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Sync Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Auto Sync</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Automatically sync inventory every hour</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Low Stock Alerts</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Get notified when inventory is low</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Conflict Resolution</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Use latest update when conflicts occur</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Profile Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                    JD
                  </div>
                  <div>
                    <button className="rounded-lg border-2 border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-blue-950">
                      Change Photo
                    </button>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                  Update Profile
                </button>
              </div>
            </div>
          )}

          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Notification Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Sync completed</p>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Sync errors</p>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Low stock alerts</p>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Weekly reports</p>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 dark:text-gray-300">New orders</p>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Inventory updates</p>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Product updates</p>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Change Password</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Two-Factor Authentication</h2>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </p>
                <button className="rounded-lg border-2 border-blue-600 px-6 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400">
                  Enable 2FA
                </button>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/20">
                <h2 className="mb-2 text-lg font-bold text-red-900 dark:text-red-400">Danger Zone</h2>
                <p className="mb-4 text-sm text-red-700 dark:text-red-300">
                  Permanently delete your account and all of your data. This action cannot be undone.
                </p>
                <button className="rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-700">
                  Delete Account
                </button>
              </div>
            </div>
          )}

          {/* Billing Settings */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Current Plan</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">Professional Plan</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">$49/month • Billed monthly</p>
                  </div>
                  <button className="rounded-lg border-2 border-blue-600 px-6 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400">
                    Upgrade Plan
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Payment Method</h2>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Expires 12/2026</p>
                    </div>
                  </div>
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
                    Update
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Billing History</h2>
                <div className="space-y-3">
                  {[
                    { date: 'Jan 1, 2026', amount: '$49.00', status: 'Paid' },
                    { date: 'Dec 1, 2025', amount: '$49.00', status: 'Paid' },
                    { date: 'Nov 1, 2025', amount: '$49.00', status: 'Paid' },
                  ].map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0 dark:border-gray-700">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{invoice.date}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{invoice.amount}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
                          {invoice.status}
                        </span>
                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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
