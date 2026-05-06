import AboutHero from "./AboutHero";
import FeedbackSection from "./FeedbackSection";
// import ConnectBanner from "./ConnectBanner";
export default function About() {
  return (
    <div className="bg-[#111] min-h-screen ">
    <div className="bg-[#f5f5f5] min-h-screen">
        <AboutHero />
        {/* <ConnectBanner/> */}
        <FeedbackSection />
      </div>
    </div>
  );
}