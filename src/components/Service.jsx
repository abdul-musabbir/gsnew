import React from "react";
import Graphic from "../assets/graphic.svg";
export default function Service() {
  return (
    <div className="mb-10">
      <div className="flex mx-auto w-11/12 flex-col">
        <div className="mt-5 mb-10">
          <h2 className=" text-center font-bold text-3xl">Our Service</h2>
        </div>

        <div>
          <div className="flex flex-col gap-8 bg-black text-white py-10 px-4 rounded-3xl">
            {data.map((res) => {
              return (
                <div key={res.key} className="flex gap-4 items-center">
                  <div className=" bg-purple-600 p-3 rounded-2xl flex items-center justify-center">
                    <img src={res.url} className="w-28" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{res.title}</h3>
                    <p>{res.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    key: 1,
    title: "Graphic Design",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vel?",
    url: Graphic,
  },
  {
    key: 2,
    title: "Web Development",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vel?",
    url: Graphic,
  },
  {
    key: 3,
    title: "SEO",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vel?",
    url: Graphic,
  },
  {
    key: 4,
    title: "Digital Marketing",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vel?",
    url: Graphic,
  },
  {
    key: 5,
    title: "3D Modelling",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vel?",
    url: Graphic,
  },
  {
    key: 6,
    title: "Etsy, Amazon and More",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vel?",
    url: Graphic,
  },
];
