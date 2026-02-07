import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — Physioteam Pollanten",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-primary hover:underline"
      >
        &larr; Zurück zur Startseite
      </Link>
      <h1 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">
        Datenschutzerklärung
      </h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">
          1. Datenschutz auf einen Blick
        </h2>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          2. Allgemeine Hinweise und Pflichtinformationen
        </h2>
        <h3 className="text-lg font-medium text-gray-900">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>

        <h3 className="text-lg font-medium text-gray-900">
          Verantwortliche Stelle
        </h3>
        <p>
          Physioteam Pollanten
          <br />
          Hauptstraße 12
          <br />
          92268 Pollanten
          <br />
          Telefon: +49 9188 123456
          <br />
          E-Mail: info@physioteam-pollanten.de
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          3. Datenerfassung auf dieser Website
        </h2>
        <h3 className="text-lg font-medium text-gray-900">Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
          übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes
          Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
          Uhrzeit der Serveranfrage und IP-Adresse.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          4. Kontaktformular
        </h2>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          5. Ihre Rechte
        </h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten.
        </p>
      </div>
    </div>
  );
}
