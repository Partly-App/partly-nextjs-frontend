import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

const AppStoreCTA = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={clsx(
        "flex h-fit w-40 items-center justify-center",
        className,
      )}
    >
      <Image
        src="/images/app-store.webp"
        alt="Download on AppStore"
        width={240}
        height={32}
        className="pointer-events-none select-none"
      />
    </Link>
  )
}

export default AppStoreCTA
