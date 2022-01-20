import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";

import cloudsBackground from "../public/backgrounds/clouds.jpg";
import ocfLogoWhite from "../public/logos/ocf_logo_white.svg";
import nowcastingImage from "../public/backgrounds/nowcasting.jpg";
import mappingImage from "../public/backgrounds/mapping.jpg";
import openenergyImage from "../public/backgrounds/open-energy.jpg";

import Footer from "../components/footer";

import LogoCloud, { PARTNER_LOGOS } from "../components/logoCloud";

import Newsletter from "../components/newsletter";
import Image from "../components/image";
import Link from "next/link";
import GenericMetaHeaders from "../components/meta-headers";
import BlogPostsTeaser from "../components/blog-posts-teaser";
import { BlogPost, getAllPosts } from "../lib/blog";

const projects = [
  {
    name: "Nowcasting",
    description:
      "Forecasting solar photovoltaic (PV) power production is hard: As clouds move over PV panels, the power output moves up and down rapidly.",
    image: nowcastingImage,
    link: "/projects/nowcasting",
  },
  {
    name: "Solar Panel Mapping",
    description:
      "To accurately forecast solar power generation, we need to know where all the PV panels are. That is still largely unknown today in the UK.",
    image: mappingImage,
    link: "/projects/pv-mapping",
  },
  {
    name: "Open Energy Data",
    description:
      "Data is needed for everything: To balance the grid, to decide where to install the next wind farm, to train machine learning models and more.",
    image: openenergyImage,
    link: "/projects/open-energy-data",
  },
];

const Home = ({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const ocfDescription =
    "Open Climate Fix is a non-profit product lab, totally focused on reducing greenhouse gas emissions as rapidly as possible. Every part of the organisation is designed to maximise climate impact, such as our open and collaborative approach, our rapid prototyping, and our attention on finding scalable and practical solutions.";
  return (
    <div>
      <Head>
        <GenericMetaHeaders />
        <title>Open Climate Fix</title>
        <meta name="description" content={ocfDescription} />
      </Head>

      <main>
        <section className="w-screen h-screen">
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={cloudsBackground}
                alt="Background image displaying clouds"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
            <div className="absolute inset-0 bg-blue-100 mix-blend-multiply" />
          </div>
          <div className="container absolute inset-0 h-8 px-6 mx-auto top-20 lg:h-10 sm:px-12">
            <div className="relative w-full h-full">
              <Image
                unoptimized={true}
                src={ocfLogoWhite}
                alt="Logo of Open Climate Fix"
                layout="fill"
                objectFit="contain"
                objectPosition="left top"
              />
            </div>
          </div>
          <div className="container relative flex h-full px-6 mx-auto sm:px-12 ">
            <div className="my-auto">
              <h1 className="mb-10 text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl lg:font-bold text-shadow sm:leading-tight lg:leading-tight">
                Using Computers to
                <br /> Reduce Carbon Emissions
              </h1>
              <Link href="/projects">
                <a className="px-6 py-3 text-base font-semibold bg-yellow-400 sm:text-lg">
                  View Projects
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="relative px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl">
              About Us
            </h2>
            <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
              <p>{ocfDescription}</p>
              <p>
                By using an open-source approach, we can draw upon a much larger
                pool of expertise than any individual company, so combining
                existing islands of knowledge and accelerating progress.
              </p>
              <p>
                Our approach is to search for ML (Machine Learning) problems
                where, if we solve a well-defined ML task, then there is likely
                to be a large climate impact. Then, for each of these
                challenges, we will:
              </p>
              <ol role="list">
                <li>
                  <strong>Collate &amp; release data</strong>, and write
                  software tools to make it super-easy for people to consume
                  this data.
                </li>
                <li>
                  <strong>Run a collaborative “global research project”</strong>{" "}
                  where everyone from 16-year-olds to PhD students to corporate
                  research labs can help solve the ML task.
                </li>
                <li>
                  <strong>Help to put good solutions into production</strong>,
                  once the community has developed them, so we can be reducing
                  emissions ASAP.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="px-16 pb-20 bg-white">
          <div className="mx-auto max-w-prose">
            <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-center sm:text-4xl">
              Our Partners
            </h2>
            <LogoCloud
              logos={[
                PARTNER_LOGOS["google"],
                PARTNER_LOGOS["ngeso"],
                PARTNER_LOGOS["nvidia"],
                PARTNER_LOGOS["shuttleworth"],
                PARTNER_LOGOS["esa"],
                PARTNER_LOGOS["odi"],
                PARTNER_LOGOS["innovateuk"],
                PARTNER_LOGOS["ucl"],
              ]}
            />
          </div>
        </section>

        <section className="max-w-6xl px-12 py-20 mx-auto sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="mx-auto space-y-5 text-center sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Our Projects
              </h2>
              <p className="text-xl text-gray-300">
                From understanding where solar generation capacity like solar
                panels is located, opening up energy data to predicting how much
                energy will be produced – our projects cover a variety of
                topics.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
            >
              {projects.map(({ name, description, image, link }) => (
                <li key={name} className="text-left bg-gray-800 rounded-lg">
                  <a className="space-y-6 xl:space-y-10" href={link}>
                    <div className="relative w-full mx-auto aspect-w-16 aspect-h-10">
                      <Image
                        src={image}
                        alt={`Cover image for ${name} project`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="px-6 pb-10 space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="leading-6">
                        <h3 className="text-xl font-medium text-white">
                          {name}
                        </h3>
                        <p className="mt-3 text-gray-300">{description}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-8 py-20 bg-white">
          <div className="mx-auto space-y-5 text-center sm:space-y-4 max-w-prose">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              From the Blog
            </h2>
            <p className="text-xl text-gray-700">
              One of our biggest goals at Open Climate Fix is transparency. We
              want to let people take part in the work we do and we think that
              is only possible by openly communicating about it. This blog is
              one part of how we want to achieve that.
            </p>
          </div>
          <BlogPostsTeaser allPosts={allPosts} />
          <div className="w-full mt-8 text-center">
            <a
              href="/blog"
              className="text-base font-bold text-danube-600 hover:text-danube-500"
            >
              Read more blog posts<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

interface Props {
  allPosts: BlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = getAllPosts(3);

  return {
    props: { allPosts },
  };
};
