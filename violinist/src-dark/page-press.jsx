// Press sub-page entry
function PressPage() {
  return (
    <PageShell pageId="press">
      {({ t, lang }) => (
        <>
          <MiniHero kicker={t.sec.press.kicker} title={<>{t.sec.press.title.split(" ").slice(0,-1).join(" ")} <em>{t.sec.press.title.split(" ").slice(-1)[0]}</em></>} lede={null} />
          <PressSection t={t} lang={lang} noHead />
        </>
      )}
    </PageShell>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<PressPage />);
