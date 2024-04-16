import { X } from "lucide-react";
import { useRef } from "react";

export default function VideoPopup({ onClose }) {
  const modelRef = useRef();

  let closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="flex flex-col gap-5 text-white">
        <button onClick={onClose} className=" place-self-end">
          <X />
        </button>
      </div>
    </div>
  );
}
