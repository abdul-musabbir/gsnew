import React from "react";
import AboutImage from "../assets/ab.webp";
export default function About() {
  return (
    <div>
      <div className="flex mx-auto w-11/12 flex-col">
        <h2 className="text-center my-10 text-3xl font-bold">About Us</h2>
        <div>
          <div>
            <div className=" order-1">
              <img src={AboutImage} className=" rounded-3xl w-full" alt="" />
            </div>

            <div className="flex flex-col items-start gap-5 mt-10">
              <h3 className=" text-2xl font-bold">
                Design & Develop For Better Solution
              </h3>
              <p className=" font-medium text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                amet posuere porta vitae mi accumsan. Ultricies mauris,
                habitasse nec mauris sagittis imperdiet lobortis porttitor.
                Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu
                porta morbi egesta ut hac rutrum ut augue vitae, nec, ut. Nibh
                nibh quam
              </p>

              <a
                href="#"
                className=" bg-blue-600 text-white text-lg px-6 py-3 rounded-2xl flex"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
