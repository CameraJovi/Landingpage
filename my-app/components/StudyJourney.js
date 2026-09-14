"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera, Layers, BookOpen, ArrowRight } from "lucide-react";
import { asset } from "../lib/content";

const steps = [
  {
    label: "Capturar",
    title: "Comece pelo que está na sua frente.",
    description:
      "Permita o acesso à câmera, escolha o modo Estudante e enquadre a lousa, o caderno ou o exercício. A captura é o ponto de partida.",
    image: "imagem_1.png",
    alt: "Modo Estudante da Jovi pronto para capturar o conteúdo",
    icon: Camera,
    result: "Uma imagem para começar a estudar.",
  },
  {
    label: "Preparar",
    title: "Escolha como quer aprender.",
    description:
      "Transforme o registro em um resumo, flashcards ou uma resolução matemática. Escolha o formato que combina com o assunto e com a sua revisão.",
    image: "imagem_2.png",
    alt: "Exemplo de resumo de matemática criado a partir de uma captura",
    icon: Layers,
    result: "O conteúdo no formato que você precisa.",
  },
  {
    label: "Revisar",
    title: "Guarde para a próxima revisão.",
    description:
      "Confira o material gerado e salve a análise no Caderno Inteligente. Depois, volte à matéria para consultar o conteúdo e continuar de onde parou.",
    image: "imagem_5.png",
    alt: "Caderno Inteligente com conteúdos salvos por matéria",
    icon: BookOpen,
    result: "Seu material pronto para ser retomado.",
  },
];

export default function StudyJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const tabs = useRef([]);
  const step = steps[activeStep];

  function handleKeyDown(event, index) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (event.key === "ArrowLeft")
      next = (index + steps.length - 1) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault();
    setActiveStep(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="mt-12 sm:mt-16">
      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Da captura à revisão.
      </h3>
      <p className="mt-3 text-sm text-muted">
        Selecione uma etapa e acompanhe o caminho dentro da Jovi.
      </p>
      <div
        role="tablist"
        aria-label="Etapas do estudo"
        className="mt-7 grid grid-cols-3 border-b border-line"
      >
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`journey-tab-${index}`}
              aria-controls="journey-panel"
              aria-selected={activeStep === index}
              tabIndex={activeStep === index ? 0 : -1}
              onClick={() => setActiveStep(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="flex min-h-16 items-center justify-center gap-2 border-b-2 border-transparent px-2 py-4 text-xs font-semibold text-muted transition-colors hover:text-foreground aria-selected:border-brand aria-selected:text-brand sm:gap-3 sm:text-base"
            >
              <Icon size={19} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
      <div
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={`journey-tab-${activeStep}`}
        tabIndex={0}
        className="rounded-b-2xl bg-surface p-6 sm:p-10 lg:px-16"
      >
        <div
          key={activeStep}
          className="grid items-center gap-8 motion-safe:animate-reveal sm:min-h-[370px] sm:grid-cols-[1.3fr_1fr] sm:gap-12"
        >
          <div>
            <h4 className="max-w-lg text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {step.title}
            </h4>
            <p className="mt-5 max-w-lg text-sm text-muted sm:text-base">
              {step.description}
            </p>
            <p className="mt-8 flex items-start gap-3 text-sm text-foreground">
              <ArrowRight
                size={18}
                className="mt-1 shrink-0 text-brand"
                aria-hidden="true"
              />
              {step.result}
            </p>
          </div>
          <figure>
            <Image
              unoptimized
              src={asset(step.image)}
              alt={step.alt}
              width={556}
              height={929}
              className="mx-auto h-[300px] w-auto max-w-full rounded-xl object-contain sm:h-[340px]"
            />
            <figcaption className="mt-4 text-center text-xs text-muted">
              Tela real da aplicação
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
