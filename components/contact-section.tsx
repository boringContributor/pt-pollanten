import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import type { ContactInfo } from "@/lib/graphql";

export function ContactSection({ contact }: { contact: ContactInfo }) {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-4xl">
          Kontakt
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Wir freuen uns auf Ihre Nachricht. Vereinbaren Sie jetzt einen Termin
          oder kontaktieren Sie uns bei Fragen.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact form placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Nachricht senden</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact details */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Adresse</p>
                      <p className="text-sm text-gray-600">
                        {contact.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Telefon</p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-sm text-gray-600 hover:text-primary"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">E-Mail</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm text-gray-600 hover:text-primary"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Map placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="flex h-48 items-center justify-center bg-gray-100 p-0">
                <p className="text-sm text-gray-500">
                  Kartenansicht — Platzhalter
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
