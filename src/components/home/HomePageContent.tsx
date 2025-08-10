import Footer from "../shared/Footer"
import Header from "../shared/Header"
import StatsRow from "./StatsRow"
import HeroSection from "./hero/HeroSection"
import SctructureShowcase from "./structureShowcase"
import Testimonials from "./testimonials"

const HomePageContent = () => {
  return (
    <>
      <div className="relative h-full w-full overflow-x-hidden bg-black-light px-8 py-6">
        <Header />
        <HeroSection />
        <StatsRow />
        <SctructureShowcase />
      </div>
      <Testimonials />
      <Footer />
    </>
  )
}

export default HomePageContent
