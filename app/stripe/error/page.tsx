import { Button } from "@/components/ui/button";
import { ShieldClose } from "lucide-react";
import Link from "next/link";

export default function ErrorStripe() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <ShieldClose className="text-red-600 w-16 h-16 mx-auto my-6"></ShieldClose>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Something went wront...
          </h3>
          <p className="text-gray-600 my-2">Thank you to back...</p>
          <Button asChild>
            <Link href="/">Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
