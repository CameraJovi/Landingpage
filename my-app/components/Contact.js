import Button from "./Button";
import { Code2 } from "lucide-react";
import { repoUrl } from "../lib/content";
import AppLink from "./AppLink";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="border-t border-line bg-black py-20 sm:py-28"
    >
      <div className="container sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="contact-title">
            A próxima aula
            <br />
            pode começar aqui.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted">
            Experimente o switch mode no seu dispositivo ou conheça o código
            desenvolvido pela equipe Deepy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <AppLink />
            <Button
              href={repoUrl}
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={19} aria-hidden="true" />
              Ver código<span className="sr-only"> (abre em nova aba)</span>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
