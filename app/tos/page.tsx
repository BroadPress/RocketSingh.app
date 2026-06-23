'use client';

import Link from "next/link";
import React from "react";
import Ribbon from "../../components/Ribbon";

const TermsofServices = () => {
  return (
    <div className="min-h-screen">
      <Ribbon name="Terms and Conditions" showfont={false} />

      <div className="mx-auto mb-12 max-w-7xl space-y-6 px-4 md:px-8">
        <section className="footer space-y-6 rounded-xl p-6 shadow-md">

          <p className="about leading-relaxed">
            <span className="font-medium">Last Updated:</span> 23rd June, 2026
          </p>

          <p className="about leading-relaxed">
            Welcome to ROCKETSINGH (&ldquo;Platform,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the ROCKETSINGH website,
            mobile applications, services, and related platforms.
          </p>

          <p className="about leading-relaxed">
            By accessing, browsing, registering, or using the Platform, you agree to be bound by these Terms.
            If you do not agree with these Terms, you must not use the Platform.
          </p>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">1. About ROCKETSINGH</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH is an on-demand hyperlocal service platform that connects customers with independent
              skilled professionals and service providers for household, commercial, maintenance, repair, cleaning,
              installation, and other related services.
            </p>
            <p className="about leading-relaxed">
              ROCKETSINGH acts as a technology platform that facilitates service discovery, booking, communication,
              lead generation, and payment-related processes between customers and service professionals.
            </p>
            <p className="about leading-relaxed">
              ROCKETSINGH does not directly provide most services listed on the Platform unless specifically stated.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">2. Eligibility</h2>
            <p className="about mb-2 leading-relaxed">By using the Platform, you represent and warrant that:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>You are at least 18 years of age.</li>
              <li>You have the legal authority to enter into binding agreements.</li>
              <li>All information provided by you is accurate, complete, and up-to-date.</li>
              <li>You will comply with all applicable laws and regulations.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">3. User Accounts</h2>
            <p className="about mb-2 leading-relaxed">
              To access certain services, users may be required to create an account. You agree to:
            </p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Provide accurate registration information.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>Be responsible for all activities conducted through your account.</li>
              <li>Immediately notify ROCKETSINGH of any unauthorized access or security breach.</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              ROCKETSINGH reserves the right to suspend or terminate accounts that contain false information or violate these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">4. Services Offered</h2>
            <p className="about mb-2 leading-relaxed">
              The Platform may offer access to various service categories, including but not limited to:
            </p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Home Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Plumbing</li>
              <li>Electrical Repair</li>
              <li>Appliance Repair</li>
              <li>AC Repair &amp; Maintenance</li>
              <li>Painting Services</li>
              <li>Pest Control</li>
              <li>Home Renovation</li>
              <li>Gardening Services</li>
              <li>Moving Services</li>
              <li>Salon and Wellness Services</li>
              <li>Installation Services</li>
              <li>Commercial Services</li>
              <li>Other Hyperlocal Services</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              The availability of services may vary depending on location, demand, and service provider availability.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">5. Customer Responsibilities</h2>
            <p className="about mb-2 leading-relaxed">Customers agree to:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Provide accurate booking information.</li>
              <li>Ensure safe and reasonable access to the service location.</li>
              <li>Cooperate with service professionals during service delivery.</li>
              <li>Make payments as agreed.</li>
              <li>Treat service professionals respectfully and professionally.</li>
            </ul>
            <p className="about mb-2 mt-4 leading-relaxed">Customers shall not:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Engage in abusive, threatening, discriminatory, or unlawful conduct.</li>
              <li>Attempt to circumvent the Platform for fraudulent purposes.</li>
              <li>Provide false complaints or misleading reviews.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">6. Service Professional Responsibilities</h2>
            <p className="about mb-2 leading-relaxed">Service professionals using the Platform agree to:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Maintain required licenses, permits, and certifications where applicable.</li>
              <li>Deliver services professionally and responsibly.</li>
              <li>Provide accurate information regarding qualifications and experience.</li>
              <li>Comply with applicable laws and safety standards.</li>
              <li>Respect customer property and privacy.</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              Service professionals are solely responsible for the services they provide.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">7. Lead Generation and Service Fees</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH may charge service professionals a lead fee, membership fee, subscription fee, advertising fee,
              or other applicable charges for accessing opportunities through the Platform.
            </p>
            <p className="about leading-relaxed">
              The Platform generally follows a lead-based business model rather than high commission-based deductions.
            </p>
            <p className="about leading-relaxed">
              All fees paid to ROCKETSINGH are non-refundable unless otherwise specified in writing.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">8. Pricing and Payments</h2>
            <p className="about mb-2 leading-relaxed">Service pricing may be:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Fixed by the Platform;</li>
              <li>Quoted by service professionals; or</li>
              <li>Determined based on project requirements.</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              Customers agree to pay all applicable charges associated with booked services.
            </p>
            <p className="about leading-relaxed">
              ROCKETSINGH reserves the right to modify pricing structures, service charges, convenience fees,
              and platform fees at any time.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">9. Cancellations and Refunds</h2>
            <p className="about leading-relaxed">
              Customers may cancel bookings subject to applicable cancellation policies.
            </p>
            <p className="about mb-2 leading-relaxed">Refund eligibility shall depend on:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Service category;</li>
              <li>Cancellation timing;</li>
              <li>Service completion status; and</li>
              <li>Applicable promotional conditions.</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              ROCKETSINGH reserves the right to determine refund eligibility on a case-by-case basis.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">10. Independent Contractor Relationship</h2>
            <p className="about leading-relaxed">
              Service professionals listed on the Platform are independent contractors and are not employees, agents,
              partners, or representatives of ROCKETSINGH.
            </p>
            <p className="about leading-relaxed">
              ROCKETSINGH does not supervise or control the manner in which independent professionals perform their services.
            </p>
            <p className="about leading-relaxed">
              Any contractual relationship regarding service execution exists directly between the customer and the service professional.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">11. Background Verification</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH may conduct identity verification, document verification, or background checks on service
              professionals where feasible.
            </p>
            <p className="about mb-2 leading-relaxed">However, ROCKETSINGH does not guarantee:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>The accuracy of information provided by users;</li>
              <li>The quality of services;</li>
              <li>The conduct of any customer or service professional; or</li>
              <li>The suitability of any service provider for a specific task.</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              Users are encouraged to exercise their own judgment before engaging services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">12. Artificial Intelligence and Automation</h2>
            <p className="about leading-relaxed">
              The Platform may use Artificial Intelligence (AI), machine learning, location-based matching, automation systems,
              and smart lead allocation technologies to improve service delivery.
            </p>
            <p className="about mb-2 leading-relaxed">Users acknowledge that automated systems may influence:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Service recommendations;</li>
              <li>Lead distribution;</li>
              <li>Search results;</li>
              <li>Matching processes; and</li>
              <li>Customer support interactions.</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              ROCKETSINGH does not guarantee perfect accuracy of automated systems.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">13. Intellectual Property</h2>
            <p className="about mb-2 leading-relaxed">All content on the Platform, including:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Logos</li>
              <li>Branding</li>
              <li>Software</li>
              <li>Design</li>
              <li>Text</li>
              <li>Graphics</li>
              <li>Databases</li>
              <li>AI systems</li>
              <li>Source code</li>
              <li>Technology infrastructure</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              is owned by or licensed to ROCKETSINGH and protected by applicable intellectual property laws.
            </p>
            <p className="about leading-relaxed">
              Users may not copy, distribute, modify, reverse engineer, or exploit Platform content without written permission.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">14. Prohibited Activities</h2>
            <p className="about mb-2 leading-relaxed">Users shall not:</p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Use the Platform for illegal purposes.</li>
              <li>Upload harmful software or malicious code.</li>
              <li>Attempt unauthorized access to systems.</li>
              <li>Misrepresent identity or qualifications.</li>
              <li>Interfere with Platform operations.</li>
              <li>Harvest user data without consent.</li>
              <li>Engage in fraud, abuse, or deceptive conduct.</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              Violation may result in suspension, termination, and legal action.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">15. Limitation of Liability</h2>
            <p className="about mb-2 leading-relaxed">
              To the maximum extent permitted by law, ROCKETSINGH shall not be liable for:
            </p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Service quality disputes;</li>
              <li>Property damage;</li>
              <li>Personal injury;</li>
              <li>Service delays;</li>
              <li>Business losses;</li>
              <li>Indirect or consequential damages;</li>
              <li>Acts or omissions of service professionals or customers.</li>
            </ul>
            <p className="about mt-2 leading-relaxed">
              The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">16. Indemnification</h2>
            <p className="about mb-2 leading-relaxed">
              You agree to indemnify and hold harmless ROCKETSINGH, its directors, employees, affiliates, partners,
              and representatives from any claims, losses, damages, liabilities, costs, or expenses arising from:
            </p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Your use of the Platform;</li>
              <li>Your violation of these Terms;</li>
              <li>Your violation of applicable laws; or</li>
              <li>Disputes between customers and service professionals.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">17. Privacy</h2>
            <p className="about leading-relaxed">
              Your use of the Platform is also governed by our{" "}
              <Link href="/privacy" className="font-medium text-teal-800 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="about leading-relaxed">
              By using ROCKETSINGH, you consent to the collection, processing, and storage of information as described
              in the Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">18. Suspension and Termination</h2>
            <p className="about mb-2 leading-relaxed">
              ROCKETSINGH reserves the right to suspend, restrict, or terminate access to the Platform without prior notice if a user:
            </p>
            <ul className="about list-disc space-y-1 pl-6 leading-relaxed">
              <li>Violates these Terms;</li>
              <li>Engages in fraudulent activity;</li>
              <li>Creates security risks;</li>
              <li>Harms other users or the Platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">19. Modifications to Terms</h2>
            <p className="about leading-relaxed">
              ROCKETSINGH may update or modify these Terms at any time.
            </p>
            <p className="about leading-relaxed">
              Updated Terms shall become effective upon publication on the Platform.
            </p>
            <p className="about leading-relaxed">
              Continued use of the Platform after updates constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">20. Governing Law and Jurisdiction</h2>
            <p className="about leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India.
            </p>
            <p className="about leading-relaxed">
              Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts
              located in Chennai, Tamil Nadu, India.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-teal-800">21. Contact Information</h2>
            <p className="about mb-2 leading-relaxed">
              For questions regarding these Terms and Conditions, please contact:
            </p>
            <p className="about leading-relaxed font-medium">ROCKETSINGH</p>
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
            By accessing or using ROCKETSINGH, you acknowledge that you have read, understood, and agreed to these
            Terms and Conditions.
          </p>

        </section>
      </div>
    </div>
  );
};

export default TermsofServices;
