import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/presentes-gastronomicos-chapeco/";
const pageUrl = `${siteUrl}${path}`;
const whatsappNumber = "5549999442478";
const whatsappMessage = "Olá Gabi! Vi a página de presentes gastronômicos da GB e gostaria de conhecer as opções disponíveis para presentear em Chapecó.";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Presentes Gastronômicos em Chapecó | GB Grazing Foods",
  description: "Presentes gastronômicos personalizados em Chapecó para aniversários, agradecimentos, comemorações e datas especiais. Consulte opções e entrega pelo WhatsApp.",
  alternates: { canonical: path },
  openGraph: {
    title: "Presentes Gastronômicos em Chapecó | GB Grazing Foods",
    description: "Presentes gastronômicos personalizados em Chapecó para aniversários, agradecimentos, comemorações e datas especiais. Consulte opções e entrega pelo WhatsApp.",
    url: path,
    siteName: "GB Grazing Foods",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/gb-presentes.webp", alt: "Presente gastronômico preparado pela GB Grazing Foods" }],
  },
};

const moments = [
  ["Aniversários", "Um presente gastronômico para marcar a data com apresentação cuidadosa e intenção."],
  ["Agradecimentos", "Uma forma de agradecer alguém importante com um gesto preparado sob encomenda."],
  ["Comemorações", "Opções para celebrar conquistas, encontros e outros momentos que merecem atenção."],
  ["Datas especiais", "Presentes para ocasiões em que você quer enviar algo escolhido com cuidado."],
];

