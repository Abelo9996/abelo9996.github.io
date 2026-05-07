// Repertoire sub-page entry
function RepertoirePage() {
  return (
    <PageShell pageId="repertoire">
      {({ t, lang }) => (
        <>
          <MiniHero kicker={t.sec.repertoire.kicker} title={<>{t.sec.repertoire.title.split(" ").slice(0,-1).join(" ")} <em>{t.sec.repertoire.title.split(" ").slice(-1)[0]}</em></>} lede={t.sec.repertoire.lede} />
          <RepertoireSection t={t} noHead />
        </>
      )}
    </PageShell>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<RepertoirePage />);
