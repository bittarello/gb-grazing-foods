import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/presentes-corporativos-chapeco/";
const pageUrl = `${siteUrl}${path}`;
const whatsappNumber = "5549999442478";
const whatsappMessage = "Olá Gabi! Vi a página de presentes corporativos da GB e gostaria de conhecer opções para clientes, equipe ou parceiros.";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Presentes Corporativos em Chapecó | GB Grazing Foods",
  description: "Presentes corporativos em Chapecó para clientes, equipes e parceiros. Consulte opções, quantidade, personalização e entrega diretamente com a Gabi.",
  alternates: { canonical: path },
  openGraph: {
    title: "Presentes Corporativos em Chapecó | GB Grazing Foods",
    description: "Presentes corporativos em Chapecó para clientes, equipes e parceiros. Consulte opções, quantidade, personalização e entrega diretamente com a Gabi.",
    url: path,
    siteName: "GB Grazing Foods",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/gb-presentes.webp", alt: "Presente gastronômico artesanal preparado pela GB Grazing Foods" }],
  },
};

const audiences = [
  ["Clientes", "Um gesto para agradecer a confiança, reconhecer uma parceria ou marcar uma relação importante."],
  ["Equipes", "Presentes para reconhecimento, comemorações e momentos que merecem atenção dentro da empresa."],
  ["Parceiros", "Uma experiência gastronômica para fortalecer relações profissionais de forma próxima e cuidadosa."],
  ["Ações e datas especiais", "Possibilidades para campanhas, datas comemorativas e ações de relacionamento, conforme quantidade e antecedência."],
];