const faqs = [
  ["A GB faz presentes gastronômicos em Chapecó?", "Sim. A GB prepara presentes gastronômicos sob encomenda para aniversários, agradecimentos, comemorações e datas especiais em Chapecó e região."],
  ["Quais opções de presente estão disponíveis?", "A disponibilidade pode variar. Fale com a Gabi para conhecer boxes, cestas e outras possibilidades de presente adequadas à ocasião."],
  ["É possível personalizar?", "As possibilidades de personalização dependem da opção escolhida, da antecedência e da disponibilidade. A orientação é feita diretamente pela Gabi."],
  ["Como funciona a entrega?", "Informe o endereço e a data desejada para consultar disponibilidade, taxa e horário de entrega em Chapecó e região."],
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
        name: "Presentes Gastronômicos em Chapecó | GB Grazing Foods",
        description: "Presentes gastronômicos personalizados para diferentes ocasiões em Chapecó e região.",
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
    ],
  };

  return <main id="inicio">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="top-note"><span>Presentes sob encomenda em Chapecó e região</span><span className="top-note-divider" aria-hidden="true" /><span>Opções conforme ocasião e disponibilidade</span></div>

    <header className="site-header">
      <Brand />
      <nav aria-label="Navegação da página"><Link href="/">Início</Link><a href="#momentos">Ocasiões</a><a href="#como-pedir">Como pedir</a><a href="#duvidas">Dúvidas</a></nav>
      <a className="button button-small button-outline header-order-button" href={whatsapp} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Boxes, cestas e opções para presentear</p>
        <h1 id="hero-title">Presentes gastronômicos em Chapecó<br /><em>para transformar intenção em gesto</em></h1>
        <p className="hero-description">A GB prepara presentes gastronômicos sob encomenda para aniversários, agradecimentos, comemorações e datas especiais, combinando apresentação cuidadosa e produtos selecionados conforme as opções disponíveis.</p>
        <div className="hero-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Conhecer opções de presentes <span aria-hidden="true">→</span></a><a className="text-link" href="#como-pedir">Ver como pedir</a></div>
        <p className="order-note">Atendimento pessoal pela Gabi · Opções conforme disponibilidade</p>
        <div className="hero-proof"><span>Sob encomenda</span><span>Apresentação cuidadosa</span><span>Entrega em Chapecó e região</span></div>
      </div>
      <figure className="hero-visual"><img src="/images/gb-presentes.webp" alt="Presente gastronômico artesanal preparado para uma ocasião especial" width="1254" height="1254" fetchPriority="high" decoding="async" /><figcaption><span>01</span>Feito para presentear</figcaption></figure>
    </section>

    <section className="section occasions-section" aria-labelledby="opcoes-title">
      <div className="section-heading"><div><p className="eyebrow">Uma opção para cada intenção</p><h2 id="opcoes-title">Presentes preparados de acordo com a ocasião</h2></div><p>Em vez de escolher apenas pela embalagem, conte para a Gabi quem vai receber e o motivo do presente. A partir disso, você conhece as possibilidades disponíveis para a data.</p></div>
    </section>

    <section className="section experiences-section" id="momentos" aria-labelledby="momentos-title">
      <div className="experiences-intro"><p className="eyebrow light">Momentos para presentear</p><h2 id="momentos-title">Aniversários, agradecimentos, comemorações e datas especiais</h2><p>Boxes presente, cestas e outras opções gastronômicas podem atender intenções diferentes, sempre conforme disponibilidade e antecedência.</p></div>
      <div className="product-list">{moments.map(([title, text], index) => <article className="product-item" key={title}><span className="product-index">0{index + 1}</span><div><p className="product-label">Presente gastronômico</p><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="section occasions-section" aria-labelledby="escolha-title">
      <div className="section-heading"><div><p className="eyebrow">Como escolher</p><h2 id="escolha-title">Pessoa, ocasião, data e entrega orientam o pedido</h2></div><p>Essas informações ajudam a Gabi a indicar as opções disponíveis e alinhar detalhes de personalização e entrega sem criar uma solução genérica para todos os momentos.</p></div>
      <div className="occasion-grid">
        <article className="occasion-card"><h3>Quem vai receber</h3><p>Conte um pouco sobre a pessoa para orientar a escolha do presente.</p></article>
        <article className="occasion-card"><h3>Ocasião</h3><p>Aniversário, agradecimento ou comemoração ajudam a definir a intenção do pedido.</p></article>
        <article className="occasion-card"><h3>Personalização</h3><p>Consulte as possibilidades conforme a opção escolhida e a antecedência.</p></article>
        <article className="occasion-card"><h3>Entrega</h3><p>Informe endereço e data para consultar disponibilidade e taxa em Chapecó e região.</p></article>
      </div>
    </section>

    <section className="section care-section" id="como-pedir" aria-labelledby="como-title">
      <div className="care-image"><img src="/images/gb-presentes.webp" alt="Presente gastronômico preparado pela GB Grazing Foods" width="1254" height="1254" loading="lazy" decoding="async" /><div className="care-seal" aria-hidden="true"><span>Feito com</span><strong>intenção</strong></div></div>
      <div className="care-copy"><p className="eyebrow">Como pedir</p><h2 id="como-title">Seu presente começa com uma conversa</h2><ol>
        <li><span>1</span><div><h3>Conte quem vai receber</h3><p>Informe a ocasião, a data e o que você gostaria de transmitir com o presente.</p></div></li>
        <li><span>2</span><div><h3>Conheça as opções disponíveis</h3><p>A Gabi orienta as possibilidades para o momento e a antecedência.</p></div></li>
        <li><span>3</span><div><h3>Combine a entrega</h3><p>Informe o endereço e alinhe disponibilidade, taxa e horário.</p></div></li>
      </ol><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true">→</span></a></div>
    </section>

    <section className="section faq-section" id="duvidas" aria-labelledby="duvidas-title">
      <div className="faq-heading"><p className="eyebrow">Antes de escolher</p><h2 id="duvidas-title">Dúvidas sobre presentes gastronômicos</h2></div>
      <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="final-cta"><p className="eyebrow light">Quer enviar um presente especial?</p><h2>Converse com a Gabi.<br /><em>Encontre uma opção para esse momento.</em></h2><p>Presentes gastronômicos sob encomenda com entrega em Chapecó e região conforme disponibilidade.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Conhecer possibilidades <span aria-hidden="true">→</span></a></section>

    <footer><div className="footer-brand"><Brand /><p>Cestas, tábuas, presentes e experiências gastronômicas.</p></div><div className="footer-contact"><strong>Chapecó e região</strong><span>Pedidos conforme antecedência e disponibilidade.</span></div><div className="footer-links"><Link href="/cestas-de-cafe-da-manha-chapeco/">Cestas de café da manhã</Link><Link href="/tabuas-de-frios-chapeco/">Tábuas de frios</Link><Link href="/presentes-corporativos-chapeco/">Presentes para empresas</Link><Link href="/">Voltar ao início</Link></div></footer>

    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Gabi sobre presentes gastronômicos pelo WhatsApp" title="Falar sobre presentes gastronômicos"><span className="whatsapp-float-icon"><WhatsAppIcon /></span><span className="whatsapp-float-label">Fale com a Gabi</span></a>
  </main>;
}
