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
        <div className="mt-9 border-t border-line pt-7 sm:mt-[60px]">
          <h3 className="mb-8 text-base">Da captura à revisão</h3>
          <ol className="grid gap-8 md:grid-cols-3">
            <li className="relative pl-12 sm:pl-0">
              <span className="absolute left-0 top-0 mb-5 grid h-8 w-8 place-items-center rounded-full bg-brand text-ink text-[13px] font-extrabold sm:static">
                1
              </span>
              <h4 className="mb-2.5 text-[19px]">Abra e enquadre</h4>
              <p className="max-w-[330px] text-sm text-muted">
                Permita o acesso à câmera, escolha o modo Estudante e capture o
                conteúdo da aula.
              </p>
            </li>
            <li className="relative pl-12 sm:pl-0">
              <span className="absolute left-0 top-0 mb-5 grid h-8 w-8 place-items-center rounded-full bg-brand text-[13px] font-extrabold sm:static">
                2
              </span>
              <h4 className="mb-2.5 text-[19px]">Escolha como estudar</h4>
              <p className="max-w-[330px] text-sm text-muted">
                Peça um resumo, crie flashcards ou acompanhe uma resolução
                matemática.
              </p>
            </li>
            <li className="relative pl-12 sm:pl-0">
              <span className="absolute left-0 top-0 mb-5 grid h-8 w-8 place-items-center rounded-full bg-brand text-[13px] font-extrabold sm:static">
                3
              </span>
              <h4 className="mb-2.5 text-[19px]">Revise e guarde</h4>
              <p className="max-w-[330px] text-sm text-muted">
                Confira o material gerado e salve a análise no Caderno
                Inteligente para consultar depois.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
