// Page shell — Nav, Footer, MiniHero, fade-in transition.
// Used by sub-pages (Repertoire / Press / Gallery) which render a single section.

function PageShell({ pageId, children }) {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = useState(tw.lang || "en");
  const setLang = (l) => { setLangState(l); setTweak("lang", l); };
  useEffect(() => { if (tw.lang && tw.lang !== lang) setLangState(tw.lang); }, [tw.lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", tw.accent);
    root.style.setProperty("--accent-2", deriveAccent2(tw.accent));
    root.dataset.density = tw.density;
  }, [tw.accent, tw.density]);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // Page-load fade
  useEffect(() => {
    document.body.classList.add("page-enter");
    requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add("page-enter-active")));
  }, []);

  const t = COPY[lang] || COPY.en;
  const swatches = [
    { name: "Teal",     v: "#4FA6B5" }, { name: "Bronze",   v: "#B58A4F" },
    { name: "Sage",     v: "#7FA68A" }, { name: "Crimson",  v: "#B5524F" },
    { name: "Bone",     v: "#E5DFD2" },
  ];

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t} pageId={pageId} />
      <main>
        {typeof children === "function" ? children({ t, lang }) : children}
      </main>
      <Footer t={t} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio label="Site language" value={lang} options={["en","fi","ru"]} onChange={setLang} />

        <TweakSection label="Accent" />
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {swatches.map((s) => (
            <button key={s.v} onClick={() => setTweak("accent", s.v)} title={s.name}
              style={{
                width: 26, height: 26, borderRadius: 6, background: s.v,
                border: tw.accent.toLowerCase() === s.v.toLowerCase() ? "2px solid #29261b" : "1px solid rgba(0,0,0,.15)",
                padding: 0,
              }} />
          ))}
        </div>
        <TweakColor label="Custom" value={tw.accent} onChange={(v) => setTweak("accent", v)} />

        <TweakSection label="Spacing" />
        <TweakRadio label="Density" value={tw.density} options={["compact","regular","comfy"]} onChange={(v) => setTweak("density", v)} />
      </TweaksPanel>
    </>
  );
}

// Subpage hero — small, classy, just title + lede
function MiniHero({ kicker, title, lede }) {
  return (
    <header className="mini-hero shell">
      <div className="mini-hero-inner">
        <span className="mini-kicker">— {kicker}</span>
        <h1 className="mini-title">{title}</h1>
        {lede && <p className="mini-lede">{lede}</p>}
      </div>
    </header>
  );
}

Object.assign(window, { PageShell, MiniHero });
