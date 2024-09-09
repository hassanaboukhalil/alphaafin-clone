import HeaderSection from "@/components/layout/HeaderSection";
import OurServices from "@/components/OurServices";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import img from "@/assets/holding-home-toy.jpg";

export default async function Services() {
  return (
    <>
      <HeaderSection className="h1 pl-2">Services</HeaderSection>
      <div className="relative flex justify-center items-center z-10 h-[350px]">
        <div className="z-20">
          <h2 className="h1 text-white">Services</h2>
          <div className="animate-bounce flex flex-col justify-center items-center pt-8">
            <ChevronDown color="#FF9021" height={30} />
            <ChevronDown color="#FF9021" height={30} />
            <ChevronDown color="#FF9021" height={30} />
          </div>
        </div>
        <div className="absolute w-full h-full left-0 top-0">
          <Image
            src={img}
            alt="image servies"
            className="object-cover w-full h-full brightness-50"
          />
        </div>
      </div>
      <OurServices />
    </>
  );
}
