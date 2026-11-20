import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { layoutStyles } from "@/styles/themeStyles";

export default function Home() {
  return (
    <main className={layoutStyles.main}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
