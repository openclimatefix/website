import React from 'react';

import { FaTwitter, FaDiscourse, FaYoutube } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';


export default function Footer() {
  return (
    <footer className="bg-black" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="md:grid md:grid-cols-2 md:gap-8 xl:col-span-2">
            <img className="mt-1 w-full h-12" src="https://raw.githubusercontent.com/openclimatefix/website/master/src/images/logos/ocf_icon_small.svg" />
            <div className="grid grid-cols-2 gap-8 mt-12 md:mt-0">
              <div>
                {/* <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3> */}
                <ul className="space-y-4">
                  <li>
                    <a href="/about" className="text-base text-gray-300 hover:text-white">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="/values" className="text-base text-gray-300 hover:text-white">
                      Values
                    </a>
                  </li>

                  <li>
                    <a href="/projects" className="text-base text-gray-300 hover:text-white">
                      Projects
                    </a>
                  </li>

                  <li>
                    <a href="https://apply.workable.com/openclimatefix/" className="text-base text-gray-300 hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                {/* <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3> */}
                <ul className="space-y-4">
                  <li>
                    <a href="https://github.com/openclimatefix" className="text-base text-gray-300 hover:text-white">
                      GitHub
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/openclimatefix" className="text-base text-gray-300 hover:text-white">
                      Twitter
                    </a>
                  </li>

                  <li>
                    <a href="mailto:info@openclimatefix.org" className="text-base text-gray-300 hover:text-white">
                      Press
                    </a>
                  </li>

                  <li>
                    <a href="mailto:info@openclimatefix.org" className="text-base text-gray-300 hover:text-white">
                      Partner
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300">
          
              The latest updates about our projects, research, and more.
              Not more than 4 emails per year.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="emailAddress" className="sr-only">Email address</label>
              <input type="email" name="emailAddress" id="emailAddress" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" className="w-full bg-ocf-yellow border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-black hover:bg-ocf-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-ocf-blue">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="https://github.com/openclimatefix" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <GoMarkGithub className="h-6 w-6" />
            </a>

            <a href="https://twitter.com/openclimatefix" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>

            <a href="https://openclimatefix.discourse.group/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Discourse</span>
              <FaDiscourse className="h-6 w-6" />
            </a>

            <a href="https://www.youtube.com/channel/UCq2-AN_j8BMERxTqdSvtPAg" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">YouTube</span>
              <FaYoutube className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; Open Climate Fix Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
