import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <motion.div
      initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      // className="group relative flex cursor-pointer"
      className="shadow-xl rounded-xl p-6 hover:scale-105"
    >
      <div className="lg:grid lg:grid-cols-2 gap-4 justify-center items-center">
        <div className="mx-auto">
          <Image
            src={urlFor(skill?.image).url()}
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="uppercase tracking-widest ">{skill.title}</div>
      </div>

      {/* <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
    </motion.div>
  );
}

export default Skill;
