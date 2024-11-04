import { useState } from "react";

const Navbar = () => {
    const [highlightedCard, setHighlightedCard] = useState("Tourist");

    // Fungsi untuk menangani navigasi dan mengatur highlight
    const handleNavigationClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        setHighlightedCard(id); // Atur elemen yang sedang di-highlight
    };

    return (
        <div className="fixed mt-4 left-1/2 transform -translate-x-1/2 pt-4">
            <div className="h-[61px] px-3 py-2 bg-white rounded-xl shadow justify-center items-center gap-[120px] inline-flex">
                <div className="justify-start items-center gap-3 flex">
                    <div className="text-black text-lg font-semibold font-['Figtree']">Tokyo</div>
                </div>
                <div className="justify-start items-center gap-8 flex">
                    <div className="justify-center items-center gap-2.5 flex">
                        <a
                            className={`cursor-pointer text-lg font-semibold font-['Figtree'] ${highlightedCard === "Pagetwo" ? "text-blue-500" : "text-[#848484]"}`}
                            onClick={() => handleNavigationClick("Pagetwo")}
                        >
                            Technology
                        </a>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <a
                            className={`cursor-pointer text-lg font-semibold font-['Figtree'] ${highlightedCard === "Tourist" ? "text-blue-500" : "text-[#848484]"}`}
                            onClick={() => handleNavigationClick("Tourist")}
                        >
                            Tourism
                        </a>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <a
                            className={`cursor-pointer text-lg font-semibold font-['Figtree'] ${highlightedCard === "Nature" ? "text-blue-500" : "text-[#848484]"}`}
                            onClick={() => handleNavigationClick("Nature")}
                        >
                            Nature
                        </a>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <a
                            className={`cursor-pointer text-lg font-semibold font-['Figtree'] ${highlightedCard === "Culture" ? "text-blue-500" : "text-[#848484]"}`}
                            onClick={() => handleNavigationClick("Culture")}
                        >
                            Culture
                        </a>
                    </div>
                </div>
                <div className="cursor-pointer w-[150px] h-[45px] bg-[#f67b08] rounded-[10px] justify-center items-center gap-2 flex">
                    <div className="text-white text-lg font-semibold font-['Figtree']">Discover more</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
