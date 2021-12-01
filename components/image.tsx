import NextImage, { ImageLoaderProps, ImageProps } from "next/image";

const Image = (props: ImageProps) => {
  const cloudflareImageLoader = ({
    src,
    width,
    quality,
  }: ImageLoaderProps): string => {
    if (process.env.NODE_ENV === "development") {
      return src;
    }

    if (!quality) {
      quality = 75;
    }
    return `https://ocf-images.openclimatefix.workers.dev?width=${width}&quality=${quality}&image=https://ocf-website.pages.dev${src}`;
  };

  return (
    <NextImage
      loader={cloudflareImageLoader}
      unoptimized={process.env.NODE_ENV === "development"}
      {...props}
    />
  );
};

export default Image;
