import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/grazing-table-chapeco/";
const pageUrl = `${siteUrl}${path}`;
const whatsappNumber = "5549999442478";
const whatsappMessage = "Olá Gabi! Vi a página de grazing table e montagem para eventos da GB e gostaria de conversar sobre uma celebração em Chapecó.";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Grazing Table e Mesas para Eventos em Chapecó | GB Grazing Foods",
  description: "Grazing tables e montagens gastronômicas em Chapecó para eventos, aniversários e celebrações. Consulte formato, convidados, data e disponibilidade.",
  alternates: { canonical: path },
  openGraph: {
    title: "Grazing Table e Mesas para Eventos em Chapecó | GB Grazing Foods",
    description: "Grazing tables e montagens gastronômicas em Chapecó para eventos, aniversários e celebrações. Consulte formato, convidados, data e disponibilidade.",
    url: path,
    siteName: "GB Grazing Foods",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/gb-eventos.webp", alt: "Mesa gastronômica preparada para uma celebração" }],
  },
};

const occasions = [
  ["Aniversários", "Uma montagem gastronômica para receber convidados e integrar a experiência à comemoração."],
  ["Recepções", "Uma composição para encontros em que apresentação, acolhimento e praticidade fazem diferença."],
  ["Celebrações", "Uma proposta para datas especiais em que a mesa também faz parte da experiência."],
  ["Encontros especiais", "O formato é orientado de acordo com a ocasião, o local, a quantidade aproximada de pessoas e a agenda."],
];

const faqs = [
  ["A GB prepara grazing table em Chapecó?", "Sim. A GB realiza montagem de grazing tables e outras composições gastronômicas para eventos e celebrações em Chapecó e região, conforme agenda e disponibilidade."],
  ["O que pode fazer parte da montagem?", "As possibilidades podem incluir queijos, frios, frutas, acompanhamentos e outros itens, conforme o formato do evento e as opções disponíveis."],
  ["Como definir o tamanho da mesa?", "Informe a ocasião, a quantidade aproximada de pessoas, a data e o local. Com essas informações, a Gabi orienta as possibilidades adequadas ao encontro."],
  ["Qual é a diferença entre uma grazing table e uma tábua de frios?", "A tábua é uma opção prática para grupos menores. A grazing table envolve planejamento para um evento ou recepção, considerando espaço, convidados e apresentação."],
];

