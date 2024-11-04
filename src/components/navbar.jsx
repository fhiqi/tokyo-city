const Navbar = () => {
    
  
    return (
        <div className="fixed mt-4 left-1/2 transform -translate-x-1/2 pt-4 font-figtree">
            <div className="h-[61px] px-3 py-2 bg-white rounded-xl shadow justify-center items-center gap-[120px] font-['Figtree'] inline-flex">
                <div className="justify-start items-center gap-3 flex">
                    <div className="text-black text-lg font-semibold font-figtree">Tokyo</div>
                </div>
                <div className="font-figtree justify-start items-center gap-8 flex">
                    <div className="justify-center items-center gap-2.5 flex">
                        <a className="cursor-pointer text-[#848484] text-lg font-semibold" href="#Pagetwo">Technology</a>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <a className="cursor-pointer text-[#848484] text-lg font-semibold" href="#Tourist">Tourism</a>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <a className="cursor-pointer text-[#848484] text-lg font-semibold" href="#Nature">Nature</a>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <a className="cursor-pointer text-[#848484] text-lg font-semibold" href="#Culture">Culture</a>
                    </div>
                </div>
                <div className="cursor-pointer w-[150px] h-[45px] bg-[#f67b08] rounded-[10px] justify-center items-center gap-2 flex font-figtree">
                    <di className="text-white text-lg font-semibold">Discover more</di>
                </div>
            </div>
        </div>
    );
  };
  
  export default Navbar;