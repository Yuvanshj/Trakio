import dashboardImage from "../../Assets/Images/image.png";

export default function AdminDashboardSection() {

  return (

    <section className="bg-black">

      <div
        className="
          max-w-8xl
    
          mx-auto

          px-6
          md:px-10

          py-32
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            items-center

            gap-20
          "
        >

          <div className="
          m-auto

          ">

            <p
              className="
                uppercase

                tracking-[3px]

                text-xs

                text-white
              "
            >
              School Admin Dashboard
            </p>

            <h2
              className="
                mt-6    
                mr-10

                text-5xl
                md:text-7xl

                font-black

                leading-[0.95]

                tracking-[-4px]

                text-white
              "
            >
              Complete Control.
              <br />
              All In One Dashboard.
            </h2>

            <p
              className="
                mt-10

                max-w-xl

                text-lg

                leading-9

                text-white
              "
            >
              Powerful tools to manage your
              entire transport operation with
              real-time tracking, reports,
              monitoring and alerts.
            </p>

          </div>

          <div
            className="
              relative
              rounded-[40px]
              mr-15

              

              bg-black

              p-6

              shadow-2xl

              min-h-125
            "
          >

            <div
  className="
    mt-10

    overflow-hidden

    rounded-[30px]

    border
    border-black/5
  "
>

  <img
    src={dashboardImage}
    alt="Dashboard Preview"

    className="
      w-auto
      h-auto
    
      object-cover
      

      transition-all
      duration-700

      hover:scale-[1.02]
    "
  />

</div>

          </div>

        </div>

      </div>

    </section>

  );
}