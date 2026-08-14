import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GB Grazing Foods | Cestas, Tábuas e Presentes em Chapecó",
  description:
    "Cestas de café da manhã, tábuas de frios, presentes especiais, eventos e experiências gastronômicas em Chapecó e região. Faça seu pedido pelo WhatsApp.",
  keywords: [
    "cesta de café da manhã em Chapecó",
    "cestas de café da manhã",
    "tábua de frios em Chapecó",
    "tábuas de frios",
    "presentes em Chapecó",
    "presentes especiais",
    "presentes gastronômicos",
    "coffee break Chapecó",
    "grazing table Chapecó",
    "presentes corporativos em Chapecó",
    "experiências gastronômicas",
    "Chapecó e região",
  ],
  openGraph: {
    title: "GB Grazing Foods | Cestas, Tábuas e Presentes em Chapecó",
    description:
      "Cestas de café da manhã, tábuas de frios, presentes especiais, eventos e experiências gastronômicas em Chapecó e região. Faça seu pedido pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
