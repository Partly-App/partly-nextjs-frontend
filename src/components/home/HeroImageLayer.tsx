import clsx from "clsx"
import Image from "next/image"

const images = [
  {
    src: "/images/moments/a-breath-between-2.webp",
    className: "animate-float-3d-a left-12 top-1/4",
  },
  {
    src: "/images/moments/gentle-curiosity.webp",
    className:
      "animate-float-3d-b left-[20%] top-[15%]",
  },
  {
    src: "/images/moments/the-echo-of-regret.webp",
    className:
      "animate-float-3d-c right-[23%] top-[42%]",
  },
  {
    src: "/images/moments/the-old-fear.webp",
    className:
      "animate-float-3d-a right-[10%] top-3/4",
  },
  {
    src: "/images/moments/the-one-in-charge.webp",
    className:
      "animate-float-3d-b right-[4%] top-1/4",
  },
  {
    src: "/images/moments/the-peaceful-core.webp",
    className:
      "animate-float-3d-c left-[10%] top-[60%]",
  },
  {
    src: "/images/moments/the-stumble.webp",
    className:
      "animate-float-3d-c left-[30%] top-[80%]",
  },
]

const HeroImageLayer = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          width={64}
          height={64}
          objectFit="cover"
          alt=""
          className={clsx("blur-xs absolute rounded-xl", img.className)}
        />
      ))}
    </div>
  )
}

export default HeroImageLayer
