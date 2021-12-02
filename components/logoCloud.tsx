import Image from "./image";

interface IPartnerLogo {
  name: string;
  link: string;
  image: StaticImageData;
}

import nvidiaLogo from "../public/partners/nvidia.png";
import googleLogo from "../public/partners/google.png";
import esaLogo from "../public/partners/esa.png";

export const PARTNER_LOGOS: {
  [name: string]: IPartnerLogo;
} = {
  nvidia: {
    name: "NVIDIA Foundation",
    link: "https://www.nvidia.com/en-us/foundation/",
    image: nvidiaLogo,
  },
  google: {
    name: "Google.org",
    link: "https://www.google.org/",
    image: googleLogo,
  },
  esa: {
    name: "ESA Business Applications",
    link: "https://business.esa.int/",
    image: esaLogo,
  },
};

const LogoCloud = ({ logos }: { logos: IPartnerLogo[] }) => {
  return (
    <div className="grid grid-cols-2 gap-8 my-2 sm:grid-cols-3 md:grid-cols-4">
      {logos.map(({ name, image, link }: IPartnerLogo) => {
        return (
          <a
            className="relative flex justify-center col-span-1 h-14"
            key={`logo-${name}`}
            href={link}
            type="button"
          >
            <Image
              className="filter grayscale"
              layout="fill"
              objectFit="contain"
              src={image}
              title={name}
              alt={`Logo for ${name}`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default LogoCloud;

// const LOGOS = [
// {
//   name: "ESA Business Applications",
//   image: "esa_space_solutions.png",
//   link: "https://business.esa.int/",
// },
// {
//   name: "Open Data Institute",
//   image: "odi.png",
//   link: "https://theodi.org/",
// },
// {
//   name: "The Alan Turing Institute",
//   image: "turing.png",
//   link: "https://www.turing.ac.uk/",
// },
// {
//   name: "UCL",
//   image: "UCL.jpg",
//   link: "https://www.ucl.ac.uk/",
// },
// {
//   name: "Innovate UK",
//   image: "innovateuk.png",
//   link: "https://www.gov.uk/government/organisations/innovate-uk",
// },
// {
//   name: "The Climate Subak",
//   image: "subak.png",
//   link: "https://www.subak.org/",
// },
// {
//   name: "HAO",
//   image: "hao_black.png",
//   link: "https://haocreative.ca/",
// },
// {
//   name: "Icebreaker One",
//   image: "icebreakerOneURL.png",
//   link: "https://icebreakerone.org/",
// },
// {
//   name: "RAAIS Foundation",
//   image: "raais_foundation.png",
//   link: "https://www.raais.org/",
// },
// ];
