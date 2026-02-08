import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function WooCommerceIntegration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-purple-950 dark:to-indigo-950">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 dark:border-purple-800 dark:bg-purple-950">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
              </span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">WooCommerce Integration</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.1' }}>
              Powerful WooCommerce{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Sync Integration
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Connect your WooCommerce store with QuickSync and sync inventory, products, and orders in real-time across all your sales channels.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:shadow-purple-500/60 hover:scale-105">
                <span className="relative z-10">Connect Your WooCommerce Store</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
              <button className="rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-all hover:border-purple-600 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-purple-500 dark:hover:bg-gray-800">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              What You Can Sync with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                WooCommerce
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Inventory Syncing',
                description: 'Real-time inventory updates across all your sales channels when stock changes in WooCommerce.',
                icon: '📊',
                color: 'purple'
              },
              {
                title: 'Product Syncing',
                description: 'Create products in WooCommerce and automatically push them to all connected platforms.',
                icon: '🛍️',
                color: 'indigo'
              },
              {
                title: 'Order Syncing',
                description: 'Centralize all orders from multiple channels and manage them from your WooCommerce dashboard.',
                icon: '📦',
                color: 'blue'
              },
              {
                title: 'WordPress Integration',
                description: 'Full integration with WordPress ecosystem and plugins for extended functionality.',
                icon: '📝',
                color: 'violet'
              },
              {
                title: 'Price Management',
                description: 'Set custom pricing rules for different channels while managing from WooCommerce.',
                icon: '💰',
                color: 'fuchsia'
              },
              {
                title: 'Variation Syncing',
                description: 'Automatically sync product variations, attributes, and custom fields across platforms.',
                icon: '🎨',
                color: 'pink'
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-purple-300 hover:shadow-xl hover:scale-105 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-purple-700"
              >
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
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
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20 px-6 dark:from-gray-900 dark:to-purple-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Connect WooCommerce in 3 Simple Steps
            </h2>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Install QuickSync Plugin',
                description: 'Install the QuickSync plugin from WordPress plugin directory or upload manually.',
                icon: '🔌'
              },
              {
                step: '02',
                title: 'Enter API Credentials',
                description: 'Configure your WooCommerce REST API keys in QuickSync settings.',
                icon: '🔐'
              },
              {
                step: '03',
                title: 'Start Syncing',
                description: 'Choose what to sync and let QuickSync handle the rest automatically.',
                icon: '⚡'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-2xl font-black text-white shadow-lg">
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
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
            Ready to Connect Your WooCommerce Store?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-purple-100">
            Join thousands of WooCommerce merchants who've automated their multichannel operations with QuickSync.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 text-base font-bold text-purple-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20">
              Get Started Now
            </button>
            <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-purple-600">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
