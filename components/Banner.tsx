import Link from "next/link";
import { Button } from "./ui/button";

export function Banner() {
  return (
    <div className="text-center py-12 px-6 mb-12 bg-white rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-[32px] font-bold text-gray-800 mb-3 tracking-tight">
        Build AI projects with style.
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto text-[15px] leading-relaxed">
        Go from concept to implementation with our frameworks, the toolkit for
        creative AI developers.
      </p>
      <div className="flex justify-center gap-3">
        <Link href="https://www.aubergine.co/lets-build">
          <Button className="bg-black hover:bg-gray-800 text-white rounded-md py-2 px-4 text-sm font-medium">
            Get Started
          </Button>
        </Link>
        {/* <Link href="#">
          <Button
            variant="outline"
            className="border-gray-300 rounded-md py-2 px-4 text-sm font-medium"
          >
            Learn More
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
