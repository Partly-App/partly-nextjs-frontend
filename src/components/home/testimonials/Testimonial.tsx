import Quotes from "@/components/shared/icons/Quotes"
import clsx from "clsx"

type TestimonialProps = {
  name: string
  position: string
  review: string
}

const Testimonial = ({ name, position, review }: TestimonialProps) => {
  return (
    <div
      className={clsx(
        "mx-4 h-full min-h-[280px] w-96 rounded-2xl bg-white-mellow p-4",
        "flex flex-col justify-between",
      )}
    >
      <div>
        <Quotes size={42} className="mb-4 fill-purple-default" />
        <p className="mb-3 leading-[1.25] text-black-default">{review}</p>
      </div>
      <div>
        <span className="inline-block w-full text-right font-medium text-black-default">
          {name}
        </span>
        <span className="inline-block w-full text-right font-medium text-black-default opacity-50">
          {position}
        </span>
      </div>
    </div>
  )
}

export default Testimonial
