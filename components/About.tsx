import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-theme1 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src="/SGLogo.svg"
        className="-mb-20 md:mb-0 flex-shrink-0w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-theme1">
          A <span className="underline decoration-theme1/50">little</span>{" "}
          background story about me.
        </h4>
        <p className="text-theme4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          sagittis eros quis luctus lobortis. Proin hendrerit porttitor nulla,
          sit amet sagittis ipsum. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}
