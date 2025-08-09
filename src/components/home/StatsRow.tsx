const StatsRow = () => {
  return (
    <section className="flex w-full items-center justify-evenly gap-6">
      <div className="flex flex-1 flex-col justify-center gap-4 text-center">
        <h2 className="font-montserratAlt text-19xl font-black leading-[1] text-purple-light">
          3
        </h2>
        <h3 className="font-montserratAlt text-14xl font-black leading-[1]">
          Journeys
        </h3>
        <span>Confidence, Anxiety and Anger</span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-4 text-center">
        <h2 className="font-montserratAlt text-19xl font-black leading-[1] text-purple-light">
          +75
        </h2>
        <h3 className="font-montserratAlt text-14xl font-black leading-[1]">
          Lessons
        </h3>
        <span>
          We call them{" "}
          <span className="font-montserratAlt font-black text-yellow-default">
            moments
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-4 text-center">
        <h2 className="font-montserratAlt text-19xl font-black leading-[1] text-purple-light">
          +600
        </h2>
        <h3 className="font-montserratAlt text-14xl font-black leading-[1]">
          Scenarios
        </h3>
        <span>To help you reflect, understand and grow</span>
      </div>
    </section>
  )
}

export default StatsRow
