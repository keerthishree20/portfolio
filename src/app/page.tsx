import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/Effects";

export default function Home() {
  return (
    <div className="grain">
      {/* The sky: three drifting star layers behind everything. */}
      <div className="stars" aria-hidden="true">
        <i className="s1" />
        <i className="s2" />
        <i className="s3" />
        <i className="shoot" />
      </div>
      <Spotlight />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
