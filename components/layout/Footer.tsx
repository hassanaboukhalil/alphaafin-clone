"use client";
import Link from "next/link";
import { footerLinks } from "@/constants/footerLinks";
import { socialMedia } from "@/constants/socialMedia";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import Section from "./Section";
import { MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";

const contactInfo = [
  {
    id: "0",
    label: "Sydney, Austrailia",
    icon: <MapPin fill="#FF9021" color="#2a2c38" size={20} />, // color="#FF9021"
  },
  {
    id: "1",
    label: "0468328227",
    icon: <Phone fill="#FF9021" color="#2a2c38" size={20} />,
  },
];

const Footer = () => {
  return (
    <Section className="flex flex-col bg-color-4 gap-2 px-0">
      <div className="py-12 bg-color-1 px-[20px] lg:flex lg:gap-12">
        <div>
          <h4 className="h4 text-color-3">Quick Contact</h4>
          <p className="pt-6 text-white">
            At Alphaa Financial Solutions, we believe in empowering your
            property dreams with our premium financial services.{" "}
          </p>
          <div className="pt-8">
            {contactInfo.map((info) => {
              return (
                <div key={info.id} className="flex items-center pt-4">
                  {info.icon}
                  <span className="text-white pl-4 body-1">{info.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-3xl bg-color-4 p-6 flex flex-col gap-5 mt-8 mx-6 md:w-fit lg:w-[50%] lg:py-12 lg:m-0">
          <h2 className="text-white">Opening Hours</h2>
          <p className="flex justify-between uppercase">
            <span className="text-color-3">MON TO fri</span>
            <span className="text-white">9:00AM | 5:00PM</span>
          </p>
          <p className="flex justify-between uppercase">
            <span className="text-color-3">SAT TO sun</span>
            <span className="text-white">Appointments only</span>
          </p>
          <Button className="text-black w-full bg-color-3 text-center uppercase">
            Schedule a visit
          </Button>
        </div>
      </div>
      <div className="flex flex-col py-8 gap-6 bg-color-1 px-[20px] md:flex-row md:justify-between">
        <div className="flex justify-center gap-2">
          {socialMedia.map((social) => {
            return (
              <div key={social.id} className="p-2 bg-color-3">
                {social.icon}
              </div>
            );
          })}
        </div>
        <span className="body-1 text-center text-white">
          2024 © All Rights Reserved | Developed with <span>❤️</span>
          &nbsp;by&nbsp;
          <Link className="text-color-3" href="https://psyber.co/">
            Psyber Inc
          </Link>
        </span>
      </div>
    </Section>
  );
};
export default Footer;
