"use client";

import links from "@/constants/links";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const handleSubMenuToggle = (id: string) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <div className="lg:hidden flex flex-col items-start w-full relative z-50 md:w-auto">
      <div className="w-full flex justify-between items-center p-4 bg-white">
        <Button
          className="flex items-center justify-center p-0"
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X color="#FF9021" size={32} />
          ) : (
            <Menu color="#FF9021" size={32} />
          )}
        </Button>
        <Button className="hidden md:inline-block text-white w-full bg-color-1 text-center uppercase font-bold ml-6">
          call us anytime
        </Button>
      </div>
      {isOpen && (
        <nav className="w-screen absolute left-[-20px] z-10 top-[5rem] md:left-[-35.7rem]">
          <ul className="flex flex-col z-10">
            {links.map((link) => (
              <li key={link.id}>
                <Button
                  asChild
                  variant="ghost"
                  className={`w-full p-[30px] font-bold flex items-center justify-start ${
                    pathname === link.href
                      ? "bg-color-3 hover:bg-color-3"
                      : "bg-white hover:bg-white"
                  }`}
                  onClick={() => {
                    if (link.subLinks) {
                      handleSubMenuToggle(link.id);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-color-4 navLink h-fit border-b-[1px] border-[#E0E0E0]"
                  >
                    {link.label}
                    {link.subLinks && (
                      <ChevronDown className="ml-2" color="#000" size={20} />
                    )}
                  </Link>
                </Button>
                {link.subLinks && openSubMenu === link.id && (
                  <div>
                    {link.subLinks.map((subLink: any) => (
                      <Button
                        key={subLink.id}
                        asChild
                        variant="ghost"
                        className="w-full p-[30px] ml-2 font-bold bg-white border-b-[1px] border-[#E0E0E0] flex items-center justify-start"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link
                          href={"#" + subLink.label}
                          className="text-color-4 navLink h-fit uppercase"
                        >
                          {subLink.label}
                        </Link>
                      </Button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
