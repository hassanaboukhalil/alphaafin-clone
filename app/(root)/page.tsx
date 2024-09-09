import Carousel from "@/components/Carousel";
import OurServices from "@/components/OurServices";
import WhoAreUs from "@/components/WhoAreUs";
import SectionWithHomeImg from "@/components/SectionWithHomeImg";
import WhyToChooseUs from "@/components/WhyToChooseUs";
import MeetOurFounder from "@/components/MeetOurFounder";
import ContactUs from "@/components/ContactUs";
import CallPawan from "@/components/CallPawan";

export const metadata = {
  title: "Home Page",
  description: "Home Page of my web application",
  openGraph: {
    title: "Home Page",
    description: "Home Page of my web application",
    url: "https://my-nextjs-template.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Home() {
  return (
    <>
      <Carousel />
      <WhoAreUs />
      <OurServices />
      <SectionWithHomeImg />
      <WhyToChooseUs />
      <MeetOurFounder />
      <ContactUs />
      <CallPawan />
    </>
  );
}
