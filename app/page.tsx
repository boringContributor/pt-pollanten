import { fetchLandingPageData } from "@/lib/graphql";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { NewsSection } from "@/components/news-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { PraxisSection } from "@/components/praxis-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default async function Home() {
  const data = await fetchLandingPageData();

  return (
    <>
      <Navbar />
      <main className="pt-28">
        <HeroSection subheadline={data.hero.subheadline} />
        <NewsSection items={data.news} />
        <ServicesSection services={data.services} />
        <TeamSection members={data.team} />
        <PraxisSection praxis={data.praxis} />
        <ContactSection contact={data.contact} />
      </main>
      <Footer />
    </>
  );
}
