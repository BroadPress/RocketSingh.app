import Link from "next/link";
import PartnershipForm from "../../components/PartnershipForm";

export const metadata = {
  title: "Partnership | RocketSingh",
  description:
    "Partner with RocketSingh — professional cleaning services partnership opportunities in India.",
  keywords: "cleaning partnership India, RocketSingh partner",
};

export default function PartnershipPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 pb-24 md:pb-10">
      <div className="shrink-0 border-b border-gray-100 px-4 py-3 text-center">
        <div className="flex items-center justify-center text-sm text-gray-500">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-1 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="font-semibold text-gray-800">Become a Partner</span>
        </div>

        <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
          Partnership Opportunity with RocketSingh
        </h1>
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6">
        <div className="rounded-lg shadow-md">
          <PartnershipForm />
        </div>
      </div>
    </div>
  );
}
