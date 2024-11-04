import { useState } from "react";
import TourismImg from "../assets/tourismImage.svg";
import NatureImg from "../assets/natureImage.svg"
import CultureImg from "../assets/cultureImage.svg"
//import backgroundImage from '../assets/background-light.svg';
import walking from "../assets/walk.svg"
//import nightMountain from "../assets/Mountainight.svg"
import buildNature from "../assets/naturebuild.svg"
import touristIcon from "../assets/touristicon.svg"

const ThreeCard = () => {
    // State untuk menentukan elemen yang aktif
    const [activeCard, setActiveCard] = useState("Tourist");

    // Fungsi untuk menangani klik pada elemen
    const handleCardClick = (id) => {
        setActiveCard(id);
    };

    // Fungsi untuk menentukan ukuran dan backgroundSize berdasarkan apakah elemen aktif atau tidak
    const getCardStyle = (id) => ({
        width: activeCard === id || activeCard === null ? '58.22%' : '10%',
        height: '388.9px',
        backgroundSize: activeCard === id || activeCard === null ? 'contain' : 'cover',
        backgroundPosition: 'center',
        transition: 'width 0.3s ease, background-size 0.3s ease',  // Animasi untuk perubahan ukuran dan background
        boxShadow: activeCard === id ? '0px 0px 15px 5px rgba(0, 123, 255, 0.8)' : 'none', // Efek cahaya biru
        borderRadius: '8px'
    });

    return (
        <div className="flex flex-row justify-center mr-20 ml-20 space-x-2 rounded-lg font-['Figtree']">
            <div 
                id="Tourist" 
                className="flex rounded-xl bg-cover cursor-pointer contrast-100"
                style={{
                    backgroundImage: `url(${TourismImg})`,
                    ...getCardStyle("Tourist")
                }}
                onClick={() => handleCardClick("Tourist")}
            >
                <div className="flex text-white flex-row self-end">
                    <img
                    src={walking}
                    alt="walk"
                    className={`${activeCard === "Tourist" || activeCard === null ? '' : 'self-center ml-2 mb-2'}`} />
                    <div
                    className={`${activeCard === "Tourist" || activeCard === null ? 'mt-14 text-white text-4xl font-bold tracking-wider' : 'hidden'}`}
                    >
                        <p>Shibuya Crossing</p>
                        <p className="mt-2 tracking-wide text-white text-[22px] font-medium">World’s busiest pedestrian intersection.</p>
                    </div>
                </div>     
            </div>
            <div 
                id="Nature" 
                className="flex rounded-xl bg-cover cursor-pointer"
                style={{
                    backgroundImage: `url(${NatureImg})`,
                    ...getCardStyle("Nature")
                }}
                onClick={() => handleCardClick("Nature")}
            >
                <div className="flex text-white flex-row self-end">
                    <img
                    src={buildNature}
                    alt="buildNature"
                    className={`${activeCard === "Nature" || activeCard === null ? '' : 'self-center ml-2 mb-2'}`} />
                    <div
                    className={`${activeCard === "Nature" || activeCard === null ? 'mt-14 text-white text-4xl font-bold tracking-wider' : 'hidden'}`}
                    >
                        <p>Tokyo Tower</p>
                        <p className="mt-2 tracking-wide text-white text-[22px] font-medium">Japan’s iconic landmark offering panoramic city views.</p>
                    </div>
                </div> 
            </div>
            <div 
                id="Culture" 
                className="flex rounded-xl bg-cover cursor-pointer"
                style={{
                    backgroundImage: `url(${CultureImg})`,
                    ...getCardStyle("Culture"),
                }}
                onClick={() => handleCardClick("Culture")}
            >
                <div className="flex text-white flex-row self-end">
                    <img
                    src={touristIcon}
                    alt="touristicon"
                    className={`${activeCard === "Culture" || activeCard === null ? '' : 'self-center ml-2 mb-2'}`} />
                    <div
                    className={`${activeCard === "Culture" || activeCard === null ? 'mt-14 text-white text-4xl font-bold tracking-wider' : 'hidden'}`}
                    >
                        <p>Senso-ji Temple</p>
                        <p className="mt-2 tracking-wide text-white text-[22px] font-medium">Tokyo’s oldest temple, blending history with culture.</p>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default ThreeCard;
