// v2 Dark — Primitives: Reveal, Nav, Hero, SectionHead

const { useState, useEffect, useRef, useMemo } = React;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } });
    }, { threshold: 0.10, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, as: Tag = "div", className = "", style }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${className}`} style={style}>{children}</Tag>;
}

function Nav({ lang, setLang, t, pageId }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(pageId || "bio");
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  // [key, anchor-on-home, page-file]  page-file=null means home only
  const items = [
    ["bio",        "#bio",        null],
    ["concerts",   "#concerts",   null],
    ["repertoire", "#repertoire", "Repertoire.html"],
    ["recordings", "#recordings", null],
    ["press",      "#press",      "Press.html"],
    ["gallery",    "#gallery",    "Gallery.html"],
    ["media",      "#media",      null],
    ["contact",    "#contact",    null],
  ];

  const isHome = !pageId;
  // build hrefs based on current page
  const hrefFor = ([k, anchor, file]) => {
    if (isHome) return file ? file : anchor;
    // we're on a sub-page
    if (file === pageId + ".html" || k === pageId) return anchor;     // current sub-page section
    if (file) return file;                                            // another sub-page
    return "index.html" + anchor;                                     // back to home anchor
  };

  // Scroll-spy only on the home page
  useEffect(() => {
    if (!isHome) return;
    const ids = items.map(([k]) => k);
    const io = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-30% 0px -55% 0px", threshold: 0 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [isHome]);

  // Outgoing fade for cross-page links
  const handleNav = (e, href) => {
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) return;
    e.preventDefault();
    document.body.classList.add("page-leave");
    setTimeout(() => { window.location.href = href; }, 280);
  };

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href={isHome ? "#top" : "index.html"} className="nav-mark" onClick={(e) => isHome ? null : handleNav(e, "index.html")}>
        <span className="mark-seal" aria-hidden="true">
          <img src="assets/favicon.png" alt="" />
        </span>
        <span className="word">Dilanyan<span className="it">violinist</span></span>
      </a>
      <div className="nav-links">
        {items.map((it) => {
          const [k] = it;
          const href = hrefFor(it);
          const isActive = active === k || (pageId && pageId === k);
          return (
            <a key={k} href={href} aria-current={isActive ? "true" : undefined} onClick={(e) => handleNav(e, href)}>{t.nav[k]}</a>
          );
        })}
      </div>
      <div className="lang">
        {["en", "fi", "ru"].map((code, i) => (
          <React.Fragment key={code}>
            <button aria-pressed={lang === code} onClick={() => setLang(code)}>{code.toUpperCase()}</button>
            {i < 2 && <span className="sep">/</span>}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

function Social({ small }) {
  const items = [
    ["YT", "https://www.youtube.com/@АльбертАшотович-з8и"],
    ["IG", "#"],
    ["SP", "#"],
    ["✉", "mailto:albert@albertdilanyan.example"],
  ];
  return (
    <div className="socials">
      {items.map(([k, h]) => (
        <a key={k} className="social-btn" href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={k}>{k}</a>
      ))}
    </div>
  );
}

function Hero({ t, lang }) {
  return (
    <header id="top" className="hero hero-min">
      <div className="hero-bg">
        <img src="assets/albert-portrait.jpg" alt="" />
      </div>
      <div className="hero-grain" />
      <div className="hero-inner">
        <div />
        <div className="hero-bottom">
          <h1 className="hero-name">
            <span className="l1">{t.hero.name1}</span>
            <span className="l2">{t.hero.name2}</span>
          </h1>
          <span className="hero-foot-min">{t.hero.eyebrow} · {t.misc.season}</span>
        </div>
      </div>
    </header>
  );
}

function SectionHead({ s }) {
  return (
    <Reveal as="header" className="section-head">
      <div>
        <div className="num-row">
          <span className="n">{s.num} / {s.kicker}</span>
          <span className="rule" />
        </div>
      </div>
      <div>
        <h2 className="title">{s.title}</h2>
        {s.lede && <p className="lede">{s.lede}</p>}
      </div>
    </Reveal>
  );
}

Object.assign(window, { useReveal, Reveal, Nav, Hero, SectionHead, Social });
