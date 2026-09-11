import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata = {
  title: "Câmera Jovi — Da aula para o seu estudo",
  description:
    "Da foto da lousa ao material de revisão. Conheça a Câmera Jovi, um projeto da equipe Deepy para o Challenge FIAP.",
  icons: { icon: "/assets/logo-deepy.svg" },
};

export const viewport = { themeColor: "#000000" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
