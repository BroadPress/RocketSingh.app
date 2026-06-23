'use client';

import Link from "next/link";
import React from "react";
import Ribbon from "../../components/Ribbon";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Ribbon name="Disclaimer" showfont={false} />

      <div className="mx-auto mb-12 max-w-7xl space-y-6 px-4 md:px-8">
        <section className="footer space-y-6 rounded-xl p-6 shadow-md">

          <p className="about leading-relaxed">
            <span className="font-medium">Last Updated:</span> 23rd June, 2026
          </p>

          <p className="about leading-relaxed">
            This Disclaimer governs the use of the ROCKETSINGH platform (&ldquo;Platform,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            By accessing or using the Platform, you acknowledge and agree to the terms outlined in this Disclaimer.
          </p>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">1. General Information</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH is a technology-driven hyperlocal service marketplace that connects customers with independent service professionals.
            </p>
            <p className="about leading-relaxed">
              The Platform acts solely as an intermediary to facilitate discovery, communication, and booking of services.
              We do not directly provide most of the services listed unless explicitly stated.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">2. No Service Guarantee</h2>
            <p className="about mb-2 leading-relaxed">ROCKETSINGH does not guarantee:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>The quality of services provided by service professionals</li>
              <li>Timeliness or completion of services</li>
              <li>Accuracy of service descriptions provided by professionals</li>
              <li>Availability of any specific service provider</li>
            </ul>
            <p className="about leading-relaxed">
              All services are performed by independent third-party service professionals, and ROCKETSINGH is not responsible
              for their actions, omissions, or performance.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">3. Independent Contractors</h2>
            <p className="about leading-relaxed">
              All service professionals listed on the Platform operate as independent contractors and not as employees,
              agents, or representatives of ROCKETSINGH.
            </p>
            <p className="about leading-relaxed">
              ROCKETSINGH does not supervise, control, or direct how services are performed. Any agreement for service
              delivery exists directly between the customer and the service professional.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">4. Limitation of Liability</h2>
            <p className="about mb-2 leading-relaxed">
              To the fullest extent permitted by law, ROCKETSINGH shall not be liable for:
            </p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Any damage to property</li>
              <li>Personal injury or harm</li>
              <li>Financial loss or business interruption</li>
              <li>Service delays or cancellations</li>
              <li>Poor quality or incomplete services</li>
              <li>Disputes between users and service professionals</li>
            </ul>
            <p className="about leading-relaxed">
              Users engage with service professionals at their own risk.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">5. AI and Technology-Based Matching</h2>
            <p className="about mb-2 leading-relaxed">
              The Platform uses Artificial Intelligence (AI), algorithms, and automation systems for:
            </p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Matching users with service professionals</li>
              <li>Allocating leads and service requests</li>
              <li>Ranking search results</li>
              <li>Providing recommendations</li>
            </ul>
            <p className="about leading-relaxed">
              While we aim for accuracy and efficiency, we do not guarantee that AI-based results will always be correct,
              optimal, or error-free.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">6. Third-Party Responsibility</h2>
            <p className="about mb-2 leading-relaxed">ROCKETSINGH may use or integrate third-party services such as:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Payment gateways</li>
              <li>Mapping and location services</li>
              <li>Communication tools</li>
              <li>Analytics platforms</li>
            </ul>
            <p className="about leading-relaxed">
              We are not responsible for the performance, policies, or actions of third-party providers.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">7. User Responsibility</h2>
            <p className="about mb-2 leading-relaxed">Users are responsible for:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Verifying the suitability of service professionals</li>
              <li>Ensuring safe access to service locations</li>
              <li>Providing accurate booking information</li>
              <li>Supervising work when necessary</li>
            </ul>
            <p className="about leading-relaxed">
              Customers should exercise their own judgment before engaging any service provider.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">8. No Professional Advice</h2>
            <p className="about leading-relaxed">
              Any information provided on the Platform (including service descriptions, recommendations, or support content)
              is for general informational purposes only and should not be considered professional, legal, financial,
              or technical advice.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">9. External Links</h2>
            <p className="about leading-relaxed">
              The Platform may contain links to external websites or third-party services.
            </p>
            <p className="about leading-relaxed">
              ROCKETSINGH does not control or endorse such websites and is not responsible for their content, policies, or practices.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">10. Service Availability</h2>
            <p className="about mb-2 leading-relaxed">Service availability may vary based on:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Location</li>
              <li>Demand</li>
              <li>Availability of service professionals</li>
              <li>Operational limitations</li>
            </ul>
            <p className="about leading-relaxed">
              ROCKETSINGH does not guarantee uninterrupted or error-free availability of services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">11. Changes to Disclaimer</h2>
            <p className="about leading-relaxed">
              We reserve the right to modify or update this Disclaimer at any time without prior notice.
            </p>
            <p className="about leading-relaxed">
              Continued use of the Platform after changes indicates acceptance of the updated Disclaimer.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">12. Contact Information</h2>
            <p className="about mb-2 leading-relaxed">
              For any questions regarding this Disclaimer, please contact:
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
            By using ROCKETSINGH, you acknowledge that you have read, understood, and agreed to this Disclaimer.
            For related policies, please see our{" "}
            <Link href="/privacy" className="font-medium text-teal-800 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
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

export default Disclaimer;
