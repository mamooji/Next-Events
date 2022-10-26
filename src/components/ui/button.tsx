import Link from "next/link";
import React from "react";

interface Props {
  link?: string;
  children: React.ReactNode;
  onClick?: () => any;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button: React.FC<Props> = ({ link, children, onClick, type }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        className="mr-2 mt-8 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
