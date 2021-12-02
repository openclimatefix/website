import { Fragment } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Navigation() {
  const navigation = [
    { name: "About", href: "#" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <Popover className="w-screen bg-ocf-black-100" as="header">
      {({ open }) => (
        <>
          <div className="container relative flex justify-between mx-auto p-7 sm:px-0">
            <Link href="/">
              <a className="block text-base font-bold leading-7 tracking-widest text-white uppercase">
                Open Climate Fix
              </a>
            </Link>
            <Popover.Button className="sm:hidden">
              {open ? (
                <XIcon className="inline-block text-white w-7 h-7" />
              ) : (
                <MenuIcon className="inline-block text-white w-7 h-7" />
              )}
            </Popover.Button>
            <nav
              className="hidden sm:inline-block text-ocf-gray-10"
              style={{ top: "1.625rem" }}
            >
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="ml-8 uppercase">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              className="relative text-3xl p-7 font-extralight"
              // Nav bar is 5rem high
              style={{ height: "calc(100vh - 5rem)" }}
            >
              <nav>
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block mb-4 text-white uppercase"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <footer className="fixed text-xs bottom-7 text-ocf-gray-10">
                &copy; 2021 Open Climate Fix
              </footer>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
