'use client';

import Link from "next/link";
import React from "react";
import Ribbon from "../../components/Ribbon";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen">
      <Ribbon name="Refund Policy" showfont={false} />

      <div className="mx-auto mb-12 max-w-7xl space-y-6 px-4 md:px-8">
        <section className="footer space-y-6 rounded-xl p-6 shadow-md">

          <p className="about leading-relaxed">
            <span className="font-medium">Last Updated:</span> 23rd June, 2026
          </p>

          <p className="about leading-relaxed">
            This Refund Policy applies to all users of the ROCKETSINGH platform (&ldquo;Platform,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
          </p>

          <p className="about leading-relaxed">
            By using ROCKETSINGH, you agree to this Refund Policy.
          </p>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">1. About ROCKETSINGH</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH is a hyperlocal service marketplace that connects customers with skilled professionals through a
              technology-driven platform powered by automation, AI systems, and digital infrastructure.
            </p>
            <p className="about leading-relaxed">
              Our platform operates on a <span className="font-medium">lead-based and service facilitation model</span>, not a
              traditional commission-heavy marketplace.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">2. No Refund on Lead Purchases</h2>
            <p className="about mb-2 leading-relaxed">All payments made for:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Service leads</li>
              <li>Lead credits</li>
              <li>Subscription plans</li>
              <li>Membership access</li>
              <li>Platform usage fees related to leads</li>
            </ul>
            <p className="about leading-relaxed font-medium">are strictly non-refundable.</p>
            <p className="about mt-2 leading-relaxed">
              Once a lead is delivered, allocated, or made accessible to a service professional, it is considered fully consumed,
              regardless of whether the lead converts into a job or not.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">3. Reason for No Refund Policy</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH charges a <span className="font-medium">very small fee per lead or service access</span> to maintain
              and operate its technology infrastructure.
            </p>
            <p className="about mb-2 mt-2 leading-relaxed">These fees directly support:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Server infrastructure and hosting costs</li>
              <li>AI systems and machine learning models</li>
              <li>Automated lead allocation systems</li>
              <li>Location-based matching services</li>
              <li>Platform maintenance and security</li>
              <li>Development and operational expenses</li>
            </ul>
            <p className="about leading-relaxed">
              Because these resources are consumed immediately upon processing, refunds are not operationally feasible.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">4. Non-Refundable Nature of Digital Services</h2>
            <p className="about mb-2 leading-relaxed">All platform services including:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Digital lead distribution</li>
              <li>AI-based matching outputs</li>
              <li>Automated notifications</li>
              <li>Service request processing</li>
              <li>Data access and system usage</li>
            </ul>
            <p className="about leading-relaxed">
              are intangible digital services and cannot be reversed once delivered.
            </p>
            <p className="about leading-relaxed">Therefore, all such transactions are final.</p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">5. Exceptions (Limited Cases)</h2>
            <p className="about mb-2 leading-relaxed">Refunds may be considered only in rare cases such as:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Duplicate payment due to technical error</li>
              <li>Verified system malfunction resulting in non-delivery of service access</li>
              <li>Unauthorized transaction confirmed by ROCKETSINGH support team</li>
            </ul>
            <p className="about leading-relaxed">
              Any exception is at the sole discretion of ROCKETSINGH.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">6. Service Professional Responsibility</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH does not guarantee conversion of leads into confirmed jobs.
            </p>
            <p className="about mb-2 mt-2 leading-relaxed">Service professionals are responsible for:</p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Responding to leads</li>
              <li>Negotiating with customers</li>
              <li>Completing service delivery</li>
            </ul>
            <p className="about leading-relaxed">
              Failure to convert a lead does not qualify for a refund.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">7. Customer Payments (Separate Services)</h2>
            <p className="about mb-2 leading-relaxed">
              For customer-facing services (where applicable), refunds may be governed by:
            </p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Service completion status</li>
              <li>Cancellation timing</li>
              <li>Service provider agreement</li>
              <li>Specific service terms</li>
            </ul>
            <p className="about leading-relaxed">
              These are separate from lead-based payments.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">8. Subscription &amp; Membership Fees</h2>
            <p className="about mb-2 leading-relaxed">
              Any subscription or membership fees paid for accessing the Platform are:
            </p>
            <ul className="about mb-4 list-disc space-y-1 pl-6 leading-relaxed">
              <li>Non-refundable once activated</li>
              <li>Not prorated upon cancellation</li>
            </ul>
            <p className="about leading-relaxed">
              Users may choose to discontinue usage at the end of the billing cycle.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">9. Chargebacks</h2>
            <p className="about leading-relaxed">
              Users agree not to initiate chargebacks or payment disputes for valid transactions.
            </p>
            <p className="about mb-2 mt-2 leading-relaxed">Unjustified chargebacks may result in:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Account suspension</li>
              <li>Permanent ban from the Platform</li>
              <li>Legal or recovery action</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">10. Policy Updates</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH reserves the right to modify or update this Refund Policy at any time.
            </p>
            <p className="about leading-relaxed">
              Continued use of the Platform after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">11. Contact Information</h2>
            <p className="about mb-2 leading-relaxed">
              For refund-related queries, please contact:
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
            By using ROCKETSINGH, you acknowledge that you have read, understood, and agreed to this Refund Policy.
            For related policies, please see our{" "}
            <Link href="/tos" className="font-medium text-teal-800 hover:underline">
              Terms and Conditions
            </Link>
            .
          </p>

        </section>
      </div>
    </div>
  );
}
