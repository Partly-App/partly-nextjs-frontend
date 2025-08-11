"use client"

import AnimatedLogo from "@/components/shared/AnimatedLogo"
import clsx from "clsx"
import AppStoreCTA from "../../shared/AppStoreCTA"
import HeroImageLayer from "./HeroImageLayer"

const HeroSection = () => {
  return (
    <div className="relative flex min-h-[90vh] sm:min-h-[80vh] w-full flex-col items-center justify-center">
      <HeroImageLayer />
      <div className="relative z-[5] flex flex-col items-center">
        <AnimatedLogo size={192} />

        <div className="flex flex-col justify-center rounded-2xl bg-black-light/50 px-6 py-2 backdrop-blur-sm">
          <h1
            style={{ textShadow: "0px 0px 10px #FFF7DF" }}
            className={clsx(
              "mb-2 animate-appear select-none font-montserratAlt text-19xl font-black text-yellow-light",
            )}
          >
            Partly
          </h1>
          <span className="text-center">
            Learn why you feel what you feel <br /> and{" "}
            <span className="font-bold text-purple-default">
              what to do about it
            </span>
            .
          </span>
        </div>
        <AppStoreCTA className="mt-10" />
      </div>
    </div>
  )
}

export default HeroSection
