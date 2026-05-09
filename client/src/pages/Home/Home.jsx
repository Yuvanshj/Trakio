import HeroSection from "./HeroSection";
import Footer from "../../Components/Layout/Footer";
import TrustSection from "./TrustSection";
import AdminDashboardSection from "./AdminDashboardSection";
import FinalCTASection from "./FinalCTASection";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <TrustSection/>
      <AdminDashboardSection />
      <FinalCTASection />
      <Footer />

      

    </main>
  );
}