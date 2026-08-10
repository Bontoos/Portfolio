import { useEffect, useState } from "react";

const links = [
  {
    number: "01",
    label: "About",
    href: "#about",
  },
  {
    number: "02",
    label: "Knowledge",
    href: "#knowledge",
  },
  {
    number: "03",
    label: "Projects",
    href: "#projects",
  },
  {
    number: "04",
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="absolute left-0 top-0 z-[70] w-full">
        <nav
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            py-6
            sm:px-6
            sm:py-8
            lg:px-10
          "
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className={`
              relative
              z-[80]
              font-display
              text-base
              font-semibold
              tracking-[-0.03em]
              transition-colors
              duration-300
              sm:text-lg

              ${
                menuOpen
                  ? "text-[#ffefb3]"
                  : "text-[#013e37]"
              }
            `}
          >
            Pontus Eklund.
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  font-body
                  text-sm
                  text-[#013e37]
                  opacity-70
                  transition-opacity
                  duration-200
                  hover:opacity-100
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="
              relative
              z-[80]
              flex
              h-11
              w-11
              items-center
              justify-center
              md:hidden
            "
          >
            <span className="relative block h-5 w-7">
              {/* Top line */}
              <span
                className={`
                  absolute
                  left-0
                  top-[6px]
                  h-[2px]
                  w-7
                  origin-center
                  rounded-full
                  transition-all
                  duration-300
                  ease-out

                  ${
                    menuOpen
                      ? "translate-y-[3px] rotate-45 bg-[#ffefb3]"
                      : "bg-[#013e37]"
                  }
                `}
              />

              {/* Bottom line */}
              <span
                className={`
                  absolute
                  bottom-[6px]
                  right-0
                  h-[2px]
                  origin-center
                  rounded-full
                  transition-all
                  duration-300
                  ease-out

                  ${
                    menuOpen
                      ? "w-7 -translate-y-[3px] -rotate-45 bg-[#ffefb3]"
                      : "w-5 bg-[#013e37]"
                  }
                `}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={`
          fixed
          inset-0
          z-[60]
          bg-[#013e37]
          text-[#ffefb3]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          md:hidden

          ${
            menuOpen
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            flex-col
            px-5
            pb-8
            pt-28
            sm:px-6
          "
        >
          {/* Small menu label */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#ffefb3]/20
              pb-5
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
              Navigation
            </span>

            <span
              className="
                font-body
                text-xs
                uppercase
                tracking-[0.18em]
                opacity-50
              "
            >
              Menu
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex flex-1 flex-col justify-center py-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#ffefb3]/15
                  py-5
                "
              >
                <div className="flex items-start gap-4">
                  <span
                    className="
                      mt-2
                      font-body
                      text-[10px]
                      font-semibold
                      tracking-[0.18em]
                      opacity-40
                    "
                  >
                    {link.number}
                  </span>

                  <span
                    className="
                      font-display
                      text-[clamp(2.8rem,14vw,5rem)]
                      font-semibold
                      leading-none
                      tracking-[-0.055em]
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  >
                    {link.label}
                  </span>
                </div>

                <span
                  className="
                    text-xl
                    opacity-40
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                >
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div
            className="
              flex
              items-end
              justify-between
              gap-6
              border-t
              border-[#ffefb3]/20
              pt-6
            "
          >
            <div>
              <span
                className="
                  block
                  font-body
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  opacity-40
                "
              >
                Get in touch
              </span>

              <a
                href="mailto:pontus.eklund06@gmail.com"
                className="
                  mt-2
                  block
                  font-body
                  text-sm
                  font-medium
                "
              >
                pontus.eklund06@gmail.com
              </a>
            </div>

            <a
              href="#projects"
              onClick={closeMenu}
              className="
                shrink-0
                font-body
                text-xs
                font-semibold
                uppercase
                tracking-[0.14em]
                opacity-60
              "
            >
              View work ↓
            </a>
          </div>
        </div>
      </div>
    </>
  );
}