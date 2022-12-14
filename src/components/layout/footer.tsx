import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-900 md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="mb-4 flex items-center sm:mb-0">
          <img
            src="/images/profileLOGO.png"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Next Events
          </span>
        </a>
        <ul className="mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="/" className="hover:underline">
          KreaM™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
