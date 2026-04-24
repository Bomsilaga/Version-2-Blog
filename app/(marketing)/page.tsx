import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import PainPoints from "@/components/sections/PainPoints";
import Services from "@/components/sections/Services";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Credentials from "@/components/sections/Credentials";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "OnGroundPM — Construction PM & Estimating, Melbourne West",
  description:
    "Fixed-price construction estimates and project management for small builders, renovators and owner-builders across Melbourne's western suburbs. Civil engineer, MIEAust, 14+ years experience.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <PainPoints />
        <Services />
        <WhoWeHelp />
        <Process />
        <About />
        <Credentials />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
