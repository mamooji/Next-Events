import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  children: React.ReactNode;
}
const Button: React.FC<Props> = ({ link, children }) => {
  return (
    <Link href={link}>
      <a className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {children}
      </a>
    </Link>
  );
};

export default Button;
