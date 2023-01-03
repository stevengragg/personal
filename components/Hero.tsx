import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey! This is Steven Gragg.",
      "Serious-Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeAndCreateCoolStuff />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* Background Circles */}
      <BackgroundCircles />

      <h1 className="font-extrabold text-2xl">
        <span>{text}</span>
        <Cursor cursorColor="#227C70" />
      </h1>
    </div>
  );
}
