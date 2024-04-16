import { Play } from "lucide-react";
import React, { useState } from "react";
import CoverLogo from "../assets/coverlogo.svg";
import Model from "../utils/Model";
export default function Hero() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div className="w-full h-screen flex items-center">
      <div className=" mx-auto flex w-11/12">
        <div className="flex flex-col gap-10">
          <div className=" order-1 flex items-center justify-center">
            <img
              src={CoverLogo}
              alt="cover image || graphic surface"
              className="w-[80%]"
            />
          </div>
          <div className=" order-2 flex flex-col gap-5">
            <h1 className="text-5xl font-bold leading-tight">
              We{" "}
              <span className=" bg-yellow-400 rounded-full px-5">Create</span> &
              market Digital Products
            </h1>

            <p className=" text-gray-600 font-semibold text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              distinctio!
            </p>

            <div className="flex gap-5 mt-2">
              <button className=" bg-black text-white px-6 py-3 rounded-2xl font-semibold">
                Get Quet
              </button>
              <button
                className="flex items-center gap-2 font-bold"
                onClick={() => setShowModel(!showModel)}
              >
                <Play />
                Watch ShowToo
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModel && <Model onClose={() => setShowModel(!showModel)} />}
    </div>
  );
}
