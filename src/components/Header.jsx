// TODO: Check a href vs Link usage
import { Link } from 'gatsby';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Header() {
  const navigation = [
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'About',
      href: '/#about',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
  ];

  return (
    <header>
      <Disclosure as="nav" className="bg-black">
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 border-2 border-red-300">
                <div className="flex items-center border-2 border-red-300">
                  <div className="flex-shrink-0 text-white uppercase tracking-widest">
                    Open Climate Fix
                  </div>
                </div>
                <div className="hidden md:block border-2 border-red-300">
                  <div className="ml-10 flex items-baseline space-x-4 uppercase">
                    {navigation.map(({ name, href }) => (
                      <a
                        key={name}
                        href={href}
                        className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map(({ name, href }) => (
                  <a
                    key={{ name }}
                    href={href}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}

export default Header;
