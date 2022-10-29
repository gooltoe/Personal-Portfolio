import React, { useState } from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Social } from "../typings";

type Props = { socials: Social[] };

function NavBar({ socials }: Props) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="flex justify-end md:justify-center items-center fixed w-full h-14 z-[100]">
      <div className="">
        <div className="hidden md:flex gap-4 font-semibold">
          <Link href="#Hero">
            <button className="heroButton">\* home *\</button>
          </Link>
          <Link href="#Expertise">
            <button className="heroButton">\* expertise *\</button>
          </Link>
          <Link href="#Contact">
            <button className="heroButton">\* contact *\</button>
          </Link>
        </div>

        <div onClick={handleNav} className="md:hidden pr-8">
          <AiOutlineMenu size={22} className="text-[#33FF00] cursor-pointer" />
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/50 ease-in duration-500 md:hidden"
            : "ease-in duration-500"
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[rgb(15,15,15)] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
          }
        >
          <div onClick={handleNav} className="flex justify-end items-center">
            <AiOutlineClose
              size={22}
              className="text-[#33FF00]  cursor-pointer"
            />
          </div>
          {/* <div className="border-b my-4 border-gray-500 t">
            <p className="py-4 uppercase tracking-widest text-gray-500">
              Let's build
            </p>
          </div> */}
          <div className="flex flex-col py-4 items-start">
            <Link href="#Hero">
              <button className="heroButton my-4">Home</button>
            </Link>
            <Link href="#Expertise">
              <button className="heroButton my-4">Expertise</button>
            </Link>
            <Link href="#Contact">
              <button className="heroButton my-4">Contact</button>
            </Link>
          </div>
          {/* <div className="pt-40">
            <p className="uppercase tracking-widest text-gray-500">
              Let's Connect
            </p>

            <div>
              {socials.map((social) => {
                return (
                  <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor="gray"
                    bgColor="transparent"
                  />
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
