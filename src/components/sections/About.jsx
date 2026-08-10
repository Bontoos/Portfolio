export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        z-10
        -mt-10
        bg-[#ffefb3]
        scroll-mt-20
        sm:-mt-16
      "
    >
      <div
        className="
          overflow-hidden
          rounded-t-[2rem]
          bg-[#013e37]
          text-[#ffefb3]
          sm:rounded-t-[3rem]
        "
      >
        {/* Section heading */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pt-10
            sm:px-6
            sm:pt-12
            lg:px-10
            lg:pt-14
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                font-body
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                opacity-60
              "
            >
              01 / About
            </span>

            <span
              className="
                hidden
                font-body
                text-xs
                uppercase
                tracking-[0.18em]
                opacity-60
                sm:block
              "
            >
              A little context
            </span>
          </div>

          <div className="about-title-perspective">
            <h2
              className="
                about-title-3d
                mt-8
                pb-8
                font-display
                text-[22vw]
                font-semibold
                leading-[0.78]
                tracking-[-0.07em]
                sm:pb-10
                sm:text-[15vw]
                lg:text-[11rem]
              "
            >
              ABOUT
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="border-t border-[#ffefb3]/20">
          <div
            className="
              mx-auto
              grid
              max-w-7xl
              gap-10
              px-5
              py-20
              sm:px-6
              sm:py-24
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-12
              lg:px-10
              lg:py-32
            "
          >
            <div>
              <p
                className="
                  font-body
                  text-sm
                  uppercase
                  tracking-[0.16em]
                  opacity-50
                "
              >
                Who am I?
              </p>
            </div>

            <div>
              <p
                className="
                  max-w-3xl
                  font-display
                  text-3xl
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                I like making things — whether they live in a browser, a game,
                or somewhere in between.
              </p>

              <div
                className="
                  mt-10
                  grid
                  gap-8
                  text-[#ffefb3]/70
                  md:grid-cols-2
                "
              >
                <p className="font-body leading-7">
                  I&apos;m Pontus. Most of my time goes into programming and
                  figuring out how things work. Web development is a big part
                  of that, but I&apos;m just as interested in games and more
                  focused projects when an idea catches my attention.
                </p>

                <p className="font-body leading-7">
                  When I&apos;m away from the keyboard, there&apos;s a good
                  chance music is involved. I&apos;m into instruments both
                  acoustic and electric, and I like having something creative
                  to work on that doesn&apos;t involve staring at code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}