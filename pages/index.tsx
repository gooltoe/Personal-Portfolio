import React, { useState, MouseEvent, useRef } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

import Cursor from "../components/Cursor";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects2";
import ContactMe from "../components/ContactMe";
import ContactMe2 from "../components/ContactMe2";

import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import Expertise from "../components/Expertise";

type Props = {
  skills: Skill[];
  socials: Social[];
  projects: Project[];
  pageInfo: PageInfo;
};

const useMove = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    // e.preventDefault();
    e.persist();
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
  };
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  };
};

const Home = ({ skills, socials, projects, pageInfo }: Props) => {
  const { x, y, handleMouseMove } = useMove();

  return (
    <div onMouseMove={handleMouseMove} className="outermost">
      {/* Cursor */}
      <Cursor x={x} y={y} />

      <Head>
        <title>Joe Rho - Web Developer</title>
      </Head>

      {/* Header */}
      <NavBar socials={socials} />

      {/* Hero */}
      <section id="Hero" className="snap-start">
        <Hero pageInfo={pageInfo} socials={socials} />
      </section>

      {/* Expertise */}
      <section id="Expertise">
        <Expertise />
      </section>

      {/* About */}
      {/* <section id="About" className="snap-center md:px-[10vw]">
        <About pageInfo={pageInfo} />
      </section> */}

      {/* Experience */}
      {/* <section id="Experience" className="snap-center px-[10vw]">
        <WorkExperience />
      </section> */}

      {/* Skills */}
      {/* <section id="Skills" className="snap-start px-[10vw]">
        <Skills skills={skills} />
      </section> */}

      {/* Projects */}
      {/* <section id="Projects" className="snap-start">
        <Projects projects={projects} />
      </section> */}

      {/* Contact Me */}
      <section id="Contact" className="snap-start">
        <ContactMe2 socials={socials} />
      </section>

      <footer className="sticky bottom-5 w-fill">
        <div className="flex justify-end pr-10">
          <Link href="#Hero" scroll={true}>
            <ArrowUpCircleIcon className="w-12  cursor-pointer text-gray-500 hover:text-[#709DFF] transition duration-300" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const skills = await fetchSkills();
  const socials = await fetchSocials();
  const pageInfo = await fetchPageInfo();
  const projects = await fetchProjects();

  return {
    props: {
      skills,
      socials,
      pageInfo,
      projects,
    },
    revalidate: 10,
  };
};
