import './globals.css'

export const metadata = {
  title: 'Spotify UI Clone',
  description: 'Listen to music.',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-zinc-50 bg-zinc-800">{children}</body>
    </html>
  )
}
