import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col justify-evenly items-center"
    >
      <div className="text-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pl-[20px]">
          About
        </h3>
        <h3 className="tracking-[3px] text-gray-500 text-sm uppercase pl-[3px]">
          Who I am
        </h3>
      </div>

      <div className="flex flex-col text-center justify-evenly items-center px-10 md:text-left md:flex-row">
        <div className="md:max-w-[40%] md:hover:scale-105 duration-300 ease-in">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            src={urlFor(pageInfo?.profilePic).url()}
            className="mb-20 w-72 h-72  md:mb-0 md:w-[100%] md:h-[100%] shadow-xl rounded-xl p-4"
          />
        </div>

        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="space-y-10 px-0 md:px-10 md:max-w-[60%]"
        >
          {/* <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#709DFF]/50">little</span>{" "}
            background
          </h4> */}
          <p className="text-base max-h-[150px] overflow-hidden scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#709DFF]/80 md:max-h-[250px]">
            {pageInfo?.backgroundInformation}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
