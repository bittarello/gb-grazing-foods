import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/cestas-de-cafe-da-manha-chapeco/";
const pageUrl = `${siteUrl}${path}`;
const whatsappNumber = "5549999442478";
const whatsappMessage = "Olá Gabi! Vi a página de cestas de café da manhã da GB e gostaria de conhecer as opções disponíveis.";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Cestas de Café da Manhã em Chapecó | GB Grazing Foods",
  description: "Cestas de café da manhã artesanais em Chapecó para aniversários, agradecimentos e momentos especiais. Consulte opções e faça seu pedido pelo WhatsApp.",
  alternates: { canonical: path },
  openGraph: {
    title: "Cestas de Café da Manhã em Chapecó | GB Grazing Foods",
    description: "Cestas de café da manhã artesanais em Chapecó para aniversários, agradecimentos e momentos especiais. Consulte opções e faça seu pedido pelo WhatsApp.",
    url: path,
    siteName: "GB Grazing Foods",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/gb-presentes.webp", alt: "Cesta de café da manhã artesanal com frutas, pães e flores" }],
  },
};

const moments = [
  ["Aniversários", "Uma forma de começar um aniversário com um gesto pensado para quem vai receber."],
  ["Momentos a dois", "Uma cesta pode transformar a primeira parte do dia em um momento especial para compartilhar."],
  ["Agradecimentos", "Para agradecer com cuidado, a Gabi orienta as opções disponíveis para a ocasião."],
  ["Datas especiais", "Uma escolha para comemorações e outras datas que merecem um presente preparado com atenção."],
];

