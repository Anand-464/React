
import GlassSurface from "./GlassSurface";
import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Zap,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  {
    title: "Explore",
    description: "Discover the Lumina experience",
    links: [
      { label: "Home", href: "#home", icon: Sparkles },
      { label: "Features", href: "#features", icon: Layers },
    ],
  },
  {
    title: "Discover",
    description: "Everything designed for you",
    links: [
      { label: "Our Story", href: "#about", icon: Zap },
      { label: "Get Started", href: "#contact", icon: ArrowUpRight },
    ],
  },
];

export default function CardNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveCard(null);
  };

  const handleDropdown = (index) => {
    setActiveCard((previous) =>
      previous === index ? null : index
    );
  };

  return (
    <header className="card-nav-wrapper">
      <GlassSurface
        width="100%"
        height={76}
        borderRadius={38}
        distortionScale={-180}
        displace={0.5}
        backgroundOpacity={0.0}
        borderWidth={0.07}
        brightness={50}
        opacity={0.8}
        blur={11}
        saturation={1}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        className="navbar-glass"
      >
        <nav
          className={`card-nav ${isOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" className="card-nav-logo" onClick={closeMenu}>
            <span className="logo-icon">
              <Sparkles size={21} />
            </span>
            <span>Lumina</span>
          </a>

          <div className="card-nav-desktop">
            {navItems.map((item, index) => (
              <div className="nav-dropdown" key={item.title}>
                <button
                  className={`nav-trigger ${
                    activeCard === index ? "active" : ""
                  }`}
                  onClick={() => handleDropdown(index)}
                  aria-expanded={activeCard === index}
                  aria-haspopup="true"
                >
                  {item.title}
                  <span
                    className={`nav-chevron ${
                      activeCard === index ? "rotate" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {activeCard === index && (
                  <div className="nav-card-dropdown">
                    <p className="dropdown-description">
                      {item.description}
                    </p>

                    {item.links.map((link) => {
                      const Icon = link.icon;

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          className="dropdown-link"
                          onClick={closeMenu}
                        >
                          <span className="dropdown-icon">
                            <Icon size={18} />
                          </span>

                          <span>{link.label}</span>

                          <ArrowUpRight
                            size={15}
                            className="dropdown-arrow"
                          />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Get Started
            <ArrowUpRight size={17} />
          </a>

          <button
            className="nav-mobile-toggle"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-mobile-menu ${isOpen ? "show" : ""}`}>
            {navItems.map((item) => (
              <div className="mobile-nav-group" key={item.title}>
                <h3>{item.title}</h3>

                {item.links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                    >
                      <Icon size={17} />
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  );
                })}
              </div>
            ))}

            <a
              href="#contact"
              className="nav-cta mobile-cta"
              onClick={closeMenu}
            >
              Get Started
              <ArrowUpRight size={17} />
            </a>
          </div>
        </nav>
      </GlassSurface>

      {activeCard !== null && (
        <button
          className="nav-outside"
          aria-label="Close dropdown"
          onClick={() => setActiveCard(null)}
        />
      )}
    </header>
  );
}
