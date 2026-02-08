import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-purple-950 dark:to-indigo-950">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-12 px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.1' }}>
              Terms of Service
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Last Updated: February 8, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 px-6 dark:bg-gray-950 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing or using MountSync's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </div>

            {/* Description of Service */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                MountSync provides a multi-channel e-commerce synchronization platform that enables users to sync inventory, products, and orders across multiple sales channels including Shopify, WooCommerce, and other supported platforms. The service is provided on a subscription basis with different pricing tiers.
              </p>
            </div>

            {/* Account Registration */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">3. Account Registration</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                <li>Maintain and promptly update your account information</li>
                <li>Be at least 18 years of age or have parental consent</li>
                <li>Not have been previously suspended or removed from the service</li>
              </ul>
            </div>

            {/* Subscription and Billing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">4. Subscription and Billing</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Free Trial:</strong> We may offer a 14-day free trial for new users. At the end of the trial period, your account will be automatically upgraded to a paid subscription unless you cancel before the trial ends.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Subscription Fees:</strong> You agree to pay all fees associated with your chosen subscription plan. Fees are billed in advance on a monthly or annual basis and are non-refundable except as required by law.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Automatic Renewal:</strong> Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Price Changes:</strong> We reserve the right to modify our pricing with 30 days' notice. Continued use of the service after a price change constitutes acceptance of the new pricing.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">5. Acceptable Use Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use the service for any illegal purpose or in violation of any laws</li>
                <li>Violate the security or integrity of any network, computer or communications system</li>
                <li>Attempt to gain unauthorized access to other accounts, computer systems, or networks</li>
                <li>Interfere with or disrupt the service or servers connected to the service</li>
                <li>Use the service to transmit any viruses, malware, or other harmful code</li>
                <li>Reverse engineer, decompile, or disassemble any portion of the service</li>
                <li>Use automated systems to access the service in a manner that sends more requests than a human can reasonably produce</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive property of MountSync and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You retain all rights to the data you input into the service. By using the service, you grant us a limited license to use, store, and process your data solely for the purpose of providing the service to you.
              </p>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">7. Service Availability and Support</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Uptime:</strong> We strive to maintain 99.9% uptime but do not guarantee uninterrupted access to the service. Scheduled maintenance will be performed with advance notice when possible.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Support:</strong> Customer support is provided via email and online documentation. Response times vary based on your subscription plan.
              </p>
            </div>

            {/* Data and Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">8. Data and Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your use of the service is also governed by our Privacy Policy. By using the service, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Third-Party Integrations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">9. Third-Party Integrations</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                MountSync integrates with third-party platforms (Shopify, WooCommerce, etc.). You are responsible for complying with the terms of service of these third-party platforms. We are not responsible for any issues arising from changes to third-party APIs or services.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, MountSync shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the service.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">11. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>By You:</strong> You may cancel your subscription at any time through your account settings. Cancellation will be effective at the end of your current billing period.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>By Us:</strong> We may suspend or terminate your account if you violate these terms or engage in fraudulent activity. Upon termination, your right to use the service will immediately cease.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Data Retention:</strong> Upon termination, we will retain your data for 30 days to allow for reactivation, after which it will be permanently deleted.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will provide notice of material changes by email or through the service. Your continued use of the service after such changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">13. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">14. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> legal@mountsync.com<br />
                  <strong>Address:</strong> MountSync Inc., 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
