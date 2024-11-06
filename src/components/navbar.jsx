const Navbar = () => {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 pt-4">
      <div className="h-[61px] px-3 py-2 bg-white rounded-xl shadow justify-center items-center gap-[120px] inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <div className="text-black text-lg font-semibold font-['Figtree']">
            Tokyo
          </div>
        </div>
        <div className="justify-start items-center gap-8 flex">
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-[#848484] text-lg font-semibold font-['Figtree']">
              Technology
            </div>
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-[#848484] text-lg font-semibold font-['Figtree']">
              Tourism
            </div>
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-[#848484] text-lg font-semibold font-['Figtree']">
              Nature
            </div>
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="text-[#848484] text-lg font-semibold font-['Figtree']">
              Culture
            </div>
          </div>
        </div>
        <div className="w-[150px] h-[45px] bg-[#f67b08] rounded-[10px] justify-center items-center gap-2 flex">
          <div className="text-white text-lg font-semibold font-['Figtree']">
            Discover more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
