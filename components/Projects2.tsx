import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = { projects: Project[] };

function Projects2({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col overflow-hidden justify-evenly text-center items-center z-0 pt-16"
    >
      <div>
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
        <h3 className="tracking-[3px] text-gray-500 text-sm uppercase text-center">
          What i've built
        </h3>
      </div>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#709DFF]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 items-center "
          >
            <div className="md:hover:scale-105 ease-in duration-300">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative max-w-[700px] rounded-xl p-4 shadow-xl shadow-black bg-[rgb(36,36,36)] group md:hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]"
              >
                <img
                  src={urlFor(project.image).url()}
                  alt="image"
                  className="rounded-xl md:group-hover:opacity-10 "
                />
                <div className="hidden md:group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] space-y-2">
                  <h3 className="uppercase tracking-widest text-white text-2xl font-bold text-center">
                    {project.title}
                  </h3>
                  <div className="flex flex-row justify-center space-x-4">
                    {project?.technologies.map((skill) => {
                      return (
                        <img
                          key={skill._id}
                          src={urlFor(skill.image).url()}
                          alt="tech used"
                          className="w-10 h-10 object-contain"
                        />
                      );
                    })}
                  </div>

                  <Link href="/">
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                      More Info
                    </p>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="md:hidden space-y-2">
              <h3 className="uppercase tracking-widest text-white text-2xl font-bold text-center">
                {project.title}
              </h3>
              <div className="flex flex-row justify-center space-x-4">
                {project?.technologies.map((skill) => {
                  return (
                    <img
                      key={skill._id}
                      src={urlFor(skill.image).url()}
                      alt="tech used"
                      className="w-10 h-10 object-contain"
                    />
                  );
                })}
              </div>

              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer shadow-xl shadow-black">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[25%] bg-[#709DFF]/10 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects2;
