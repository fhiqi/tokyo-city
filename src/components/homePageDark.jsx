import React, { useState, useRef } from "react";
import backgroundImage from "../assets/milkyway.png";
import IOT from "../assets/Iot.svg";

import UenoPark from "../assets/uenoPark.svg";
import KiyosumiGarden from "../assets/kiyosumiGarden.svg";
import ShowaKinen from "../assets/showaKinen.svg";
import MtFuji from "../assets/mtFuji.svg";
import FujiDark from "../assets/fujidark.svg";
import ThumbnailImage from "../assets/thumbnail.jpeg";

const HomePageDark = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "WLIv7HnZ_fE";

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        minHeight: "300vh",
      }}
    >
      {/* text nature nya */}
      <div className="flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-72 ">
        <div
          className=" font-figtree font-bold"
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
      <div className="w-screen h-screen flex-col justify-center items-center gap-5 inline-flex translate-y-2/4 mt-96">
        <div className="self-stretch justify-center items-start gap-5 inline-flex">
          <div className="px-0.5 pt-0.5 pb-[17px] bg-transparent shadow border rounded-2xl border-white flex-col justify-start items-center gap-5 inline-flex">
            <img
              className="w-full h-36 object-cover rounded-xl"
              src={UenoPark}
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

          {/* {KiyosumiGarden} */}
          <div className="  px-0.5 pt-0.5 pb-[17px] bg-gradient-transparent rounded-2xl shadow border border-white flex-col justify-start items-end gap-5 inline-flex">
            <img
              className="w-full h-36 object-cover rounded-xl"
              src={KiyosumiGarden}
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

        {/* Ini Showa Kinen */}
        <div className="self-stretch justify-center items-start gap-5 inline-flex">
          <div className=" px-0.5 pt-0.5 pb-[17px] bg-transparent rounded-2xl shadow border border-white flex-col justify-start items-end gap-5 inline-flex">
            <img
              className="w-full h-36 object-cover rounded-xl"
              src={ShowaKinen}
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

          {/* Kalo ini fuji */}
          <div className="px-0.5 pt-0.5 pb-[17px] bg-transparent rounded-2xl shadow border border-white flex-col justify-start items-center gap-5 inline-flex">
            <img
              className="w-[328px] h-36 object-cover rounded-xl"
              src={MtFuji}
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

        <div
          className="bg-black text-[#9747ff] text-[180px] font-semibold font-['Figtree']"
          Culture
        >
          <div className="flex justify-center absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-52 ">
            <div
              className=" font-figtree font-bold"
              style={{
                fontSize: "12rem",
                backgroundImage: `url(${FujiDark})`,
                backgroundSize: "cover",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
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
              <iframe
                width="800"
                height="540"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            ) : (
              <img
                src={ThumbnailImage}
                alt="Thumbnail"
                className="w-[800px] h-[540px] object-cover rounded-2xl cursor-pointer"
                onClick={handlePlay}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDark;
