import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import React from "react";
import { Project } from "../../typings";
import { fetchProjects } from "../../utils/fetchProjects";
import { urlFor } from "../../sanity";
import Link from "next/link";

type Props = { project: Project };

const Project = ({ project }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#709DFF]/80 scroll-smooth caret-transparent">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
        <Image
          src={urlFor(project.image).url()}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[90%] z-10">
          <h1 className="py-2 uppercase font-bold text-2xl tracking-widest">
            {project.title}
          </h1>
          <div className="font-semibold">
            {project.technologies.map((tech, i) => {
              if (i < project.technologies.length - 1) {
                return tech.title + " / ";
              } else {
                return tech.title;
              }
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[90%] p-2 pt-8 grid md:grid-cols-6 xl:grid-cols-5 gap-8">
        <div className="col-span-4">
          <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pt-2">
            Project
          </h3>
          <h3 className="tracking-[3px] text-gray-500 text-sm uppercase pb-2">
            Overview
          </h3>
          <p className="py-2">{project.summary}</p>
          <button className="custom-button px-8 py-2 mt-4 mr-4 text-gray-800 font-bold text-lg">
            Demo
          </button>
          <button className="custom-button px-8 py-2 mt-4 text-gray-800 font-bold text-lg">
            Code
          </button>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 shadow-xl rounded-xl p-4">
          <div className="p-2">
            <h3 className="tracking-[3px] text-gray-500 text-sm uppercase">
              Technologies
            </h3>
          </div>
          <div className="">
            {project?.technologies.map((skill) => {
              return (
                <div className="flex items-center py-2 px-6" key={skill._id}>
                  <img
                    src={urlFor(skill.image).url()}
                    alt="tech used"
                    className="w-10 h-10 object-contain"
                  />
                  <p className="px-6 uppercase tracking-wide ">{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Link href="/#Projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await fetchProjects();
  const paths = projects.map((project) => {
    return {
      params: { title: project.title },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const projects = await fetchProjects();
  let project;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].title === context?.params?.title) {
      project = projects[i];
    }
  }
  return {
    props: { project },
  };
};
