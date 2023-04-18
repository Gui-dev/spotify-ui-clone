import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export const MainHeader = () => {
  return (
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
  )
}
