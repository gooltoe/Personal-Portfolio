import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col overflow-hidden justify-center text-center items-center z-0"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#709DFF]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 items-center"
          >
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt="image"
              className=" h-[250px]"
            />
            <div className="space-y-5 px-0 max-w-3xl">
              <h4 className="text-4xl font-semibold text-center">
                {i + 1} of {projects.length}
                {": "}
                <span className="underline decoration-[#709DFF]/50">
                  {project.title}
                </span>
              </h4>
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

              <p className="text-center  max-h-[150px] overflow-hidden scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#709DFF]/80 md:max-h-[200px] md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[25%] bg-[#709DFF]/10 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
