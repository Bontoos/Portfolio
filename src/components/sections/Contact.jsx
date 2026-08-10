import {
  FiArrowUpRight,
  FiMail,
  FiLinkedin,
} from "react-icons/fi";

import { SiGithub } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Bontoos",
    icon: SiGithub,
  },

  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_LINKEDIN_SLUG",
    icon: FiLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        z-40
        -mt-10
        bg-[#013e37]
        scroll-mt-20
        sm:-mt-16
      "
    >
      <div
        className="
          contact-section
          rounded-t-[2rem]
          bg-[#ffefb3]
          text-[#013e37]
          sm:rounded-t-[3rem]
        "
      >
        {/* Header */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pt-10
            sm:px-6
            sm:pt-12
            lg:px-10
            lg:pt-16
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#013e37]/15
              pb-6
              sm:pb-8
            "
          >
            <span
              className="
                font-body
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                opacity-50
              "
            >
              04 / Contact
            </span>

            <span
              className="
                hidden
                font-body
                text-xs
                uppercase
                tracking-[0.18em]
                opacity-50
                sm:block
              "
            >
              Let&apos;s make something
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pb-16
            pt-16
            sm:px-6
            sm:pb-20
            sm:pt-20
            lg:px-10
            lg:pb-28
            lg:pt-28
          "
        >
          <p
            className="
              mb-5
              font-body
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              opacity-45
              sm:mb-6
            "
          >
            Got something in mind?
          </p>

          <h2
            className="
              font-display
              leading-[0.8]
              tracking-[-0.075em]
            "
          >
            <span
              className="
                block
                text-[20vw]
                font-semibold
                sm:text-[15vw]
                lg:text-[10rem]
              "
            >
              LET&apos;S
            </span>

            <span
              className="
                contact-outline-title
                block
                text-[24vw]
                font-semibold
                sm:text-[18vw]
                lg:text-[13rem]
              "
            >
              TALK.
            </span>
          </h2>
        </div>

        {/* Details */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pb-20
            sm:px-6
            sm:pb-24
            lg:px-10
            lg:pb-32
          "
        >
          <div
            className="
              grid
              gap-14
              border-t
              border-[#013e37]/20
              pt-10
              sm:gap-16
              sm:pt-12
              lg:grid-cols-[1fr_1.3fr]
              lg:gap-24
            "
          >
            {/* Left */}
            <div className="flex flex-col justify-between gap-12">
              <p
                className="
                  max-w-sm
                  font-body
                  text-[15px]
                  leading-7
                  text-[#013e37]/65
                  sm:text-base
                "
              >
                Got an idea, a half-finished plan, or something you think I
                could help build? Send me a message and we&apos;ll figure it
                out.
              </p>

              <div>
                <span
                  className="
                    font-body
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    opacity-40
                  "
                >
                  Currently
                </span>

                <div className="mt-4 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-[#013e37]
                        opacity-20
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-3
                        w-3
                        rounded-full
                        bg-[#013e37]
                      "
                    />
                  </span>

                  <span className="font-body text-sm font-semibold">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="min-w-0">
              <span
                className="
                  font-body
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  opacity-40
                "
              >
                Email
              </span>

              <a
                href="mailto:pontus.eklund06@gmail.com"
                className="
                  group
                  mt-5
                  flex
                  min-w-0
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[#013e37]/20
                  pb-8
                  sm:gap-6
                "
              >
                <span
                  className="
                    min-w-0
                    break-all
                    font-display
                    text-[clamp(1.35rem,6vw,3rem)]
                    font-semibold
                    leading-tight
                    tracking-[-0.04em]
                  "
                >
                  pontus.eklund06@gmail.com
                </span>

                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#013e37]/30
                    transition-all
                    duration-300
                    group-hover:rotate-12
                    group-hover:bg-[#013e37]
                    group-hover:text-[#ffefb3]
                    sm:h-12
                    sm:w-12
                  "
                >
                  <FiMail />
                </span>
              </a>

              {/* Social links */}
              <div className="mt-8 grid sm:mt-10 sm:grid-cols-2">
                {socials.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        group
                        flex
                        items-center
                        justify-between
                        border-[#013e37]/20
                        py-6
                        transition-opacity
                        hover:opacity-60

                        ${
                          index !== 0
                            ? "border-t sm:border-l sm:border-t-0 sm:pl-8"
                            : "sm:pr-8"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="text-xl" />

                        <span className="font-body text-sm font-semibold">
                          {social.name}
                        </span>
                      </div>

                      <FiArrowUpRight
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#013e37]/15">
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              gap-4
              px-5
              py-7
              font-body
              text-xs
              uppercase
              tracking-[0.14em]
              opacity-50
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-6
              sm:py-8
              lg:px-10
            "
          >
            <span>
              © 2026 Pontus Eklund
            </span>

            <a
              href="#home"
              className="group flex items-center gap-3"
            >
              Back to top

              <span
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-1
                "
              >
                ↑
              </span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}