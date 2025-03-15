import "../styles/global.css";
import { useState } from "react";
import avatar from "../../public/avatar.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQuery";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img src={avatar.src} alt="Profile Picture of Artfolio Website" />
      </div>

      {/* Title */}

      <h1 className="text-lg font-bold">
        <a href="/">Artfolio</a>
      </h1>

      {/* check if we are on mobile or not */}
      {matches && (
        <div className="flex gap-12">
          <a href="/about">About</a>
          <a href="/arts">Arts</a>
          <a href="/contact">Contact</a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prev) => !prev)}
          className="space-y-1 cursor-pointer z-50"
        >
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-4 bg-black"></span>
        </div>
      )}
      {toggled && !matches && (
        <div className="flex fixed bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
          <div className="flex flex-col gap-12">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/arts">Arts</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
