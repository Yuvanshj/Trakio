import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaRoute,
  FaUser,
} from "react-icons/fa";

const Track = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      <iframe
        src="http://localhost:4000"
        title="Trakio Map"
        className="absolute inset-0 w-full h-full border-0 z-0"
        allow="geolocation"
      />

      <div
        className="
          absolute
          top-0
          right-0
          h-screen
          w-[400px]

          z-30

          bg-[#0d0d0d]/80
          backdrop-blur-xl

          border-l
          border-white/10

          text-white

          overflow-hidden
        "
      >

        <div className="h-full overflow-y-auto px-5 py-5">

          <div className="flex items-center justify-between mb-7">

            <h2 className="text-sm tracking-[2px] text-white/40 font-medium">
              CHILDREN
            </h2>

            <button
              className="
                px-3
                py-1.5

                rounded-lg

                bg-white/10

                text-sm
                text-white/80

                hover:bg-white/15

                transition-all
              "
            >
              + Add
            </button>

          </div>

          <div className="space-y-4">

            <div
              className="
                bg-white/[0.03]
                border
                border-white/10

                rounded-2xl

                p-4

                hover:border-white/20

                transition-all
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-14
                      h-14

                      rounded-full

                      bg-white/10

                      flex
                      items-center
                      justify-center

                      text-xl
                      text-white/80
                    "
                  >
                    <FaUser />
                  </div>

                  <div>

                    <h3 className="text-base font-medium text-white/90">
                      Aryan
                    </h3>

                    <p className="text-sm text-white/40 mt-1">
                      City School
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <div
                    className="
                      px-3
                      py-1.5

                      rounded-full

                      bg-white/10

                      text-[11px]
                      tracking-wide

                      text-white/70
                    "
                  >
                    At School
                  </div>

                  <p className="mt-2 text-sm text-white/35">
                    🔋 82%
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-10">

            <h3 className="text-sm tracking-[2px] text-white/40 font-medium mb-4">
              TODAY'S SUMMARY
            </h3>

            <div className="grid grid-cols-3 gap-3">

              <div
                className="
                  bg-white/[0.03]
                  border
                  border-white/10

                  rounded-2xl

                  p-4
                "
              >

                <div className="text-lg text-white/60 mb-4">
                  <FaCheckCircle />
                </div>

                <h4 className="text-xl font-semibold text-white/90">
                  14
                </h4>

                <p className="text-sm text-white/35 mt-1">
                  Check-ins
                </p>

              </div>

              <div
                className="
                  bg-white/[0.03]
                  border
                  border-white/10

                  rounded-2xl

                  p-4
                "
              >

                <div className="text-lg text-white/60 mb-4">
                  <FaExclamationTriangle />
                </div>

                <h4 className="text-xl font-semibold text-white/90">
                  2
                </h4>

                <p className="text-sm text-white/35 mt-1">
                  Alerts
                </p>

              </div>

              <div
                className="
                  bg-white/[0.03]
                  border
                  border-white/10

                  rounded-2xl

                  p-4
                "
              >

                <div className="text-lg text-white/60 mb-4">
                  <FaRoute />
                </div>

                <h4 className="text-xl font-semibold text-white/90">
                  4.2km
                </h4>

                <p className="text-sm text-white/35 mt-1">
                  Distance
                </p>

              </div>

            </div>

          </div>

          <div className="mt-10">

            <div className="flex items-center justify-between mb-4">

              <h3 className="text-sm tracking-[2px] text-white/40 font-medium">
                RECENT ALERTS
              </h3>

              <button className="text-sm text-white/35 hover:text-white/60 transition-all">
                Clear all
              </button>

            </div>

            <div className="space-y-3">

              <div
                className="
                  bg-white/[0.03]
                  border
                  border-white/10

                  rounded-2xl

                  p-4
                "
              >

                <h4 className="text-sm font-medium text-white/85">
                  Aryan arrived at school
                </h4>

                <p className="text-xs text-white/35 mt-2">
                  8:12 AM
                </p>

              </div>

              <div
                className="
                  bg-white/[0.03]
                  border
                  border-white/10

                  rounded-2xl

                  p-4
                "
              >

                <h4 className="text-sm font-medium text-white/85">
                  Low battery detected
                </h4>

                <p className="text-xs text-white/35 mt-2">
                  1:10 PM
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