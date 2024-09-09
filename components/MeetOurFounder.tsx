import Image from "next/image";
import Section from "./layout/Section";
import HeaderSection from "./layout/HeaderSection";
import founderIcon from "@/assets/services/home-loans-icon.png";
import ourFounderImg from "@/assets/Pawan-panjabi.jpg";

const MeetOurFounder = () => {
  return (
    <Section className="py-12 flex flex-col items-center justify-center bg-white">
      <Image src={founderIcon} alt="services" width={120} />

      <HeaderSection className="pt-4 font-bold text-black">
        Meet Our Founder
      </HeaderSection>
      <div className="md:flex lg:justify-center">
        <div className="bg-white p-[30px] rounded-[20px] flex flex-col justify-center items-center gap-6 border-b-4 border-color-3 mt-9 md:w-[40%]">
          <div className="relative w-full">
            <Image src={ourFounderImg} alt="our founder" />
          </div>
          <h4 className="h3 text-left">Mr. Pawan Punjabi</h4>
          <p className="leading-[1.8em]">Founder</p>
        </div>
      </div>
    </Section>
  );
};
export default MeetOurFounder;
