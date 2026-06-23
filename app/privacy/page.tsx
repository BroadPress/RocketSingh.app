'use client';

import Link from "next/link";
import React from "react";
import Ribbon from "../../components/Ribbon";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Ribbon name="Privacy Policy" showfont={false} />

      <div className="mx-auto mb-12 max-w-7xl space-y-6 px-4 md:px-8">
        <section className="footer space-y-6 rounded-xl p-6 shadow-md">

          <p className="about leading-relaxed">
            <span className="font-medium">Last Updated:</span> 23rd June, 2026
          </p>

          <p className="about leading-relaxed">
            This Privacy Policy explains how ROCKETSINGH (&ldquo;Platform,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            collects, uses, stores, shares, and protects your information when you use our website,
            mobile applications, and services.
          </p>

          <p className="about leading-relaxed">
            By using ROCKETSINGH, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">1. About ROCKETSINGH</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH is an on-demand hyperlocal service platform that connects customers with skilled professionals
              for household, commercial, and specialized services.
            </p>
            <p className="about leading-relaxed">
              We use technology, automation, and AI-based systems to improve service discovery, lead allocation, and user experience.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">2. Information We Collect</h2>
            <p className="about mb-4 leading-relaxed">We collect the following types of information:</p>

            <h3 className="mb-2 text-lg font-medium text-teal-600">2.1 Personal Information</h3>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Address and location details</li>
              <li>Profile photo (if provided)</li>
              <li>Identity verification documents (for service professionals)</li>
            </ul>

            <h3 className="mb-2 text-lg font-medium text-teal-600">2.2 Service Information</h3>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Service requests and booking details</li>
              <li>Service categories selected</li>
              <li>Payment and transaction details</li>
              <li>Reviews and ratings</li>
            </ul>

            <h3 className="mb-2 text-lg font-medium text-teal-600">2.3 Technical Information</h3>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Device information (model, OS, browser type)</li>
              <li>IP address</li>
              <li>Location data (GPS or approximate location)</li>
              <li>Cookies and usage data</li>
              <li>App interaction logs</li>
            </ul>

            <h3 className="mb-2 text-lg font-medium text-teal-600">2.4 Professional Information (Service Providers)</h3>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Skills and experience</li>
              <li>Work history</li>
              <li>Certifications and licenses</li>
              <li>Availability and service areas</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">3. How We Use Your Information</h2>
            <p className="about mb-2 leading-relaxed">We use collected data for the following purposes:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>To create and manage user accounts</li>
              <li>To match customers with service professionals</li>
              <li>To process service requests and bookings</li>
              <li>To enable payments and invoicing</li>
              <li>To improve platform performance and user experience</li>
              <li>To provide customer support</li>
              <li>To verify identity and prevent fraud</li>
              <li>To send notifications and updates</li>
              <li>To improve AI-based recommendations and lead distribution systems</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">4. AI, Automation &amp; Smart Matching</h2>
            <p className="about mb-2 leading-relaxed">
              ROCKETSINGH uses Artificial Intelligence (AI) and automation systems to:
            </p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Match customers with nearby professionals</li>
              <li>Rank and distribute service leads</li>
              <li>Improve search results</li>
              <li>Optimize pricing suggestions</li>
              <li>Detect fraud or suspicious activity</li>
            </ul>
            <p className="about leading-relaxed">
              These systems may process user data automatically; however, final outcomes may still involve system
              limitations or inaccuracies.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">5. Sharing of Information</h2>
            <p className="about mb-4 leading-relaxed font-medium">We do not sell your personal data.</p>
            <p className="about mb-4 leading-relaxed">We may share information in the following cases:</p>

            <h3 className="mb-2 text-lg font-medium text-teal-600">5.1 With Service Professionals</h3>
            <p className="about mb-4 leading-relaxed">
              Name, contact, and location (as required for service fulfillment)
            </p>

            <h3 className="mb-2 text-lg font-medium text-teal-600">5.2 With Customers</h3>
            <p className="about mb-4 leading-relaxed">
              Professional name, skills, ratings, and service-related details
            </p>

            <h3 className="mb-2 text-lg font-medium text-teal-600">5.3 With Third-Party Service Providers</h3>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Payment gateways</li>
              <li>Cloud storage providers</li>
              <li>Analytics and monitoring tools</li>
              <li>Communication and messaging services</li>
            </ul>

            <h3 className="mb-2 text-lg font-medium text-teal-600">5.4 Legal Requirements</h3>
            <p className="about leading-relaxed">
              We may disclose data if required by law, regulation, or government authority.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">6. Data Storage and Security</h2>
            <p className="about mb-2 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your data, including:
            </p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Secure servers and encryption</li>
              <li>Access control mechanisms</li>
              <li>Secure API communication</li>
              <li>Regular system monitoring</li>
            </ul>
            <p className="about leading-relaxed">
              However, no digital system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">7. Cookies and Tracking Technologies</h2>
            <p className="about mb-2 leading-relaxed">ROCKETSINGH uses cookies and similar technologies to:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Improve user experience</li>
              <li>Remember preferences</li>
              <li>Track platform usage</li>
              <li>Analyze performance and traffic</li>
            </ul>
            <p className="about leading-relaxed">
              Users may disable cookies through browser settings, but some features may not function properly.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">8. Location Data</h2>
            <p className="about mb-2 leading-relaxed">We collect location data to:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Match users with nearby service professionals</li>
              <li>Improve service availability</li>
              <li>Optimize lead distribution</li>
            </ul>
            <p className="about leading-relaxed">
              Users can disable location access, but certain features may become unavailable.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">9. Data Retention</h2>
            <p className="about mb-2 leading-relaxed">We retain user data for as long as necessary to:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Provide services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
            <p className="about leading-relaxed">
              After this period, data may be securely deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">10. User Rights</h2>
            <p className="about mb-2 leading-relaxed">Depending on applicable laws, users may have the right to:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Access their personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of data</li>
              <li>Withdraw consent</li>
              <li>Restrict processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="about leading-relaxed">
              Requests can be submitted via our support channels.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">11. Third-Party Links</h2>
            <p className="about mb-2 leading-relaxed">
              The Platform may contain links to third-party websites or services.
            </p>
            <p className="about mb-2 leading-relaxed">We are not responsible for:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Privacy practices of third-party websites</li>
              <li>Content or policies of external services</li>
            </ul>
            <p className="about leading-relaxed">
              Users are encouraged to review third-party privacy policies separately.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">12. Children&apos;s Privacy</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH does not knowingly collect data from individuals under the age of 18.
            </p>
            <p className="about leading-relaxed">
              If we become aware of such data collection, we will take steps to delete the information immediately.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">13. Service Provider Data</h2>
            <p className="about mb-2 leading-relaxed">
              Service professionals registered on the Platform acknowledge that:
            </p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Certain data will be publicly visible to customers</li>
              <li>Ratings and reviews may be displayed publicly</li>
              <li>Work-related performance data may be used for platform optimization</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">14. Data Transfers</h2>
            <p className="about leading-relaxed">
              Your information may be stored or processed in servers located outside your region.
            </p>
            <p className="about leading-relaxed">
              By using ROCKETSINGH, you consent to such data transfers where applicable.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">15. Changes to This Privacy Policy</h2>
            <p className="about leading-relaxed">
              We may update this Privacy Policy from time to time.
            </p>
            <p className="about leading-relaxed">
              Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date.
            </p>
            <p className="about leading-relaxed">
              Continued use of the Platform after changes indicates acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">16. Contact Us</h2>
            <p className="about mb-2 leading-relaxed">
              If you have questions or concerns about this Privacy Policy, you may contact us at:
            </p>
            <p className="about leading-relaxed font-medium">ROCKETSINGH Support</p>
            <p className="about leading-relaxed">
              Email:{" "}
              <a href="mailto:support@rocketsingh.app" className="hover:underline">
                support@rocketsingh.app
              </a>
            </p>
            <p className="about leading-relaxed">
              Website:{" "}
              <a href="https://www.rocketsingh.app" className="hover:underline">
                www.rocketsingh.app
              </a>
            </p>
            <p className="about leading-relaxed">
              Address: Anna Salai, T. Nagar, Chennai, India
            </p>
          </div>

          <p className="about leading-relaxed">
            By using ROCKETSINGH, you acknowledge that you have read and understood this Privacy Policy.
            For related terms, please see our{" "}
            <Link href="/tos" className="font-medium text-teal-800 hover:underline">
              Terms and Conditions
            </Link>
            .
          </p>

        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
