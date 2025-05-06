import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <>
      {/* Overlay */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black opacity-70 z-[1001]"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-rose-900 text-white z-[1050] transform transition-transform duration-500 ${navOpen} flex flex-col justify-center space-y-6`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-5 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </>
  );
};

export default MobileNav;
