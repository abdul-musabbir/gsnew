import React from "react";
import CounterUp from "../utils/CounterUp";
export default function Counter() {
  return (
    <div className="my-16 bg-black text-white py-10">
      <div className="flex mx-auto w-11/12 items-center">
        <div className="flex w-full justify-center">
          <CounterUp />
        </div>
      </div>
    </div>
  );
}
