import clsx from "clsx"
import { ReactNode } from "react"

const Stat = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="font-montserratAlt text-19xl font-black leading-[1] text-purple-light md:text-15xl lg:text-19xl">
      {children}
    </h2>
  )
}

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="font-montserratAlt text-10xl font-black leading-[1] md:text-8xl lg:text-14xl">
      {children}
    </h3>
  )
}

const StatsRow = () => {
  return (
    <section
      className={clsx(
        "flex w-full flex-col items-center justify-evenly gap-14",
        "md:flex-row md:items-baseline md:gap-6",
      )}
    >
      <div className="flex flex-1 flex-col justify-center gap-2 text-center md:gap-4">
        <Stat>3</Stat>
        <Header>Journeys</Header>
        <span>Confidence, Anxiety and Anger</span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 text-center md:gap-4">
        <Stat>+75</Stat>
        <Header>Lessons</Header>
        <span>
          We call them{" "}
          <span className="font-montserratAlt font-black text-yellow-default">
            moments
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 text-center md:gap-4">
        <Stat>+600</Stat>
        <Header>Scenarios</Header>
        <span>To help you reflect, understand and grow</span>
      </div>
    </section>
  )
}

export default StatsRow
