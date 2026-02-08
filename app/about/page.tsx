import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.1' }}>
              We're Building the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Multi-Channel Commerce
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              MountSync was born from a simple frustration: managing inventory across multiple sales channels shouldn't be this hard.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We're on a mission to help e-commerce merchants scale their businesses without the operational chaos. Every day, thousands of sellers lose revenue to overselling, underselling, and manual data entry errors.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                MountSync eliminates these problems by providing real-time synchronization across all your sales channels, giving you the freedom to focus on growth instead of spreadsheets.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-gray-800 dark:from-blue-950 dark:to-indigo-950">
                <div className="mb-3 text-4xl">🎯</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Accuracy First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">99.9% sync accuracy across all platforms</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-gray-800 dark:from-blue-950 dark:to-indigo-950">
                <div className="mb-3 text-4xl">⚡</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Real-Time Speed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Updates sync in milliseconds, not hours</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-gray-800 dark:from-blue-950 dark:to-indigo-950">
                <div className="mb-3 text-4xl">🚀</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Built to Scale</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Handles millions of products effortlessly</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-gray-800 dark:from-blue-950 dark:to-indigo-950">
                <div className="mb-3 text-4xl">💙</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Customer Obsessed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Support that actually cares about your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 dark:from-gray-900 dark:to-blue-950 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Our Story
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              MountSync started in 2025 when our founders, experienced e-commerce operators themselves, faced a critical problem: their inventory management system couldn't keep up with their growing multi-channel business.
            </p>
            <p>
              After countless nights of manual spreadsheet updates, dealing with angry customers who ordered out-of-stock items, and watching competitors pull ahead, they decided enough was enough. There had to be a better way.
            </p>
            <p>
              They built MountSync to solve their own problem—a real-time synchronization engine that could handle the complexity of modern multi-channel commerce. What started as an internal tool quickly became something other merchants desperately needed.
            </p>
            <p>
              Today, MountSync serves thousands of merchants worldwide, syncing millions of products across multiple platforms every day. We're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🎯',
                title: 'Obsess Over Accuracy',
                description: "Every sync matters. We treat your inventory data like it's our own because merchant trust is everything."
              },
              {
                icon: '🚀',
                title: 'Ship Fast, Learn Faster',
                description: 'We move quickly but thoughtfully, constantly iterating based on merchant feedback and real-world usage.'
              },
              {
                icon: '💪',
                title: 'Empower Merchants',
                description: 'We build tools that give you superpowers, not complexity. Simple is powerful, and powerful should be simple.'
              },
              {
                icon: '🤝',
                title: 'Be Radically Transparent',
                description: "No hidden fees, no surprises. We communicate openly about what works, what doesn't, and what's next."
              },
              {
                icon: '🌟',
                title: 'Excellence is Standard',
                description: "Good enough isn't. We hold ourselves to the highest standards because your business depends on us."
              },
              {
                icon: '🌍',
                title: 'Think Global, Act Local',
                description: "We serve merchants worldwide but treat every customer like they're our only customer."
              }
            ].map((value, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-all hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 dark:hover:border-blue-700"
              >
                <div className="mb-4 text-5xl">{value.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
              MountSync by the Numbers
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '10K+',
                label: 'Active Merchants'
              },
              {
                number: '50M+',
                label: 'Products Synced Daily'
              },
              {
                number: '99.9%',
                label: 'Uptime Guarantee'
              },
              {
                number: '24/7',
                label: 'Support Available'
              }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-black text-white lg:text-6xl mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Join Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We're always looking for talented people who share our mission
            </p>
          </div>

          <div className="rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 text-center dark:border-blue-800 dark:from-blue-950 dark:to-indigo-950">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Building the Future Together
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              We're a small but mighty team of engineers, designers, and merchant advocates. If you're passionate about solving real problems for real businesses, we'd love to hear from you.
            </p>
            <a 
              href="/careers" 
              className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-500/50 transition-all hover:shadow-blue-500/60 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 dark:from-gray-900 dark:to-blue-950 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white lg:text-5xl">
            Ready to Join Thousands of Smart Merchants?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Start syncing your inventory in minutes. No credit card required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-500/50 transition-all hover:shadow-blue-500/60 hover:scale-105">
              Start Your Free 14-Day Trial
            </button>
            <a 
              href="/contact"
              className="rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-bold text-gray-900 transition-all hover:border-blue-600 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-gray-800"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
