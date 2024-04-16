import { MoveRightIcon } from "lucide-react";
import React from "react";
import Planner from "../assets/planner.jpg";
export default function Portfolio() {
  return (
    <div className="mb-10">
      <div className="flex mx-auto flex-col w-11/12">
        <h2 className=" text-center font-bold text-3xl">PortFolio</h2>

        <div className="mt-14">
          <div className="w-full h-[28rem] flex relative rounded-3xl porimg">
            <img
              src={Planner}
              alt=""
              className="w-full h-full rounded-3xl object-cover object-center"
            />

            <div className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center bottom-5 right-5">
              <MoveRightIcon
                strokeWidth={3}
                className="arrow transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
