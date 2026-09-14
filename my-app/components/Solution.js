import StudyJourney from "./StudyJourney";

export default function Solution() {
  return (
    <section
      id="solucao"
      className="py-16 sm:py-[100px]"
      aria-labelledby="solution-title"
    >
      <div className="container sm:px-6 lg:px-12">
        <div className="mb-8 grid items-start gap-6 sm:mb-12 sm:grid-cols-[1.2fr_1fr] sm:gap-10 lg:gap-20">
          <h2 id="solution-title">
            Sua galeria está cheia.
            <br />E a revisão, como fica?
          </h2>
          <div>
            <p className="max-w-[500px] text-[15px] text-muted">
              A gente fotografa a lousa para não perder nada. Dias depois,
              encontra uma sequência de imagens soltas e precisa reconstruir a
              aula.
            </p>
            <p className="max-w-[500px] text-[15px] text-muted mt-4">
              A proposta da Jovi é dar continuidade a esse registro: transformar
              a captura em conteúdo que você consegue retomar.
            </p>
          </div>
        </div>
        <StudyJourney />
      </div>
    </section>
  );
}
