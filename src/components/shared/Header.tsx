"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="fixed left-0 right-0 top-6 z-20 px-4">
      <div className="flex w-full items-center justify-between rounded-2xl bg-grey-dark py-3 pl-3 pr-4">
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" })
            router.push("/")
          }}
        >
          <Image
            src="/images/logo-transparent.webp"
            alt=""
            width={52}
            height={52}
            className="pointer-events-none -mt-2"
          />
          <span
            className={clsx(
              "select-none bg-transparent font-montserratAlt text-xl font-black xs:text-4xl",
              "text-yellow-light",
            )}
            style={{ textShadow: "0px 0px 2px #FFF7DF" }}
          >
            Partly
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/faq"
            className={clsx(
              "font-montserratAlt font-bold transition-opacity hover:opacity-100",
              pathname === "/faq"
                ? "text-yellow-light opacity-100"
                : "opacity-75",
            )}
          >
            FAQ
          </Link>
          <Link
            href="https://www.tiktok.com/@partly_app"
            target="_blank"
            className="font-montserratAlt font-bold opacity-75 transition-opacity hover:opacity-100"
          >
            TikTok
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
