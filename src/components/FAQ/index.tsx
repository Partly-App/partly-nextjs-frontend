import Link from "next/link"
import Accordion from "../shared/Accordion"
import Footer from "../shared/Footer"
import QUESTIONS from "./questions.json"
import clsx from "clsx"

const FAQPageContent = () => {
  return (
    <>
      <main className="bg-black-light pb-6 pt-32">
        <section className="mx-auto max-w-160 px-8">
          <h1 className="mb-8 text-center font-montserratAlt text-8xl font-black leading-[1.2] sm:text-16xl">
            Got questions?
          </h1>
          <Accordion items={QUESTIONS} />
          <span className="my-5 block text-center font-montserratAlt text-4xl font-black opacity-25">
            More questions?
          </span>
          <Link
            href="mailto:partlyapp@hotmail.com"
            className={clsx(
              "mx-auto block w-40 rounded-xl bg-white-mellow px-6 py-4 text-center font-medium text-black-default",
              "transition-transform hover:scale-[0.98] duration-300",
            )}
          >
            Contact us
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default FAQPageContent
