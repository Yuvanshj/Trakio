import HeroSection from "./HeroSection";
import Footer from "../../Components/Layout/Footer";
import TrustSection from "./TrustSection";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <TrustSection/>
      <Footer />

    </main>
  );
}