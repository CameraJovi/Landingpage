import Image from "next/image";
import { asset, members } from "../lib/content";

export default function Team() {
  return (
    <section
      id="equipe"
      className="border-t border-line py-16 sm:py-[100px]"
      aria-labelledby="team-title"
    >
      <div className="container sm:px-6 lg:px-12">
        <div className="mb-8 grid items-start gap-6 sm:mb-12 sm:grid-cols-[1.2fr_1fr] sm:gap-10 lg:gap-20">
          <h2 id="team-title">Do nosso lado da sala.</h2>
          <p className="max-w-[500px] text-[15px] text-muted">
            Somos a equipe responsavel pelo desenvolvimento do projeto! Somos a Deepy
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-4 lg:gap-6">
          {members.map((member) => (
            <article key={member.rm}>
              <div className="mb-3 aspect-square overflow-hidden rounded-xl bg-portrait sm:mb-5">
                <Image
                  unoptimized
                  className="h-[138%] w-[138%] max-w-none -translate-x-[13.8%] -translate-y-[13.8%] object-cover"
                  src={asset(member.image)}
                  alt={`Foto de ${member.name}`}
                  loading="lazy"
                  width={580}
                  height={578}
                />
              </div>
              <h3 className="min-h-12 text-sm leading-[1.55] sm:text-[15px]">
                {member.name}
              </h3>
              <p className="text-[10px] text-muted sm:text-[11px]">
                Engenharia de Software
              </p>
              <span className="mt-1.5 block text-[11px] tabular-nums text-muted">
                RM {member.rm}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
