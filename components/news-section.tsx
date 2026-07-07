"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { NewsItem } from "@/lib/graphql";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsSection({ items }: { items: NewsItem[] }) {
  const [activeItem, setActiveItem] = useState<NewsItem | null>(null);

  if (items.length === 0) return null;

  const activeDate = activeItem?.date ? formatDate(activeItem.date) : null;

  return (
    <section id="aktuelles" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
          Aktuelles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const date = item.date ? formatDate(item.date) : null;
            return (
              <Card
                key={`${item.title}-${item.date ?? ""}`}
                role="button"
                tabIndex={0}
                aria-label={`${item.title} – Details anzeigen`}
                onClick={() => setActiveItem(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveItem(item);
                  }
                }}
                className="group flex cursor-pointer flex-col overflow-hidden transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {item.image && (
                  <div className="flex h-48 w-full items-center justify-center overflow-hidden bg-gray-50">
                    <Image
                      src={item.image.url}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  {date && <CardDescription>{date}</CardDescription>}
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                {item.description && (
                  <CardContent className="mt-auto">
                    <p className="line-clamp-3 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog
        open={activeItem !== null}
        onOpenChange={(open) => !open && setActiveItem(null)}
      >
        <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto p-0 sm:max-w-2xl">
          {activeItem && (
            <>
              {activeItem.image && (
                <div className="flex max-h-[60vh] w-full items-center justify-center overflow-hidden bg-gray-50">
                  <Image
                    src={activeItem.image.url}
                    alt={activeItem.title}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="h-auto max-h-[60vh] w-full object-contain"
                  />
                </div>
              )}
              <div className="p-6">
                <DialogHeader className="text-left">
                  {activeDate && (
                    <p className="text-sm text-gray-500">{activeDate}</p>
                  )}
                  <DialogTitle className="text-2xl text-primary">
                    {activeItem.title}
                  </DialogTitle>
                </DialogHeader>
                {activeItem.description && (
                  <DialogDescription className="mt-4 text-base whitespace-pre-line text-gray-600">
                    {activeItem.description}
                  </DialogDescription>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
