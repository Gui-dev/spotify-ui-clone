import { MadeFor } from "./MadeFor"
import { DailyMix } from "./DailyMix"
import { MainHeader } from "./MainHeader"

export const Main = () => {
  return (
    <main className="flex-1 p-6 mb-20">
      <MainHeader />
      <MadeFor />
      <DailyMix />
    </main>
  )
}
