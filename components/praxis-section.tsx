import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Address */}
          <Card>
            <CardContent className="flex items-start gap-4 pt-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
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
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Kontakt</h3>
                <p className="mt-1 text-sm text-gray-600">{praxis.phone}</p>
                <p className="text-sm text-gray-600">{praxis.email}</p>
              </div>
            </CardContent>
          </Card>

          {/* Opening hours */}
          <Card className="md:col-span-2 lg:col-span-1">
            <CardContent className="flex items-start gap-4 pt-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Öffnungszeiten</h3>
                <dl className="mt-1 space-y-1">
                  {praxis.openingHours.map((entry) => (
                    <div key={entry.day} className="flex gap-2 text-sm">
                      <dt className="font-medium text-gray-700">
                        {entry.day}:
                      </dt>
                      <dd className="text-gray-600">{entry.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
