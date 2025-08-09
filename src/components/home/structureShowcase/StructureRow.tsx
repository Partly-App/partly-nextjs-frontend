"use client"

import clsx from "clsx"
import Image from "next/image"
import { ReactNode, useEffect, useRef, useState } from "react"

type StructureRowProps = {
  index: number
  textContent: ReactNode
  children: ReactNode
}

const StructureRow = ({ index, textContent, children }: StructureRowProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative pt-4">
      <div className="flex items-stretch gap-12">
        <div className="flex h-[520px] w-8 flex-col items-center justify-between pt-6">
          <div
            ref={ref}
            className={clsx(
              "flex h-12 w-12 items-center justify-center rounded-full",
              "transition-colors duration-700 ease-out",
              isVisible ? "bg-green-default" : "bg-white-default/25",
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <Image
              alt=""
              src="/images/icons/check.svg"
              width={28}
              height={28}
              className={clsx(
                "transition-opacity duration-700 ease-out",
                isVisible ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDelay: "750ms" }}
            />
          </div>
          {Array.from({ length: 7 })
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 rounded-full bg-white-default/25"
              />
            ))}
        </div>

        <div className="flex flex-1 justify-between gap-12">
          <div>
            <span className="mb-4 block font-montserratAlt text-19xl font-black opacity-25">
              {index}.
            </span>
            {textContent}
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}

export default StructureRow
