import React, { useState } from "react";
import backgroundImage from "../assets/milkyway.png";
import UenoPark from "../assets/uenoPark.svg";
import KiyosumiGarden from "../assets/kiyosumiGarden.svg";
import ShowaKinen from "../assets/showaKinen.svg";
import MtFuji from "../assets/mtFuji.svg";
import FujiDark from "../assets/fujidark.svg";
import ThumbnailImage from "../assets/thumbnail.jpeg";
import NoiseBG from "../assets/noisetxt.svg";
import CultureVideo from "../assets/culturevideo2.mp4";
import IconClose from "../assets/icons/iconclose.svg";
import Iconmaps from "../assets/icons/point.svg";

const HomePageDark = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const videoId = "WLIv7HnZ_fE"; // Ganti dengan ID video YouTube jika diperlukan
  const videoSource = "../assets/culturevideo"; // Ganti dengan path video lokal atau URL video

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleModalOpen = (modal) => {
    setActiveModal(modal);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  const modalData = {
    UenoPark: {
      title: "Ueno Park",
      description:
        "Ueno Park is one of Tokyo's largest and most famous parks, known for cherry blossoms, cultural sites, and the Tokyo National Museum. It’s a popular spot for relaxation, with Shinobazu Pond and Japan's oldest zoo.",
      distances: ["Tokyo Station - 5 km", "Tokyo Tower - 10 km"],
      imageUrl: UenoPark,
    },
    KiyosumiGarden: {
      title: "Kiyosumi Garden",
      description:
        "The grounds of Kiyosumi Garden (清澄庭園, Kiyosumi Teien) were originally the residence of an Edo era merchant and eventually changed ownership to a feudal lord who turned them into a garden. During the Meiji Period, the founder of Mitsubishi bought the garden to entertain his guests. It was donated to the city and opened to the public in 1932.",
      distances: ["Tokyo Station - 5 km", "Tokyo Tower - 8 km"],
      imageUrl: KiyosumiGarden,
    },
    ShowaKinen: {
      title: "Showa Kinen Park",
      description:
        "Showa Kinen Park is a large park with beautiful flower gardens, walking paths, and recreational areas. Showa Kinen Park in Tokyo's Tachikawa area is so vast that exploring it all would take an entire day on foot. The park is known for the many kinds of flowers that carpet its grounds throughout the year. Its rows of ginkgo trees are also a beloved fall sightseeing spot.",
      distances: ["Tokyo Station - 10 km", "Tokyo Tower - 12 km"],
      imageUrl: ShowaKinen,
    },
    MtFuji: {
      title: "Mt. Fuji",
      description:
        "Mt. Fuji is Japan's iconic mountain, known for its symmetrical cone and beautiful views. Standing at 3,776 meters, Mt. Fuji is the tallest peak in Japan, the result of volcanic activity that began approximately 100,000 years ago.",
      distances: ["Tokyo Station - 100 km", "Tokyo Tower - 110 km"],
      imageUrl: MtFuji,
    },
  };

  return (
    <div
      className="bg-black "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        minHeight: "310vh",
      }}
    >
      {/* text nature */}
      <div className="flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-72 ">
        <div
          className="font-figtree font-bold"
          style={{
            fontSize: "14rem",
            backgroundImage: `url(${FujiDark})`,
            backgroundSize: "cover",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
          }}
        >
          NATURE
        </div>
      </div>

      {/* UenoCuy */}
      <div className="w-screen h-screen flex-col justify-center items-center gap-5 inline-flex translate-y-3/4 mt-96">
        <div className="self-stretch justify-center items-start gap-5 inline-flex">
          <div
            onClick={() => handleModalOpen("UenoPark")}
            className="px-0.5 pt-0.5 pb-[17px] bg-transparent shadow border rounded-2xl border-white flex-col justify-start items-center gap-5 inline-flex cursor-pointer"
            style={{ width: "635px", height: "399px" }}
          >
            <img
              className="w-full object-cover rounded-xl"
              style={{ width: "635px", height: "300px" }}
              src={UenoPark}
              alt="Ueno Park"
            />
            <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-white text-lg font-semibold font-['Figtree']">
                Ueno Park
              </div>
              <div className="w-[280px] text-[#95959c] text-base font-medium font-['Figtree'] leading-snug">
                A park
              </div>
            </div>
          </div>

          {/* Kiyosumi Garden */}
          <div
            onClick={() => handleModalOpen("KiyosumiGarden")}
            className="px-0.5 pt-0.5 pb-[17px] bg-gradient-transparent rounded-2xl shadow border border-white flex-col justify-start items-end gap-5 inline-flex"
            style={{ width: "500px", height: "399px" }}
          >
            <img
              className="w-full object-cover rounded-xl"
              style={{ width: "635px", height: "300px" }}
              src={KiyosumiGarden}
              alt="Kiyosumi Garden"
            />
            <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-white text-lg font-semibold font-['Figtree']">
                Kiyosumi Garden
              </div>
              <div className="w-[220px] text-[#95959c] text-base font-medium font-['Figtree'] leading-snug">
                A Garden
              </div>
            </div>
          </div>
        </div>

        {/* Showa Kinen */}
        <div className="self-stretch justify-center items-start gap-5 inline-flex">
          <div
            onClick={() => handleModalOpen("ShowaKinen")}
            className="px-0.5 pt-0.5 pb-[17px] bg-transparent rounded-2xl shadow border border-white flex-col justify-start items-end gap-5 inline-flex"
            style={{ width: "500px", height: "399px" }}
          >
            <img
              className="w-full object-cover rounded-xl"
              style={{ width: "635px", height: "300px" }}
              src={ShowaKinen}
              alt="Showa Kinen"
            />
            <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-white text-lg font-semibold font-['Figtree']">
                Showa Kinen
              </div>
              <div className="w-[220px] text-[#95959c] text-base font-medium font-['Figtree'] leading-snug">
                A Garden
              </div>
            </div>
          </div>

          {/* Mt. Fuji */}
          <div
            onClick={() => handleModalOpen("MtFuji")}
            className="px-0.5 pt-0.5 pb-[17px] bg-transparent rounded-2xl shadow border border-white flex-col justify-start items-center gap-5 inline-flex"
            style={{ width: "635px", height: "399px" }}
          >
            <img
              className="w-[328px] h-36 object-cover rounded-xl"
              style={{ width: "635px", height: "300px" }}
              src={MtFuji}
              alt="Mt. Fuji"
            />
            <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-white text-lg font-semibold font-['Figtree']">
                Mt. Fuji
              </div>
              <div className="w-[230.5px] text-[#95959c] text-base font-medium font-['Figtree'] leading-snug">
                A park
              </div>
            </div>
          </div>
        </div>

        {/* Modal Pop-up */}
        {activeModal && (
          <div
            className="fixed inset-0 flex items-center -translate-y-2/3 justify-center bg-black bg-opacity-50 z-50 modal-overlay"
            onClick={(event) => {
              if (event.target.classList.contains("modal-overlay")) {
                handleModalClose();
              }
            }}
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
                    src={modalData[activeModal].imageUrl}
                    alt={modalData[activeModal].title}
                  />
                </div>
                {/* Kolom Informasi */}
                <div className="flex-grow p-4">
                  <h2 className="text-xl text-white font-bold ml-2">
                    {modalData[activeModal].title}
                  </h2>
                  <p className="mt-2 text-neutral-500 text-base ml-2">
                    {modalData[activeModal].description}
                  </p>
                  <p className="mt-4 text-white font-semibold ml-2">
                    <img
                      src={Iconmaps}
                      alt="Ikon Jarak"
                      className="mr-2 w-5 h-5"
                    />
                    Jarak dari landmark:
                  </p>
                  <ul className="list-none list-inside text-white ml-2">
                    {modalData[activeModal].distances.map((distance, index) => (
                      <li key={index}>{distance}</li>
                    ))}
                  </ul>
                  <button
                    onClick={handleModalClose}
                    className="absolute justify-center w-16 h-16 text-white p-2 right-64 top-52"
                  >
                    <img src={IconClose} alt="close" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className="bg-gradient-to-b from-purple-300 to-purple-500 bg-clip-text text-white text-[180px] font-semibold font-['Figtree']"
          Culture
        >
          <div className="flex justify-center absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-52 ">
            <div
              className="font-figtree font-bold"
              style={{
                fontSize: "12rem",
                textAlign: "center",
              }}
            >
              Culture
            </div>
          </div>
        </div>

        <div className="flex justify-center translate-y-1/4 mt-96">
          <div className="relative border border-white bg-transparent rounded-2xl shadow-md">
            {isPlaying ? (
              <video
                width="800px"
                height="540px"
                controls
                autoPlay
                className="rounded-2xl"
              >
                <source src={CultureVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative">
                <img
                  src={ThumbnailImage}
                  alt="Thumbnail"
                  className="w-[800px] h-[450px] object-cover rounded-2xl cursor-pointer"
                  onClick={handlePlay}
                />
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl"
                >
                  <span className="text-white text-3xl">▶</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDark;
