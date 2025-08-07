"use client"

import clsx from "clsx"
import Image from "next/image"

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-6 z-20 px-4">
      <div className="w-full rounded-2xl bg-grey-dark px-3 py-3">
        <div
          className="flex items-center gap-3"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/images/logo-transparent.webp"
            alt=""
            width={52}
            height={52}
            className="-mt-2"
          />
          <span
            className={clsx(
              "font-montserratAlt select-none bg-transparent text-4xl font-black",
              "text-yellow-light",
            )}
            style={{ textShadow: "0px 0px 2px #FFF7DF" }}
          >
            Partly
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
