"use client";

// import { useTheme } from "next-themes";
// import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // const { theme } = useTheme();
  return (
    <div className="py-8 flex flex-col px-5 md:px-10 justify-start items-start border-t border-gray-300 dark:border-gray-600 mt-10 space-y-6">
      <Link href={"/"} className="flex space-x-2 items-center">
        <div className="text-2xl text-gray-800 dark:text-gray-200">
          Folha do <span className="font-bold text-red-700 underline">CODEFAS</span>
        </div>
      </Link>
      <div className="flex flex-col md:flex-row items-start md:space-x-10 space-y-4 md:space-y-0">
        <Link
          href={"/"}
          className="text-gray-700 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 transition-colors duration-300"
        >
          Terms of Use
        </Link>
        <Link
          href={"/"}
          className="text-gray-700 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 transition-colors duration-300"
        >
          Privacy Policy
        </Link>
        <Link
          href={"/"}
          className="text-gray-700 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 transition-colors duration-300"
        >
          Cookie Policy
        </Link>
      </div>
      <div className="text-gray-600 dark:text-gray-500 text-sm">
        © 2025 Folha do CODEFAS. All rights reserved.
      </div>
    </div>
  );
}
