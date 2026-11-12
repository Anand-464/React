
import React from "react";
import CardNav from "./components/CardNav";
import BorderGlow from "./components/BorderGlow";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  Menu,
} from "lucide-react";
import WarpText from "./components/WarpText";
function App() {
  return (
    <main className="app">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      {/* Navigation */}
      <CardNav className="navbar glass">
        <a href="#" className="logo">
          <span className="logo-icon">
            <Sparkles size={20} />
          </span>
          Lumina
        </a>

        <div className="CardNav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <a href="#contact" className="CardNav-button">
          Get Started <ArrowUpRight size={16} />
        </a>

        <button className="mobile-menu" aria-label="Menu">
          <Menu />
        </button>
      </CardNav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow glass">
            <Sparkles size={14} />
            <span>DESIGN BEYOND LIMITS</span>
          </div>

          <WarpText
            text="Experience the beauty of glass."
            warpStrength={0.08}
            warpScale={1.7}
            speed={0.55}
            lens="bulge"
            pointerInfluence={0.42}
            pointerStrength={0.38}
            refraction={0.018}
            chromatic={0.35}
            idleDrift={0.2}
            ripple
            clickRipple
            intro
            fontSize={76}
            fontWeight={800}
            style={{ height: "180px", width: "100%" }}
            fontFamily="inherit"
            letterSpacing="-0.06em"
            lineHeight={0.9}
          />
          <p className="hero-description">
            A new dimension of digital experiences.
            Explore a world where creativity meets
            transparency and technology.
          </p>

          <div className="hero-actions">
            <a href="#features" className="primary-button">
              Explore More <ArrowUpRight size={18} />
            </a>

            <a href="#about" className="secondary-button">
              Discover
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot" />
            Crafted for the future
          </div>
        </div>

        {/* Glass visual */}
        <div className="hero-visual">
          <div className="orb orb-back" />
          <div className="orb orb-front" />

          {/* First card with BorderGlow */}
          <BorderGlow
            className="floating-card"
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#211e27"
            borderRadius={24}
            glowRadius={25}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <div className="floating-card-content">
              <div className="card-top">
                <span className="mini-icon">
                  <Sparkles size={19} />
                </span>
                <span className="live-label">LIVE EXPERIENCE</span>
              </div>

              <div className="visual-symbol">
                <Layers size={62} strokeWidth={1} />
              </div>

              <h3>Beyond Ordinary</h3>
              <p>Beautifully transparent. Naturally powerful.</p>

              <div className="card-progress">
                <span />
              </div>

              <div className="card-footer">
                <span>CREATIVE SPACE</span>
                <span>2026</span>
              </div>
            </div>
          </BorderGlow>
          <div className="floating-tag glass tag-one">
            <Zap size={16} /> Fluid Motion
          </div>

          <div className="floating-tag glass tag-two">
            <ShieldCheck size={16} /> Pure Design
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <span className="section-label">WHAT MAKES US DIFFERENT</span>
          <WarpText
            text="Designed to feel different."
            warpStrength={0.08}
            warpScale={1.5}
            speed={0.55}
            lens="bulge"
            pointerInfluence={0.42}
            pointerStrength={0.38}
            refraction={0.018}
            chromatic={0.25}
            idleDrift={0.2}
            ripple
            clickRipple
            intro
            fontSize={42}
            fontWeight={800}
            style={{ height: "75px", width: "100%" }}
            fontFamily="inherit"
            letterSpacing="-0.04em"
            lineHeight={0.9}
          />
          <p>
            Every detail is designed to create a smooth,
            immersive digital experience.
          </p>
        </div>

        <div className="feature-grid">

          {/* Feature card 1 */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <article className="feature-card glass">
              <div className="feature-icon">
                <Layers size={24} />
              </div>
              <h3>Glass Interface</h3>
              <p>
                Beautiful translucent surfaces with
                background blur and subtle borders.
              </p>
              <span className="feature-number">01</span>
            </article>
          </BorderGlow>

          {/* Feature card 2 */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <article className="feature-card glass">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3>Fluid Animation</h3>
              <p>
                Smooth motion and animated typography
                that bring the interface to life.
              </p>
              <span className="feature-number">02</span>
            </article>
          </BorderGlow>

          {/* Feature card 3 */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <article className="feature-card glass">
              <div className="feature-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>Modern Design</h3>
              <p>
                A clean, responsive layout with a
                futuristic visual identity.
              </p>
              <span className="feature-number">03</span>
            </article>
          </BorderGlow>

        </div>
      </section>

      {/* About */}
      <section className="about-section glass" id="about">
        <div>
          <span className="section-label">A NEW PERSPECTIVE</span>
        <WarpText
          text="Less noise. More imagination."
          warpStrength={0.08}
          warpScale={1.5}
          speed={0.55}
          lens="bulge"
          pointerInfluence={0.42}
          pointerStrength={0.38}
          refraction={0.018}
          chromatic={0.25}
          idleDrift={0.2}
          ripple
          clickRipple
          intro
          fontSize={38}
          fontWeight={800}
          style={{ height: "75px", width: "100%" }}
          fontFamily="inherit"
          letterSpacing="-0.04em"
          lineHeight={0.9}
        />          
          <p>
            Create experiences that feel lightweight,
            elegant and memorable. Built with React
            and enhanced with React Bits.
          </p>
        </div>

        <a href="#contact" className="primary-button">
          Let's Create <ArrowUpRight size={18} />
        </a>
      </section>

      {/* Footer */}
      <footer id="contact">
        <a href="#" className="logo">
          <span className="logo-icon">
            <Sparkles size={18} />
          </span>
          Lumina
        </a>

        <span>© 2026 Lumina. Made with creativity.</span>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="github-link"
        >
          <ArrowUpRight size={20} />
        </a>
      </footer>
    </main>
  );
}

export default App;
