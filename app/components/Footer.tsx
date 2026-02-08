export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 px-6 dark:border-gray-800 dark:bg-gray-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Features
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Inventory Syncing</a></li>
              <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Order Syncing</a></li>
              <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Product Syncing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Integrations
            </h3>
            <ul className="space-y-2">
              <li><a href="/integrations/shopify" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Shopify</a></li>
              <li><a href="/integrations/woocommerce" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">WooCommerce</a></li>
              {/* <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Etsy</a></li> */}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">About</a></li>
              <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 QuickSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
