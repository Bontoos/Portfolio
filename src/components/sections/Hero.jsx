export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#ffefb3] text-[#013e37]"
    >
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-center
          px-5
          pb-28
          pt-28
          sm:px-6
          sm:pt-32
          lg:px-10
        "
      >
        <div className="max-w-6xl">
          <p
            className="
              mb-7
              font-body
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              opacity-50
              sm:mb-8
              sm:text-sm
            "
          >
            Web Developer / Based in Sweden
          </p>

          <h1
            className="
              font-display
              text-[clamp(3.4rem,15vw,7rem)]
              font-semibold
              leading-[0.92]
              tracking-[-0.05em]
            "
          >
            <span className="block">
              I make websites
            </span>

            <span className="block">
              people don&apos;t
            </span>

            <span className="block">
              hate using.
            </span>
          </h1>

          <div
            className="
              mt-10
              flex
              max-w-4xl
              flex-col
              gap-7
              sm:mt-14
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <p
              className="
                max-w-xl
                font-body
                text-[15px]
                leading-7
                opacity-65
                sm:text-base
                md:text-lg
              "
            >
              I&apos;m Pontus. I build clean, responsive websites and web
              apps, handling everything from what you see on screen to what
              runs behind it.
            </p>

            <a
              href="#projects"
              className="
                group
                flex
                w-fit
                shrink-0
                items-center
                gap-4
                font-body
                text-sm
                font-semibold
              "
            >
              View my work

              <span
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}