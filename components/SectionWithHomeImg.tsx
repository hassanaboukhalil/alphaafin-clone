import Image from "next/image";
import Section from "./layout/Section";
import img from "@/assets/carousel/national-cancer-institute-xDSD3Vmzh70-unsplash.jpg";
import homeImg from "@/assets/home-img.png";

const SectionWithHomeImg = () => {
  return (
    <Section className="py-12 flex flex-col gap-9 items-end relative">
      <div className="w-full h-full p-4 bg-color-2 md:w-[85%] md:h-60 md:pl-0 md:pt-0">
        <Image
          src={img}
          alt="happy family"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-color-2 w-full h-24 rounded-[20px]" />
      <div className="absolute bottom-16 z-10 left-8">
        <Image src={homeImg} alt="home image" objectFit="cover" width={300} />
      </div>
    </Section>
  );
};
export default SectionWithHomeImg;
