import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="h-screen">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Experience
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative text-left md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
      >
        <div className="flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </div>
  );
}

export default WorkExperience;
