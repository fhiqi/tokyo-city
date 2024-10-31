import backgroundImage from '../assets/background-light.svg';
import IOT from '../assets/Iot.svg';
import Transportation from '../assets/transport.svg';
import PublicSecurity from '../assets/publicSecurity.svg';
import Arrow from '../assets/arrow.svg';

const HomePage = () => {
  

  return (
    <div className="bg-cover bg-center h-screen " style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute left-1/4 top-3/4 -translate-x-1/2 -translate-y-2/3  p-2">
            <div className="text-white text-9xl font-figtree">City of</div>
            <div className="text-white text-9xl font-figtree">the Future</div>
        </div>
        {/* <div className="fixed left-1/2 transform -translate-x-1/2 pt-4">
            <div className="h-[61px] px-3 py-2 bg-white rounded-xl shadow justify-center items-center gap-[120px] inline-flex">
                <div className="justify-start items-center gap-3 flex">
                    <div className="text-black text-lg font-semibold font-['Figtree']">Tokyo</div>
                </div>
                <div className="justify-start items-center gap-8 flex">
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-[#848484] text-lg font-semibold font-['Figtree']">Technology</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-[#848484] text-lg font-semibold font-['Figtree']">Tourism</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-[#848484] text-lg font-semibold font-['Figtree']">Nature</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-[#848484] text-lg font-semibold font-['Figtree']">Culture</div>
                    </div>
                </div>
                <div className="w-[150px] h-[45px] bg-[#f67b08] rounded-[10px] justify-center items-center gap-2 flex">
                    <div className="text-white text-lg font-semibold font-['Figtree']">Discover more</div>
                </div>
            </div>
        </div> */}
        <div className="absolute right-1/4 top-1/4 translate-x-3/4 ">
            <div className="w-[416px] h-[496px] flex-col justify-start items-end gap-4 inline-flex">
                <div className="w-[200px] h-60 relative bg-white rounded-xl shadow border border-white">
                    <div className="left-[12px] top-[192px] absolute text-black text-xl font-semibold font-['Figtree'] leading-tight">Internet of Things</div>
                    <img className="w-[270px] h-[180px] rounded-t-lg top-0 absolute" src={IOT} />
                    <div className="p-1 left-[172px] top-[212px] absolute bg-black rounded-tl-lg rounded-br-lg justify-start items-start gap-2 inline-flex">
                        <img className="w-5 h-5 relative" src={Arrow} />
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="w-[200px] h-60 relative bg-white rounded-xl shadow border border-white">
                        <div className="left-[12px] top-[192px] absolute text-black text-xl font-semibold font-['Figtree'] leading-tight">Transportation.</div>
                        <img className="w-[270px] h-[180px] rounded-t-lg top-0 absolute" src={Transportation} />
                        <div className="p-1 left-[172px] top-[212px] absolute bg-black rounded-tl-lg rounded-br-lg justify-start items-start gap-2 inline-flex">
                            <img className="w-5 h-5 relative" src={Arrow} />
                        </div>
                    </div>
                    <div className="w-[200px] h-60 relative bg-white rounded-xl shadow border border-white">
                        <div className="left-[12px] top-[192px] absolute text-black text-xl font-semibold font-['Figtree'] leading-tight">Public Security.</div>
                        <img className="w-[270px] h-[180px] rounded-t-lg top-0 absolute" src={PublicSecurity} />
                        <div className="p-1 left-[172px] top-[209px] absolute bg-black rounded-tl-lg rounded-br-lg justify-start items-start gap-2 inline-flex">
                            <img className="w-5 h-5 relative" src={Arrow} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  );
};

export default HomePage;