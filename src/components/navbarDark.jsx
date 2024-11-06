const NavbarDark = () => {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 pt-4 z-50">
      <div className="h-[61px] px-3 py-2 bg-transparent rounded-xl shadow-md border border-white shadow-white flex justify-center items-center gap-[120px]">
        <div className="justify-start items-center gap-3 flex">
          <div className="text-white text-lg font-semibold font-['Figtree']">
            Tokyo
          </div>
        </div>
        <div className="justify-start items-center gap-8 flex">
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-[#f2f2f2] text-lg font-semibold font-['Figtree']">
              Technology
            </div>
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-[#f2f2f2] text-lg font-semibold font-['Figtree']">
              Tourism
            </div>
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-[#f2f2f2] text-lg font-semibold font-['Figtree']">
              Nature
            </div>
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-[#f2f2f2] text-lg font-semibold font-['Figtree']">
              Culture
            </div>
          </div>
        </div>
        <div className="w-[150px] h-[45px] bg-[#9747FF] rounded-[10px] justify-center items-center gap-2 flex shadow-inner border border-white">
          <div className="text-white text-lg font-semibold font-['Figtree']">
            Discover more
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDark;
