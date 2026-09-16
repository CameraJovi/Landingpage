import Reveal from "./Reveal";
import { ArrowDown } from "lucide-react";
import { asset } from "../lib/content";
import AppLink from "./AppLink";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[100svh] overflow-hidden bg-black pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={asset("WhatsApp Video 2026-09-14 at 13.29.04.mp4")}
          type="video/mp4"
        />
      </video>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black/90"
      />
      <div className="container relative z-10 px-5 text-center sm:px-6 lg:px-12">
        <Reveal
          as="h1"
          animation="hero"
          repeat
          id="hero-title"
          className="mx-auto max-w-5xl text-[clamp(3rem,7vw,6rem)] leading-[1.04] tracking-[-0.04em]"
        >
          Sua câmera.
          <br />
          Seu próximo jeito de estudar.
        </Reveal>
        <Reveal
          as="p"
          animation="hero"
          repeat
          className="motion-safe:[animation-delay:150ms] mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg"
        >
          Câmera Jovi. Da imagem da lousa ao resumo, às perguntas e ao próximo
          passo da sua revisão.
        </Reveal>
        <Reveal
          animation="hero"
          repeat
          className="motion-safe:[animation-delay:300ms] mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          <AppLink />
          <a
            href="#galeria"
            className="inline-flex min-h-12 items-center gap-2 text-sm text-brand hover:underline underline-offset-4"
          >
            Explore os recursos <ArrowDown size={17} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal
          as="figure"
          animation="product"
          repeat
          className="mx-auto mt-14 max-w-4xl"
        >
         
          <figcaption className="mt-8 pb-12 text-xs text-muted">
            Telas reais da Câmera Jovi. Disponível no navegador.
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
