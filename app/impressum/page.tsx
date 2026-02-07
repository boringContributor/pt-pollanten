import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Physioteam Pollanten",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-primary hover:underline"
      >
        &larr; Zurück zur Startseite
      </Link>
      <h1 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">
        Impressum
      </h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">
          Angaben gemäß § 5 TMG
        </h2>
        <p>
          Physioteam Pollanten
          <br />
          Hauptstraße 12
          <br />
          92268 Pollanten
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Kontakt</h2>
        <p>
          Telefon: +49 9188 123456
          <br />
          E-Mail: info@physioteam-pollanten.de
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Berufsbezeichnung und berufsrechtliche Regelungen
        </h2>
        <p>
          Berufsbezeichnung: Physiotherapeut/in
          <br />
          Zuständige Kammer: Platzhalter
          <br />
          Verliehen in: Deutschland
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Aufsichtsbehörde
        </h2>
        <p>
          Gesundheitsamt Nürnberger Land
          <br />
          Platzhalter Adresse
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Haftung für Links
        </h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </div>
    </div>
  );
}
