// v2 Dark — Bio + Concerts/Schedule

function BioSection({ t }) {
  const quote = {
    en: "“Phrasing of unusual intelligence — Dilanyan plays the line, not the note.”",
    fi: "”Poikkeuksellisen älykästä fraseerausta — Dilanyan soittaa linjan, ei nuottia.”",
    ru: "«Фразировка редкого ума — Диланян играет линию, а не ноту.»",
  };
  // pick from current language inside copy
  return (
    <section id="bio" className="section shell">
      <SectionHead s={t.sec.bio} />
      <Reveal className="bio-grid">
        <div className="bio-quote">
          <span className="mark">“</span>
          {t.pressItems[0].q}
        </div>
        <div>
          <div className="bio-text">
            {t.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <dl className="bio-meta">
            {t.bioMeta.map(([k, v], i) => (
              <div key={i}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
      <Reveal className="bio-strip">
        <img src="assets/albert-portrait.jpg" alt="" />
        <div className="cap">
          <span>Portrait · 2026</span>
          <span>Photo · studio—lentus</span>
        </div>
      </Reveal>
      {t.roles && (
        <div className="roles">
          {t.roles.map((r, i) => (
            <Reveal key={i} className={`role ${i % 2 === 1 ? "flip" : ""}`}>
              <div className="role-media">
                <img src="assets/albert-portrait.jpg" alt="" />
                <div className="stripes" />
                <div className="role-tag">
                  <span>{String(i + 1).padStart(2, "0")} / {String(t.roles.length).padStart(2, "0")}</span>
                  <span>{r.tag}</span>
                </div>
              </div>
              <div className="role-body">
                <span className="num">— {r.num}</span>
                <h3>{r.h1 && <>{r.h1}<br /></>}<em>{r.h2}</em></h3>
                <p>{r.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

function ConcertsSection({ t, lang }) {
  const [filter, setFilter] = useState(t.filters[1]);
  const filterKeys = ["all", "y2026", "y2025", "past"];
  const fk = filterKeys[t.filters.indexOf(filter)] || "all";

  const list = useMemo(() => {
    const now = new Date();
    return CONCERTS.filter((c) => {
      const d = new Date(c.iso);
      const isPast = d < now;
      if (fk === "all") return true;
      if (fk === "y2026") return c.iso.startsWith("2026") && !isPast;
      if (fk === "y2025") return c.iso.startsWith("2025");
      if (fk === "past") return isPast;
      return true;
    }).sort((a, b) => a.iso.localeCompare(b.iso));
  }, [fk]);

  const fmtDate = (iso) => {
    const d = new Date(iso);
    return { day: String(d.getUTCDate()).padStart(2,"0"), m: t.months[d.getUTCMonth()], y: d.getUTCFullYear() };
  };
  const now = new Date();

  const schedHd = lang === "fi" ? "Aikataulu" : lang === "ru" ? "Расписание" : "Schedule";
  const schedSub = lang === "fi" ? "Tulevat esiintymiset" : lang === "ru" ? "Предстоящие выступления" : "Upcoming engagements";
  const archive = lang === "fi" ? "Arkisto →" : lang === "ru" ? "Архив →" : "Archive →";

  return (
    <section id="concerts" className="section shell">
      <SectionHead s={t.sec.concerts} />
      <Reveal className="sched-hero">
        <img src="assets/albert-portrait.jpg" alt="" />
        <div className="sched-block">
          <span className="hd">— {schedHd}</span>
          <span className="ttl">{schedSub}</span>
          <span className="arch">{archive}</span>
        </div>
      </Reveal>
      <Reveal>
        <div className="concert-filters">
          {t.filters.map((f) => (
            <button key={f} className="pill" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <ul className="concert-list">
          {list.map((c, i) => {
            const d = fmtDate(c.iso);
            const past = new Date(c.iso) < now;
            const cta = past ? (lang === "fi" ? "Mennyt" : lang === "ru" ? "Прошёл" : "Past")
                       : c.status === "soldout" ? (lang === "fi" ? "Loppuunmyyty" : lang === "ru" ? "Билетов нет" : "Sold out")
                       : c.status === "limited" ? (lang === "fi" ? "Vähissä" : lang === "ru" ? "Мало мест" : "Few left")
                       : (lang === "fi" ? "Liput" : lang === "ru" ? "Билеты" : "Tickets");
            return (
              <li key={i} className={`concert ${past ? "is-past" : ""}`}>
                <span className="year-bg">{d.y}</span>
                <div className="badge">
                  <span className="d">{d.day}</span>
                  <span className="m">{d.m}</span>
                </div>
                <div>
                  <div className="venue">{c.venue}</div>
                  <span className="city">{c.city}</span>
                </div>
                <div className="program">
                  {c.program[lang]}
                  <span className="with">{c.withWhom[lang]}</span>
                </div>
                <span className="cta">
                  {cta}
                  <span className="arr">→</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}

Object.assign(window, { BioSection, ConcertsSection });
