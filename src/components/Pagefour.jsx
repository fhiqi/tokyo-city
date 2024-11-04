import iotImg from "../assets/iotImage.svg"

const Pagefour = () =>{

return(
    <div className="flex flex-row font-figtree">
        <div className="mr-4 w-[85%] space-y-4">
            <p className="h-[80px] bg-gradient-to-r from-[#f67b08] bg-clip-text text-transparent to-[#ffecda] text-[#f67b08] text-7xl font-medium">Internet Of Things</p>
            <p className="">Tokyo’s IoT network <span className="text-[#f67b08]">seamlessly</span> connects infrastructure, transport, and public services, utilizing cutting-edge sensors and devices to optimize efficiency, enhance safety, and manage resources, positioning the city at the forefront of smart urban innovation.</p>
        </div>
        
        <div className=" bg-cover w-[90%] h-[350px]" style={{backgroundImage:`url(${iotImg})`}}>
        </div>
    </div>
)

}

export default Pagefour;