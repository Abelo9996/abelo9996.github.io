// v2 Dark — App root + Tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#4FA6B5",
  "density": "regular",
  "lang": "en"
}/*EDITMODE-END*/;

function deriveAccent2(hex){
  const h = hex.replace("#","");
  const r = parseInt(h.slice(0,2),16);
  const g = parseInt(h.slice(2,4),16);
  const b = parseInt(h.slice(4,6),16);
  const f = (v)=>Math.max(0,Math.round(v*0.7));
  const t = (v)=>v.toString(16).padStart(2,"0");
  return `#${t(f(r))}${t(f(g))}${t(f(b))}`;
}

function App() {
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
    { name: "Teal",     v: "#4FA6B5" },
    { name: "Bronze",   v: "#B58A4F" },
    { name: "Sage",     v: "#7FA68A" },
    { name: "Crimson",  v: "#B5524F" },
    { name: "Bone",     v: "#E5DFD2" },
  ];

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} lang={lang} />
      <main>
        <BioSection t={t} />
        <ConcertsSection t={t} lang={lang} />
        <DiscographySection t={t} lang={lang} />
        <VideoSection t={t} lang={lang} />
        <IndexCards t={t} lang={lang} />
        <ContactSection t={t} />
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
                width: 26, height: 26, borderRadius: 6,
                background: s.v,
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
