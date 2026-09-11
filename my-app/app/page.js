import Header from "../components/Header";
import Hero from "../components/Hero";
import Solution from "../components/Solution";
import Gallery from "../components/Gallery";
import Audience from "../components/Audience";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <a
        className="fixed -top-[100px] left-4 z-[100] bg-brand p-4 text-ink focus:top-3"
        href="#conteudo"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Solution />
        <Gallery />
        <Audience />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
