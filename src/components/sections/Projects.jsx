import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        z-30
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
              border-[#ffefb3]/15
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
              03 / Projects
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
              Selected work
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pb-20
            pt-16
            sm:px-6
            sm:pb-24
            sm:pt-20
            lg:px-10
            lg:pb-32
            lg:pt-28
          "
        >
          <div className="relative">
            <div
              className="
                mb-8
                flex
                items-center
                justify-between
                sm:mb-10
              "
            >
              <span
                className="
                  font-body
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  opacity-45
                "
              >
                Built & shipped
              </span>

              <span
                className="
                  hidden
                  font-body
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  opacity-45
                  sm:block
                "
              >
                Work / experiments
              </span>
            </div>

            <div className="overflow-visible pb-5 sm:pb-6">
              <h2
                data-text="PROJECTS"
                className="
                  projects-title
                  font-display
                  text-[20vw]
                  font-semibold
                  leading-[0.8]
                  tracking-[-0.07em]
                  sm:text-[14vw]
                  lg:text-[9.5rem]
                "
              >
                PROJECTS
              </h2>
            </div>

            <div
              className="
                mt-10
                flex
                flex-col
                gap-6
                sm:mt-14
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <p
                className="
                  max-w-md
                  font-body
                  text-[15px]
                  leading-7
                  text-[#ffefb3]/60
                  sm:text-base
                "
              >
                A few projects that started as a blank folder and eventually
                became something you can actually click around in.
              </p>

              <span
                className="
                  font-body
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  opacity-40
                "
              >
                Have a look ↓
              </span>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pb-24
            sm:px-6
            sm:pb-28
            lg:px-10
            lg:pb-40
          "
        >
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.id}
                className="
                  group
                  border-t
                  border-[#ffefb3]/20
                  py-12
                  lg:py-20
                "
              >
                <div
                  className="
                    grid
                    gap-10
                    lg:grid-cols-[0.75fr_1.25fr]
                    lg:gap-16
                  "
                >
                  {/* Info */}
                  <div className="flex flex-col justify-between gap-10 sm:gap-12">
                    <div>
                      <div
                        className="
                          mb-8
                          flex
                          flex-col
                          items-start
                          gap-3
                          sm:mb-10
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                        "
                      >
                        <span
                          className="
                            font-body
                            text-xs
                            font-semibold
                            tracking-[0.18em]
                            opacity-40
                          "
                        >
                          {number}
                        </span>

                        <span
                          className="
                            font-body
                            text-xs
                            uppercase
                            tracking-[0.16em]
                            opacity-40
                          "
                        >
                          {project.type}
                        </span>
                      </div>

                      <h3
                        className="
                          font-display
                          text-3xl
                          font-semibold
                          tracking-[-0.045em]
                          sm:text-4xl
                          lg:text-5xl
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mt-5
                          max-w-lg
                          font-body
                          text-[15px]
                          leading-7
                          text-[#ffefb3]/65
                          sm:mt-6
                          sm:text-base
                        "
                      >
                        {project.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-[#ffefb3]/20
                              px-3.5
                              py-2
                              font-body
                              text-xs
                              transition-colors
                              duration-200
                              hover:bg-[#ffefb3]
                              hover:text-[#013e37]
                              sm:px-4
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-6 sm:gap-7">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            group/link
                            flex
                            items-center
                            gap-3
                            font-body
                            text-sm
                            font-semibold
                          "
                        >
                          Live project

                          <FiArrowUpRight
                            className="
                              transition-transform
                              duration-200
                              group-hover/link:translate-x-1
                              group-hover/link:-translate-y-1
                            "
                          />
                        </a>
                      )}

                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            group/link
                            flex
                            items-center
                            gap-3
                            font-body
                            text-sm
                            font-semibold
                            text-[#ffefb3]/60
                            transition-colors
                            hover:text-[#ffefb3]
                          "
                        >
                          <SiGithub />

                          Source code

                          <FiArrowUpRight
                            className="
                              transition-transform
                              duration-200
                              group-hover/link:translate-x-1
                              group-hover/link:-translate-y-1
                            "
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden">
                    {project.image ? (
                      <a
                        href={
                          project.liveUrl && project.liveUrl !== "#"
                            ? project.liveUrl
                            : undefined
                        }
                        target={
                          project.liveUrl && project.liveUrl !== "#"
                            ? "_blank"
                            : undefined
                        }
                        rel="noreferrer"
                        className="block"
                      >
                        <div className="aspect-video overflow-hidden rounded-xl bg-[#013e37] p-4">
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </a>
                    ) : (
                      <div
                        className="
                          relative
                          flex
                          aspect-[16/10]
                          items-center
                          justify-center
                          overflow-hidden
                          bg-[#ffefb3]
                          text-[#013e37]
                        "
                      >
                        <span
                          className="
                            font-display
                            text-[36vw]
                            font-semibold
                            leading-none
                            tracking-[-0.08em]
                            opacity-[0.07]
                            transition-transform
                            duration-700
                            group-hover:scale-105
                            sm:text-[24vw]
                            lg:text-[12rem]
                          "
                        >
                          {number}
                        </span>

                        <span
                          className="
                            absolute
                            bottom-4
                            left-4
                            font-body
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            opacity-50
                            sm:bottom-6
                            sm:left-6
                            sm:text-xs
                          "
                        >
                          Add project screenshot
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}

          <div className="border-t border-[#ffefb3]/20" />
        </div>
      </div>
    </section>
  );
}