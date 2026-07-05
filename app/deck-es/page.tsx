export const metadata = {
  title: 'Simpla — Deck Comercial',
  robots: { index: false, follow: false },
}

export default function DeckEsPage() {
  return (
    <iframe
      src="/deck-es.html"
      className="fixed inset-0 w-full h-full border-0"
      title="Simpla Deck Comercial"
      allowFullScreen
    />
  )
}
