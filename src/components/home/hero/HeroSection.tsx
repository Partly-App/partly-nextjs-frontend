"use client"

import AnimatedLogo from "@/components/shared/AnimatedLogo"
import clsx from "clsx"
import AppStoreCTA from "../../shared/AppStoreCTA"
import HeroImageLayer from "./HeroImageLayer"

const HeroSection = () => {
  return (
    <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center">
      <HeroImageLayer />
      <AnimatedLogo size={192} />
      <h1
        style={{ textShadow: "0px 0px 10px #FFF7DF" }}
        className={clsx(
          "animate-appear select-none font-montserratAlt text-19xl font-black text-yellow-light",
          "mb-2",
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
      <AppStoreCTA className="z-[5] mt-10" />
    </div>
  )
}

export default HeroSection
