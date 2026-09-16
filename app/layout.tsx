import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arena Brothers Beach Tennis | Marabá",
  description:
    "Beach tennis, torneios e comunidade em Marabá. Consulte horários e fale com a Arena Brothers pelo WhatsApp.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
