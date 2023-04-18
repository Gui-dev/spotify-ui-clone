import Link from "next/link"
import { Play } from 'lucide-react'
import Image from "next/image"

export const MadeFor = () => {
  return (
    <>
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
    </>
  )
}
