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
      icon: MapPinCheck,
      number: "1",
      title: "Live Tracking",
      desc: "Track the live location of every bus in real-time.",
    },

    {
      icon: OctagonAlert,
      number: "2",
      title: "Instant Alerts",
      desc: "Get notified instantly for boarding, arrival & delays.",
    },

    {
      icon: ShieldCheck,
      number: "3",
      title: "Safe Journeys",
      desc: "Ensuring every child reaches safely, every time.",
    },

    {
      icon: BarChart3,
      number: "4",
      title: "Smart Reports",
      desc: "Schools get smart insights and transport reports.",
    },
  ];

  return (

    <section className="bg-black">

      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          md:px-10

          py-16
          md:py-24
        "
      >

        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-12
            md:gap-8
            lg:gap-16
            mx-auto
          "
        >

          <div className="lg:flex-1">

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
                mt-8
                md:mt-6

                max-w-[500px]

                text-4xl
                sm:text-5xl
                md:text-6xl

                font-black

                leading-[1]

                tracking-[-0.5px]
                sm:tracking-[-1.5px]
                md:tracking-[-3.5px]

                text-white
              "
            >
              Built for Safety.
              <br />
              Designed for Trust.
            </h2>

            <p
              className="
                mt-8
                md:mt-6

                text-white/50

                leading-8

                text-sm
                md:text-base
              "
            >
              Thousands of schools and parents rely on
              BusTrackr for safer school journeys every day.
            </p>

          </div>

          <div
            className="
              lg:flex-1
              flex

              flex-nowrap
              gap-3
              sm:gap-6
              md:gap-8
              lg:gap-10

              justify-center
              lg:justify-start

              overflow-x-auto
              md:overflow-visible
            "
          >

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="
                    flex
                    flex-col
                    items-center
                    text-center

                    min-w-[75px]
                    sm:min-w-[120px]
                    md:min-w-[140px]

                    flex-shrink-0
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      sm:w-16
                      sm:h-16
                      md:w-20
                      md:h-20

                      rounded-[24px]

                      border
                      border-black/10

                      bg-white

                      flex
                      items-center
                      justify-center

                      mb-1
                      sm:mb-4
                      md:mb-6

                      shadow-sm
                    "
                  >

                    <Icon
                      size={16}
                      className="text-black sm:w-5 sm:h-5 md:w-7 md:h-7"
                      strokeWidth={2}
                    />

                  </div>

                  <h3
                    className="
                      text-lg
                      sm:text-3xl
                      md:text-4xl
                      lg:text-5xl

                      font-black

                      tracking-[-2px]

                      text-white
                    "
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                      mt-1
                      sm:mt-2
                      md:mt-3

                      text-white

                      text-[9px]
                      sm:text-xs
                      md:text-sm
                    "
                  >
                    {item.label}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

      <div
        className="
          bg-white
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-6
            md:px-10

            pt-8
            md:pt-10
            pb-24
            md:pb-48
          "
        >

          <div className="text-center py-8 md:py-10 px-0">

            <p
              className="
                uppercase

                tracking-[3px]

                text-xs

                text-black/40
              "
            >
              How It Works
            </p>

            <h2
              className="
                mt-5

                text-3xl sm:text-4xl
                md:text-5xl
                lg:text-6xl

                font-black

                tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]

                text-[#111]
              "
            >
              Simple Steps.
              <br />
              Complete Safety.
            </h2>

          </div>

          <div
            className="
              mt-12
              md:mt-20

              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4

              gap-8
              md:gap-12
            "
          >

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

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

                  <div
                    className="
                      w-20
                      h-20
                      sm:w-24
                      sm:h-24

                      rounded-[28px]

                      border
                      border-black/10

                      bg-white

                      flex
                      items-center
                      justify-center

                      shadow-sm

                      transition-all
                      duration-500

                      group-hover:scale-110
                    "
                  >

                    <Icon
                      size={32}
                      className="
                        text-[#111]

                        transition-all
                        duration-500

                        group-hover:scale-110

                        sm:w-9
                        sm:h-9
                      "
                      strokeWidth={2}
                    />

                  </div>

                  <div className="mt-6 sm:mt-8">

                    <h3
                      className="
                        text-xl
                        sm:text-2xl

                        font-bold

                        text-[#111]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        sm:mt-5

                        text-black/50

                        leading-8

                        text-sm
                        sm:text-base
                      "
                    >
                      {step.desc}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>

  );
}