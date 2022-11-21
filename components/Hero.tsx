import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import { SocialIcon } from "react-social-icons";
import { PageInfo, Social } from "../typings";
import { urlFor } from "../sanity";
import GridEffect from "./GridEffect";

type Props = { pageInfo: PageInfo; socials: Social[] };

function Hero({ pageInfo, socials }: Props) {
  const [text, count] = useTypewriter({
    // words: ["Design.tsx", "<Develop />", "// Deploy"],
    words: ["Welcome ^.^", "Nice to meet you.", "Let's build!"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden relative">
      <div className="absolute top-0 w-full h-[60%] bg-gradient-to-b from-[rgb(15,15,15)] to-transparent" />
      <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[rgb(15,15,15)] to-transparent" />
      <div className="absolute left-0 w-[30%] h-full bg-gradient-to-r from-[rgb(15,15,15)] to-transparent" />
      <div className="absolute right-0 w-[30%] h-full bg-gradient-to-l from-[rgb(15,15,15)] to-transparent" />

      <div className="z-20 w-full h-full flex flex-col justify-center relative">
        <h1 className="text-7xl md:text-9xl tracking-wide font-bold uppercase drop-shadow-xl">
          {pageInfo.name}
        </h1>
        <h2 className="uppercase tracking-wide">{pageInfo.role}</h2>
        <h1 className="text-2xl lg:6xl text-[#709dff] font-semibold px-10 pt-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#709dff" />
        </h1>
        <div className="pt-5">
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
  );
}

export default Hero;
