import backgroundImage from '../assets/homePage/background-light.svg';
import IOT from '../assets/homePage/iot.svg';
import IOT2 from '../assets/homePage/iot.jpg';
import Transportation from '../assets/homePage/transport.svg';
import Transportation2 from '../assets/homePage/transport.jpg';
import PublicSecurity from '../assets/homePage/publicSecurity.svg';
import PublicSecurity2 from '../assets/homePage/publicSecurity.jpg';
import Arrow from '../assets/homePage/arrow.svg';

const HomePage = () => {
  

  return (
    <div className="bg-cover bg-center h-screen " style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Tampilan md ke atas */}
        <div className="hidden md:flex absolute w-full bottom-0 justify-between items-end p-8">
            <div className="flex flex-col items-start p-2 self-center">
                <div className="text-white text-7xl lg:text-8xl xl:text-9xl font-figtree">City of</div>
                <div className="text-white text-7xl lg:text-8xl xl:text-9xl font-figtree">the Future</div>
            </div>
            <div className="flex flex-col items-end gap-4">
                <div className="w-[160px] h-[192px] lg:w-[200px] lg:h-60 relative bg-white rounded-xl shadow border border-white">
                    <div className="left-[12px] top-[153px] lg:top-[192px] absolute text-black lg:text-xl font-semibold font-['Figtree'] leading-tight">Internet of Things</div>
                    <img className="w-[216px] h-[144px] lg:w-[270px] lg:h-[180px] rounded-t-xl top-0 absolute" src={IOT} />
                    <div className="p-1 left-[138px] top-[166px] lg:left-[172px] lg:top-[210px] absolute bg-black rounded-tl-xl rounded-br-xl inline-flex items-center justify-center">
                        <img className="w-4 h-4 lg:w-5 lg:h-5" src={Arrow} />
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="w-[160px] h-[192px] lg:w-[200px] lg:h-60 relative bg-white rounded-xl shadow border border-white">
                        <div className="left-[12px] top-[153px] lg:top-[192px] absolute text-black lg:text-xl font-semibold font-['Figtree'] leading-tight">Transportation</div>
                        <img className="w-[216px] h-[144px] lg:w-[270px] lg:h-[180px] rounded-t-xl top-0 absolute" src={Transportation} />
                        <div className="p-1 left-[138px] top-[166px] lg:left-[172px] lg:top-[210px] absolute bg-black rounded-tl-xl rounded-br-xl inline-flex items-center justify-center">
                            <img className="w-4 h-4 lg:w-5 lg:h-5" src={Arrow} />
                        </div>
                    </div>
                    <div className="w-[160px] h-[192px] lg:w-[200px] lg:h-60 relative bg-white rounded-xl shadow border border-white">
                        <div className="left-[12px] top-[153px] lg:top-[192px] absolute text-black lg:text-xl font-semibold font-['Figtree'] leading-tight">Public Security</div>
                        <img className="w-[216px] h-[144px] lg:w-[270px] lg:h-[180px] rounded-t-xl top-0 absolute" src={PublicSecurity} />
                        <div className="p-1 left-[138px] top-[166px] lg:left-[172px] lg:top-[210px] absolute bg-black rounded-tl-xl rounded-br-xl inline-flex items-center justify-center">
                            <img className="w-4 h-4 lg:w-5 lg:h-5" src={Arrow} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Tampilan mobile */}
        <div className="flex flex-col md:hidden justify-center items-center w-[240px] sm:w-[360px] gap-[50px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/4 p-2 z-10">
            <div className="relative text-center text-white text-5xl sm:text-7xl font-figtree">City of <br/> the Future</div>
            <div className="w-[150px] h-[45px] bg-[#f67b08] rounded-[10px] justify-center items-center gap-2 flex">
                <div className="text-white text-lg font-semibold font-['Figtree']">Discover more</div>
            </div>
        </div>
        <div className="block md:hidden ">
            <div className="w-[120px] h-44 pb-3 left-1/4 -translate-x-2/3 bottom-[20px] absolute origin-top-left rotate-[-24deg] bg-white rounded-xl border border-white flex-col justify-start items-center gap-3 inline-flex">
                <img className="w-[120px] h-36 rounded-t-xl" src={IOT2} />
                <div className="text-center text-black text-xs font-semibold font-['Figtree'] leading-3">Internet of Things</div>
            </div>
            <div className="w-[120px] h-44 pb-3 left-1/2 -translate-x-1/2 bottom-[100px] absolute bg-white rounded-xl border border-white flex-col justify-start items-center gap-3 inline-flex z-10">
                <img className="w-[120px] h-36 rounded-t-xl" src={Transportation2} />
                <div className="text-center text-black text-xs font-semibold font-['Figtree'] leading-3">Transportation</div>
            </div>
            <div className="w-[120px] h-44 pb-3 right-1/4 translate-x-3/4 bottom-[70px] absolute origin-top-left rotate-[24deg] bg-white rounded-xl border border-white flex-col justify-start items-center gap-3 inline-flex">
                <img className="w-[120px] h-36 rounded-t-xl" src={PublicSecurity2} />
                <div className="text-center text-black text-xs font-semibold font-['Figtree'] leading-3">Public Security</div>
            </div>
        </div>
        
    </div>
  );
};

export default HomePage;