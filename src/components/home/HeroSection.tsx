"use client"

import clsx from "clsx"
import Image from "next/image"
import AppStoreCTA from "../shared/AppStoreCTA"
import HeroImageLayer from "./HeroImageLayer"

const HeroSection = () => {
  return (
    <>
      <HeroImageLayer />
      <div className="relative z-[5] flex min-h-screen w-full flex-col items-center justify-center">
        <div className="animate-appear pointer-events-none relative aspect-square w-64 opacity-0 [animation-delay:1s]">
          <Image
            width={240}
            height={240}
            src="/images/fall-3.webp"
            alt=""
            className="absolute top-0 animate-bounceSlow select-none object-contain [animation-delay:0.4s]"
          />
          <Image
            width={240}
            height={240}
            src="/images/fall-2.webp"
            alt=""
            className="absolute top-[-32px] animate-bounceSlow select-none object-contain [animation-delay:0.6s]"
          />
          <Image
            width={240}
            height={240}
            src="/images/fall-1.webp"
            alt=""
            className="absolute top-[-64px] animate-bounceSlow select-none object-contain [animation-delay:0.8s]"
          />
        </div>
        <h1
          style={{ textShadow: "0px 0px 10px #FFF7DF" }}
          className={clsx(
            "animate-appear font-montserratAlt select-none text-19xl font-black text-yellow-light",
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
        <AppStoreCTA className="mt-10" />
      </div>
    </>
  )
}

export default HeroSection
