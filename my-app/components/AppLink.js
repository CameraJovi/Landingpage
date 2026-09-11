import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { appUrl } from "../lib/content";

export default function AppLink({
  children = "Experimentar a câmera",
  size = "default",
}) {
  return (
    <Button size={size} href={appUrl} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
      <span className="sr-only"> (abre em nova aba)</span>
    </Button>
  );
}
