import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { PraxisInfo } from "@/lib/graphql";

const NAV_ITEMS = [
  { label: "Aktuelles", href: "#aktuelles" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Team", href: "#team" },
  { label: "Praxis", href: "#praxis" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer({ contact }: { contact: PraxisInfo }) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo_colored.png"
              alt="Physioteam Pollanten"
              width={180}
              height={44}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              Ihre Physiotherapie-Praxis in Pollanten. Kompetente Behandlung in
              angenehmer Atmosphäre.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <address className="space-y-2 text-sm not-italic">
              <p>{contact.address}</p>
              {contact.phone && (
                <p className="mt-3">
                  Tel:{" "}
                  <a href={`tel:${contact.phone}`} className="hover:text-white">
                    {contact.phone}
                  </a>
                </p>
              )}
              <p>
                E-Mail:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col items-center gap-2 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Physioteam Pollanten. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/physioteam.pollanten/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <Link href="/datenschutz" className="transition-colors hover:text-white">
              Datenschutz
            </Link>
            <Link href="/impressum" className="transition-colors hover:text-white">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
