import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <SearchX className="h-24 w-24 text-blue-600 mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        We couldn&apos;t find the page you were looking for. It might have been removed, renamed, or doesn&apos;t exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/">Go to Homepage</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/grants">Browse Grants</Link>
        </Button>
      </div>
    </div>
  );
}
