import { Check } from "lucide-react";

export default function Audience() {
  return (
    <section
      id="publico"
      className="py-16 sm:py-[100px]"
      aria-labelledby="audience-title"
    >
      <div className="container sm:px-6 lg:px-12 grid gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-[100px]">
        <div>
          <h2 id="audience-title">
            Para quem tem
            <br />
            muito a aprender.
          </h2>
          <p className="mt-6 max-w-md text-sm text-muted">
            Na faculdade, no curso ou por conta própria. Se uma parte dos seus
            estudos está na câmera, a Jovi foi pensada para essa rotina.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          {[
            [
              "Entre uma aula e outra",
              "Retome a lousa que você fotografou e prepare o conteúdo para a próxima revisão.",
            ],
            [
              "Entre código e exercícios",
              "Organize os registros das aulas de tecnologia e acompanhe as etapas dos problemas de matemática.",
            ],
            [
              "No seu próprio ritmo",
              "Use resumos e perguntas para revisar os assuntos que você está estudando por conta própria.",
            ],
            [
              "Na revisão em grupo",
              "Use os registros da turma como ponto de partida para estudar e discutir a matéria juntos.",
            ],
          ].map(([title, text]) => (
            <article
              className="flex gap-5 border-b border-line py-[22px] first:pt-0"
              key={title}
            >
              <Check className="mt-1 shrink-0" size={20} aria-hidden="true" />
              <div>
                <h3 className="mb-2 text-[17px]">{title}</h3>
                <p className="text-sm text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
