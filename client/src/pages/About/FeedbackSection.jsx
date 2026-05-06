export default function FeedbackSection() {

  const testimonials = [
    {
      name: "Alex Carter",
      role: "Product Designer",
      text:
        "The experience was incredibly smooth and visually stunning from start to finish.",
    },

    {
      name: "Sophia Lee",
      role: "Startup Founder",
      text:
        "Their attention to detail and product thinking truly stands out.",
    },

    {
      name: "Michael Ross",
      role: "Developer",
      text:
        "A clean and modern experience that feels premium in every interaction.",
    },
  ];

  return (
    <section className="bg-black py-32 overflow-hidden">

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
          Feedback
        </p>

        <h2
          className="
            text-white
            font-black
            leading-[0.9]
            tracking-[-4px]

            text-[50px]
            md:text-[90px]
          "
        >
          Words Of Praise
          <br />
          From Our Users
        </h2>

      </div>

      <div
        className="
          flex
          gap-6
          px-6
        "
      >

        {testimonials.map((item, index) => (

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

    </section>
  );
}