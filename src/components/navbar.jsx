import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* Navbar untuk layar besar */}
            <div className="hidden md:block fixed left-1/2 transform -translate-x-1/2 pt-4">
                <div className="w-[700px] lg:w-full h-[61px] px-3 py-2 bg-white rounded-xl shadow justify-center items-center gap-[50px] lg:gap-[120px] inline-flex">
                    <div className="justify-start items-center gap-3 flex ml-2">
                        <div className="text-black text-xl font-bold font-['Figtree']">Tokyo</div>
                    </div>
                    <ul className="justify-start items-center gap-8 flex cursor-pointer">
                        <div className="text-[#848484] text-lg font-semibold font-['Figtree'] hover:text-black transition ease-in-out duration-700">Technology</div>
                        <div className="text-[#848484] text-lg font-semibold font-['Figtree'] hover:text-black transition ease-in-out duration-700">Tourism</div>
                        <div className="text-[#848484] text-lg font-semibold font-['Figtree'] hover:text-black transition ease-in-out duration-700">Nature</div>
                        <div className="text-[#848484] text-lg font-semibold font-['Figtree'] hover:text-black transition ease-in-out duration-700">Culture</div>
                    </ul>
                    <div className="w-[150px] h-[45px] bg-[#f67b08] rounded-[10px] justify-center items-center gap-2 flex">
                        <div className="text-white text-lg font-semibold font-['Figtree']">Discover more</div>
                    </div>
                </div>
            </div>

            {/* Navbar untuk layar kecil */}
            <div className="md:hidden absolute flex justify-between p-4 px-6 w-full bg-[#4D4D4D66] backdrop-blur-md z-20">
                <div className="text-white text-2xl font-semibold">Tokyo</div>
                <button onClick={toggleMenu} className="text-white text-4xl ">
                    ☰ {/* Ikon Hamburger */}
                </button>

                {/* Menu berbasis daftar */}
                {isMenuOpen && (
                    <div className="absolute left-0 mt-14 w-full bg-white backdrop-blur-md shadow-lg ">
                        {/* <div className="text-black text-lg font-semibold font-['Figtree'] mb-4">Tokyo</div> */}
                        <ul className="p-4 cursor-pointer">
                            <li className="py-2 px-3 text-[#848484] text-lg font-semibold font-['Figtree'] hover:bg-gray-100">Technology</li>
                            <li className="py-2 px-3 text-[#848484] text-lg font-semibold font-['Figtree'] hover:bg-gray-100">Tourism</li>
                            <li className="py-2 px-3 text-[#848484] text-lg font-semibold font-['Figtree'] hover:bg-gray-100">Nature</li>
                            <li className="py-2 px-3 text-[#848484] text-lg font-semibold font-['Figtree'] hover:bg-gray-100">Culture</li>
                        </ul>
                        {/* <button className="mt-4 w-full h-[45px] bg-[#f67b08] rounded-[10px] text-white text-lg font-semibold font-['Figtree']">
                            Discover more
                        </button> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
