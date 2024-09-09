import AboutUsStory from "@/components/AboutUsStory";
import CallPawan from "@/components/CallPawan";
import HeaderSection from "@/components/layout/HeaderSection";
import OurExpertise from "@/components/OurExpertise";

const AboutUS = () => {
  return (
    <>
      <HeaderSection className="h1 pl-2 font-extrabold bg-color-2 md:pl-16">
        About Us
      </HeaderSection>
      <AboutUsStory />
      <OurExpertise />
      <CallPawan />
    </>
  );
};
export default AboutUS;
