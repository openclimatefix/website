import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import cloudsBackground from "../public/backgrounds/clouds.jpg";
import ocfLogoWhite from "../public/logos/ocf_logo_white.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Open Climate Fix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="w-screen h-screen">
          <div className="h-full w-full absolute inset-0">
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
          <div className="absolute top-20 container mx-auto h-8 lg:h-10 inset-0 px-6 sm:px-12">
            <div className="relative w-full h-full">
              <Image
                src={ocfLogoWhite}
                alt="Background image displaying clouds"
                layout="fill"
                objectFit="contain"
                objectPosition="left top"
              />
            </div>
          </div>
          <div className="flex relative h-full container mx-auto px-6 sm:px-12 ">
            <div className="my-auto">
              <h1 className="text-3xl sm:text-5xl font-semibold lg:text-7xl lg:font-bold text-white mb-10 text-shadow leading-tight sm:leading-tight lg:leading-tight">
                Using Computers <br /> to Fix Climate Change
              </h1>
              <a
                href="#"
                className="bg-yellow-400 px-6 py-3 text-base sm:text-lg font-semibold"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>
        <section className="w-screen h-screen p-10 text-white bg-ocf-black-100">
          TODO
        </section>
      </main>
    </div>
  );
};

export default Home;
