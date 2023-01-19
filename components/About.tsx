import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row justify-evenly mx-auto items-center"
    >
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
        <h4 className="text-xl font-semibold text-theme4">
          A <span className="underline decoration-theme1/50">little</span> bit
          about myself.
        </h4>
        <h3>"I am a fan of 'Interstellar', a 2014 movie"</h3>
        <p className="text-theme4 text-base">
          I really love everything about our universe. Curiosity drives me to
          love it more. I became a Full-stack Web Developer because of curiosity
          too. I do have experience with specific technologies in web
          development and mobile app development. I started my journey as a
          freelancer or an individual contractor under Upwork Freelancing
          platform. I love to create personalize solution for different problems
          business may encounter on their operations. I am basketball fan and I
          play sometimes. I also play online FPS games. I also mentor students
          that wants to be a developer in the future. Let's dive-in to my
          portofolio, shall we?
        </p>
      </div>
    </motion.div>
  );
}
