import backgroundImage from "../assets/background-light.svg";
import IOT from "../assets/Iot.svg";
import Transportation from "../assets/transport.svg";
import PublicSecurity from "../assets/publicSecurity.svg";
import Arrow from "../assets/arrow.svg";

const HomePage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute left-1/4 top-3/4 -translate-x-1/2 -translate-y-2/3  p-2">
        <div className="text-white text-9xl font-figtree">City of</div>
        <div className="text-white text-9xl font-figtree">the Future</div>
      </div>

      <div className="absolute right-1/4 top-1/4 translate-x-3/4 ">
        <div className="w-[416px] h-[496px] flex-col justify-start items-end gap-4 inline-flex">
          <div className="w-[200px] h-60 relative bg-white rounded-xl shadow border border-white">
            <div className="left-[12px] top-[192px] absolute text-black text-xl font-semibold font-['Figtree'] leading-tight">
              Internet of Things
            </div>
            <img
              className="w-[270px] h-[180px] rounded-t-lg top-0 absolute"
              src={IOT}
            />
            <div className="p-1 left-[172px] top-[212px] absolute bg-black rounded-tl-lg rounded-br-lg justify-start items-start gap-2 inline-flex">
              <img className="w-5 h-5 relative" src={Arrow} />
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="w-[200px] h-60 relative bg-white rounded-xl shadow border border-white">
              <div className="left-[12px] top-[192px] absolute text-black text-xl font-semibold font-['Figtree'] leading-tight">
                Transportation.
              </div>
              <img
                className="w-[270px] h-[180px] rounded-t-lg top-0 absolute"
                src={Transportation}
              />
              <div className="p-1 left-[172px] top-[212px] absolute bg-black rounded-tl-lg rounded-br-lg justify-start items-start gap-2 inline-flex">
                <img className="w-5 h-5 relative" src={Arrow} />
              </div>
            </div>
            <div className="w-[200px] h-60 relative bg-white rounded-xl shadow border border-white">
              <div className="left-[12px] top-[192px] absolute text-black text-xl font-semibold font-['Figtree'] leading-tight">
                Public Security.
              </div>
              <img
                className="w-[270px] h-[180px] rounded-t-lg top-0 absolute"
                src={PublicSecurity}
              />
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
