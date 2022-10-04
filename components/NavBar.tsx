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
    <header className="flex justify-end md:justify-center items-center fixed w-full h-14 z-[100] bg-[rgb(36,36,36)] shadow-xl">
      <div className="pr-4">
        <div className="hidden md:flex">
          <Link href="#Hero">
            <button className="heroButton">Home</button>
          </Link>
          <Link href="#About">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#Skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#Projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#Contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu
            size={22}
            className="text-gray-500  hover:border-[#709DFF]/40 hover:text-[#709DFF]/40 cursor-pointer"
          />
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[rgb(36,36,36)] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div onClick={handleNav} className="flex justify-end items-center">
            <AiOutlineClose
              size={22}
              className="text-gray-500 hover:border-[#709DFF]/40 hover:text-[#709DFF]/40 cursor-pointer"
            />
          </div>
          <div className="border-b my-4 border-gray-500 t">
            <p className="py-4 uppercase tracking-widest text-gray-500">
              Let's build together
            </p>
          </div>
          <div className="flex flex-col py-4 items-start">
            <Link href="#Hero">
              <button className="heroButton my-4">Home</button>
            </Link>
            <Link href="#About">
              <button className="heroButton my-4">About</button>
            </Link>
            <Link href="#Skills">
              <button className="heroButton my-4">Skills</button>
            </Link>
            <Link href="#Projects">
              <button className="heroButton my-4">Projects</button>
            </Link>
            <Link href="#Contact">
              <button className="heroButton my-4">Contact</button>
            </Link>
          </div>
          <div className="pt-40">
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
