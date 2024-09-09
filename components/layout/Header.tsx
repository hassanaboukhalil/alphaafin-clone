import Link from "next/link";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="max-w-full my-container py-6 flex flex-wrap items-center justify-between bg-color-8 lg:py-0">
      <Link href="/" className="w-full md:w-fit flex justify-center p-[10px]">
        <Logo />
      </Link>
      <Navbar />
      <MobileNav />
    </header>
  );
};
export default Header;
