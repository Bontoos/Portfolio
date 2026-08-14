import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiTauri,
} from "react-icons/si";

import { MdApi } from "react-icons/md";

const skills = [
  {
    number: "01",
    title: "Frontend",

    items: [
      {
        name: "React",
        icon: SiReact,
        docs: "https://react.dev/",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML",
        icon: SiHtml5,
        docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: SiCss,
        docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        docs: "https://tailwindcss.com/docs",
      },
    ],
  },

  {
    number: "02",
    title: "Backend",

    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        docs: "https://nodejs.org/docs/latest/api/",
      },
      {
        name: "Express",
        icon: SiExpress,
        docs: "https://expressjs.com/",
      },
    ],
  },

    {
    number: "03",
    title: "Tools",

    items: [
      {
        name: "Git",
        icon: SiGit,
        docs: "https://git-scm.com/doc",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        docs: "https://docs.github.com/",
      },
      {
        name: "Tauri",
        icon: SiTauri,
        docs: "https://v2.tauri.app/",
      },
      {
        name: "REST APIs",
        icon: MdApi,
        docs: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
      },
    ],
  },
];

export default function CodingKnowledge() {
  return (
    <section
      id="knowledge"
      className="
        relative
        z-20
        -mt-10
        bg-[#013e37]
        scroll-mt-20
        sm:-mt-16
      "
    >
      <div
        className="
          overflow-hidden
          rounded-t-[2rem]
          bg-[#ffefb3]
          text-[#013e37]
          sm:rounded-t-[3rem]
        "
      >
        {/* Top */}
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
              02 / Knowledge
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
              The toolbox
            </span>
          </div>
        </div>

        {/* Main */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-20
            sm:px-6
            sm:py-24
            lg:px-10
            lg:py-28
          "
        >
          {/* Heading */}
          <div
            className="
              mb-14
              flex
              flex-col
              gap-7
              sm:mb-20
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <h2
              className="
                font-display
                text-[clamp(3rem,13vw,4.5rem)]
                font-semibold
                leading-[0.95]
                tracking-[-0.05em]
              "
            >
              Tools I actually
              <br />
              know how to use.
            </h2>

            <p
              className="
                max-w-sm
                font-body
                text-sm
                leading-6
                text-[#013e37]/60
              "
            >
              No buzzword bingo — just the stuff I&apos;m comfortable building
              with and reaching for when a project needs it.
            </p>
          </div>

          {/* Skill categories */}
          <div
            className="
              grid
              border-y
              border-[#013e37]/20
              md:grid-cols-3
            "
          >
            {skills.map((skill, index) => (
              <article
                key={skill.title}
                className={`
                  py-9
                  sm:py-10
                  md:px-6
                  lg:px-10

                  ${
                    index !== 0
                      ? "border-t border-[#013e37]/20 md:border-l md:border-t-0"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    font-body
                    text-xs
                    font-semibold
                    tracking-[0.18em]
                    opacity-35
                  "
                >
                  {skill.number}
                </span>

                <h3
                  className="
                    mt-8
                    font-display
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    sm:mt-10
                  "
                >
                  {skill.title}
                </h3>

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-2
                    gap-2.5
                    sm:mt-8
                    sm:gap-3
                  "
                >
                  {skill.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.name}
                        href={item.docs}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.name} documentation`}
                        className="
                          group
                          flex
                          min-h-24
                          flex-col
                          justify-between
                          border
                          border-[#013e37]/15
                          p-3.5
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:bg-[#013e37]
                          hover:text-[#ffefb3]
                          sm:min-h-28
                          sm:p-4
                        "
                      >
                        <div className="flex items-start justify-between">
                          <Icon className="text-2xl sm:text-3xl" />

                          <span
                            className="
                              text-sm
                              opacity-0
                              transition-all
                              duration-300
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                              group-hover:opacity-70
                            "
                          >
                            ↗
                          </span>
                        </div>

                        <span
                          className="
                            font-body
                            text-xs
                            font-semibold
                            sm:text-sm
                          "
                        >
                          {item.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}