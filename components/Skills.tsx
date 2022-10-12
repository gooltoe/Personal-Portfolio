import React from "react";
import Skill from "../components/Skill";
import { Skill as SkillType } from "../typings";

import { motion } from "framer-motion";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <div className=" flex flex-row justify-evenly">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col text-center justify-evenly"
      >
        <div className="mb-20">
          <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pl-[20px]">
            Skills
          </h3>
          <h3 className="tracking-[3px] text-gray-500 text-sm uppercase pl-[3px]">
            What I Can Do
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5  lg:max-h-[100%] md:overflow-x-clip overflow-x-hidden scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#709DFF]/80">
          {skills?.map((skill, i) => {
            if (i < skills.length / 2) {
              return (
                <Skill directionLeft={true} key={skill._id} skill={skill} />
              );
            } else {
              return <Skill key={skill._id} skill={skill} />;
            }
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
