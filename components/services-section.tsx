import {
  Activity,
  Hand,
  Droplets,
  Heart,
  Thermometer,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/lib/graphql";

const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Hand,
  Droplets,
  Heart,
  Thermometer,
  Zap,
};

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="leistungen" className="scroll-mt-20 bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-4xl">
          Unsere Leistungen
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Wir bieten Ihnen ein breites Spektrum an physiotherapeutischen
          Behandlungen, individuell auf Ihre Bedürfnisse abgestimmt.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Activity;
            return (
              <Card
                key={service.id}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
