import Header from "../shared/Header"
import StatsRow from "./StatsRow"
import HeroSection from "./hero/HeroSection"
import SctructureShowcase from "./structureShowcase"

const HomePageContent = () => {
  return (
    <main className="relative h-full w-full overflow-x-hidden bg-black-light px-8 py-6">
      <Header />
      <HeroSection />
      <StatsRow />
      <SctructureShowcase />
    </main>
  )
}

export default HomePageContent
