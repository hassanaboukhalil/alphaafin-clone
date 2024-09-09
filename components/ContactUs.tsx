import { socialMedia } from "@/constants/socialMedia";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import contactInfo from "@/constants/top";
import Image from "next/image";
import callCenterImg from "@/assets/contact/call-center.jpg";

const ContactUs = () => {
  return (
    <Section className="flex flex-col gap-6 py-12 md:flex-row md:items-center lg:justify-between">
      <div className="flex flex-col items-start gap-5">
        <HeaderSection>Contact Us</HeaderSection>
        <p>Please feel free to ask if you have any further questions.</p>
        <div className="flex flex-col items-start">
          {contactInfo.map((info) => {
            return (
              <div key={info.id} className="flex items-center mx-[8px]">
                {info.icon}
                <span className="text-black pl-4 body-1">{info.label}</span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-start gap-2">
          {socialMedia.map((social) => {
            return (
              <div key={social.id} className="p-2 bg-color-3">
                {social.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-full max-w-5xl h-60 mb-8 md:w-[26rem] md:h-[17rem]">
        <Image
          src={callCenterImg}
          alt="contact image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-md"
        />
      </div>
    </Section>
  );
};
export default ContactUs;
