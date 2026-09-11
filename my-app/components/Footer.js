import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { asset } from "../lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-dark-line bg-black py-7 text-dark-secondary">
      <div className="container sm:px-6 lg:px-12 flex flex-col flex-wrap items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-5">
        <a
          className="inline-flex items-center gap-2 text-[23px] font-[850] tracking-[-0.04em] text-white"
          href="#inicio"
        >
          <Image
            unoptimized
            src={asset("logo-deepy.svg")}
            width={30}
            height={30}
            alt=""
          />
          <span>Deepy</span>
        </a>
        <p className="text-[11px]">
          Câmera Jovi · {new Date().getFullYear()}
        </p>
        <a
          className="inline-flex min-h-11 items-center gap-3 text-xs font-[750] hover:underline underline-offset-[5px]"
          href="#inicio"
        >
          Voltar ao início <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
