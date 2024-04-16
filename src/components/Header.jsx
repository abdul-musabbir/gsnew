import { AlignJustify } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import DropDown from "../utils/DropDown";
export default function Header() {
  const [drop, setDrop] = useState(false);
  return (
    <div className="h-20 bg-white shadow-xl w-full flex items-center fixed left-0 top-0 z-50">
      <div className=" flex mx-auto w-11/12 items-center justify-between">
        <div>
          <img
            src={Logo}
            alt=""
            className=" w-48"
            style={{
              fill: "white",
            }}
          />
        </div>

        <div className="flex">
          <button onClick={() => setDrop(!drop)}>
            <AlignJustify size={40} strokeWidth={3} />
          </button>
        </div>
      </div>
      {drop && <DropDown onClose={() => setDrop(!drop)} />}
    </div>
  );
}
