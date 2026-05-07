// v2 Dark — Repertoire + Recordings + Press

function RepertoireSection({ t, noHead }) {
  return (
    <section id="repertoire" className="section light shell">
      {!noHead && <SectionHead s={t.sec.repertoire} />}
      <Reveal className="rep-grid">
        {t.repertoire.map((col, i) => (
          <div key={i} className="rep-col">
            <h3>— {col.h}</h3>
            <ul>
              {col.items.map(([composer, work], j) => (
                <li key={j}>
                  <span className="composer">{composer}</span>
                  <em>{work}</em>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function DiscographySection({ t, lang }) {
  const [playing, setPlaying] = useState(null);
  return (
    <section id="recordings" className="section shell">
      <SectionHead s={t.sec.disco} />
      <Reveal className="disco-grid">
        {ALBUMS.map((a) => (
          <div key={a.id} className="album">
            <div className="cover">
              <div className="stripes" />
              <div className="album-mark">
                {a.mark.line1}
                <span>{a.mark.line2}</span>
              </div>
            </div>
            <div className="album-info">
              <span className="label">{a.label} · {a.year}</span>
              <span className="title">{a.title[lang]}</span>
              <span className="meta">{a.meta[lang]}</span>
            </div>
            <ul className="tracks">
              {a.tracks.map((tr) => {
                const id = `${a.id}-${tr.n}`;
                const isOn = playing === id;
                return (
                  <li key={tr.n}>
                    <span className="n">{tr.n}</span>
                    <span className="t">{tr.t[lang]}</span>
                    <span className="dur">{tr.dur}</span>
                    <button className="play" aria-pressed={isOn} onClick={() => setPlaying(isOn ? null : id)} aria-label={t.misc.play}>
                      {isOn ? "■" : "▶"}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function PressSection({ t, lang, noHead }) {
  const [items, more] = [t.pressItems, t.newsItems];
  const loadMore = lang === "fi" ? "Lisää" : lang === "ru" ? "Ещё" : "Load more";
  return (
    <section id="press" className="section shell">
      {!noHead && <SectionHead s={t.sec.press} />}
      <Reveal className="press-feature">
        <article className="press-card large">
          <div className="stripes" />
          <div className="content">
            <div className="source">{items[0].s}</div>
            <div className="quote">“{items[0].q}”</div>
            <div className="meta">{items[0].c} · 2025</div>
          </div>
        </article>
        <div className="stack">
          {items.slice(1, 3).map((p, i) => (
            <article key={i} className="press-card small">
              <div className="stripes" />
              <div className="content">
                <div className="source">{p.s}</div>
                <div className="quote">“{p.q}”</div>
                <div className="meta">{p.c} · 2025</div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
      <Reveal className="press-grid">
        {more.map((n, i) => (
          <article key={i} className="press-card">
            <div className="stripes" />
            <div className="content">
              <div className="source">{n.c} · {n.d}</div>
              <div className="quote" style={{fontStyle:"normal", textTransform:"uppercase", fontSize:"clamp(20px,1.7vw,26px)"}}>{n.t}</div>
              <div className="meta" style={{fontFamily:"var(--serif)", fontSize:"14px", letterSpacing:"0", textTransform:"none", color:"var(--ink-2)", maxWidth:"42ch", lineHeight:1.55}}>{n.e}</div>
            </div>
          </article>
        ))}
      </Reveal>
      <div className="load-more">
        <button>{loadMore}</button>
      </div>
    </section>
  );
}

function IndexCards({ t, lang }) {
  const handleNav = (e, href) => {
    e.preventDefault();
    document.body.classList.add("page-leave");
    setTimeout(() => { window.location.href = href; }, 280);
  };
  const ledeEN = {
    repertoire: "An evolving catalogue of works held actively in performance — concerto, sonata and unaccompanied repertoire.",
    press:      "Selected reviews, interviews and announcements from across the season.",
    gallery:    "Concert and portrait photography — selected frames from recent seasons.",
  };
  const ledeFI = {
    repertoire: "Kehittyvä luettelo aktiivisesti soitettavista teoksista — konserttoja, sonaatteja ja sooloteoksia.",
    press:      "Valikoituja arvosteluja, haastatteluja ja ilmoituksia kuluvalta kaudelta.",
    gallery:    "Konsertti- ja muotokuvavalokuvausta — viime kausilta valikoituja otoksia.",
  };
  const ledeRU = {
    repertoire: "Развивающийся список активно исполняемых сочинений — концерты, сонаты и сольные произведения.",
    press:      "Избранные рецензии, интервью и анонсы текущего сезона.",
    gallery:    "Концертная и портретная фотография — избранные кадры последних сезонов.",
  };
  const lede = lang === "fi" ? ledeFI : lang === "ru" ? ledeRU : ledeEN;
  const seeMore = lang === "fi" ? "Avaa" : lang === "ru" ? "Открыть" : "Open";
  const cards = [
    { num: "03", key: "repertoire", title: t.nav.repertoire, lede: lede.repertoire, href: "Repertoire.html" },
    { num: "05", key: "press",      title: t.nav.press,      lede: lede.press,      href: "Press.html" },
    { num: "06", key: "gallery",    title: t.nav.gallery,    lede: lede.gallery,    href: "Gallery.html" },
  ];
  const indexHd = {
    en: { num: "—", kicker: "Index", title: "Further reading", lede: "Three sections held on their own pages — open to enter." },
    fi: { num: "—", kicker: "Hakemisto", title: "Lisätietoa", lede: "Kolme osiota omilla sivuillaan — avaa siirtyäksesi." },
    ru: { num: "—", kicker: "Указатель", title: "Подробнее", lede: "Три раздела на отдельных страницах — откройте, чтобы перейти." },
  }[lang] || { num: "—", kicker: "Index", title: "Further reading", lede: "Three sections held on their own pages — open to enter." };
  return (
    <section id="index" className="section shell">
      <SectionHead s={indexHd} />
      <Reveal className="index-cards">
        {cards.map((c) => (
          <a key={c.key} className="index-card" href={c.href} onClick={(e) => handleNav(e, c.href)}>
            <div className="ic-img"><img src="assets/albert-portrait.jpg" alt="" /></div>
            <div className="stripes" />
            <div className="ic-body">
              <span className="ic-num">{c.num} / {c.title}</span>
              <span className="ic-title">{c.title}</span>
              <span className="ic-lede">{c.lede}</span>
              <span className="ic-cta">{seeMore} <span className="arr">→</span></span>
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}

Object.assign(window, { RepertoireSection, DiscographySection, PressSection, IndexCards });
