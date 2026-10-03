import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/presentes-gastronomicos-chapeco";
const pageUrl = `${siteUrl}${path}`;
const title = "Presentes Gastronômicos em Chapecó | GB Grazing Foods";
const description = "Kits e presentes gastronômicos sob encomenda em Chapecó. Opções artesanais e personalizadas para surpreender em momentos especiais.";
const whatsappUrl = `https://wa.me/5549999442478?text=${encodeURIComponent("Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de presentes gastronômicos.")}`;

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
    images: [{ url: `${siteUrl}/images/gb-presentes.webp`, alt: "Cesta artesanal com frutas, pães e flores para presentear em Chapecó" }],
  },
};

const faqs = [
  ["Para quais ocasiões posso encomendar um presente gastronômico?","Os kits e mimos podem acompanhar aniversários, agradecimentos e outras datas especiais. Conte a ocasião para a Gabi receber seu pedido e orientar a escolha."],
  ["É possível personalizar o presente?","Sim. Converse com a Gabi sobre quem vai receber e suas preferências. As possibilidades de personalização dependem do produto, dos itens disponíveis e da antecedência."],
  ["Vocês entregam o presente em Chapecó e região?","Sim. Consulte pelo WhatsApp a disponibilidade para a data e o endereço desejados, além da taxa de entrega."],
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
          { "@type": "ListItem", position: 2, name: "Presentes gastronômicos", item: pageUrl },
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
          <nav aria-label="Caminho de navegação"><a href="/">Início</a><span aria-hidden="true"> / </span><span aria-current="page">Presentes gastronômicos</span></nav>
          <p className="eyebrow">Um gesto que se transforma em sabor</p>
          <h1 id="hero-title">Presentes gastronômicos <em>em Chapecó</em></h1>
          <p className="hero-description">{description}</p>
          <p>Surpreenda em aniversários, agradecimentos e datas especiais com um presente preparado pela Gabi. Pelo WhatsApp, você recebe orientação para escolher os sabores e os detalhes do pedido.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Ver presentes gastronômicos <span aria-hidden="true">↗</span></a></div>
          <p className="order-note">Atendimento pessoal pela Gabi · Pedidos conforme disponibilidade</p>
        </div>
        <figure className="hero-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-presentes.webp" alt="Cesta artesanal com frutas, pães e flores para presentear em Chapecó" width="1254" height="1254" fetchPriority="high" decoding="async" />
          <figcaption>Feito para presentear</figcaption>
        </figure>
      </section>
      <section id="opcoes" className="section care-section" aria-labelledby="opcoes-title">
        <figure className="care-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gb-presentes.webp" alt="Cesta artesanal com frutas, pães e flores para presentear em Chapecó" width="1254" height="1254" loading="lazy" decoding="async" />
        </figure>
        <div className="care-copy">
          <h2 id="opcoes-title">Opções de presentes gastronômicos em Chapecó</h2>
          <p>Conheça os kits, boxes e mimos disponíveis e converse com a Gabi sobre a ocasião e quem vai receber. A personalização é orientada conforme o produto e a antecedência.</p>
        </div>
      </section>
      <section className="section occasions-section" id="ocasioes" aria-labelledby="ocasioes-title">
        <div className="section-heading">
          <h2 id="ocasioes-title">Presentes para momentos especiais</h2>
          <p>Para começar o dia com afeto, conheça nossas <Link href="/cestas-de-cafe-da-manha-chapeco/">cestas de café da manhã em Chapecó</Link>. Para reconhecer clientes e equipes, veja as opções de <Link href="/presentes-corporativos-chapeco/">presentes corporativos em Chapecó</Link>.</p>
        </div>
      </section>
      <section id="como-encomendar" className="section" aria-labelledby="como-title">
        <div className="section-heading">
          <h2 id="como-title">Como encomendar presentes gastronômicos em Chapecó</h2>
          <p>Envie uma mensagem pelo WhatsApp com a ocasião, a data e o endereço de entrega. A Gabi apresenta as opções e as possibilidades de personalização. Faça seu pedido preferencialmente com 24 horas de antecedência.</p>
        </div>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Encomendar pelo WhatsApp <span aria-hidden="true">↗</span></a>
      </section>
      <section id="duvidas" className="section faq-section" aria-labelledby="duvidas-title">
        <div className="faq-heading"><h2 id="duvidas-title">Dúvidas sobre presentes gastronômicos em Chapecó</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </main>
  );
}
