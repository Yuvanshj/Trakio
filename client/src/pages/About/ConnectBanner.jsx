import ScrollVelocity from '../../Components/ScrollVelocity/ScrollVelocity';


export default function ConnectBanner() {

  const marqueeText = "Instagram • LinkedIn • GitHub • Mail • Trakio • Connect • Collaborate •";

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
        velocity={50}
        numCopies={4}
        className="
          uppercase
          tracking-[2px] sm:tracking-[3px] md:tracking-[4px]
          text-sm
sm:text-lg
md:text-2xl
lg:text-3xl
          font-bold
          text-white
        "
        parallaxStyle={{ padding: '2px 0' }}
        scrollerStyle={{ gap: '0px' }}
      />

    </section>
  );
}