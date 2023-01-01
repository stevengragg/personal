import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className=" sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/stevengragg"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="cursor-pointer"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/devsteve05"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="cursor-pointer"
        />
        <SocialIcon
          url="https://twitter.com/stevenitsme_5"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-row items-center">
        <SocialIcon
          url="mailto:steven@ionainnovlabs.com"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="cursor-pointer"
        />
        <span className="text-gray-400 font-bold text-sm uppercase hidden md:inline-flex">
          {" "}
          Get in touch
        </span>
      </div>
    </header>
  );
}
