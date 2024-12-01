import React from "react";
import NoiseBG from "../assets/noisetxt.svg";
import Iconmaps from "../assets/icons/point.svg";

const Modal = ({
  isVisible,
  onClose,
  title,
  description,
  distances,
  imageUrl,
}) => {
  if (!isVisible) return null;

  // Fungsi untuk menangani klik di luar modal
  const handleOutsideClick = (event) => {
    // Cek apakah klik terjadi di luar modal
    if (event.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center -translate-y-2/3 justify-center bg-black bg-opacity-50 z-50 modal-overlay"
      onClick={handleOutsideClick} // Menambahkan event handler
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 md:w-1/2"
        style={{
          width: "1200px",
          height: "400px",
          backgroundImage: `url(${NoiseBG})`,
          border: "2px solid #FFFFFF",
        }}
      >
        <div className="flex h-full">
          {/* Kolom Foto */}
          <div className="flex-shrink-0">
            <img
              className="w-60 h-full object-cover rounded-lg"
              style={{ width: "600px", height: "350px" }}
              src={imageUrl}
              alt={title}
            />
          </div>
          {/* Kolom Informasi */}
          <div className="flex-grow p-4">
            <h2 className="text-xl text-white font-bold ml-2">{title}</h2>
            <p className="mt-2 text-neutral-500 text-base ml-2">
              {description}
            </p>
            <p className="mt-4 text-white font-semibold ml-2">
              <img
                src={Iconmaps}
                alt="Distance Icon"
                className="mr-2 w-5 h-5"
              />
              Distance from landmarks:
            </p>
            <ul className="list-none list-inside text-white ml-2">
              {distances.map((distance, index) => (
                <li key={index}>{distance}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
