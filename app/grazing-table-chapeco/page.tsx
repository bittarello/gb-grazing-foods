import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/grazing-table-chapeco";
const pageUrl = `${siteUrl}${path}`;
const title = "Grazing Table em Chapecó | GB Grazing Foods";
const description = "Mesa de frios e grazing table para eventos, aniversários e recepções em Chapecó e região. Experiências gastronômicas artesanais.";
const whatsappUrl = `https://wa.me/5549999442478?text=${encodeURIComponent("Olá Gabi! Vim pelo site da GB e gostaria de solicitar um orçamento de Grazing Table para um evento em Chapecó.")}`;

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
    images: [{ url: `${siteUrl}/images/gb-eventos.webp`, alt: "Grazing table com frios e acompanhamentos preparada para uma celebração" }],
  },
};

const faqs = [
  ["Para quais eventos a grazing table é indicada?","A mesa de frios pode compor aniversários, recepções e comemorações em Chapecó e região. A Gabi orienta a proposta conforme o perfil do encontro."],
  ["Como solicitar um orçamento de grazing table?","Envie pelo WhatsApp a data, o local, o número de convidados e suas preferências. Essas informações ajudam a Gabi a apresentar uma composição e um orçamento para o evento."],
  ["Com quanta antecedência devo contratar a mesa?","Para eventos, entre em contato o quanto antes. A disponibilidade e o prazo de preparação são combinados com a Gabi conforme o tamanho e os detalhes do pedido."],
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
          { "@type": "ListItem", position: 2, name: "Grazing table", item: pageUrl },
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
          <nav aria-label="Caminho de navegação"><a href="/">Início</a><span aria-hidden="true"> / </span><span aria-current="page">Grazing table</span></nav>
          <p className="eyebrow">Uma mesa para reunir e celebrar</p>
          <h1 id="hero-title">Grazing table <em>em Chapecó</em></h1>
          <p className="hero-description">{description}</p>
          <p>Transforme seu encontro em uma experiência gastronômica com uma mesa preparada pela Gabi. Compartilhe os detalhes do evento pelo WhatsApp para consultar as composições e receber um orçamento.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento de grazing table <span aria-hidden="true">↗</span></a></div>
          <p className="order-note">Atendimento pessoal pela Gabi · Pedidos conforme disponibilidade</p>
        </div>
        <figure className="hero-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-eventos.webp" alt="Grazing table com frios e acompanhamentos preparada para uma celebração" width="1254" height="1254" fetchPriority="high" decoding="async" />
          <figcaption>Feito para celebrar</figcaption>
        </figure>
      </section>
      <section id="opcoes" className="section care-section" aria-labelledby="opcoes-title">
        <figure className="care-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-eventos.webp" alt="Grazing table com frios e acompanhamentos preparada para uma celebração" width="1254" height="1254" loading="lazy" decoding="async" />
        </figure>
        <div className="care-copy">
          <h2 id="opcoes-title">Opções de grazing table em Chapecó</h2>
          <p>A composição da mesa é orientada conforme a ocasião, o número de convidados e os itens disponíveis. Converse com a Gabi para planejar os sabores e consultar os detalhes da montagem.</p>
        </div>
      </section>
      <section className="section occasions-section" id="ocasioes" aria-labelledby="ocasioes-title">
        <div className="section-heading">
          <h2 id="ocasioes-title">Uma mesa para aniversários e recepções</h2>
          <p>Para encontros menores, conheça nossas <Link href="/tabuas-de-frios-chapeco/">tábuas de frios em Chapecó</Link>. Para reuniões e treinamentos, veja também nosso <Link href="/coffee-break-chapeco/">coffee break em Chapecó</Link>.</p>
        </div>
      </section>
      <section id="como-encomendar" className="section" aria-labelledby="como-title">
        <div className="section-heading">
          <h2 id="como-title">Como contratar sua grazing table em Chapecó</h2>
          <p>Informe pelo WhatsApp a data, o local e o número de convidados. Converse com a Gabi com antecedência para consultar a disponibilidade, a composição da mesa e as condições de montagem do evento.</p>
        </div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Encomendar pelo WhatsApp <span aria-hidden="true">↗</span></a>
      </section>
      <section id="duvidas" className="section faq-section" aria-labelledby="duvidas-title">
        <div className="faq-heading"><h2 id="duvidas-title">Dúvidas sobre grazing table em Chapecó</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </main>
  );
}
