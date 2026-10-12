import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
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
      <Footer />
    </main>
  );
}
