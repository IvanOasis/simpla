export const metadata = {
  title: 'Simpla — Commercial Deck',
  robots: { index: false, follow: false },
}

export default function DeckPage() {
  return (
    <iframe
      src="/deck.html"
      className="fixed inset-0 w-full h-full border-0"
      title="Simpla Commercial Deck"
      allowFullScreen
    />
  )
}
