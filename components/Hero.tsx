import { Playfair_Display, Inter, Poppins, Bricolage_Grotesque } from "next/font/google";
import { Button } from "./ui/button";
const PoppinsFont = Bricolage_Grotesque({ subsets: ["latin-ext"], weight:["600"] });
const inter = Inter({ subsets: ["latin"], weight:["500"] });
const Hero = () => {
    return (
        <div className=" w-screen h-screen flex flex-col justify-center align-middle items-center gap-5  ">
           <div className={`heading text-[#026147] md:text-7xl ${PoppinsFont.className} max-w-4xl text-center flex flex-col justify-center align-middle items-center md:gap-4`}>
            <span className="text-[85px]">Experience the Timeless Taste of Kalanamak Rice</span>
            <span className={`heading text-[#026147] md:text-lg ${inter.className} max-w-3xl text-center flex flex-col`}>Discover the purity of ancient grains with our organically sourced Kalanamak rice. Perfectly aromatic, naturally nutritious, and sustainably cultivated.</span>
           
           </div> 

           <div className="buttons flex justify-center   align-middle items-center gap-5 ">
            <Button className="rounded-full bg-[#026147] md:px-8 md:py-5 ">Shop Now</Button>
            <Button className="rounded-full bg-[#8B5A2B] md:px-8 md:py-5 ">Learn More</Button>
           </div>

        </div>
    )
}

export default Hero;