"use client"

import clsx from "clsx"
import { ReactNode, useRef, useState } from "react"
import { ChevronDown } from "react-feather"

export type AccordionItem = {
  id: string | number
  question: string
  answer: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  allowMultipleOpen?: boolean
  className?: string
}

const Accordion = ({
  items,
  allowMultipleOpen = false,
  className = "",
}: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = (idx: number) => {
    setOpenIndexes((prev) => {
      if (allowMultipleOpen) {
        return prev.includes(idx)
          ? prev.filter((i) => i !== idx)
          : [...prev, idx]
      } else {
        return prev.includes(idx) ? [] : [idx]
      }
    })
  }

  return (
    <div className={clsx("w-full", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx)
        const contentHeight = contentRefs.current[idx]?.scrollHeight ?? 0

        return (
          <div
            key={item.id}
            className={clsx(
              "mb-3 rounded-xl transition-colors",
              isOpen ? "bg-purple-light" : "bg-white-mellow",
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-header-${item.id}`}
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-4 text-left transition-colors gap-4"
            >
              <span className="font-black text-black-default">
                {item.question}
              </span>
              <ChevronDown
                size={24}
                className={clsx(
                  "text-black-default transition-transform duration-500",
                  isOpen ? "rotate-180" : "rotate-0",
                )}
              />
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
              ref={(el) => {
                contentRefs.current[idx] = el
              }}
              style={{
                maxHeight: isOpen ? contentHeight : 0,
                opacity: isOpen ? 1 : 0,
                transition:
                  "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
              }}
              className={clsx("overflow-hidden", {
                "pointer-events-none": !isOpen,
              })}
            >
              <div className="px-4 pb-4 text-black-default">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
