import Image from "next/image";
import Section from "./layout/Section";
import founderIcon from "@/assets/founder-icon.png";
import HeaderSection from "./layout/HeaderSection";
import { Button } from "./ui/button";
import orangeBackground from "@/assets/orange-background.jpg";

const CallPawan = () => {
  return (
    <Section className="py-12 flex flex-col items-center justify-center bg-black relative z-10">
      <div className="z-20 flex flex-col items-center justify-center gap-6">
        <Image src={founderIcon} alt="services" width={80} />

        <HeaderSection className="pt-4 font-bold text-black h1 uppercase md:text-5xl">
          Talk To Pawan Now!
        </HeaderSection>
        <Button className="uppercase w-full bg-white text-center md:w-fit md:p-5 md:font-bold">
          Contact Us
        </Button>
        <div className="md:flex md:gap-2">
          <p className="w-[90%] h4 text-center md:w-auto">
            Feel Free to Get in Touch for a No Obligations
          </p>
          <p className="underline underline-offset-2 h4 text-center">
            Call <span className="font-bold">PAWAN !!!</span>
          </p>
        </div>
      </div>

      <div className="absolute left-0 w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src={orangeBackground}
          alt="orange background"
        />
      </div>
    </Section>
  );
};
export default CallPawan;