const faqs = [
  ["Vocês entregam cestas de café da manhã em Chapecó?", "Sim. A GB realiza entregas em Chapecó e região. A disponibilidade e a taxa de entrega são consultadas conforme o endereço."],
  ["Com quanto tempo de antecedência devo fazer o pedido?", "Os pedidos devem ser feitos preferencialmente com 24 horas de antecedência, conforme disponibilidade."],
  ["É possível personalizar?", "Sim. Conte para a Gabi quem vai receber, qual é a ocasião e o que você imaginou. A orientação é feita pessoalmente, conforme o produto e a antecedência."],
  ["Como faço meu pedido?", "Fale diretamente com a Gabi pelo WhatsApp, conte o momento e consulte as opções disponíveis. Depois, combine os detalhes e confirme a entrega."],
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
      { "@type": "WebPage", name: "Cestas de Café da Manhã em Chapecó | GB Grazing Foods", description: "Cestas de café da manhã artesanais em Chapecó para aniversários, agradecimentos e momentos especiais.", url: pageUrl, inLanguage: "pt-BR", isPartOf: { "@type": "WebSite", name: "GB Grazing Foods", url: `${siteUrl}/` } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Cestas de café da manhã em Chapecó", item: pageUrl },
      ] },
    ],
  };

  return <main id="inicio">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="top-note"><span>Entregas em Chapecó e região</span><span className="top-note-divider" aria-hidden="true" /><span>Pedidos preferencialmente com 24h</span></div>

    <header className="site-header">
      <Brand />
      <nav aria-label="Navegação da página"><Link href="/">Início</Link><a href="#momentos">Momentos</a><a href="#como-encomendar">Como pedir</a><a href="#duvidas">Dúvidas</a></nav>
      <a className="button button-small button-outline header-order-button" href={whatsapp} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Cestas de café da manhã em Chapecó e região</p>
        <h1 id="hero-title">Cestas de café da manhã em Chapecó<br /><em>para transformar carinho em presente</em></h1>
        <p className="hero-description">Cestas preparadas artesanalmente para presentear com cuidado, com atendimento pessoal pela Gabi e entregas em Chapecó e região conforme disponibilidade.</p>
        <div className="hero-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Conhecer opções pelo WhatsApp <span aria-hidden="true">→</span></a><a className="text-link" href="#opcoes">Entender como funciona</a></div>
        <p className="order-note">Atendimento pessoal pela Gabi · Pedidos conforme disponibilidade</p>
        <div className="hero-proof"><span>Produção artesanal</span><span>Atendimento pessoal</span><span>Chapecó e região</span></div>
      </div>
      <figure className="hero-visual"><img src="/images/gb-presentes.webp" alt="Cesta de café da manhã artesanal com frutas, pães e flores" width="1254" height="1254" fetchPriority="high" decoding="async" /><figcaption><span>01</span>Feito para presentear</figcaption></figure>
    </section>

    <section className="section occasions-section" aria-labelledby="presente-title">
      <div className="section-heading"><div><p className="eyebrow">Um gesto que chega logo cedo</p><h2 id="presente-title">Um presente para começar o dia de um jeito especial</h2></div><p>Uma cesta de café da manhã em Chapecó pode fazer parte de aniversários, agradecimentos, comemorações ou simplesmente de uma surpresa para alguém importante. A proposta é transformar o carinho em um presente preparado com atenção.</p></div>
    </section>

    <section className="section care-section" id="opcoes" aria-labelledby="opcoes-title">
      <div className="care-image"><img src="/images/gb-presentes.webp" alt="Cesta artesanal preparada para presentear" width="1254" height="1254" loading="lazy" decoding="async" /><div className="care-seal" aria-hidden="true"><span>Feito com</span><strong>afeto</strong></div></div>
      <div className="care-copy"><p className="eyebrow">Consulte o que está disponível</p><h2 id="opcoes-title">Conheça nossas opções de café da manhã</h2><ol>
        <li><span>1</span><div><h3>Opções orientadas pela Gabi</h3><p>Fale pelo WhatsApp para conhecer as opções disponíveis e receber orientação sobre formatos, sabores, valores e detalhes.</p></div></li>
        <li><span>2</span><div><h3>Escolha de acordo com o momento</h3><p>Conte quem vai receber, qual é a ocasião e quando você precisa para receber uma orientação pessoal.</p></div></li>
      </ol><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Consultar opções disponíveis <span aria-hidden="true">→</span></a><p className="whatsapp-microcopy">WhatsApp · Atendimento pessoal pela Gabi</p></div>
    </section>

    <section className="section experiences-section" id="momentos" aria-labelledby="momentos-title">
      <div className="experiences-intro"><p className="eyebrow light">Ideias para presentear</p><h2 id="momentos-title">Para quais momentos escolher uma cesta de café da manhã?</h2><p>O mais importante é o gesto. A Gabi ajuda você a encontrar uma opção disponível que faça sentido para a ocasião.</p></div>
      <div className="product-list">{moments.map(([title, text], index) => <article className="product-item" key={title}><span className="product-index">0{index + 1}</span><div><p className="product-label">Momento especial</p><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="section occasions-section" aria-labelledby="artesanal-title">
      <div className="section-heading"><div><p className="eyebrow">Cuidado em cada montagem</p><h2 id="artesanal-title">Cestas preparadas artesanalmente em Chapecó</h2></div><p>A GB trabalha com produção artesanal e atendimento pessoal. A Gabi orienta cada pedido com atenção ao momento, à apresentação e aos detalhes que podem ser combinados conforme a opção escolhida e a disponibilidade.</p></div>
      <div className="occasion-grid">
        <article className="occasion-card"><h3>Cuidado</h3><p>O pedido começa entendendo quem vai receber e qual é a ocasião.</p></article>
        <article className="occasion-card"><h3>Apresentação</h3><p>A montagem faz parte da experiência de transformar o presente em um gesto especial.</p></article>
        <article className="occasion-card"><h3>Produção artesanal</h3><p>As experiências da GB são preparadas artesanalmente, conforme a proposta apresentada no site.</p></article>
        <article className="occasion-card"><h3>Atendimento pessoal</h3><p>A conversa e a orientação do pedido são feitas diretamente com a Gabi.</p></article>
      </div>
    </section>

    <section className="section occasions-section" aria-labelledby="entrega-title">
      <div className="section-heading"><div><p className="eyebrow">Entrega combinada com você</p><h2 id="entrega-title">Entrega de cestas de café da manhã em Chapecó</h2></div><p>As entregas são realizadas em Chapecó e região. A disponibilidade e a taxa de entrega são consultadas conforme o endereço informado no momento do pedido.</p></div>
      <div className="commercial-info"><div className="price-highlight"><span>Região atendida</span><strong>Chapecó e região</strong></div><div className="commercial-detail"><span>Disponibilidade e taxa</span><p>Consulte a disponibilidade e a taxa de entrega conforme o endereço.</p></div><div className="commercial-detail"><span>Antecedência</span><p>Pedidos preferencialmente com 24 horas de antecedência, conforme disponibilidade.</p></div></div>
    </section>

    <section className="section care-section" id="como-encomendar" aria-labelledby="como-title">
      <div className="care-copy"><p className="eyebrow">Seu pedido começa com uma conversa</p><h2 id="como-title">Como encomendar sua cesta</h2><p className="hero-description">Fale diretamente com a Gabi para conhecer as opções disponíveis e combinar os detalhes do seu pedido.</p><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Fazer pedido pelo WhatsApp <span aria-hidden="true">→</span></a></div>
      <div className="care-copy"><ol><li><span>1</span><div><h3>Conte o momento</h3><p>Diga quem vai receber, qual é a ocasião e quando você precisa.</p></div></li><li><span>2</span><div><h3>Escolha com a Gabi</h3><p>Conheça as opções disponíveis e receba orientação sobre os detalhes.</p></div></li><li><span>3</span><div><h3>Confirme os detalhes da entrega</h3><p>Informe o endereço e combine disponibilidade, taxa e demais detalhes do pedido.</p></div></li></ol></div>
    </section>

    <section className="section faq-section" id="duvidas" aria-labelledby="duvidas-title">
      <div className="faq-heading"><p className="eyebrow">Antes de pedir</p><h2 id="duvidas-title">Dúvidas sobre nossas cestas de café da manhã</h2></div>
      <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="final-cta"><p className="eyebrow light">Quer transformar carinho em presente?</p><h2>Converse com a Gabi.<br /><em>Conheça as opções disponíveis.</em></h2><p>Cestas de café da manhã em Chapecó e região, com atendimento pessoal e pedidos conforme disponibilidade.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true">→</span></a></section>

    <footer><div className="footer-brand"><Brand /><p>Cestas, tábuas, presentes e experiências gastronômicas.</p></div><div className="footer-contact"><strong>Chapecó e região</strong><span>Pedidos preferencialmente com 24h de antecedência.</span></div><div className="footer-links"><a className="button button-dark footer-order-button" href={whatsapp} target="_blank" rel="noreferrer">Consultar opções pelo WhatsApp</a><Link href="/">Voltar para a página inicial</Link></div></footer>

    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Consultar cestas de café da manhã pelo WhatsApp" title="Consultar pelo WhatsApp"><span className="whatsapp-float-icon"><WhatsAppIcon /></span><span className="whatsapp-float-label">Fale com a Gabi</span></a>
  </main>;
}
