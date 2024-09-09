"use client";
import Image from "next/image";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <Image
      className="block"
      src={logo}
      alt="logo"
      width={217.8}
      height={71.48}
    />
  );
};

export default Logo;
