import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://gbgrazingfoods.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GB Grazing Foods | Cestas, Tábuas e Presentes em Chapecó",
  description:
    "Cestas de café da manhã, tábuas de frios, presentes especiais, eventos e experiências gastronômicas em Chapecó e região. Faça seu pedido pelo WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GB Grazing Foods | Cestas, Tábuas e Presentes em Chapecó",
    description:
      "Cestas de café da manhã, tábuas de frios, presentes especiais, eventos e experiências gastronômicas em Chapecó e região. Faça seu pedido pelo WhatsApp.",
    url: "/",
    siteName: "GB Grazing Foods",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/gb-hero.webp",
        alt: "GB Grazing Foods — presentes e experiências gastronômicas em Chapecó",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GB Grazing Foods | Cestas, Tábuas e Presentes em Chapecó",
    description:
      "Cestas de café da manhã, tábuas de frios e presentes gastronômicos em Chapecó e região.",
    images: ["/images/gb-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
