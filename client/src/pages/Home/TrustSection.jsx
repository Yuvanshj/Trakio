import {
  School,
  Smile,
  BusFront,
  Timer,

  MapPinCheck,
  OctagonAlert,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function TrustSection() {

  const stats = [
  {
    icon: School,
    number: "500+",
    label: "Schools Trust Us",
  },

  {
    icon: Smile,
    number: "50K+",
    label: "Happy Parents",
  },

  {
    icon: BusFront,
    number: "1200+",
    label: "Buses Tracked",
  },

  {
    icon: Timer,
    number: "99.9%",
    label: "Uptime",
  },
];

  const steps = [
    {
      number: "1",
      title: "Live Tracking",
      desc: "Track the live location of every bus in real-time.",
    },

    {
      number: "2",
      title: "Instant Alerts",
      desc: "Get notified instantly for boarding, arrival & delays.",
    },

    {
      number: "3",
      title: "Safe Journeys",
      desc: "Ensuring every child reaches safely, every time.",
    },

    {
      number: "4",
      title: "Smart Reports",
      desc: "Schools get smart insights and transport reports.",
    },
  ];

  return (

    <section className="bg-black">

      <div
        className="
          max-w-8xl
          mx-auto

          px-6
          md:px-10

          py-24
        "
      >

        <div
          className="
            flex
            gap-35
            mx-auto
          "
        >

          <div className="lg:col-span-1 ml-35">

            <p
              className="
                uppercase

                tracking-[3px]

                text-xs

                text-white
              "
            >
              Trusted By
            </p>

            <h2
  className="
    mt-6

    max-w-[500px]

    text-5xl
    md:text-6xl

    font-black

    leading-[1]

     tracking-[-3.5px]

    text-white
  "
>
              Built for Safety.
              <br />
              Designed for Trust.
            </h2>

            <p
              className="
                mt-6

                text-black/50

                leading-8
              "
            >
              Thousands of schools and parents rely on
              BusTrackr for safer school journeys every day.
            </p>

          </div>

          <div
            className="
              lg:col-span-4
              flex

           

              gap-10
            "
          >

            {stats.map((item, index) => (

              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >

                <div
                  className="
                    w-20
                    h-20

                    rounded-[24px]

                    border
                    border-black/10

                    bg-white

                    flex
                    items-center
                    justify-center

                    mb-6

                    shadow-sm
                  "
                >
                  
                    {(() => {

  const Icon = item.icon;

  return (
    <Icon
      size={36}
      strokeWidth={2}
      className="text-black"
    />
  );

})()}

                </div>

                <h3
                  className="
                    text-5xl

                    font-black

                    tracking-[-2px]

                    text-white
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                    mt-3

                    text-white 
                  "
                >
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div
        className="
          border-t
          border-black
          bg-white
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-6
            md:px-10

            py-24
          "
        >

          <div className="text-center">

            <p
              className="
                uppercase

                tracking-[3px]

                text-xs

                text-white
              "
            >
              How It Works
            </p>

            <h2
              className="
                mt-5

                text-5xl
                md:text-6xl

                font-black

                tracking-[-3px]

                text-[#111]
              "
            >
              Simple Steps.
              Complete Safety.
            </h2>

          </div>

          <div
            className="
              mt-20

              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4

              gap-12
            "
          >

            {steps.map((step, index) => (

              <div
                key={index}
                className="
                    flex
                    flex-col
                    items-center
                    text-center
                  mx-auto

                  group


                  transition-all
                  duration-500

                  hover:-translate-y-2
                "
              >

                {index !== steps.length - 1 && (

                  <div
                    className="
                      hidden
                      lg:block

                      absolute

                      top-12
                      left-[85%]

                      w-full

                      border-t
                      border-dashed
                      border-black/20
                    "
                  />

                )}

                <div
                  className="
                    w-24
                    h-24

                    rounded-[28px]

                    border
                    border-black/10

                    bg-white

                    flex
                    items-center
                    justify-center

                    text-3xl

                    shadow-sm

                    transition-all
                    duration-500

                    group-hover:scale-110
                  "
                >
                  •
                </div>

                <div className="mt-8">

                  <div className="flex items-center gap-3 text-center justify-center">

                    
                    <h3
                      className="
                        text-2xl

                        font-bold

                        text-[#111]
                      "
                    >
                      {step.title}
                    </h3>

                  </div>

                  <p
                    className="
                      mt-5

                      text-black/50

                      leading-8
                    "
                  >
                    {step.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}