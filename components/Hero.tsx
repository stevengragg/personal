import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
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
      <div>
        <h2 className="text-sm uppercase text-theme1 pb-2 tracking-widest">
          Full-stack Web Developer
        </h2>
        <h1 className="font-semibold text-5xl lg:text-6xl px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#227C70" />
        </h1>
      </div>
    </div>
  );
}
