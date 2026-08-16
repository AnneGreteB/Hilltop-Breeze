"use client";

import { useState } from "react";

const links = [
  { href: "#apartments", label: "Apartments" },
  { href: "#explore", label: "Explore" },
  { href: "#location", label: "Location" },
];

export default function Nav({ siteName }: { siteName: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <a href="#top" className="wordmark" onClick={close}>
        <span className="wordmark__dot" />
        <span className="wordmark__text">{siteName}</span>
      </a>

      <div className="nav__links">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav__link">
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary nav__cta">
          Book now
        </a>
      </div>

      <button
        type="button"
        className={`nav__burger${open ? " nav__burger--open" : ""}`}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="nav__menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav__menu-link" onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary nav__menu-cta" onClick={close}>
            Book now
          </a>
        </div>
      )}
    </nav>
  );
}
