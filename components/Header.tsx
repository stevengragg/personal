import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className=" sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/stevengragg"
          fgColor="#E6E2C3"
          bgColor="transparent"
          target="_blank"
          className="cursor-pointer"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/devsteve05"
          fgColor="#E6E2C3"
          bgColor="transparent"
          target="_blank"
          className="cursor-pointer"
        />
        <SocialIcon
          url="https://twitter.com/stevenitsme_5"
          fgColor="#E6E2C3"
          bgColor="transparent"
          target="_blank"
          className="cursor-pointer"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <SocialIcon
          url="mailto:steven@ionainnovlabs.com"
          fgColor="#E6E2C3"
          bgColor="transparent"
          target="_blank"
          className="cursor-pointer"
        />
        <span className="text-theme4 font-bold text-sm uppercase hidden md:inline-flex">
          {" "}
          Get in touch
        </span>
      </motion.div>
    </header>
  );
}
