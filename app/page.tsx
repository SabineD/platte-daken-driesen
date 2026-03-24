import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileBottomBar } from "@/components/layout/mobile-bottom-bar";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { RegionSection } from "@/components/sections/region-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { companyName, contact } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Platte Daken Driesen | Specialist in platte daken in Dessel en de Kempen",
  description:
    "Platte Daken Driesen uit Dessel is gespecialiseerd in platte daken, EPDM, roofing, renovatie, herstellingen en dakisolatie in de regio Kempen.",
  keywords: [
    "platte daken Dessel",
    "platte daken Kempen",
    "EPDM Dessel",
    "roofing Dessel",
    "dakrenovatie Kempen",
    "dakisolatie platte daken",
  ],
  openGraph: {
    title: "Platte Daken Driesen | Specialist in platte daken in Dessel en de Kempen",
    description:
      "Specialist in platte daken, EPDM, roofing, renovatie, herstellingen en dakisolatie in Dessel en de Kempen.",
    locale: "nl_BE",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: companyName,
  description:
    "Specialist in platte daken, EPDM, roofing, renovatie, herstellingen en dakisolatie in Dessel en de Kempen.",
  areaServed: ["Dessel", "Mol", "Geel", "Retie", "Turnhout", "Kempen"],
  telephone: contact.phoneDisplay,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vijverstraat 4",
    postalCode: "2480",
    addressLocality: "Dessel",
    addressRegion: "Antwerpen",
    addressCountry: "BE",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProjectsSection />
        <RegionSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
