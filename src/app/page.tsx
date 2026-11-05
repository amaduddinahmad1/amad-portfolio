import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Credentials from "@/components/sections/Credentials";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import HowIWork from "@/components/sections/HowIWork";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Stats from "@/components/sections/Stats";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Skills />
      <HowIWork />
      <Credentials />
      <About />
      <Contact />
    </>
  );
}
