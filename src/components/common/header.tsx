import { useState } from "react";
import { NavLink } from "react-router";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#9eadae]">

      <div className="mx-auto flex h-[80px] max-w-[1000px] items-center justify-between px-6 md:px-0">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-[28px] font-extrabold text-[#294f50]"
        >
          Kyle
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-[17px] transition ${
                  isActive
                    ? "font-semibold opacity-70"
                    : "hover:opacity-70"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3" aria-hidden="true">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3" aria-hidden="true">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="absolute left-0 top-[80px] flex w-full flex-col bg-[#9eadae] px-6 pb-5 md:hidden">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className="border-b border-[#789091] py-3 text-[#294f50]"
            >
              {link.name}
            </NavLink>
          ))}

        </nav>
      )}

    </header>
  );
}