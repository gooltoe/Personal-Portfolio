import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import { SocialIcon } from "react-social-icons";
import { PageInfo, Social } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo; socials: Social[] };

function Hero({ pageInfo, socials }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, my name is ${pageInfo.name}`, "<Developer />", "<Designer />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-28">
      <div className="hover:scale-150 ease-in duration-700">
        <BackgroundCircles />
      </div>

      <Image
        className="relative rounded-full mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        width={200}
        height={200}
        alt="profile"
      />
      <div className="z-20">
        <h2 className="uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#709DFF" />
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
