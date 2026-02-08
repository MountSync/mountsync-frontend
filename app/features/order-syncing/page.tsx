import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function OrderSyncing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 dark:from-gray-950 dark:via-orange-950 dark:to-amber-950">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 dark:border-orange-800 dark:bg-orange-950">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
              </span>
              <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">Unified Order Management</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.1' }}>
              Order Syncing{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Centralize all your orders from multiple channels in one dashboard. Never miss an order and fulfill faster than ever.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-orange-500/50 transition-all hover:shadow-orange-500/60 hover:scale-105">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
              <button className="rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-all hover:border-orange-600 hover:bg-orange-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-orange-500 dark:hover:bg-gray-800">
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
              The Multi-Channel{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Order Problem
              </span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30">
              <h3 className="mb-4 text-2xl font-bold text-red-900 dark:text-red-300">❌ Without Order Sync</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Logging into multiple platforms to check orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Missing orders from secondary channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Delayed fulfillment and angry customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">No unified view of your business performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Manual data entry and export/import headaches</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-950/30">
              <h3 className="mb-4 text-2xl font-bold text-green-900 dark:text-green-300">✅ With MountSync</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">All orders from all channels in one dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Real-time order notifications from every platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Fast fulfillment with centralized processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Complete visibility into all sales and metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Automatic order import and status syncing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20 px-6 dark:from-gray-900 dark:to-orange-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Complete Order Control
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Unified Dashboard', description: 'View and manage all orders from every channel in one place.', icon: '📊' },
              { title: 'Order Routing', description: 'Automatically route orders to the right warehouse or fulfillment center.', icon: '🚚' },
              { title: 'Status Syncing', description: 'Update order status once and it syncs everywhere automatically.', icon: '🔄' },
              { title: 'Tracking Updates', description: 'Shipping tracking numbers sync back to all platforms.', icon: '📍' },
              { title: 'Order Filters', description: 'Advanced filtering by channel, status, date, and customer.', icon: '🔍' },
              { title: 'Bulk Actions', description: 'Process multiple orders at once with bulk fulfillment tools.', icon: '⚡' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-xl hover:scale-105 dark:border-gray-800 dark:bg-gray-900"
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
              Seamless Order Flow
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Order Received',
                description: 'Customer places order on any connected platform (Shopify, WooCommerce, etc.).',
                icon: '🛒'
              },
              {
                step: '02',
                title: 'Auto Import',
                description: 'Order automatically appears in your MountSync dashboard within seconds.',
                icon: '📥'
              },
              {
                step: '03',
                title: 'Fulfill & Update',
                description: 'Process the order and status updates sync back to original platform.',
                icon: '✅'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 text-2xl font-black text-white shadow-lg">
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
      <section className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
            Centralize Your Orders Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-orange-100">
            Stop juggling multiple dashboards. Manage all your orders from one powerful platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 text-base font-bold text-orange-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20">
              Start Your Free 14-Day Trial
            </button>
            <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-orange-600">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
