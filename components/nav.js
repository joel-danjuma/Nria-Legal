"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigation = ["About", "Services", "Testimonials"];
  return (
    <nav className="px-5 w-full relative flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0 bg-gray-100">
      {/* Logo  */}
      {/* Mobile Nav */}
      <div className="container mx-auto ">
        <>
          <div className="lg:hidden flex flex-wrap items-center justify-between w-full ">
            <Link href="/">
              <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-500">
                <span>Nria</span>
              </div>
            </Link>

            <button
              aria-label="Toggle Menu"
              className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-500 dark:focus:bg-trueGray-700"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {open && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!open && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
            {open && (
              <div className="flex flex-col w-full space-y-5 lg:hidden pt-5">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <div className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                        {item}
                      </div>
                    </Link>
                  ))}
                  <Link href="#contact">
                    <div className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                      Contact Us
                    </div>
                  </Link>
                </>
              </div>
            )}
          </div>
        </>
      </div>
      {/* Desktop Nav */}
      <div className="lg:flex hidden w-full container mx-auto justify-between text-center lg:items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-500">
            <span>Nria</span>
          </div>
        </Link>
        <ul className="justify-center flex pt-6 list-none lg:pt-0">
          {navigation.map((item, index) => (
            <li className="mr-3 nav__item" key={index}>
              <Link href={`#${item.toLowerCase()}`}>
                <div className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                  {item}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#contact">
          <div className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            Contact Us
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
