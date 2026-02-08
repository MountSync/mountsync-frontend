import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function InventorySyncing() {
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
              Inventory Syncing{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Keep your inventory perfectly synchronized across all sales channels in real-time. Never oversell or miss a sale again.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-500/50 transition-all hover:shadow-blue-500/60 hover:scale-105">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
              <button className="rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-all hover:border-blue-600 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-gray-800">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Why Inventory Syncing{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30">
              <h3 className="mb-4 text-2xl font-bold text-red-900 dark:text-red-300">❌ Without Inventory Sync</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Overselling products you don't have in stock</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Manual updates across multiple platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Disappointed customers and bad reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Lost sales from showing out-of-stock items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Hours wasted on spreadsheet management</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-950/30">
              <h3 className="mb-4 text-2xl font-bold text-green-900 dark:text-green-300">✅ With MountSync</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Real-time inventory updates across all channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Automatic synchronization in milliseconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Happy customers with accurate stock levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Maximize sales with always-accurate availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Complete automation - set it and forget it</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 dark:from-gray-900 dark:to-blue-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Powerful Features
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Real-Time Updates', description: 'Inventory updates propagate instantly across all connected platforms.', icon: '⚡' },
              { title: 'Multi-Location Support', description: 'Sync inventory across multiple warehouses and fulfillment centers.', icon: '🗺️' },
              { title: 'Stock Alerts', description: 'Get notified when inventory falls below custom thresholds.', icon: '🔔' },
              { title: 'Bulk Adjustments', description: 'Update inventory for multiple products and locations at once.', icon: '📊' },
              { title: 'Inventory History', description: 'Track all inventory changes with detailed audit logs.', icon: '📜' },
              { title: 'Safety Stock', description: 'Set buffer quantities to prevent overselling during sync delays.', icon: '🛡️' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-xl hover:scale-105 dark:border-gray-800 dark:bg-gray-900"
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

      {/* How It Works */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              How It Works
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Connect Your Stores',
                description: 'Link all your sales channels (Shopify, WooCommerce, etc.) to MountSync.',
                icon: '🔗'
              },
              {
                step: '02',
                title: 'Configure Sync Rules',
                description: 'Set your master inventory source and syncing preferences.',
                icon: '⚙️'
              },
              {
                step: '03',
                title: 'Automatic Syncing',
                description: 'Inventory updates automatically across all channels in real-time.',
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
            Ready to Sync Your Inventory?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
            Join thousands of merchants who've eliminated inventory errors with MountSync.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20">
              Start Your Free 14-Day Trial
            </button>
            <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-blue-600">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
