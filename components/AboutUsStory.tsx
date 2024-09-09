import Image from "next/image";
import Section from "./layout/Section";
import HeaderSection from "./layout/HeaderSection";
import homeRoofOrange from "@/assets/home-roof-orange.jpg";
import happyFamilyImg from "@/assets/aboutUsPage/happy-family.jpg";

const AboutUsStory = () => {
  return (
    <Section className="py-12 flex flex-col items-center bg-color-2">
      <Image src={homeRoofOrange} alt="services" width={80} />
      <HeaderSection className="pt-4 font-bold text-black">
        We Believe You&apos;re Bright
      </HeaderSection>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:py-12">
        <div className="flex flex-col pt-5 gap-4 md:pt-4">
          <div className="w-full h-[24rem]  border-b-8 border-r-8 border-color-3 rounded-3xl overflow-hidden lg:h-[15rem]">
            <Image
              src={happyFamilyImg}
              alt="happy family"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-color-2 flex flex-col justify-center items-start gap-6">
            <h4 className="h3 text-left">Our Mission</h4>
            <p className="text-lg">
              Our mission is to provide our clients with tailored financial
              solutions that cater to their unique needs. We strive to make the
              process of securing a mortgage as straightforward and stress-free
              as possible, guiding you through every step with transparency and
              integrity.
            </p>
          </div>
        </div>

        <div className="flex flex-col pt-6 gap-4">
          <div className="bg-color-2 flex flex-col justify-center items-start gap-6">
            <h4 className="h3 text-left">
              Welcome To Alphaa Financial Solutions
            </h4>
            <p className="text-lg">
              At Alphaa Financial Solutions, we believe in empowering your
              property dreams with our premium financial services. Established
              with a vision to provide seamless loan processing and financial
              advisory, we have grown to become a trusted name in the Australian
              mortgage industry.
            </p>
          </div>
          <div className="bg-color-2 flex flex-col justify-center items-start gap-6">
            <h4 className="h3 text-left">Our Story 🙂</h4>
            <p className="text-lg">
              &nbsp;Alphaa Financial Solutions was born out of a desire to
              simplify the complexities of property financing. Our founder,{" "}
              <br />
              Mr. Pawan Punjabi, envisioned a company where customer-centricity
              and financial expertise go hand in hand. Over the years, we have
              helped thousands of Australians achieve their dream of owning a
              home, thanks to our unwavering commitment to excellence and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutUsStory;
