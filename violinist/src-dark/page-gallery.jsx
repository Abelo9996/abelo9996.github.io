// Gallery sub-page entry
function GalleryPage() {
  return (
    <PageShell pageId="gallery">
      {({ t, lang }) => (
        <>
          <MiniHero kicker={t.sec.gallery.kicker} title={<>{t.sec.gallery.title.split(" ").slice(0,-1).join(" ")} <em>{t.sec.gallery.title.split(" ").slice(-1)[0]}</em></>} lede={t.sec.gallery.lede} />
          <GallerySection t={t} lang={lang} noHead />
        </>
      )}
    </PageShell>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<GalleryPage />);
