import clsx from "clsx"
import Image from "next/image"

const AnimatedLogo = ({
  size,
  withAppear = true,
}: {
  size: number
  withAppear?: boolean
}) => {
  return (
    <div
      className={clsx(
        "pointer-events-none relative aspect-square w-48",
        withAppear && "animate-appear opacity-0 [animation-delay:1s]",
      )}
    >
      <Image
        width={size}
        height={size}
        src="/images/fall-3.webp"
        alt=""
        className="absolute top-0 animate-bounceSlow select-none object-contain [animation-delay:0.4s]"
      />
      <Image
        width={size}
        height={size}
        src="/images/fall-2.webp"
        alt=""
        className="absolute top-[-32px] animate-bounceSlow select-none object-contain [animation-delay:0.6s]"
      />
      <Image
        width={size}
        height={size}
        src="/images/fall-1.webp"
        alt=""
        className="absolute top-[-64px] animate-bounceSlow select-none object-contain [animation-delay:0.8s]"
      />
    </div>
  )
}

export default AnimatedLogo
