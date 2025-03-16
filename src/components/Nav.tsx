import "../styles/global.css";
import { useState } from "react";
// import avatar from "../../public/avatar.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <div className="flex justify-between items-center gap-5">
        {/* <img src={avatar.src} alt="Profile Picture of Artfolio Website" /> */}
        <img src="/avatar.png" alt="Profile Picture of Artfolio Website" />
        <h1 className="text-lg font-bold">
          <a href="/">Mahmud's Artfolio</a>
        </h1>
      </div>

      {/* check if we are on mobile or not */}
      {matches && (
        <div className="flex gap-12">
          <a href="#arts">Arts</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prev) => !prev)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{
              rotateZ: toggled ? 45 : 0,
              y: toggled ? 8 : 0,
              width: 32,
            }}
            className="block h-0.5 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              width: toggled ? 0 : 24,
            }}
            className="block h-0.5 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 bg-black"
          ></motion.span>
        </div>
      )}
      {toggled && !matches && (
        <div className="flex fixed bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-12"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/">
              Arts
            </motion.a>
            <motion.a variants={itemMotion} href="/">
              Contact
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
}
