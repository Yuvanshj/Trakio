import RollingText from "../../Components/RollingText";
import ShinyText from "../../Components/ShinyText/ShinyText";

export default function FeedbackSection() {
  const testimonials = [
  {
    name: "Alex Carter",
    role: "Product Designer",
    rating: 5,
    text:
      "The experience was incredibly smooth and visually stunning from start to finish.",
  },

  {
    name: "Sophia Lee",
    role: "Startup Founder",
    rating: 5,
    text:
      "Their attention to detail and product thinking truly stands out.",
  },

  {
    name: "Michael Ross",
    role: "Developer",
    rating: 4,
    text:
      "A clean and modern experience that feels premium in every interaction.",
  },

  {
    name: "Emma Watson",
    role: "UI Researcher",
    rating: 5,
    text:
      "The interface feels elegant, minimal, and extremely intuitive.",
  },

  {
    name: "Daniel Kim",
    role: "Tech Lead",
    rating: 3,
    text:
      "One of the most polished student products I have seen recently.",
  },

  {
    name: "Olivia Brown",
    role: "Frontend Engineer",
    rating: 5,
    text:
      "Every interaction feels carefully crafted and performance oriented.",
  },

  {
    name: "Noah Williams",
    role: "Product Manager",
    rating: 4,
    text:
      "The UI feels modern, responsive, and surprisingly production ready.",
  },

  {
    name: "Isabella Taylor",
    role: "UX Strategist",
    rating: 5,
    text:
      "The storytelling through interface design is genuinely impressive.",
  },

  {
    name: "Liam Anderson",
    role: "Software Engineer",
    rating: 4,
    text:
      "Animations are subtle, smooth, and enhance the overall experience beautifully.",
  },

  {
    name: "Mia Thompson",
    role: "Creative Director",
    rating: 5,
    text:
      "The monochrome aesthetic gives the platform a premium visual identity.",
  },

  {
    name: "Ethan Martinez",
    role: "Backend Architect",
    rating: 5,
    text:
      "Strong execution, clean layouts, and thoughtful interaction design throughout.",
  },

  {
    name: "Charlotte White",
    role: "Visual Designer",
    rating: 4,
    text:
      "The product feels balanced between minimalism and functionality.",
  },

  {
    name: "James Harris",
    role: "Startup Mentor",
    rating: 3,
    text:
      "This looks far beyond a normal student project and feels startup ready.",
  },
];

  return (
    <section className="relative bg-black py-32 overflow-hidden">

        <h1 className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-[0.85] tracking-[-10px] text-white/8 select-none z-0 text-[70px] sm:text-[140px] md:text-[270px] scale-x-120 text-center">
            THE TRAKIO
        </h1>

        <h1 className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold leading-[0.85] tracking-[-10px] text-white/8 select-none z-0 text-[70px] sm:text-[140px] md:text-[210px] scale-x-120 text-center">
        TRACKING APP
        </h1>

      <div className="text-center mb-20 px-6">

        <p
          className="
            inline-block
            border
            border-white/20
            rounded-full
            px-6
            py-3
            text-sm
            uppercase
            tracking-[3px]
            text-white/70
            mb-8
          "
        >
          People Are Loving Trakio
        </p>


        <h2
          className="
            text-white
            font-black
            leading-[0.9]
            tracking-[-4px]
            text-[50px]
            md:text-[90px]
            flex flex-col items-center
          "
        >
          <RollingText text="Words Of Praise" delayOffset={0} animateOnScroll={true} />
          <RollingText text="From Our Users" delayOffset={15} animateOnScroll={true} />
        </h2>

      </div>

      <div
  className="
    absolute
    top-0
    left-0
    z-20

    h-full
    w-40

    bg-linear-to-r
    from-black
    to-transparent
  "
/>

<div
  className="
    absolute
    top-0
    right-0
    z-20

    h-full
    w-40

    bg-linear-to-l
    from-black
    to-transparent
  "
/>

<div className="marquee group">

        <div className="marquee-content ">

        {[...testimonials, ...testimonials].map((item, index) => (

          <div
            key={index}
            className="
              min-w-95

              bg-white/5

              border
              border-white/10

              rounded-[30px]

              p-8
            "
          >

<div className="flex gap-1 mb-6 ">

  {[...Array(item.rating)].map((_, i) => (
    <span
      key={i}
      className="text-red-500 text-lg"
    >
      ★
    </span>
  ))}

</div>

<p className="text-white/80 text-lg leading-8">
  {item.text}
</p>

            <p className="text-white/80 text-lg leading-8">
              {item.text}
            </p>

            <div className="mt-10">

              <h4 className="text-white text-2xl font-bold">
                {item.name}
              </h4>

              <p className="text-white/40 mt-1">
                {item.role}
              </p>

            </div>

          </div>

        ))}

      </div>

</div>

<div className="marquee reverse mt-6 group">

        <div className="marquee-content">

        {[...testimonials, ...testimonials].map((item, index) => (

          <div
            key={index}
            className="
              min-w-95

              bg-white/5

              border
              border-white/10

              rounded-[30px]

              p-8
            "
          >

            <div className="flex gap-1 mb-6">

  {[...Array(item.rating)].map((_, i) => (
    <span
      key={i}
      className="text-red-500 text-lg"
    >
      ★
    </span>
  ))}

</div>



            <p className="text-white/80 text-lg leading-8">
              {item.text}
            </p>

            <div className="mt-10">

              <h4 className="text-white text-2xl font-bold">
                {item.name}
              </h4>

              <p className="text-white/40 mt-1">
                {item.role}
              </p>

            </div>

          </div>

        ))}

      </div>

</div>

    </section>
  );
}