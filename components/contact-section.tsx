import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import type { PraxisInfo } from "@/lib/graphql";

export function ContactSection({ contact }: { contact: PraxisInfo }) {
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
                  {contact.phone && (
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
                  )}
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
            {/* Map */}
            <Card className="overflow-hidden">
              <CardContent className="flex h-48 items-center justify-center bg-gray-100 p-0">
                <div style={{ height: '50vh', width: '100%' }}>
                  <iframe
                    title="place"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.6627804237985!2d11.451160231219998!3d49.139301362933715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f72c08701a74f%3A0x951d5468c378fe27!2sGewerbegebiet%20Pollanten%2C%20Wegscheid%2C%20Breitenfurt%2C%20Gutenbergstra%C3%9Fe%204%2C%2092334%20Berching!5e0!3m2!1sen!2sde!4v1770468494781!5m2!1sen!2sde"
                    frameBorder="0"
                    aria-hidden="false"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
