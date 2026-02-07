import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection({ subheadline }: { subheadline: string }) {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-linear-to-br from-white to-gray-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-primary">Herzlich Willkommen,</span>
            <br />
            <span className="text-gray-900">
              beim Physioteam in{" "}
              <span className="relative inline-block">
                Pollanten
                <span className="absolute -bottom-2 left-0 h-2 w-full bg-primary" />
              </span>
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600">
            {subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="#kontakt">Termin vereinbaren</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#leistungen">Unsere Leistungen</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo_colored.png"
            alt="Physioteam Pollanten"
            width={400}
            height={150}
            className="h-auto w-full max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
