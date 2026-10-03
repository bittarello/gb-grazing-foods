import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/presentes-corporativos-chapeco";
const pageUrl = `${siteUrl}${path}`;
const title = "Presentes Corporativos em Chapecó | GB Grazing Foods";
const description = "Kits e mimos corporativos para empresas em Chapecó e região. Presentes gastronômicos para clientes, equipe e datas comemorativas.";
const whatsappUrl = `https://wa.me/5549999442478?text=${encodeURIComponent("Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de presentes corporativos para empresas.")}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    images: [{ url: `${siteUrl}/images/gb-presentes.webp`, alt: "Presente gastronômico artesanal para clientes e equipes em Chapecó" }],
  },
};

const faqs = [
  ["Quais ocasiões combinam com presentes corporativos?","Os kits e mimos podem ser preparados para reconhecer equipes, agradecer clientes e parceiros ou marcar datas comemorativas. Conte a ocasião para a Gabi orientar as opções."],
  ["É possível personalizar os kits da empresa?","Converse com a Gabi sobre a proposta e a quantidade desejada. As possibilidades de personalização são combinadas conforme o produto, os itens disponíveis e a antecedência."],
  ["Como consultar prazos e entregas de pedidos corporativos?","Informe a quantidade, a data e os endereços pelo WhatsApp. A Gabi confirma o prazo de produção, a disponibilidade e as condições de entrega em Chapecó e região."],
] as const;

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: title,
        description,
        url: pageUrl,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Presentes corporativos", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#organization`,
        name: "GB Grazing Foods",
        url: siteUrl,
        telephone: "+5549999442478",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chapecó",
          addressRegion: "SC",
          addressCountry: "BR",
        },
        areaServed: "Chapecó",
      },
    ],
  };

  return (
    <main id="inicio">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <div className="top-note"><span>Entregas em Chapecó e região</span><span className="top-note-divider" aria-hidden="true" /><span>Pedidos preferencialmente com 24h</span></div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="GB Grazing Foods - início"><span className="brand-monogram">GB</span><span className="brand-name"><strong>Grazing Foods</strong><small>por Gabi</small></span></a>
        <nav aria-label="Navegação principal"><a href="/">Início</a><a href="#duvidas">Dúvidas</a></nav>
      </header>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <nav aria-label="Caminho de navegação"><a href="/">Início</a><span aria-hidden="true"> / </span><span aria-current="page">Presentes corporativos</span></nav>
          <p className="eyebrow">Cuidado para clientes, equipes e parceiros</p>
          <h1 id="hero-title">Presentes corporativos <em>em Chapecó</em></h1>
          <p className="hero-description">{description}</p>
          <p>Reconheça pessoas com kits e mimos gastronômicos preparados pela Gabi. Converse pelo WhatsApp para planejar presentes para sua empresa conforme a ocasião, a quantidade e a data desejada.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Conhecer presentes corporativos <span aria-hidden="true">↗</span></a></div>
          <p className="order-note">Atendimento pessoal pela Gabi · Pedidos conforme disponibilidade</p>
        </div>
        <figure className="hero-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-presentes.webp" alt="Presente gastronômico artesanal para clientes e equipes em Chapecó" width="1254" height="1254" fetchPriority="high" decoding="async" />
          <figcaption>Feito para reconhecer pessoas</figcaption>
        </figure>
      </section>
      <section id="opcoes" className="section care-section" aria-labelledby="opcoes-title">
        <figure className="care-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-presentes.webp" alt="Presente gastronômico artesanal para clientes e equipes em Chapecó" width="1254" height="1254" loading="lazy" decoding="async" />
        </figure>
        <div className="care-copy">
          <h2 id="opcoes-title">Opções de presentes corporativos em Chapecó</h2>
          <p>Conheça as opções de kits e mimos para clientes, equipes e parceiros. A Gabi orienta a escolha dos produtos e as possibilidades de personalização conforme a quantidade e a antecedência.</p>
        </div>
      </section>
      <section className="section occasions-section" id="ocasioes" aria-labelledby="ocasioes-title">
        <div className="section-heading">
          <h2 id="ocasioes-title">Presentes para reconhecer e agradecer</h2>
          <p>Para reunir sua equipe, conheça nosso <Link href="/coffee-break-chapeco/">coffee break em Chapecó</Link>. Para outras ocasiões especiais, veja também nossos <Link href="/presentes-gastronomicos-chapeco/">presentes gastronômicos em Chapecó</Link>.</p>
        </div>
      </section>
      <section id="como-encomendar" className="section" aria-labelledby="como-title">
        <div className="section-heading">
          <h2 id="como-title">Como encomendar presentes corporativos em Chapecó</h2>
          <p>Informe pelo WhatsApp a quantidade de presentes, a ocasião, a data e os endereços de entrega. Converse com antecedência para consultar as opções, a personalização e o orçamento para sua empresa.</p>
        </div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Encomendar pelo WhatsApp <span aria-hidden="true">↗</span></a>
      </section>
      <section id="duvidas" className="section faq-section" aria-labelledby="duvidas-title">
        <div className="faq-heading"><h2 id="duvidas-title">Dúvidas sobre presentes corporativos em Chapecó</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </main>
  );
}
