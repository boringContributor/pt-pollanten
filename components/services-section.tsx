"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CircleCheck } from "lucide-react";
import type { Service } from "@/lib/graphql";

function ServiceCard({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`h-full rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary hover:shadow-xl ${onClick ? "cursor-pointer" : "cursor-default"}`}
      onClick={onClick}
    >
      <div className="flex items-start gap-2.5">
        <CircleCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
        <div>
          <p className="text-base font-semibold">{title}</p>
          {description && (
            <p className="mt-1 line-clamp-2 text-sm text-gray-600">
              {description.replace(/\\n/g, " ").substring(0, 100)}...
            </p>
          )}
          {description && onClick && (
            <p className="mt-2 text-xs font-medium text-primary">
              Mehr erfahren →
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceModal({
  open,
  onClose,
  title,
  description,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-primary">{title}</DialogTitle>
        </DialogHeader>
        <div className="text-md leading-relaxed text-gray-700 whitespace-pre-line">
          {description}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ServicesSection({ services }: { services: Service[] }) {
  const [selected, setSelected] = useState<Service | null>(null);

  if (services.length === 0) return null;

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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              onClick={service.description ? () => setSelected(service) : undefined}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ServiceModal
          open={!!selected}
          onClose={() => setSelected(null)}
          title={selected.title}
          description={selected.description}
        />
      )}
    </section>
  );
}
