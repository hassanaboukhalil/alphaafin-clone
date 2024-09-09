"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousalImages from "@/constants/carousel";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalTime = 3000; // 3 seconds interval

  useEffect(() => {
    const interval = setInterval(() => {
      // handleNext();

      setTimeout(() => {
        handleNext();
      }, 2700);
    }, intervalTime);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carousalImages.length);
      setTimeout(() => setIsTransitioning(false), 500); // Match this with the transition duration
    }
  };

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carousalImages.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500); // Match this with the transition duration
    }
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden md:h-screen">
      {carousalImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={`Carousel image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          {index === currentIndex && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                Empowering Financial Security for Everyone
              </h1>
              <p className="text-sm md:text-lg mt-2">
                We are committed to providing accessible and reliable financial
                services to help individuals and families.
              </p>
            </div>
          )}
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
        <button
          onClick={handlePrevious}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