const faqs = [
  ["A GB faz presentes corporativos em Chapecó?", "Sim. A GB prepara presentes e experiências corporativas para clientes, equipes e parceiros em Chapecó e região, conforme quantidade, prazo e disponibilidade."],
  ["É possível personalizar?", "As possibilidades de personalização são orientadas pela Gabi conforme o produto, a quantidade, a antecedência e as opções disponíveis."],
  ["Vocês atendem pedidos em quantidade?", "Consulte diretamente com a Gabi. A viabilidade depende da quantidade solicitada, do prazo e da capacidade de produção para a data."],
  ["O que preciso informar para pedir uma proposta?", "Informe o objetivo da ação, quem vai receber, a quantidade aproximada, a data desejada e, se houver entrega, como ela será distribuída."],
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
        name: "Presentes Corporativos em Chapecó | GB Grazing Foods",
        description: "Presentes corporativos para clientes, equipes e parceiros em Chapecó e região.",
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
    ],
  };

  return <main id="inicio">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="top-note"><span>Atendimento a empresas em Chapecó e região</span><span className="top-note-divider" aria-hidden="true" /><span>Pedidos conforme quantidade, prazo e disponibilidade</span></div>

    <header className="site-header">
      <Brand />
      <nav aria-label="Navegação da página"><Link href="/">Início</Link><a href="#para-quem">Para quem</a><a href="#como-solicitar">Como solicitar</a><a href="#duvidas">Dúvidas</a></nav>
      <a className="button button-small button-outline header-order-button" href={whatsapp} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Presentes e experiências para empresas</p>
        <h1 id="hero-title">Presentes corporativos em Chapecó<br /><em>para reconhecer clientes, equipes e parceiros</em></h1>
        <p className="hero-description">A GB orienta presentes gastronômicos para ações de agradecimento, reconhecimento e relacionamento, considerando o objetivo da empresa, a quantidade, a data e as possibilidades de personalização.</p>
        <div className="hero-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Conhecer opções corporativas <span aria-hidden="true">→</span></a><a className="text-link" href="#como-solicitar">Ver como solicitar</a></div>
        <p className="order-note">Atendimento pessoal pela Gabi · Viabilidade conforme quantidade e antecedência</p>
        <div className="hero-proof"><span>Produção artesanal</span><span>Orientação por objetivo</span><span>Chapecó e região</span></div>
      </div>
      <figure className="hero-visual"><img src="/images/gb-presentes.webp" alt="Presente gastronômico artesanal preparado com cuidado" width="1254" height="1254" fetchPriority="high" decoding="async" /><figcaption><span>01</span>Feito para reconhecer</figcaption></figure>
    </section>

    <section className="section occasions-section" aria-labelledby="relacoes-title">
      <div className="section-heading"><div><p className="eyebrow">Um gesto que representa a empresa</p><h2 id="relacoes-title">Presentear também é uma forma de cuidar da relação</h2></div><p>Um presente corporativo pode comunicar agradecimento, reconhecimento e proximidade. O ponto de partida não é escolher uma palavra-chave ou um pacote genérico: é entender quem vai receber e o que a empresa quer expressar naquele momento.</p></div>
    </section>

    <section className="section experiences-section" id="para-quem" aria-labelledby="para-quem-title">
      <div className="experiences-intro"><p className="eyebrow light">Diferentes relações, diferentes objetivos</p><h2 id="para-quem-title">Clientes, equipes, parceiros e ações especiais</h2><p>A quantidade, o prazo e a ocasião mudam de uma ação para outra. Por isso, as possibilidades são orientadas conforme o contexto de cada pedido.</p></div>
      <div className="product-list">{audiences.map(([title, text], index) => <article className="product-item" key={title}><span className="product-index">0{index + 1}</span><div><p className="product-label">Relacionamento corporativo</p><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="section occasions-section" aria-labelledby="proposta-title">
      <div className="section-heading"><div><p className="eyebrow">O que precisamos saber</p><h2 id="proposta-title">Uma proposta começa pelo objetivo da ação</h2></div><p>Para avaliar as opções, a Gabi precisa entender o motivo do presente, a quantidade aproximada, a data e como será a entrega. Essas informações ajudam a indicar formatos viáveis sem prometer algo que não se encaixe no prazo ou na produção.</p></div>
      <div className="occasion-grid">
        <article className="occasion-card"><h3>Objetivo</h3><p>Agradecimento, reconhecimento, comemoração ou relacionamento pedem abordagens diferentes.</p></article>
        <article className="occasion-card"><h3>Quantidade</h3><p>A quantidade aproximada orienta a viabilidade e as possibilidades de produção.</p></article>
        <article className="occasion-card"><h3>Personalização</h3><p>As possibilidades dependem do produto escolhido, da quantidade e da antecedência.</p></article>
        <article className="occasion-card"><h3>Entrega</h3><p>Endereço, distribuição e condições de entrega são alinhados conforme o pedido.</p></article>
      </div>
    </section>

    <section className="section care-section" id="como-solicitar" aria-labelledby="como-title">
      <div className="care-image"><img src="/images/gb-presentes.webp" alt="Presente artesanal preparado pela GB Grazing Foods" width="1254" height="1254" loading="lazy" decoding="async" /><div className="care-seal" aria-hidden="true"><span>Feito com</span><strong>intenção</strong></div></div>
      <div className="care-copy"><p className="eyebrow">Como solicitar</p><h2 id="como-title">Conte o que sua empresa precisa comunicar</h2><ol>
        <li><span>1</span><div><h3>Explique a ação</h3><p>Conte quem vai receber, qual é o objetivo e a data desejada.</p></div></li>
        <li><span>2</span><div><h3>Informe a quantidade</h3><p>A quantidade ajuda a avaliar formatos, personalização e prazo de produção.</p></div></li>
        <li><span>3</span><div><h3>Alinhe os detalhes</h3><p>Conheça as opções viáveis e combine entrega e demais informações com a Gabi.</p></div></li>
      </ol><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Falar sobre minha empresa <span aria-hidden="true">→</span></a></div>
    </section>

    <section className="section faq-section" id="duvidas" aria-labelledby="duvidas-title">
      <div className="faq-heading"><p className="eyebrow">Antes de solicitar</p><h2 id="duvidas-title">Dúvidas sobre pedidos corporativos</h2></div>
      <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="final-cta"><p className="eyebrow light">Quer reconhecer alguém em nome da empresa?</p><h2>Converse com a Gabi.<br /><em>Encontre uma opção que represente a intenção.</em></h2><p>Presentes corporativos em Chapecó e região, conforme quantidade, prazo e disponibilidade.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Consultar possibilidades <span aria-hidden="true">→</span></a></section>

    <footer><div className="footer-brand"><Brand /><p>Cestas, tábuas, presentes e experiências gastronômicas.</p></div><div className="footer-contact"><strong>Chapecó e região</strong><span>Pedidos corporativos conforme quantidade e prazo.</span></div><div className="footer-links"><Link href="/coffee-break-chapeco/">Coffee break para reuniões</Link><Link href="/cestas-de-cafe-da-manha-chapeco/">Cestas para presentear</Link><Link href="/">Voltar ao início</Link></div></footer>

    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Gabi sobre presentes corporativos pelo WhatsApp" title="Falar sobre presentes corporativos"><span className="whatsapp-float-icon"><WhatsAppIcon /></span><span className="whatsapp-float-label">Fale com a Gabi</span></a>
  </main>;
}
