import Image from "next/image";
import Navigation from "./navigation";

export interface IPageHeader {
  bgImage: StaticImageData;
  title: string;
  titleImage?: StaticImageData;
  teaserText?: string;
  teaserVideoURL?: string;
}

const PageHeader = ({
  bgImage,
  teaserText,
  teaserVideoURL,
  title,
  titleImage,
}: IPageHeader) => {
  return (
    <>
      <Navigation />
      <header>
        <header className="relative h-[32.25rem]">
          <Image
            src={bgImage}
            alt="Background image"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            className="z-0 "
          />
          <div className="z-20 pt-40">
            {titleImage ? (
              <div className="relative h-12 sm:h-20">
                <Image
                  src={titleImage}
                  alt={`Logo of the ${title} project`}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                />
              </div>
            ) : (
              <h2 className="relative z-20 text-3xl font-semibold leading-tight text-center text-white md:text-6xl sm:text-5xl lg:text-7xl lg:font-bold text-shadow sm:leading-tight lg:leading-tight">
                {title}
              </h2>
            )}
          </div>
        </header>

        <main className="relative z-20 -mt-40">
          <div className="px-8 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="container flex flex-col justify-center mx-auto bg-white rounded-lg shadow">
              {teaserVideoURL ? (
                <div className="overflow-hidden rounded-lg shadow-xl aspect-w-16 aspect-h-9">
                  <iframe
                    src={teaserVideoURL}
                    frameBorder="0"
                    allow="accelerometer; encrypted-media; gyroscope"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p className="px-5 py-12 mx-auto text-xl font-light text-ocf-black-100 md:text-3xl md:max-w-2xl sm:px-6">
                  {teaserText}
                </p>
              )}
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default PageHeader;
