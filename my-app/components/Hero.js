import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { asset } from "../lib/content";
import AppLink from "./AppLink";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-black pt-16 sm:pt-24"
    >
      <div className="container px-5 text-center sm:px-6 lg:px-12">
        <h1
          id="hero-title"
          className="mx-auto max-w-5xl text-[clamp(3rem,7vw,6rem)] leading-[1.04] tracking-[-0.04em]"
        >
          Sua câmera.
          <br />
          Seu próximo jeito de estudar.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg">
          Câmera Jovi. Da imagem da lousa ao resumo, às perguntas e ao próximo
          passo da sua revisão.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <AppLink />
          <a
            href="#galeria"
            className="inline-flex min-h-12 items-center gap-2 text-sm text-brand hover:underline underline-offset-4"
          >
            Explore os recursos <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
        <figure className="mx-auto mt-14 max-w-4xl motion-safe:animate-product-enter">
          <div className="grid grid-cols-[1fr_1.15fr_1fr] items-end gap-2 sm:gap-7">
            <Image
              unoptimized
              src={asset("imagem_3.png")}
              alt="Flashcards gerados na Jovi"
              width={446}
              height={897}
              className="w-full -rotate-6 rounded-2xl object-contain opacity-80"
            />
            <Image
              unoptimized
              src={asset("imagem_1.png")}
              alt="Câmera Jovi no modo Estudante"
              width={556}
              height={921}
              fetchPriority="high"
              className="z-10 w-full rounded-2xl object-contain"
            />
            <Image
              unoptimized
              src={asset("imagem_2.png")}
              alt="Resumo inteligente de matemática na Jovi"
              width={526}
              height={929}
              className="w-full rotate-6 rounded-2xl object-contain opacity-80"
            />
          </div>
          <figcaption className="mt-8 pb-12 text-xs text-muted">
            Telas reais da Câmera Jovi. Disponível no navegador.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
