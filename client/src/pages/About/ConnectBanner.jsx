import ScrollVelocity from '../../Components/ScrollVelocity/ScrollVelocity';


export default function ConnectBanner() {

  const marqueeText = "Instagram • LinkedIn • GitHub • Mail • The Trakio • Connect • Collaborate •";

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        py-2
        transition-all
        duration-700
      "
    >

      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />

      <ScrollVelocity
        texts={[marqueeText]}
        velocity={80}
        numCopies={4}
        className="
          uppercase
          tracking-tighter
          text-xl
          md:text-3xl
          font-black
          text-white
        "
        parallaxStyle={{ padding: '2px 0' }}
        scrollerStyle={{ gap: '0px' }}
      />

    </section>
  );
}