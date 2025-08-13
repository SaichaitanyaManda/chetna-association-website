import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import GallerySection from "@/components/sections/GallerySection";
import EventsSection from "@/components/sections/EventsSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <StatisticsSection />
      <AwardsSection />
      <GallerySection />
      <EventsSection />
      <PartnershipSection />
      <CallToActionSection />
      <Footer />
    </Layout>
  );
}