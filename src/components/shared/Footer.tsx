import AnimatedLogo from "./AnimatedLogo"
import AppStoreCTA from "./AppStoreCTA"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center px-8 pt-16">
      <h2 className="mb-16 text-center font-montserratAlt text-10xl font-black leading-[1.1]">
        Ready to feel <br />
        <span className="text-19xl text-green-default">Better</span>
        <span className="text-19xl">?</span>
      </h2>

      <div className="flex flex-col items-center justify-center">
        <AnimatedLogo withAppear={false} size={192} />
      </div>

      <div className="mx-auto mb-6">
        <p className="text-center">
          Download{" "}
          <span className="font-montserratAlt font-black text-yellow-light">
            Partly
          </span>{" "}
          and begin your journey toward emotional <br />
          <span className="font-blaack font-montserratAlt text-10xl font-black opacity-25">
            freedom
          </span>
        </p>
      </div>

      <div className="relative h-96 gap-8 overflow-hidden pb-16">
        <AppStoreCTA className="absolute left-1/2 top-[5%] animate-float-3d-a" />
        <AppStoreCTA className="absolute left-[5%] top-[15%] animate-float-3d-b [animation-delay:0.2s]" />
        <AppStoreCTA className="absolute left-[35%] top-[25%] animate-float-3d-c [animation-delay:0.4s]" />
        <AppStoreCTA className="absolute right-[11%] top-[10%] animate-float-3d-a [animation-delay:0.6s]" />
        <AppStoreCTA className="absolute right-[30%] top-[40%] animate-float-3d-b blur-[0.5px] [animation-delay:0.3s]" />
        <AppStoreCTA className="absolute left-[15%] top-[50%] animate-float-3d-c blur-[1px]" />
        <AppStoreCTA className="absolute right-[3%] top-[55%] animate-float-3d-a blur-xs [animation-delay:0.3s]" />
        <AppStoreCTA className="absolute left-[1%] top-[75%] animate-float-3d-b blur-xs [animation-delay:0.1s]" />
        <AppStoreCTA className="absolute left-[40%] top-[65%] animate-float-3d-c blur-xs [animation-delay:0.5s]" />
        <AppStoreCTA className="absolute right-[25%] top-[75%] animate-float-3d-a blur-xs" />
        <AppStoreCTA className="absolute left-[25%] top-[90%] animate-float-3d-b blur-xs" />

        <div className="pointer-events-none absolute bottom-0 h-full w-full bg-gradient-to-t from-black-light to-transparent" />
      </div>
    </footer>
  )
}

export default Footer
