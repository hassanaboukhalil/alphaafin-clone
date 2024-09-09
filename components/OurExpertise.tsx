"use client";

import HeaderSection from "./layout/HeaderSection";
import { servicesImages } from "@/constants/services";
import { useEffect, useState } from "react";
import Image from "next/image";
import Section from "./layout/Section";

const OurExpertise = () => {
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
    <Section className="bg-color-1 flex flex-col gap-16 py-16 lg:flex-row-reverse">
      <div className="flex flex-col gap-5">
        <p className="text-color-3">Why Choose Us</p>
        <HeaderSection className="font-bold text-white">
          Our Expertise
        </HeaderSection>
        <p className="font-semibold text-white">
          Expertise and Experience: With over 20 Years of experience in the
          industry, our team of financial experts brings a wealth of knowledge
          and expertise to the table.
          <br />
          <br />
          Customer-Centric Approach: We put our clients at the heart of
          everything we do, offering personalized advice and support to help you
          make informed financial decisions.
          <br />
          <br />
          Innovative Solutions: We leverage the latest technology and financial
          products to provide innovative solutions that meet the evolving needs
          of our clients.
          <br />
          <br />
          Transparency and Integrity: We pride ourselves on our ethical
          approach, ensuring transparency and integrity in all our dealings.
          <br />
          <br />
        </p>
      </div>
      <div className="relative w-full h-[28rem] overflow-hidden rounded-[20px] lg:h-auto lg:pt-12">
        {servicesImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 border-l-8 border-b-8 border-color-3 rounded-3xl overflow-hidden ${
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
          </div>
        ))}
      </div>
    </Section>
  );
};
export default OurExpertise;
