import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CodingKnowledge from "./components/sections/CodingKnowledge";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <CodingKnowledge />
        <Projects />
        <Contact />
      </main>
    </>
  );
}