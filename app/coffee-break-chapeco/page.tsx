import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/coffee-break-chapeco";
const pageUrl = `${siteUrl}${path}`;
const title = "Coffee Break em Chapecó | GB Grazing Foods";
const description = "Serviço de coffee break artesanal para reuniões, treinamentos e eventos corporativos em Chapecó e região.";
const whatsappUrl = `https://wa.me/5549999442478?text=${encodeURIComponent("Olá Gabi! Vim pelo site da GB e gostaria de um orçamento para coffee break corporativo em Chapecó.")}`;

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
    images: [{ url: `${siteUrl}/images/gb-eventos.webp`, alt: "Mesa gastronômica artesanal para encontros e eventos em Chapecó" }],
  },
};

const faqs = [
  ["A GB prepara coffee break para quais encontros?","Preparamos opções artesanais para reuniões, treinamentos e eventos corporativos em Chapecó e região. Conte o perfil do encontro para a Gabi orientar a composição."],
  ["Como é definido o cardápio do coffee break?","A composição é combinada com a Gabi conforme os itens disponíveis, o horário e o número de participantes. Informe também suas preferências e eventuais restrições alimentares."],
  ["Quais informações preciso enviar para receber um orçamento?","Informe a data, o horário, o endereço e o número de participantes pelo WhatsApp. A Gabi consulta a disponibilidade e apresenta as opções e as condições de atendimento."],
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
          { "@type": "ListItem", position: 2, name: "Coffee break", item: pageUrl },
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
          <nav aria-label="Caminho de navegação"><a href="/">Início</a><span aria-hidden="true"> / </span><span aria-current="page">Coffee break</span></nav>
          <p className="eyebrow">Uma pausa preparada com cuidado</p>
          <h1 id="hero-title">Coffee break <em>em Chapecó</em></h1>
          <p className="hero-description">{description}</p>
          <p>Acolha sua equipe e seus convidados com uma pausa gastronômica preparada pela Gabi. Compartilhe os detalhes da reunião ou do treinamento pelo WhatsApp para consultar as opções e receber um orçamento.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento de coffee break <span aria-hidden="true">↗</span></a></div>
          <p className="order-note">Atendimento pessoal pela Gabi · Pedidos conforme disponibilidade</p>
        </div>
        <figure className="hero-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-eventos.webp" alt="Mesa gastronômica artesanal para encontros e eventos em Chapecó" width="1254" height="1254" fetchPriority="high" decoding="async" />
          <figcaption>Feito para reunir pessoas</figcaption>
        </figure>
      </section>
      <section id="opcoes" className="section care-section" aria-labelledby="opcoes-title">
        <figure className="care-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-eventos.webp" alt="Mesa gastronômica artesanal para encontros e eventos em Chapecó" width="1254" height="1254" loading="lazy" decoding="async" />
        </figure>
        <div className="care-copy">
          <h2 id="opcoes-title">Opções de coffee break em Chapecó</h2>
          <p>Converse com a Gabi sobre os itens disponíveis e a composição adequada ao número de participantes e ao horário do encontro. O pedido é planejado conforme a ocasião e a antecedência.</p>
        </div>
      </section>
      <section className="section occasions-section" id="ocasioes" aria-labelledby="ocasioes-title">
        <div className="section-heading">
          <h2 id="ocasioes-title">Uma pausa para reuniões e treinamentos</h2>
          <p>Para presentear clientes e equipes, conheça nossos <Link href="/presentes-corporativos-chapeco/">presentes corporativos em Chapecó</Link>. Para recepções e celebrações, veja nossa <Link href="/grazing-table-chapeco/">grazing table em Chapecó</Link>.</p>
        </div>
      </section>
      <section id="como-encomendar" className="section" aria-labelledby="como-title">
        <div className="section-heading">
          <h2 id="como-title">Como contratar coffee break em Chapecó</h2>
          <p>Envie pelo WhatsApp a data, o horário, o local e o número de participantes. Converse com antecedência para definir a composição, consultar a disponibilidade e receber o orçamento do coffee break.</p>
        </div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Encomendar pelo WhatsApp <span aria-hidden="true">↗</span></a>
      </section>
      <section id="duvidas" className="section faq-section" aria-labelledby="duvidas-title">
        <div className="faq-heading"><h2 id="duvidas-title">Dúvidas sobre coffee break em Chapecó</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </main>
  );
}
