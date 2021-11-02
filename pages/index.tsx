import type { NextPage } from "next";
import Head from "next/head";
import Image, { ImageLoaderProps } from "next/image";

import cloudsBackground from "../public/backgrounds/clouds.jpg";
import ocfLogoWhite from "../public/logos/ocf_logo_white.svg";
import Footer from "../components/footer";

import { ArrowRightIcon } from "@heroicons/react/solid";

const cloudflareImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string => {
  if (!quality) {
    quality = 75;
  }
  return `https://ocf-images.openclimatefix.workers.dev?width=${width}&quality=${quality}&image=https://ocf-website.pages.dev${src}`;
};

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
                loader={cloudflareImageLoader}
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
                unoptimized={true}
                src={ocfLogoWhite}
                alt="Logo of Open Climate Fix"
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
        <section className="bg-yellow-400 w-full px-6 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div>
              <p className="text-2xl font-medium text-ocf-black-100 max-w-lg">
                Join our mailing list for updates about our projects, research,
                and more.
              </p>
              <p className="text-xs leading-relaxed mt-2 md:ml-0 mb-4 text-ocf-black-100">
                No spam, we promise. Read our{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <form className="mt-8 mb-2 md:my-auto">
              <div className="">
                <label htmlFor="mce-EMAIL" className="sr-only">
                  Email address
                </label>
                <div className="relative max-w-md md:max-w-full">
                  <input
                    type="text"
                    className="focus:ring-black focus:border-black block w-full rounded-full border-white py-4 px-6 pr-14"
                    placeholder="Email"
                  />
                  <button className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                    <ArrowRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
