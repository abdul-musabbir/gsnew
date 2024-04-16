import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function CounterUp() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="flex flex-col gap-16 text-center justify-center w-full">
        <div className="flex flex-col">
          <span className="font-bold text-5xl">
            {counterOn && (
              <CountUp start={1} end={387} duration={2} delay={0} />
            )}{" "}
            +
          </span>
          <span>Completed Projects</span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-5xl">
            {counterOn && (
              <CountUp start={1} end={387} duration={2} delay={0} />
            )}
            +
          </span>
          <span>Total Design</span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-5xl">
            {counterOn && (
              <CountUp start={1} end={387} duration={2} delay={0} />
            )}
            +
          </span>
          <span>Repeat Buyer</span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-5xl">
            {counterOn && (
              <CountUp start={1} end={387} duration={2} delay={0} />
            )}
            K+
          </span>
          <span>Total Hours</span>
        </div>
      </div>
    </ScrollTrigger>
  );
}
