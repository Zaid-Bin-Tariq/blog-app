"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BsMoon, BsSun } from "react-icons/bs";

const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="w-full border-b border-black/80 sticky top-0 bg-white dark:bg-neutral-900 z-50">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Left: Hamburger & Nav */}
        <div className="flex items-center gap-6">
          {/* Hamburger */}
          <button className="flex flex-col gap-1 mr-3 group" aria-label="Open menu">
            <span className="block w-6 h-0.5 bg-black dark:bg-white group-hover:bg-pink-400 transition" />
            <span className="block w-6 h-0.5 bg-black dark:bg-white group-hover:bg-pink-400 transition" />
          </button>
          {/* Nav */}
          <nav className="flex items-center gap-6 text-base font-medium">
            <a href="#" className="text-black dark:text-white">
              Home
            </a>
            <a href="#" className="text-black dark:text-white">
              Pages
            </a>
            <a href="#" className="text-black dark:text-white">
              Blog
            </a>
            <a href="#" className="text-black dark:text-white">
              Contact
            </a>
          </nav>
        </div>
        {/* Center: Logo */}
        <div className="flex flex-col items-center">
          <span className="text-3xl font-serif font-normal text-black dark:text-white">
            Athena
          </span>
          <span className="text-xs tracking-wider text-neutral-700 dark:text-neutral-300 mt-0.5">
            Creative Magazine
          </span>
        </div>
        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {dark ? (
            <BsSun
              className="text-xl cursor-pointer text-yellow-400"
              onClick={() => setDark(false)}
              title="Switch to light theme"
            />
          ) : (
            <BsMoon
              className="text-xl cursor-pointer text-black"
              onClick={() => setDark(true)}
              title="Switch to dark theme"
            />
          )}
          <span className="h-5 border-l border-black dark:border-neutral-400 mx-1" />
          <FaFacebookF className="text-lg cursor-pointer text-black dark:text-white" />
          <FaXTwitter className="text-lg cursor-pointer text-black dark:text-white" />
          <FaPinterestP className="text-lg cursor-pointer text-black dark:text-white" />
          <FaInstagram className="text-lg cursor-pointer text-black dark:text-white" />
          <span className="h-5 border-l border-black dark:border-neutral-400 mx-1" />
          <FiSearch className="text-xl cursor-pointer text-black dark:text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
