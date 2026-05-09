import HeroSection from "./HeroSection";
import Footer from "../../Components/Layout/Footer";
import TrustSection from "./TrustSection";
import AdminDashboardSection from "./AdminDashboardSection";
import FinalCTASection from "./FinalCTASection";
import ScrollVelocity from "../../Components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <TrustSection/>
      <section className="relative overflow-hidden bg-black py-2 transition-all duration-700">
        <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />

        <ScrollVelocity
          texts={["Live Tracking • Instant Alerts • Safe Journeys • Smart Reports • Track Every Ride • Ensure Every Arrival •"]}
          velocity={80}
          numCopies={4}
          className="uppercase tracking-[4px] text-xl md:text-3xl font-bold text-white"
          parallaxStyle={{ padding: '2px 0' }}
          scrollerStyle={{ gap: '0px' }}
        />
      </section>
      <AdminDashboardSection />
      <FinalCTASection />
      <Footer />
      

    </main>
  );
}