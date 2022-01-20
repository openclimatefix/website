import { ArrowRightIcon } from "@heroicons/react/solid";

const Newsletter = () => {
  return (
    <section className="w-full px-6 py-10 bg-yellow-400">
      <div className="grid max-w-6xl grid-cols-1 mx-auto md:grid-cols-2 gap-x-8">
        <div>
          <p className="max-w-lg text-2xl font-medium text-ocf-black-100">
            Join our mailing list for updates about our projects, research, and
            more.
          </p>
          <p className="mt-2 mb-4 text-sm leading-relaxed md:ml-0 text-ocf-black-100">
            4x emails per year. Read our{" "}
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
                className="block w-full px-6 py-4 border-white rounded-full focus:ring-black focus:border-black pr-14"
                placeholder="Email"
              />
              <button className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                <ArrowRightIcon
                  className="w-5 h-5 text-gray-400"
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