function Brand() {
  return <Link className="brand" href="/" aria-label="GB Grazing Foods - página inicial"><span className="brand-monogram">GB</span><span className="brand-name"><strong>Grazing Foods</strong><small>por Gabi</small></span></Link>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a9.87 9.87 0 0 0-8.55 14.8L2 22l5.35-1.4A10 10 0 1 0 12 2Zm0 18.18a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.17.83.85-3.08-.2-.32A8.18 8.18 0 1 1 12 20.18Zm4.48-6.12c-.24-.12-1.45-.72-1.68-.8-.22-.08-.38-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.28.18-.52.06-.25-.12-1.03-.38-1.96-1.2a7.3 7.3 0 0 1-1.36-1.7c-.14-.24-.02-.37.1-.5l.37-.42c.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.23.25-.86.85-.86 2.05 0 1.21.88 2.38 1 2.55.12.16 1.73 2.64 4.19 3.7.58.26 1.04.41 1.4.53.58.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" /></svg>;
}

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: "Grazing Table e Mesas para Eventos em Chapecó | GB Grazing Foods",
        description: "Grazing tables e montagens gastronômicas para eventos e celebrações em Chapecó e região.",
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
          { "@type": "ListItem", position: 2, name: "Grazing table e eventos", item: pageUrl },
        ],
      },
    ],
  };

  return <main id="inicio">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="top-note"><span>Montagem para eventos em Chapecó e região</span><span className="top-note-divider" aria-hidden="true" /><span>Planejamento conforme agenda e disponibilidade</span></div>

    <header className="site-header">
      <Brand />
      <nav aria-label="Navegação da página"><Link href="/">Início</Link><a href="#ocasioes">Ocasiões</a><a href="#planejamento">Planejamento</a><a href="#duvidas">Dúvidas</a></nav>
      <a className="button button-small button-outline header-order-button" href={whatsapp} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Grazing tables e montagens gastronômicas</p>
        <h1 id="hero-title">Grazing table e mesas para eventos em Chapecó<br /><em>para receber e celebrar ao redor da mesa</em></h1>
        <p className="hero-description">A GB realiza montagens gastronômicas para eventos, encontros e celebrações, considerando o número aproximado de convidados, o local, o estilo da ocasião e as opções disponíveis.</p>
        <div className="hero-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre meu evento <span aria-hidden="true">→</span></a><a className="text-link" href="#planejamento">Ver como planejar</a></div>
        <p className="order-note">Atendimento pessoal pela Gabi · Confirmação conforme agenda e disponibilidade</p>
        <div className="hero-proof"><span>Montagem personalizada</span><span>Planejamento por convidados</span><span>Chapecó e região</span></div>
      </div>
      <figure className="hero-visual"><img src="/images/gb-eventos.webp" alt="Mesa gastronômica preparada para receber convidados" fetchPriority="high" decoding="async" /><figcaption><span>01</span>Feito para celebrar</figcaption></figure>
    </section>

    <section className="section occasions-section" aria-labelledby="experiencia-title">
      <div className="section-heading"><div><p className="eyebrow">Uma composição que faz parte do evento</p><h2 id="experiencia-title">A montagem é pensada para a ocasião e para os convidados</h2></div><p>Queijos, frios, frutas, acompanhamentos e outros itens podem fazer parte da composição conforme o formato disponível. O planejamento considera o encontro como um todo, e não apenas a quantidade de alimentos.</p></div>
    </section>

    <section className="section experiences-section" id="ocasioes" aria-labelledby="ocasioes-title">
      <div className="experiences-intro"><p className="eyebrow light">Onde esse formato faz sentido</p><h2 id="ocasioes-title">Aniversários, recepções, celebrações e encontros especiais</h2><p>O formato muda conforme o evento. A conversa inicial serve para entender o contexto antes de definir as possibilidades de montagem.</p></div>
      <div className="product-list">{occasions.map(([title, text], index) => <article className="product-item" key={title}><span className="product-index">0{index + 1}</span><div><p className="product-label">Montagem para eventos</p><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="section occasions-section" aria-labelledby="detalhes-title">
      <div className="section-heading"><div><p className="eyebrow">O que orienta a proposta</p><h2 id="detalhes-title">Data, local, convidados e estilo da ocasião</h2></div><p>Essas informações ajudam a definir o que é viável para o evento. A Gabi orienta o formato com base na agenda, na quantidade aproximada de pessoas e nas opções disponíveis.</p></div>
      <div className="occasion-grid">
        <article className="occasion-card"><h3>Data e local</h3><p>O primeiro passo é saber quando e onde o encontro vai acontecer.</p></article>
        <article className="occasion-card"><h3>Convidados</h3><p>A quantidade aproximada ajuda a dimensionar a proposta para o evento.</p></article>
        <article className="occasion-card"><h3>Ocasião</h3><p>Aniversário, recepção ou celebração têm dinâmicas diferentes.</p></article>
        <article className="occasion-card"><h3>Apresentação</h3><p>A composição visual é alinhada conforme o formato e as possibilidades disponíveis.</p></article>
      </div>
    </section>

    <section className="section care-section" id="planejamento" aria-labelledby="planejamento-title">
      <div className="care-image"><img src="/images/gb-eventos.webp" alt="Composição gastronômica preparada pela GB para uma celebração" loading="lazy" decoding="async" /><div className="care-seal" aria-hidden="true"><span>Feito para</span><strong>receber</strong></div></div>
      <div className="care-copy"><p className="eyebrow">Como planejar</p><h2 id="planejamento-title">Seu evento começa com uma conversa</h2><ol>
        <li><span>1</span><div><h3>Conte sobre o encontro</h3><p>Informe data, local, ocasião e quantidade aproximada de convidados.</p></div></li>
        <li><span>2</span><div><h3>Alinhe o formato</h3><p>A Gabi orienta as possibilidades compatíveis com o evento e com a agenda.</p></div></li>
        <li><span>3</span><div><h3>Confirme os detalhes</h3><p>Depois do alinhamento, combine montagem e demais informações conforme disponibilidade.</p></div></li>
      </ol><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Planejar pelo WhatsApp <span aria-hidden="true">→</span></a></div>
    </section>

    <section className="section faq-section" id="duvidas" aria-labelledby="duvidas-title">
      <div className="faq-heading"><p className="eyebrow">Antes de planejar</p><h2 id="duvidas-title">Dúvidas sobre grazing tables e eventos</h2></div>
      <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="final-cta"><p className="eyebrow light">Tem uma celebração chegando?</p><h2>Conte para a Gabi.<br /><em>Planeje a experiência à mesa.</em></h2><p>Montagens gastronômicas para eventos em Chapecó e região, conforme formato, agenda e disponibilidade.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Consultar disponibilidade <span aria-hidden="true">→</span></a></section>

    <footer><div className="footer-brand"><Brand /><p>Cestas, tábuas, presentes e experiências gastronômicas.</p></div><div className="footer-contact"><strong>Chapecó e região</strong><span>Eventos conforme agenda e disponibilidade.</span></div><div className="footer-links"><Link href="/tabuas-de-frios-chapeco/">Tábuas para grupos menores</Link><Link href="/coffee-break-chapeco/">Coffee break para empresas</Link><Link href="/">Voltar ao início</Link></div></footer>

    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com a Gabi sobre um evento pelo WhatsApp" title="Conversar sobre um evento"><span className="whatsapp-float-icon"><WhatsAppIcon /></span><span className="whatsapp-float-label">Fale com a Gabi</span></a>
  </main>;
}
