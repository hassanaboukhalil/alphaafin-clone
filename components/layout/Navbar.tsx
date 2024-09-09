"use client";
import links from "@/constants/links";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="hidden navbar lg:flex items-center text-xl font-medium">
      {links.map((link) => {
        return (
          <Button
            asChild
            key={link.id}
            // className="flex items-center gap-x-2 hover:text-color-1"
            className="flex items-center gap-x-2 text-color-1 font-bold hover:bg-color-1 hover:text-white"
          >
            <Link href={link.href}>
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        );
      })}
      <Button className="text-white w-full bg-color-1 text-center uppercase font-bold ml-6 hover:bg-color-1 hover:text-white hover:scale-110">
        call us anytime
      </Button>
    </nav>
  );
};
export default Navbar;
