// v2 Dark — Gallery + Video + Contact + Footer

function GallerySection({ t, lang, noHead }) {
  const [open, setOpen] = useState(null);
  const [tab, setTab] = useState(0);
  const tabs = lang === "fi" ? ["Kaikki", "Konsertti", "Muotokuva", "Studio"]
              : lang === "ru" ? ["Все", "Концерт", "Портрет", "Студия"]
              : ["All", "Concert", "Portrait", "Studio"];
  const tiles = [
    { cls: "g-1", lab: "01 / 12", cap: { en: "Helsinki Music Centre, 2025", fi: "Musiikkitalo, 2025", ru: "Дом музыки, Хельсинки, 2025" }, hasImg: true, cat: 1 },
    { cls: "g-2", lab: "02 / 12", cap: { en: "Backstage, Yerevan", fi: "Lavan takana, Jerevan", ru: "За кулисами, Ереван" }, cat: 1 },
    { cls: "g-3", lab: "03 / 12", cap: { en: "Rehearsal, Sello Hall", fi: "Harjoitus, Sellosali", ru: "Репетиция, зал «Селло»" }, cat: 3 },
    { cls: "g-4", lab: "04 / 12", cap: { en: "Verbier Festival", fi: "Verbier-festivaali", ru: "Фестиваль в Вербье" }, cat: 1 },
    { cls: "g-5", lab: "05 / 12", cap: { en: "Studio session", fi: "Studiosessio", ru: "Студийная сессия" }, cat: 3 },
    { cls: "g-6", lab: "06 / 12", cap: { en: "Portrait, 2026", fi: "Muotokuva, 2026", ru: "Портрет, 2026" }, hasImg: true, cat: 2 },
    { cls: "g-7", lab: "07 / 12", cap: { en: "Curtain call, Moscow", fi: "Esiintulo, Moskova", ru: "Поклон, Москва" }, cat: 1 },
  ];
  useEffect(() => {
    if (open == null) return;
    const k = (e) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <section id="gallery" className="section light shell">
      {!noHead && <SectionHead s={t.sec.gallery} />}
      <Reveal className="gal-tabs">
        {tabs.map((tb, i) => (
          <button key={i} aria-pressed={tab === i} onClick={() => setTab(i)}>{tb}</button>
        ))}
      </Reveal>
      <Reveal className="gallery">
        {tiles.map((tile, i) => (
          <div key={i} className={`tile ${tile.cls} ${tile.hasImg ? "has-img" : ""}${tab !== 0 && tile.cat !== tab ? " dim" : ""}`} onClick={() => (tab === 0 || tile.cat === tab) && setOpen(i)}>
            {tile.hasImg
              ? <img src="assets/albert-portrait.jpg" alt="" />
              : <div className="stripes" />}
            <div className="lab">
              <span>{tile.lab}</span>
              <span>{tile.cap[lang]}</span>
            </div>
          </div>
        ))}
      </Reveal>
      {open !== null && (
        <div className="lb-back" onClick={() => setOpen(null)}>
          <button className="x" onClick={() => setOpen(null)}>CLOSE ✕</button>
          <div className="lb-frame" onClick={(e) => e.stopPropagation()}>
            {tiles[open].hasImg
              ? <img src="assets/albert-portrait.jpg" alt="" />
              : <div className="stripes" />}
            <div className="cap">
              <span>{tiles[open].lab}</span>
              <span>{tiles[open].cap[lang]}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function VideoSection({ t, lang }) {
  const [feat, ...rest] = VIDEOS;
  return (
    <section id="media" className="section shell">
      <SectionHead s={t.sec.media} />
      <Reveal className="video-feature">
        <div className="stripes" />
        <div className="play-big">▶</div>
        <div className="meta">
          <h3>{feat.h[lang]}</h3>
          <div className="info">{feat.info}</div>
        </div>
      </Reveal>
      <Reveal className="video-list">
        {rest.map((v) => (
          <div key={v.id} className="video-card">
            <div className="thumb">
              <div className="stripes" />
              <div className="dur">{v.dur}</div>
              <div className="play-s">▶</div>
            </div>
            <h4>{v.h[lang]}</h4>
            <div className="vmeta">{v.info}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function ContactSection({ t }) {
  const c = t.contact;
  return (
    <section id="contact" className="section shell">
      <Reveal as="h2" className="contact-h">
        {t.sec.contactT.lead} <em>{t.sec.contactT.lead2}</em>
      </Reveal>
      <Reveal className="contact">
        <div className="contact-image">
          <img src="assets/albert-portrait.jpg" alt="Albert Dilanyan" />
          <div className="cap">Portrait · 2026 / studio—lentus</div>
        </div>
        <div className="contact-blocks">
          <div className="cblock">
            <h4>— {c.mgmt[0]}</h4>
            <p>{c.mgmt[1][0]}<br />{c.mgmt[1][1]}<br /><a href={`mailto:${c.mgmt[1][2]}`}>{c.mgmt[1][2]}</a></p>
          </div>
          <div className="cblock">
            <h4>— {c.press[0]}</h4>
            <p>{c.press[1][0]}<br /><a href={`mailto:${c.press[1][1]}`}>{c.press[1][1]}</a></p>
          </div>
          <div className="cblock">
            <h4>— {c.direct[0]}</h4>
            <p><a href={`mailto:${c.direct[1][0]}`}>{c.direct[1][0]}</a></p>
          </div>
          <div className="cblock">
            <h4>— {c.social[0]}</h4>
            <p>
              {c.social[1].map(([k, url], i) => (
                <span key={k}>
                  {url && url.startsWith("http")
                    ? <a href={url} target="_blank" rel="noopener noreferrer">{k} ↗</a>
                    : <span style={{color:"var(--ink-3)"}}>{k} {url}</span>}
                  {i < c.social[1].length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ t }) {
  return (
    <>
      <div className="foot-bands" aria-hidden="true">
        <span className="a" />
        <span className="b" />
      </div>
      <footer className="foot">
        <span>{t.foot}</span>
        <div className="socials-foot">
          <a href="https://www.youtube.com/@АльбертАшотович-з8и" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
          <a href="#contact">Contact</a>
          <a href="#top">Top ↑</a>
        </div>
      </footer>
    </>
  );
}

Object.assign(window, { GallerySection, VideoSection, ContactSection, Footer });
