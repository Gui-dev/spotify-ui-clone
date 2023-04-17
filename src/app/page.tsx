import Link from "next/link"
import { ChevronLeft, ChevronRight, Home as HomeIcon, Library, Search } from 'lucide-react'

export default function Home () {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <aside className="p-6 w-72 bg-zinc-950">
          <nav className="space-y-5">
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-zinc-400">
              <HomeIcon />
              Home
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-zinc-400">
              <Search />
              Search
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-zinc-400">
              <Library />
              Your Library
            </Link>
          </nav>

          <nav className="flex flex-col gap-3 pt-6 mt-6 border-t border-zinc-800">
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Black Sabbath
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Metallica
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Slayer
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is System of a Down
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Sepultura
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Aerosmith
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Ratos de Porão
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Krisium
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Brujeria
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Dead Fish
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Placebo
            </Link>
            {/* <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Iron Maiden
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Joy Division
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is The Smiths
            </Link>
            <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
              This is Linkin Park
            </Link> */}
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="w-6 h-6 bg-black/20 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="w-6 h-6 bg-black/20 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </main>
      </div>

      <footer className="p-6 bg-zinc-800 border-t border-zinc-700 z-10">
        footer
      </footer>
    </div>
  )
}
