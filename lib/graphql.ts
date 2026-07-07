// Types matching the GraphQL schema

export interface NewsItem {
  title: string;
  description: string | null;
  date: string | null;
  image: { url: string } | null;
}

export interface Service {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  position: string;
  order: number | null;
  portrait: { url: string } | null;
}

export interface PraxisInfo {
  description: string;
  address: string;
  phone: string | null;
  email: string;
}

export interface HeroContent {
  intro: string;
  introImage: { url: string } | null;
}

export interface LandingPageData {
  hero: HeroContent;
  news: NewsItem[];
  services: Service[];
  team: TeamMember[];
  praxis: PraxisInfo;

}

const HYGRAPH_ENDPOINT =
  process.env.HYGRAPH_ENDPOINT ??
  "https://eu-west-2.cdn.hygraph.com/content/cmlaoadd901f107uynjo8s0k0/master";

const LANDING_PAGE_QUERY = `{
  intros {
    intro
    introImage {
      url
    }
  }
  praxes {
    address
    phone
    email
    description
  }
  services {
    title
    description
  }
  newss {
    date
    title
    description
    image {
      url
    }
  }
  teams {
    name
    position
    order
    portrait {
      url
    }
  }
}`;

export async function fetchLandingPageData(): Promise<LandingPageData> {
  const res = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: LANDING_PAGE_QUERY }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status}`);
  }

  const { data } = await res.json();

  const intro = data.intros?.[0];
  const praxis = data.praxes?.[0];

  return {
    hero: {
      intro: intro?.intro ?? "",
      introImage: intro?.introImage ?? null,
    },
    news: (data.newss ?? []).map((n: NewsItem) => ({
      title: n.title,
      description: n.description,
      date: n.date,
      image: n.image,
    })),
    services: (data.services ?? []).map((s: Service) => ({
      title: s.title,
      description: s.description,
    })),
    team: (data.teams ?? [])
      .map((t: TeamMember) => ({
        name: t.name,
        position: t.position,
        order: t.order ?? null,
        portrait: t.portrait,
      }))
      .sort(
        (a: TeamMember, b: TeamMember) =>
          (a.order ?? Number.MAX_SAFE_INTEGER) -
          (b.order ?? Number.MAX_SAFE_INTEGER)
      ),
    praxis: {
      description: praxis?.description ?? "",
      address: praxis?.address ?? "",
      phone: praxis?.phone ?? null,
      email: praxis?.email ?? "",
    },
};
}
