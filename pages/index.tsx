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
        <title>Steven | Top-rated Full-stack Web Developer</title>
        <meta
          name="description"
          content="Hi, my name is Steven Gragg. I am a Full-stack Web Developer and I can definitely help you bring your ideas into reality. Let's build cool stuff."
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
