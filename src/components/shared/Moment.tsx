import { Tag } from "@/types/Moment"
import clsx from "clsx"
import Image from "next/image"

export type MomentProps = {
  title: string
  description: string
  imgSrc: string
  tag: Tag
  className?: string
}

const momentMap: Record<
  Tag,
  {
    bgColor: string
    color: string
    tagBg?: string
    tagText?: string
    tagTextColor?: string
    tagIconSrc?: string
  }
> = {
  exile: {
    bgColor: "bg-purple-light",
    color: "text-black-default",
    tagBg: "bg-black-default",
    tagText: "Exile",
    tagTextColor: "text-white-default",
    tagIconSrc: "/images/icons/moment/exile.svg",
  },
  manager: {
    bgColor: "bg-blue-light",
    color: "text-black-default",
    tagBg: "bg-black-default",
    tagText: "Manager",
    tagTextColor: "text-white-default",
    tagIconSrc: "/images/icons/moment/manager.svg",
  },
  firefighter: {
    bgColor: "bg-red-light",
    color: "text-black-default",
    tagBg: "bg-black-default",
    tagText: "Firefighter",
    tagTextColor: "text-white-default",
    tagIconSrc: "/images/icons/moment/firefighter.svg",
  },
  self: {
    bgColor: "bg-yellow-light",
    color: "text-black-default",
    tagBg: "bg-black-default",
    tagText: "Self",
    tagTextColor: "text-white-default",
    tagIconSrc: "/images/icons/moment/self.png",
  },
  reflection: {
    bgColor: "bg-white-mellow",
    color: "text-black-default",
  },
  regular: {
    bgColor: "bg-grey-dark",
    color: "text-white-default",
  },
}

const Moment = ({
  title,
  description,
  tag,
  imgSrc,
  className,
}: MomentProps) => {
  return (
    <div
      className={clsx(
        "flex max-w-[460px] justify-between gap-8 rounded-2xl p-4",
        momentMap[tag].bgColor,
        className,
      )}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h5
            className={clsx(
              "mb-2 font-montserratAlt text-2xl font-bold leading-7",
              momentMap[tag].color,
            )}
          >
            {title}
          </h5>
          <p className={clsx("text-sm leading-[1.25]", momentMap[tag].color)}>
            {description}
          </p>
        </div>

        {momentMap[tag].tagIconSrc && (
          <div className="flex w-fit items-center gap-2 rounded-xl bg-black-default px-3 py-2">
            <Image
              draggable={false}
              alt=""
              src={momentMap[tag].tagIconSrc as string}
              width={16}
              height={16}
              className="select-none"
            />
            <span className="text-xs font-medium">
              {momentMap[tag].tagText}
            </span>
          </div>
        )}
      </div>

      <Image
        draggable={false}
        alt=""
        src={imgSrc}
        width={140}
        height={140}
        className="select-none rounded-2xl"
      />
    </div>
  )
}

export default Moment
