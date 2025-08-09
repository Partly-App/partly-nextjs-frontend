import Marquee from "react-fast-marquee"
import Testimonial from "./Testimonial"

import TESTIMONIALS_DATA from "./data.json"

const Testimonials = () => {
  return (
    <section className="py-12">
      <h2 className="mx-auto mb-12 text-center font-montserratAlt text-12xl font-black">
        What people say <br />
        about{" "}
        <span
          style={{ textShadow: "0px 0px 7px #FFF7DF" }}
          className="mb-2 select-none text-yellow-light"
        >
          Partly
        </span>
      </h2>
      <Marquee speed={25} loop={0}>
        {TESTIMONIALS_DATA.map((item) => (
          <Testimonial
            key={item.name}
            name={item.name}
            position={item.position}
            review={item.review}
          />
        ))}
      </Marquee>
    </section>
  )
}

export default Testimonials
