import {
  FaCircle,
  FaMapMarkerAlt,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";

const Track = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      <iframe
        src="http://localhost:4000"
        title="Trakio Map"
        className="absolute inset-0 w-full h-full border-0"
        allow="geolocation"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div
        className="
           absolute

            top-0

            right-0

            w-[430px]

            h-screen

            overflow-y-auto

            bg-[#0b0b0b]/98

            border-l

            border-white/[0.06]

            backdrop-blur-xl

            text-white

            p-6

            z-30
        "
      >

        <div className="flex items-start justify-between">

          <div>

            <p className="text-white/30 text-xs tracking-[3px] uppercase">
              Student Tracking
            </p>

            <h1
              className="
                mt-3

                text-[42px]

                leading-[0.95]

                tracking-[-2px]

                font-light
              "
            >
              Aryan Sharma
            </h1>

            <p className="mt-3 text-white/35 text-[15px]">
              Route 12 • Delhi Public School
            </p>

          </div>

          <div
            className="
              flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              bg-red-500/10

              text-red-400

              text-sm
            "
          >
            <FaCircle className="text-[8px]" />
            Live
          </div>

        </div>

        <div className="grid grid-cols-3 gap-3 mt-8">

          <div
            className="
              bg-white/[0.04]

              border
              border-white/[0.05]

              rounded-[24px]

              p-4
            "
          >

            <p className="text-white/30 text-sm">
              ETA
            </p>

            <h3
              className="
                mt-4

                text-[34px]

                font-light

                tracking-[-2px]
              "
            >
              12m
            </h3>

            <p className="mt-2 text-white/25 text-sm">
              To home stop
            </p>

          </div>

          <div
            className="
              bg-white/[0.04]

              border
              border-white/[0.05]

              rounded-[24px]

              p-4
            "
          >

            <p className="text-white/30 text-sm">
              Speed
            </p>

            <h3
              className="
                mt-4

                text-[34px]

                font-light

                tracking-[-2px]
              "
            >
              42
            </h3>

            <p className="mt-2 text-white/25 text-sm">
              km/h average
            </p>

          </div>

          <div
            className="
              bg-white/[0.04]

              border
              border-white/[0.05]

              rounded-[24px]

              p-4
            "
          >

            <p className="text-white/30 text-sm">
              Distance
            </p>

            <h3
              className="
                mt-4

                text-[34px]

                font-light

                tracking-[-2px]
              "
            >
              5.4
            </h3>

            <p className="mt-2 text-white/25 text-sm">
              km remaining
            </p>

          </div>

        </div>

        <div className="mt-10">

          <div className="flex items-center justify-between">

            <h2
              className="
                text-[24px]

                font-light

                tracking-[-1px]
              "
            >
              Route Progress
            </h2>

            <p className="text-white/25 text-sm">
              Updated 2m ago
            </p>

          </div>

          <div
            className="
              mt-6

              h-[220px]

              rounded-[28px]

              bg-white/[0.03]

              border
              border-white/[0.05]

              p-5

              relative

              overflow-hidden
            "
          >

            <div className="absolute inset-0 opacity-40">

              <div className="absolute left-0 right-0 top-[20%] border-t border-white/[0.04]" />
              <div className="absolute left-0 right-0 top-[40%] border-t border-white/[0.04]" />
              <div className="absolute left-0 right-0 top-[60%] border-t border-white/[0.04]" />
              <div className="absolute left-0 right-0 top-[80%] border-t border-white/[0.04]" />

            </div>

            <svg
              viewBox="0 0 300 120"
              className="absolute inset-0 w-full h-full"
            >
              <path
                d="
                  M0,90
                  C30,80 60,40 90,50
                  C120,60 150,100 180,70
                  C210,40 240,20 300,45
                "
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>

            <div
              className="
                absolute
                right-[26%]
                top-[22%]

                w-[18px]
                h-[120px]

                rounded-full

                border
                border-orange-500

                bg-orange-500/10
              "
            />

            <div
              className="
                absolute
                right-[28.5%]
                top-[44%]

                w-4
                h-4

                rounded-full

                bg-orange-500
              "
            />

          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-10">

          <div>

            <p className="text-white/25 text-sm">
              Pickup Point
            </p>

            <div className="mt-4 flex gap-4">

              <div className="mt-1 text-white/40">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h4 className="text-[20px] font-light tracking-[-1px]">
                  Green Valley Apartments
                </h4>

                <p className="mt-2 text-white/30 leading-7 text-sm">
                  Sector 21, Dwarka
                  <br />
                  New Delhi, India
                </p>

              </div>

            </div>

          </div>

          <div>

            <p className="text-white/25 text-sm">
              Destination
            </p>

            <div className="mt-4 flex gap-4">

              <div className="mt-1 text-white/40">
                <FaSchool />
              </div>

              <div>

                <h4 className="text-[20px] font-light tracking-[-1px]">
                  Delhi Public School
                </h4>

                <p className="mt-2 text-white/30 leading-7 text-sm">
                  RK Puram
                  <br />
                  New Delhi, India
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-12">

          <div className="flex items-center justify-between">

            <h2
              className="
                text-[24px]

                font-light

                tracking-[-1px]
              "
            >
              Timeline
            </h2>

            <p className="text-white/25 text-sm">
              Today
            </p>

          </div>

          <div className="mt-8 space-y-8">

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div
                  className="
                    w-5
                    h-5

                    rounded-full

                    bg-green-500
                  "
                />

                <div className="w-[1px] h-24 bg-white/10" />

              </div>

              <div>

                <p className="text-white/25 text-sm">
                  7:42 AM
                </p>

                <h3 className="mt-2 text-[20px] font-light tracking-[-1px]">
                  Picked up from stop
                </h3>

                <p className="mt-3 text-white/30 text-[15px] leading-7">
                  Aryan boarded Route 12 from
                  Green Valley Apartments.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div
                  className="
                    w-5
                    h-5

                    rounded-full

                    bg-white
                  "
                />

                <div className="w-[1px] h-24 bg-white/10" />

              </div>

              <div>

                <p className="text-white/25 text-sm">
                  8:06 AM
                </p>

                <h3 className="mt-2 text-[20px] font-light tracking-[-1px]">
                  Arrived at school
                </h3>

                <p className="mt-3 text-white/30 text-[15px] leading-7">
                  Vehicle entered school campus
                  and attendance was confirmed.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div
                  className="
                    w-5
                    h-5

                    rounded-full

                    border
                    border-white/30
                  "
                />

              </div>

              <div>

                <p className="text-white/25 text-sm">
                  Upcoming
                </p>

                <h3 className="mt-2 text-[20px] font-light tracking-[-1px]">
                  Departure from school
                </h3>

                <p className="mt-3 text-white/30 text-[15px] leading-7">
                  Expected departure scheduled
                  for 2:10 PM this afternoon.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Track;