import nigtMode from "../assets/natureNightmode.svg"
import uenoPark from "../assets/nightmode/uenopark.svg"
import kiyosumiGarden from "../assets/nightmode/kiyosumi.svg"
import showaKinen from "../assets/nightmode/showa.svg"
import fujiMountain from "../assets/nightmode/mtFuji.svg"

const Nighttransitiontwo = () =>{
    return(
        <div className="flex-col h-[1120px] ml-1 bg-black grid font-figtree]">
            <div id="transition1" className="mt-20 justify-self-center place-self-start bg-black ml-2 bg-contain w-[80%] h-[225px]" style={{backgroundImage: `url(${nigtMode})`}}>
            </div>
            <div id="transition2" className="w-screen h-screen flex-col justify-start items-center gap-5 inline-flex">
                <div className="self-stretch justify-center items-start gap-5 inline-flex">
                    <div className="pt-2 pb-[17px] bg-gradient-to-b from-[#1e1e1e] via-[#0e0e0e] to-[#383838] rounded-2xl shadow border border-white flex-col justify-start items-center gap-5 inline-flex">
                        <img className="w-[509px] h-[245px] rounded-lg" src={uenoPark} />
                        <div className="self-stretch h-[49px] px-[30px] flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="self-stretch text-white text-lg font-semibold">Ueno Park</div>
                            <div className="w-[380px] text-[#95959c] text-base font-medium  leading-snug">A park</div>
                        </div>
                    </div>
                    <div className="pt-2 pb-[17px] bg-gradient-to-b from-[#1e1e1e] via-[#0e0e0e] to-[#383838] rounded-2xl shadow border border-white flex-col justify-start items-end gap-5 inline-flex">
                        <img className="w-[410px] h-[250px] rounded-lg" src={kiyosumiGarden} />
                        <div className="self-stretch h-[45px] px-[10px] flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="self-stretch px-[20px] text-white text-lg font-semibold">Kiyosumi Garden</div>
                            <div className="w-[380px] px-[20px] text-[#95959c] text-base font-medium leading-snug">A Garden</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-center items-start gap-5 inline-flex">
                    <div className="pr-2 pt-2 pb-[17px] bg-gradient-to-b from-[#1e1e1e] via-[#0e0e0e] to-[#383838] rounded-2xl shadow border border-white flex-col justify-start items-end gap-5 inline-flex">
                        <img className="w-[390px] h-[250px] rounded-xl" src={showaKinen} />
                        <div className="self-stretch h-[49px] px-[10px] flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="self-stretch px-[20px] text-white text-lg font-semibold">Showa Kinen</div>
                            <div className="w-[380px] px-[20px] text-[#95959c] text-base font-medium leading-snug">A Garden</div>
                        </div>
                    </div>
                    <div className="pt-2 pb-[17px] bg-gradient-to-b from-[#1e1e1e] via-[#0e0e0e] to-[#383838] rounded-2xl shadow border border-white flex-col justify-start items-center gap-5 inline-flex">
                        <img className="w-[490px] h-[250px] rounded-2xl" src={fujiMountain} />
                        <div className="self-stretch h-[49px]  px-[10px] flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="self-stretch px-[20px] text-white text-lg font-semibold">Mt. Fuji</div>
                            <div className="w-[490px] px-[20px] text-[#95959c] text-base font-medium leading-snug">A park</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Nighttransitiontwo