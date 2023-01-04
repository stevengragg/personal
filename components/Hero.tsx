import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey! This is Steven Gragg.",
      "Serious-Guy-who-loves-Universe.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* Background Circles */}
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/steven_profile.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-theme1 pb-2 tracking-widest">
          Full-stack Web Developer
        </h2>
        <h1 className="font-semibold text-5xl lg:text-6xl px-10">
          <span className="mr-3 text-theme4">{text}</span>
          <Cursor cursorColor="#227C70" />
        </h1>
      </div>
      <div className="pt-5 z-20">
        <Link href="#about">
          <button className="btn__hero">About</button>
        </Link>

        <Link href="#projects">
          <button className="btn__hero">Projects</button>
        </Link>
        <Link href="#experience">
          <button className="btn__hero">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="btn__hero">Skills</button>
        </Link>
      </div>
    </div>
  );
}
