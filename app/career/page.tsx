import Link from "next/link";
import CareerForm from "../../components/CareerForm";

export const metadata = {
  title: "Career | RocketSingh",
  description:
    "Join RocketSingh — career opportunities in professional cleaning services in Chennai, India.",
  keywords: "cleaning jobs India, RocketSingh career, Chennai cleaning jobs",
};

export default function CareerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white pb-24 md:pb-10">
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
          <span className="text-gray-700">Career</span>
        </div>
      </div>

      <div className="w-full px-4 py-6 sm:px-6">
        <CareerForm />
      </div>
    </div>
  );
}
