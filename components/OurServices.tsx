"use client";
import Image from "next/image";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import homeRoofOrange from "@/assets/home-roof-orange.jpg";
import services, { servicesImages } from "@/constants/services";
import homeLoansImg from "@/assets/services/home-loans-icon.png";
import { useEffect, useState } from "react";

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalTime = 2000; // 5 seconds interval

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, intervalTime);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesImages.length);
      setTimeout(() => setIsTransitioning(false), 500); // Match this with the transition duration
    }
  };

  return (
    <Section className="pt-12 flex flex-col items-center bg-color-2">
      <Image src={homeRoofOrange} alt="services" width={80} />
      <HeaderSection className="pt-4 font-bold text-black">
        Our Services
      </HeaderSection>
      <div className="flex flex-col pb-4 lg:flex-row lg:gap-4">
        <div className="grid grid-cols-1 pt-12 gap-8 md:grid-cols-2 lg:gap-4">
          {services.map((service: any) => {
            return (
              <div
                className="bg-white p-[30px] rounded-[20px] flex flex-col justify-center items-start gap-6 border-b-4 border-color-3"
                key={service.id}
              >
                <div className="flex flex-col items-center w-full border-b-[1px] border-[#E0E0E0] pb-4 mt-4">
                  <div>
                    <Image
                      src={homeLoansImg}
                      width={80}
                      height={40}
                      alt={`service image ${service.id}`}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="h4 text-center">{service.title}</h4>
                </div>
                {service.paragraphs.map((paragraph: any) => {
                  return (
                    <p
                      className="leading-[1.8em] text-center"
                      key={paragraph.id}
                    >
                      {paragraph.text}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="relative w-full h-[500px] overflow-hidden rounded-[20px] lg:h-auto lg:pt-12">
          {servicesImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={`service image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              {index === currentIndex && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 lg:px-16">
                  <h1 className="text-3xl md:text-5xl font-bold text-left lg:text-2xl">
                    At Alphaa Financial Solutions, we offer a comprehensive
                    range of financial services
                  </h1>
                  <p className="text-sm md:text-lg mt-2 text-left">
                    We have the expertise to guide you through the process.
                  </p>
                  <div className="flex flex-col items-center justify-center lg:font-bold lg:h4">
                    <p>
                      <span
                        data-duration="2000"
                        data-to-value="100"
                        data-from-value="0"
                        data-delimiter=","
                      >
                        100
                      </span>
                      <span>+</span>
                    </p>
                    <p className="lg:body-1">Simplify the loan</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default OurServices;
