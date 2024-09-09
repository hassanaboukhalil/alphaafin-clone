import Image from "next/image";
import homeRoofOrange from "@/assets/home-roof-2.svg";
import happyFamily from "@/assets/services/sliderImg-3.jpg";

const WhyToChooseUs = () => {
  return (
    <section className="bg-[#2a2c38] text-white py-12 px-4 md:px-0 lg:py-0 lg:flex">
      <div className="hidden lg:flex flex-col w-[10%]">
        <div className="bg-color-1 h-[65%]" />
        <div className="bg-color-2 h-[35%]" />
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:bg-color-4 lg:rounded-3xl">
        {/* Icon and Title */}
        <div className="relative w-full max-w-3xl flex flex-col items-start mb-8 md:px-8 lg:w-auto">
          <div className="relative w-full h-12 md:h-16 mb-4 md:w-[20%] lg:w-[38%]">
            <Image
              src={homeRoofOrange}
              alt="Home Roof Orange Icon"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-start bg-[#22252a] lg:font-bold lg:text-5xl">
            We Believe You&apos;re Bright
          </h2>
        </div>

        <div className="flex flex-col">
          {/* Family Image */}
          <div className="w-full max-w-5xl h-72 md:h-96 mb-8 md:flex md:justify-end lg:h-[36rem]">
            <Image
              src={happyFamily}
              alt="Happy Family"
              // layout="fill"
              // objectFit="cover"
              // quality={100}
              className="rounded-md md:object-cover md:w-[90%]"
            />
          </div>

          {/* Info Boxes */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 md:w-full md:justify-between md:h-48 md:relative">
            <div className="bg-white text-black p-6 w-64 text-center border-b-8 border-color-3 rounded-3xl md:py-12 md:absolute md:bottom-20 md:z-10 md:left-16">
              <h3 className="text-3xl font-bold md:text-5xl">320+</h3>
              <p className="text-lg font-semibold">Lenders</p>
            </div>
            <div className="bg-white text-black p-6 w-64 text-center border-b-8 border-color-3 rounded-3xl md:py-12 md:absolute md:right-16">
              <h3 className="text-3xl font-bold md:text-5xl">20+</h3>
              <p className="text-lg font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyToChooseUs;
