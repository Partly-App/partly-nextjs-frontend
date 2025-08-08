import Header from "../shared/Header"
import StatsRow from "./StatsRow"
import HeroSection from "./hero/HeroSection"

const HomePageContent = () => {
  return (
    <main className="relative h-full w-full bg-black-light px-8 py-6">
      <Header />
      <HeroSection />
      <StatsRow />
    </main>
  )
}

export default HomePageContent
