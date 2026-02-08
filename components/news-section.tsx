import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { NewsItem } from "@/lib/graphql";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsSection({ items }: { items: NewsItem[] }) {
  if (items.length === 0) return null;

  return (
    <section id="aktuelles" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
          Aktuelles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
              {item.image && (
                <div className="flex h-40 w-full items-center justify-center bg-gray-50 p-4">
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={300}
                    height={150}
                    className="h-auto max-h-32 w-auto object-contain"
                  />
                </div>
              )}
              <CardHeader>
                {item.date && (
                  <CardDescription>{formatDate(item.date)}</CardDescription>
                )}
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              {item.description && (
                <CardContent>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
