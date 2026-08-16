import Nav from "./Nav";
import home from "@/content/home.json";
import apartmentsContent from "@/content/apartments.json";
import explore from "@/content/explore.json";
import location from "@/content/location.json";
import settings from "@/content/settings.json";

const digits = (value: string) => value.replace(/\D/g, "");

const contactLinks = [
  { label: settings.phone, href: `tel:+${digits(settings.phone)}`, external: false },
  { label: settings.email, href: `mailto:${settings.email}`, external: false },
  { label: "WhatsApp", href: `https://wa.me/${digits(settings.whatsapp)}`, external: true },
  {
    label: `@${settings.instagram}`,
    href: `https://www.instagram.com/${settings.instagram}`,
    external: true,
  },
];

const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`;
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=13&output=embed`;

export default function Home() {
  return (
    <>
      <Nav siteName={settings.siteName} />

      <section id="top" className="hero">
        <img
          src={home.hero.image}
          alt={home.hero.imageAlt}
          className="hero__photo"
        />
        <div className="hero__scrim" />
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">{home.hero.eyebrow}</p>
            <h1 className="hero__title">{home.hero.title}</h1>
            <p className="hero__subhead">{home.hero.subtitle}</p>
            <div className="hero__actions">
              <a href="#apartments" className="btn btn--white">
                Book your stay
              </a>
              <a href="#explore" className="btn btn--outline">
                Explore the island
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about">
          <div className="about__text">
            <p className="eyebrow">About us</p>
            <h2 className="section-title">{home.about.heading}</h2>
            <p className="lead">{home.about.text}</p>
            <div className="amenities">
              {home.about.amenities.map((item) => (
                <div key={item} className="amenity">
                  <span className="amenity__dot" />
                  <span className="amenity__label">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about__photo">
            <img
              src={home.about.image}
              alt={home.about.imageAlt}
              className="about__img"
            />
          </div>
        </div>
      </section>

      <section id="apartments" className="section section--tint">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">The apartments</p>
            <h2 className="section-title">{apartmentsContent.heading}</h2>
            <p className="lead">{apartmentsContent.intro}</p>
          </div>
          <div className="card-grid">
            {apartmentsContent.apartments.map((apt) => (
              <div key={apt.name} className="card">
                <img
                  src={apt.image}
                  alt={apt.imageAlt}
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__body">
                  <h3 className="card__title">{apt.name}</h3>
                  <p className="card__text">{apt.description}</p>
                  <a
                    href={apt.airbnbUrl}
                    target="_blank"
                    rel="noopener"
                    className="btn btn--primary card__btn"
                  >
                    Book on Airbnb&ensp;→
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="explore" className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Explore</p>
            <h2 className="section-title">{explore.heading}</h2>
            <p className="lead">{explore.intro}</p>
          </div>
          <div className="explore-grid">
            {explore.items.map((item) => (
              <div key={item.title} className="explore-item">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="explore-item__img"
                  loading="lazy"
                />
                <div>
                  <h3 className="explore-item__title">{item.title}</h3>
                  <p className="explore-item__text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="section section--tint">
        <div className="container location">
          <div className="location__text">
            <p className="eyebrow">Location</p>
            <h2 className="section-title">{location.heading}</h2>
            <p className="lead">{location.text}</p>
            <a
              href={mapsLinkUrl}
              target="_blank"
              rel="noopener"
              className="btn btn--primary location__btn"
            >
              Open in Google Maps&ensp;→
            </a>
          </div>
          <div className="location__map">
            <div className="map-frame">
              <iframe
                title={`Map of ${location.mapQuery}`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <img
                src="/images/logo.png"
                alt={`${settings.siteName} logo`}
                className="footer__logo"
              />
              <p className="footer__tagline">{settings.footerTagline}</p>
            </div>
            <div>
              <p className="footer__contact-eyebrow">Get in touch</p>
              <div className="footer__links">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="footer__link"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                  >
                    <span className="footer__link-dot" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 {settings.siteName}</span>
            <span>{settings.footerLocation}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
