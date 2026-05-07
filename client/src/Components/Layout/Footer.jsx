import footerVideo from "../../Assets/videos/footerbus.mp4";

export default function Footer() {
  return (
    <footer className="relative w-full h-128 overflow-hidden">
      <video
        src={footerVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50 block"
        style={{ objectFit: "cover" }}
      />
      <div className="relative z-10 w-full h-full" />
    </footer>
  );
}
