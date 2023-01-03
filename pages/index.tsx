import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 bg__content">
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

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
}
