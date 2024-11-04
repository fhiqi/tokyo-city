import Traffic from "../assets/traffictLight.svg"

const Pagethree = () =>{
    return(
        <div className="flex flex-row font-figtree">
            <div className="bg-red-800 mr-8 bg-cover w-[80%] h-[350px]" style={{backgroundImage:`url(${Traffic})`}} >
            </div>
            <div className=" flex flex-col text-left w-[50%] h-[20px]">
                <p className="text-7xl font-medium bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-10 ">More Secure </p>
                <p className="text-black text-[18px] font-normal leading-relaxed tracking-wide">Tokyo’s <span className="text-[#f67b08]">public security</span> is supported by an extensive network of CCTV cameras, strategically placed to ensure safety, monitor urban areas, and prevent crime, all while maintaining a balance between security and privacy.</p>
            </div>
        </div>  
);

    
};


export default Pagethree;

