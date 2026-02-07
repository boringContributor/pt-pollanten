// Types matching the GraphQL schema

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface PraxisInfo {
  description: string;
  address: string;
  phone: string;
  email: string;
  openingHours: { day: string; hours: string }[];
  images: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
}

export interface HeroContent {
  subheadline: string;
}

export interface LandingPageData {
  hero: HeroContent;
  news: NewsItem[];
  services: Service[];
  team: TeamMember[];
  praxis: PraxisInfo;
  contact: ContactInfo;
}

// Mock data simulating a GraphQL response

export async function fetchLandingPageData(): Promise<LandingPageData> {
  // In production, this would be a GraphQL fetch:
  // const res = await fetch(process.env.GRAPHQL_ENDPOINT!, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ query: LANDING_PAGE_QUERY }),
  //   next: { revalidate: 60 },
  // });
  // const { data } = await res.json();
  // return data.landingPage;

  return {
    hero: {
      subheadline:
        "Ihre Gesundheit steht bei uns im Mittelpunkt. Krankheiten, Verletzungen oder einseitige Belastungen können den Alltag stark beeinträchtigen und die Lebensqualität mindern. Mit einem vielseitigen Angebot an kassenärztlichen und privaten Therapieleistungen unterstützt Sie unser engagiertes und qualifiziertes Team auf dem Weg zurück zu mehr Wohlbefinden. Auf unserer Website finden Sie weitere Informationen zu unserer Praxis und unseren Leistungen. Nehmen Sie gerne Kontakt mit uns auf und vereinbaren Sie Ihren persönlichen Termin.",
    },
    news: [
      {
        id: "1",
        title: "Neue Öffnungszeiten ab März",
        excerpt:
          "Ab dem 1. März gelten unsere erweiterten Öffnungszeiten. Wir sind nun auch samstags für Sie da.",
        date: "2026-02-01",
      },
      {
        id: "2",
        title: "Neues Kursangebot: Rückenschule",
        excerpt:
          "Starten Sie mit unserem neuen Kursangebot in ein schmerzfreies Leben. Anmeldung ab sofort möglich.",
        date: "2026-01-15",
      },
      {
        id: "3",
        title: "Praxis über die Feiertage geschlossen",
        excerpt:
          "Vom 23. Dezember bis 2. Januar bleibt unsere Praxis geschlossen. Wir wünschen Ihnen frohe Feiertage!",
        date: "2025-12-20",
      },
    ],
    services: [
      {
        id: "1",
        title: "Krankengymnastik",
        description:
          "Individuelle Übungstherapie zur Wiederherstellung und Verbesserung der Beweglichkeit und Kraft.",
        icon: "Activity",
      },
      {
        id: "2",
        title: "Manuelle Therapie",
        description:
          "Gezielte Handgriffe zur Mobilisation von Gelenken und zur Schmerzlinderung.",
        icon: "Hand",
      },
      {
        id: "3",
        title: "Lymphdrainage",
        description:
          "Sanfte Massagetechnik zur Förderung des Lymphabflusses und Reduktion von Schwellungen.",
        icon: "Droplets",
      },
      {
        id: "4",
        title: "Massagetherapie",
        description:
          "Klassische und spezielle Massagetechniken zur Entspannung und Schmerzbehandlung.",
        icon: "Heart",
      },
      {
        id: "5",
        title: "Wärme- & Kältetherapie",
        description:
          "Therapeutische Anwendungen mit Wärme oder Kälte zur Unterstützung der Heilung.",
        icon: "Thermometer",
      },
      {
        id: "6",
        title: "Elektrotherapie",
        description:
          "Einsatz von elektrischen Strömen zur Schmerzlinderung und Muskelstimulation.",
        icon: "Zap",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. Maria Schmidt",
        role: "Praxisinhaberin & Physiotherapeutin",
        description:
          "Spezialisiert auf orthopädische und neurologische Rehabilitation mit über 15 Jahren Erfahrung.",
        imageUrl: "/placeholder-team-1.jpg",
      },
      {
        id: "2",
        name: "Thomas Müller",
        role: "Physiotherapeut",
        description:
          "Experte für manuelle Therapie und Sportphysiotherapie.",
        imageUrl: "/placeholder-team-2.jpg",
      },
      {
        id: "3",
        name: "Anna Weber",
        role: "Physiotherapeutin",
        description:
          "Schwerpunkt Lymphdrainage und Beckenbodentherapie.",
        imageUrl: "/placeholder-team-3.jpg",
      },
    ],
    praxis: {
      description:
        "Unsere modern ausgestattete Praxis in Pollanten bietet Ihnen eine angenehme Atmosphäre für Ihre Behandlung. Auf über 200m² Fläche stehen Ihnen helle Behandlungsräume und ein großzügiger Trainingsbereich zur Verfügung.",
      address: "Hauptstraße 12, 92268 Pollanten",
      phone: "+49 9188 123456",
      email: "info@physioteam-pollanten.de",
      openingHours: [
        { day: "Montag - Donnerstag", hours: "8:00 - 18:00" },
        { day: "Freitag", hours: "8:00 - 14:00" },
        { day: "Samstag", hours: "Nach Vereinbarung" },
      ],
      images: [],
    },
    contact: {
      address: "Hauptstraße 12, 92268 Pollanten",
      phone: "+49 9188 123456",
      email: "info@physioteam-pollanten.de",
      mapEmbedUrl: "",
    },
  };
}
