"use client"

import AppearAnimated from "@/components/shared/AppearAnimated"
import Moment from "@/components/shared/Moment"
import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import StructureRow from "./StructureRow"

const SCREENSHOTS = [
  "/images/chat.webp",
  "/images/reflect.webp",
  "/images/grow.webp",
]

const SctructureShowcase = () => {
  const [selected, setSelected] = useState(1)
  const [currentPhoto, setCurrentPhoto] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev === 2 ? 0 : prev + 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-24">
      <StructureRow
        index={1}
        textContent={
          <>
            <h3 className="mb-4 flex-wrap font-montserratAlt text-12xl font-bold leading-[1]">
              Choose your{" "}
              <span className="font-black text-purple-light">Journey</span>
            </h3>
            <p className="">
              Get more{" "}
              <span className="font-montserratAlt font-black text-blue-default">
                Confident
              </span>{" "}
              <br />
              Lower your{" "}
              <span className="font-montserratAlt font-black text-purple-default">
                Anxiety
              </span>{" "}
              <br />
              or control your{" "}
              <span className="font-montserratAlt font-black text-red-default">
                Anger
              </span>
            </p>
          </>
        }
      >
        <div className="relative flex-1">
          <AppearAnimated
            slide={false}
            className={clsx(
              "absolute right-[40%] top-0",
              selected === 1 && "z-[3]",
            )}
            delay={100}
          >
            <Image
              draggable={false}
              src="/images/journeys/confidence.webp"
              width={192}
              height={192}
              className={clsx(
                "-rotate-12 rounded-2xl",
                "border-4 transition-colors",
                selected === 1 ? "border-green-default" : "border-transparent",
              )}
              onClick={() => setSelected(1)}
              alt=""
            />
          </AppearAnimated>
          <AppearAnimated
            slide={false}
            className={clsx(
              "absolute right-[20%] top-[28%] z-[2]",
              selected === 2 && "z-[3]",
            )}
            delay={300}
          >
            <Image
              draggable={false}
              src="/images/journeys/anxiety.webp"
              width={192}
              height={192}
              className={clsx(
                "rounded-2xl",
                "border-4 transition-colors",
                selected === 2 ? "border-green-default" : "border-transparent",
              )}
              onClick={() => setSelected(2)}
              alt=""
            />
          </AppearAnimated>
          <AppearAnimated
            slide={false}
            className={clsx(
              "absolute left-0 top-[42%] z-[1] lg:left-[5%] xl:left-[20%] 2xl:left-[35%]",
              selected === 3 && "z-[3]",
            )}
            delay={750}
          >
            <Image
              draggable={false}
              src="/images/journeys/anger.webp"
              width={192}
              height={192}
              className={clsx(
                "rotate-6 rounded-2xl",
                "border-4 transition-colors",
                selected === 3 ? "border-green-default" : "border-transparent",
              )}
              onClick={() => setSelected(3)}
              alt=""
            />
          </AppearAnimated>
        </div>
      </StructureRow>

      <StructureRow
        index={2}
        textContent={
          <>
            <h3 className="mb-4 flex-wrap font-montserratAlt text-12xl font-bold leading-[1]">
              Explore{" "}
              <span className="font-black text-yellow-default">Moments</span>
            </h3>
            <p className="">
              With{" "}
              <span className="font-montserratAlt font-bold text-blue-light">
                guided
              </span>{" "}
              steps &{" "}
              <span className="font-montserratAlt font-bold text-blue-light">
                personal
              </span>{" "}
              insights
            </p>
          </>
        }
      >
        <div className="relative flex flex-1 justify-center">
          <div className="absolute">
            <AppearAnimated delay={100}>
              <Moment
                tag="reflection"
                title="Acknowledging Effort"
                description="Recognize that staying busy is a way you try to manage discomfort or stress"
                imgSrc="https://vddlwdnrmeixsllizovo.supabase.co/storage/v1/object/public/moment-covers//acknowledging-effort.webp"
              />
            </AppearAnimated>
          </div>
          <div className="absolute top-28 scale-[0.97]">
            <AppearAnimated delay={750}>
              <Moment
                tag="manager"
                title="Hyper-Alert"
                description="Meet the part that’s always scanning for threats, keeping you on guard"
                imgSrc="https://vddlwdnrmeixsllizovo.supabase.co/storage/v1/object/public/moment-covers//hyper-alert.webp"
              />
            </AppearAnimated>
          </div>
          <div className="absolute top-56 scale-[0.94]">
            <AppearAnimated delay={1500}>
              <Moment
                tag="exile"
                title="The Old Longing"
                description="Sense a younger part that learned love or safety depended on pleasing others"
                imgSrc="https://vddlwdnrmeixsllizovo.supabase.co/storage/v1/object/public/moment-covers//the-old-longing.webp"
              />
            </AppearAnimated>
          </div>
        </div>
      </StructureRow>

      <StructureRow
        index={3}
        textContent={
          <>
            <h3 className="mb-4 flex-wrap font-montserratAlt text-12xl font-bold leading-[1]">
              Reflect, Chat,{" "}
              <span className="font-black text-green-default">Grow</span>
            </h3>
            <p className="">
              All in one app <br />
              Which guides you through{" "}
              <span className="font-montserratAlt font-bold text-purple-light">
                your patterns and emotions
              </span>
            </p>
          </>
        }
      >
        <div className="relative flex flex-1 items-center justify-center">
          <AppearAnimated delay={500} slideFrom="right">
            <Image
              alt="iPhone mockup"
              src={SCREENSHOTS[currentPhoto]}
              height={720}
              width={720}
              sizes="100vh"
              className="pointer-events-none relative z-[2] h-[520px] object-contain"
            />
          </AppearAnimated>
        </div>
      </StructureRow>
    </section>
  )
}

export default SctructureShowcase
