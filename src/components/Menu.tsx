import Link from "next/link"
import { Home as HomeIcon, Library, Search } from 'lucide-react'

export const Menu = () => {
  return (
    <aside className="p-6 w-72 bg-zinc-950 overflow-auto">
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

      <nav className="flex flex-col gap-3 pt-6 mb-20 mt-6 border-t border-zinc-800">
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
        <Link href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-100">
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
        </Link>
      </nav>

    </aside>
  )
}
