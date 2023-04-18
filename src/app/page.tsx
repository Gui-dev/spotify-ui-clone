import { Menu } from "@/components/Menu"
import { Footer } from "@/components/Footer"
import { Main } from "@/components/Main"

export default function Home () {
  return (
    <div className="flex flex-col h-screen overflow-auto">
      <div className="flex flex-1">
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
