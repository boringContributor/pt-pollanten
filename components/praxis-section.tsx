import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";
import type { PraxisInfo } from "@/lib/graphql";

export function PraxisSection({ praxis }: { praxis: PraxisInfo }) {
  return (
    <section id="praxis" className="scroll-mt-20 bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-4xl">
          Unsere Praxis
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          {praxis.description}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Address */}
          <Card>
            <CardContent className="flex items-start gap-4 pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Adresse</h3>
                <p className="mt-1 text-sm text-gray-600">{praxis.address}</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="flex items-start gap-4 pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Kontakt</h3>
                {praxis.phone && (
                  <p className="mt-1 text-sm text-gray-600">{praxis.phone}</p>
                )}
                <p className="text-sm text-gray-600">{praxis.email}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
