import Link from "next/link"
import { Heart, Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react'
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex items-center justify-between px-6 py-4 w-full bg-zinc-900 border-t border-zinc-700 z-10">
      <div className="flex items-center gap-3">
        <Image
          src="/album.jpeg"
          alt="Capa do album Black Sabbath 13"
          width={56}
          height={56}
        />
        <div className="flex flex-col">
          <strong className="font-normal">Black Sabbath</strong>
          <Link href="/" className="text-xs text-zinc-400">Black Sabbath</Link>
        </div>
        <button className="ml-1">
          <Heart />
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <button type="button">
            <Shuffle size={20} />
          </button>
          <button type="button">
            <SkipBack size={20} />
          </button>
          <button
            type="button"
            className="flex items-center justify-center text-black p-1 bg-white rounded-full"
          >
            <Play size={22} className="pl-1" />
          </button>
          <button type="button">
            <SkipForward size={20} />
          </button>
          <button type="button">
            <Repeat size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">3:31</span>
          <div className="h-1 w-96 bg-zinc-600 rounded-full">
            <div className="h-1 w-40 rounded-full bg-zinc-200" />
          </div>
          <span className="text-xs text-zinc-400">6:21</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button type="button">
          <Mic2 size={20} />
        </button>
        <button type="button">
          <LayoutList size={20} />
        </button>
        <button type="button">
          <Laptop2 size={20} />
        </button>

        <div className="flex items-center gap-2">
          <button type="button">
            <Volume size={20} />
          </button>
          <div className="h-1 w-24 bg-zinc-600 rounded-full">
            <div className="h-1 w-10 rounded-full bg-zinc-200" />
          </div>
        </div>
        <button type="button">
          <Maximize2 size={20} />
        </button>
      </div>
    </footer>
  )
}
