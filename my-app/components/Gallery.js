import { features } from "../lib/content";
import FeatureSection from "./FeatureSection";

export default function Gallery() {
  return (
    <section
      id="galeria"
      aria-labelledby="gallery-title"
      className="bg-black pt-20 sm:pt-28"
    >
      <div className="container sm:px-6 lg:px-12">
        <h2 id="gallery-title" className="max-w-3xl">
          Conheça tudo o que acontece depois do clique.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Um registro pode ser o começo de diferentes formas de aprender.
          Escolha um recurso ou continue para explorar cada etapa.
        </p>
        <nav
          aria-label="Funcionalidades da Jovi"
          className="mt-9 flex flex-wrap gap-3 pb-16"
        >
          {features.map((feature) => (
            <a
              key={feature.id}
              href={`#${feature.id}`}
              className="inline-flex min-h-11 items-center rounded-full border border-line px-5 py-2 text-sm text-muted transition-colors hover:border-brand hover:text-brand"
            >
              {feature.title}
            </a>
          ))}
        </nav>
      </div>
      {features.map((feature, index) => (
        <FeatureSection
          key={feature.id}
          feature={feature}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
}
