import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from "next/image"
import { Menu } from "@/components/Menu"

export default function Home () {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">

        <Menu />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-black/40 rounded-full p-1"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="bg-black/40 rounded-full p-1"
            >
              <ChevronRight />
            </button>
          </div>
          <h1 className="text-3xl font-semibold mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <Link href="/" className="flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
              <Image src="/album.jpeg" alt="Capa do album Black Sabbath 13" width={104} height={104} />
              <strong>This is Black Sabbath</strong>
              <button
                type="button"
                className="flex items-center justify-center text-black mr-4 ml-auto p-2 bg-green-400 rounded-full invisible group-hover:visible"
              >
                <Play />
              </button>
            </Link>
            <Link href="/" className="flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
              <Image src="/album.jpeg" alt="Capa do album Black Sabbath 13" width={104} height={104} />
              <strong>This is Black Sabbath</strong>
              <button
                type="button"
                className="flex items-center justify-center text-black mr-4 ml-auto p-2 bg-green-400 rounded-full invisible group-hover:visible"
              >
                <Play />
              </button>
            </Link>
            <Link href="/" className="flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
              <Image src="/album.jpeg" alt="Capa do album Black Sabbath 13" width={104} height={104} />
              <strong>This is Black Sabbath</strong>
              <button
                type="button"
                className="flex items-center justify-center text-black mr-4 ml-auto p-2 bg-green-400 rounded-full invisible group-hover:visible"
              >
                <Play />
              </button>
            </Link>
            <Link href="/" className="flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
              <Image src="/album.jpeg" alt="Capa do album Black Sabbath 13" width={104} height={104} />
              <strong>This is Black Sabbath</strong>
              <button
                type="button"
                className="flex items-center justify-center text-black mr-4 ml-auto p-2 bg-green-400 rounded-full invisible group-hover:visible"
              >
                <Play />
              </button>
            </Link>
            <Link href="/" className="flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
              <Image src="/album.jpeg" alt="Capa do album Black Sabbath 13" width={104} height={104} />
              <strong>This is Black Sabbath</strong>
              <button
                type="button"
                className="flex items-center justify-center text-black mr-4 ml-auto p-2 bg-green-400 rounded-full invisible group-hover:visible"
              >
                <Play />
              </button>
            </Link>
            <Link href="/" className="flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
              <Image src="/album.jpeg" alt="Capa do album Black Sabbath 13" width={104} height={104} />
              <strong>This is Black Sabbath</strong>
              <button
                type="button"
                className="flex items-center justify-center text-black mr-4 ml-auto p-2 bg-green-400 rounded-full invisible group-hover:visible"
              >
                <Play />
              </button>
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mt-10">Made for Gui Silva</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <Link href="/" className="flex flex-col gap-2 p-3 bg-white/5 rounded-md hover:bg-white/10">
              <Image
                src="/album.jpeg"
                alt="Capa do album Black Sabbath 13"
                width={104}
                height={104}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Sepultura, Metallica and more</span>
            </Link>
            <Link href="/" className="flex flex-col gap-2 p-3 bg-white/5 rounded-md hover:bg-white/10">
              <Image
                src="/album.jpeg"
                alt="Capa do album Black Sabbath 13"
                width={104}
                height={104}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Sepultura, Metallica and more</span>
            </Link>
            <Link href="/" className="flex flex-col gap-2 p-3 bg-white/5 rounded-md hover:bg-white/10">
              <Image
                src="/album.jpeg"
                alt="Capa do album Black Sabbath 13"
                width={104}
                height={104}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Sepultura, Metallica and more</span>
            </Link>
            <Link href="/" className="flex flex-col gap-2 p-3 bg-white/5 rounded-md hover:bg-white/10">
              <Image
                src="/album.jpeg"
                alt="Capa do album Black Sabbath 13"
                width={104}
                height={104}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Sepultura, Metallica and more</span>
            </Link>
            <Link href="/" className="flex flex-col gap-2 p-3 bg-white/5 rounded-md hover:bg-white/10">
              <Image
                src="/album.jpeg"
                alt="Capa do album Black Sabbath 13"
                width={104}
                height={104}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Sepultura, Metallica and more</span>
            </Link>
          </div>

        </main>
      </div>

      <footer className="p-6 bg-zinc-800 border-t border-zinc-700 z-10">
        footer
      </footer>
    </div>
  )
}
