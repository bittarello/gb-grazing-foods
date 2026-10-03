import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/cestas-de-cafe-da-manha-chapeco";
const pageUrl = `${siteUrl}${path}`;
const title = "Cestas de Café da Manhã em Chapecó | GB Grazing Foods";
const description = "Cestas de café da manhã sob encomenda com entrega agendada em Chapecó e região.";
const whatsappUrl = `https://wa.me/5549999442478?text=${encodeURIComponent("Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de cestas de café da manhã.")}`;

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
    images: [{ url: `${siteUrl}/images/gb-presentes.webp`, alt: "Cesta de café da manhã artesanal preparada em Chapecó" }],
  },
};

const faqs = [
  ["Com quanta antecedência devo fazer o pedido?", "Os pedidos devem ser feitos preferencialmente com 24 horas de antecedência, conforme disponibilidade."],
  ["Onde a GB realiza entregas?", "Entregamos em Chapecó e região. Consulte a disponibilidade e a taxa de entrega conforme o endereço."],
  ["É possível personalizar?", "Sim. Conte para a Gabi quem vai receber, qual é a ocasião e o que você imaginou. Cada experiência é orientada pessoalmente, conforme o produto e a antecedência."],
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
          { "@type": "ListItem", position: 2, name: "Cestas de café da manhã", item: pageUrl },
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
          <nav aria-label="Caminho de navegação"><a href="/">Início</a><span aria-hidden="true"> / </span><span aria-current="page">Cestas de café da manhã</span></nav>
          <p className="eyebrow">Um presente preparado com afeto</p>
          <h1 id="hero-title">Cestas de café da manhã <em>em Chapecó</em></h1>
          <p className="hero-description">{description}</p>
          <p>Surpreenda com um presente gastronômico preparado pela Gabi. Converse pelo WhatsApp para conhecer as opções, personalizar seu pedido e consultar a disponibilidade de entrega.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Ver opções de café da manhã <span aria-hidden="true">↗</span></a></div>
          <p className="order-note">Atendimento pessoal pela Gabi · Pedidos conforme disponibilidade</p>
        </div>
        <figure className="hero-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-presentes.webp" alt="Cesta de café da manhã artesanal preparada em Chapecó" width="1254" height="1254" fetchPriority="high" decoding="async" />
          <figcaption>Feito para presentear</figcaption>
        </figure>
      </section>
      <section id="opcoes" className="section care-section" aria-labelledby="opcoes-title">
        <figure className="care-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-presentes.webp" alt="Detalhes dos itens e pães artesanais da cesta de café da manhã em Chapecó" width="1254" height="1254" loading="lazy" decoding="async" />
        </figure>
        <div className="care-copy">
          <h2 id="opcoes-title">Opções de cestas de café da manhã em Chapecó</h2>
          <p>Converse com a Gabi para conhecer os itens disponíveis e as possibilidades de personalização da sua cesta, conforme a ocasião e a antecedência do pedido.</p>
        </div>
      </section>
      <section className="section occasions-section" id="ocasioes" aria-labelledby="ocasioes-title">
        <div className="section-heading">
          <h2 id="ocasioes-title">Uma cesta para momentos especiais</h2>
          <p>Uma cesta de café da manhã pode marcar o começo de um aniversário ou agradecer alguém importante. Se você procura opções para eventos ou celebrações, conheça também nossas <Link href="/tabuas-de-frios-chapeco/">tábuas de frios em Chapecó</Link>.</p>
        </div>
      </section>
      <section id="como-encomendar" className="section" aria-labelledby="como-title">
        <div className="section-heading">
          <h2 id="como-title">Como encomendar sua cesta de café da manhã em Chapecó</h2>
          <p>Entre em contato pelo WhatsApp, conte a ocasião e consulte as opções e a disponibilidade de entrega. Faça seu pedido preferencialmente com 24 horas de antecedência.</p>
        </div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Encomendar pelo WhatsApp <span aria-hidden="true">↗</span></a>
      </section>
      <section id="duvidas" className="section faq-section" aria-labelledby="duvidas-title">
        <div className="faq-heading"><h2 id="duvidas-title">Dúvidas sobre encomendas de cestas em Chapecó</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </main>
  );
}
