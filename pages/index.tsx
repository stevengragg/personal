import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Steven | Top-rated Full-stack Developer</title>
        <meta
          name="description"
          content="Hi, my name is Steven. I am a Developer. Let's build cool stuff."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/SGLogoUpdated.png" />
      </Head>
      {/* Header */}
      <Header />

      {/* Hero section */}

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
