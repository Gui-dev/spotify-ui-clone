import Link from "next/link"
import Image from "next/image"

export const DailyMix = () => {
  return (
    <>
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
    </>
  )
}
