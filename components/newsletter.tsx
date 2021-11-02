import { ArrowRightIcon } from "@heroicons/react/solid";

const Newsletter = () => {
  return (
    <section className="bg-yellow-400 w-full px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div>
          <p className="text-2xl font-medium text-ocf-black-100 max-w-lg">
            Join our mailing list for updates about our projects, research, and
            more.
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
  );
};

export default Newsletter;
