import { NextPage } from "next";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Newsletter from "../../components/newsletter";
import Image from "../../components/image";

import projectsBackground from "../../public/backgrounds/roadmap.jpg";
import nowcastingBackground from "../../public/backgrounds/nowcasting.jpg";
import openEnergyBackground from "../../public/backgrounds/open-energy.jpg";
import mappingBackground from "../../public/backgrounds/mapping.jpg";

const ProjectTeaser = ({
  name,
  description,
  link,
  image,
}: {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
}) => {
  return (
    <div className="grid mt-8 sm:grid-cols-2 text-ocf-black-100 gap-x-8">
      <div className="flex items-center justify-center max-w-md px-8 mx-auto text-center sm:text-left">
        <div className="">
          <h3 className="mb-4 text-3xl">{name}</h3>
          <p>{description}</p>
          <a
            className="inline-block px-8 py-5 my-8 text-white rounded-md sm:mb-0 bg-ocf-black-100"
            href={link}
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="relative hidden max-w-md mr-8 h-80 sm:block">
        <Image
          src={image}
          alt="Background image displaying clouds"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

function ProjectTeaserSpacer() {
  return (
    <div className="w-full">
      <div className="mx-8 mt-8 mb-10 border-t border-gray-300" />
    </div>
  );
}

const Projects: NextPage = () => {
  return (
    <div className="bg-white ">
      <Header />
      <header>
        <header className="relative" style={{ height: "32.25rem" }}>
          <Image
            src={projectsBackground}
            alt="Background image displaying clouds"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            className="z-0 "
          />
          <div className="pt-40">
            <h2 className="relative z-20 text-3xl font-light text-center text-white md:text-6xl">
              Projects
            </h2>
          </div>
        </header>

        <main className="relative z-20 -mt-40">
          <div className="px-8 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="container flex flex-col justify-center px-5 py-6 mx-auto bg-white rounded-lg shadow sm:px-6 h-60">
              <p className="mx-auto text-xl font-light text-ocf-black-100 md:text-3xl md:max-w-2xl">
                We develop projects that use computers to reduce carbon
                emissions. Our projects span everything from reporting to data
                management.
              </p>
            </div>
          </div>
        </main>
      </header>
      <section className="container px-4 mx-auto sm:p-0 mb-36">
        <ProjectTeaser
          name="Nowcasting"
          description="Forecasting solar photovoltaic (PV) power production is hard: As clouds move over PV panels, the power output moves up and down rapidly."
          link="/projects/nowcasting"
          image={nowcastingBackground}
        />
        <ProjectTeaserSpacer />
        <ProjectTeaser
          name="Solar Panel Mapping"
          description="To accurately forecast solar power generation, we need to know where all the PV panels are. That is still largely unknown today in the UK."
          link="/projects/mapping"
          image={mappingBackground}
        />
        <ProjectTeaserSpacer />
        <ProjectTeaser
          name="Open Energy Data"
          description="Data is needed for everything: To balance the grid, to decide where to install the next wind farm, to train machine learning models and more."
          link="/projects/open-energy"
          image={openEnergyBackground}
        />
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Projects;
