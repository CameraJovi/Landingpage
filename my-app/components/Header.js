"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { asset } from "../lib/content";
import AppLink from "./AppLink";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper">
      <div className="container sm:px-6 lg:px-12 flex min-h-20 items-center justify-between gap-6">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 text-[29px] font-[850] tracking-[-0.04em]"
          aria-label="Deepy, início"
        >
          <Image
            unoptimized
            src={asset("logo-deepy.svg")}
            width={38}
            height={38}
            alt=""
          />
          <span>
            deepy<span className="text-focus">.</span>
          </span>
        </a>
        <button
          ref={toggle}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          className={`absolute inset-x-0 top-full flex-col items-stretch gap-1 border-b border-line bg-paper px-6 py-5 text-[13px] font-[650] lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:p-0 ${open ? "flex" : "hidden"}`}
          aria-label="Navegação principal"
        >
          {[
            ["solucao", "A solução"],
            ["galeria", "Na prática"],
            ["publico", "Para quem"],
            ["equipe", "Equipe"],
            ["contato", "Contato"],
          ].map(([id, label]) => (
            <a
              className="py-[15px] hover:underline underline-offset-[6px]"
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <AppLink size="small">Abrir Jovi</AppLink>
        </nav>
      </div>
    </header>
  );
}
