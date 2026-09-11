"use client";
import Button from "./Button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (![...data.values()].every((value) => value.trim())) {
      setMessage("Preencha os campos com seu nome, e-mail e mensagem.");
      return;
    }
    setMessage(
      `${data.get("nome").trim()}, os campos foram validados. Esta demonstração não envia mensagens e nenhum dado foi transmitido.`,
    );
  }
  return (
    <details className="mt-[30px] border-b border-dark-line group">
      <summary className="flex list-none items-center justify-between gap-4 py-[22px] text-sm font-[650] [&::-webkit-details-marker]:hidden">
        Formulário de contato{" "}
        <ChevronDown
          className="shrink-0 transition-transform duration-[180ms] group-open:rotate-180"
          size={18}
          aria-hidden="true"
        />
      </summary>
      <p className="pb-[22px] text-sm text-dark-copy" id="form-note">
        Exercício de validação do projeto acadêmico. Os dados não são enviados
        nem armazenados.
      </p>
      <form
        onSubmit={submit}
        aria-describedby="form-note"
        className="mt-5 grid gap-4 pb-5"
      >
        <label className="grid gap-2 text-[13px]">
          Nome
          <input
            className="w-full rounded-md border border-input-border bg-input p-3 text-white caret-focus"
            name="nome"
            autoComplete="name"
            required
            maxLength="100"
          />
        </label>
        <label className="grid gap-2 text-[13px]">
          E-mail
          <input
            className="w-full rounded-md border border-input-border bg-input p-3 text-white caret-focus"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength="254"
          />
        </label>
        <label className="grid gap-2 text-[13px]">
          Mensagem
          <textarea
            className="w-full rounded-md border border-input-border bg-input p-3 text-white caret-focus resize-y"
            name="mensagem"
            required
            rows="3"
            maxLength="2000"
          />
        </label>
        <Button type="submit">Validar demonstração</Button>
        <p className="text-sm text-dark-copy" role="status">
          {message}
        </p>
      </form>
    </details>
  );
}
