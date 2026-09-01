import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/grazing-table-chapeco/";
const pageUrl = `${siteUrl}${path}`;
const whatsappNumber = "5549999442478";
const whatsappMessage = "Olá Gabi! Vi a página de grazing table da GB e gostaria de conversar sobre uma comemoração ou evento em Chapecó.";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Grazing Table em Chapecó | GB Grazing Foods",
  description: "Grazing tables e mesas gastronômicas em Chapecó para aniversários, recepções e celebrações. Consulte formatos e disponibilidade pelo WhatsApp.",
  alternates: { canonical: path },
  openGraph: {
    title: "Grazing Table em Chapecó | GB Grazing Foods",
    description: "Grazing tables e mesas gastronômicas em Chapecó para aniversários, recepções e celebrações. Consulte formatos e disponibilidade pelo WhatsApp.",
    url: path,
    siteName: "GB Grazing Foods",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/gb-eventos.webp", alt: "Grazing table preparada para uma celebração em Chapecó" }],
  },
};

const occasions = [
  ["Aniversários", "Uma mesa gastronômica pode receber os convidados com apresentação cuidadosa e sabores para compartilhar."],
  ["Recepções", "Para encontros e recepções em que a experiência à mesa também faz parte do momento."],
  ["Comemorações", "Uma proposta para celebrar datas especiais com uma composição gastronômica pensada para o evento."],
  ["Encontros especiais", "Formatos orientados pela Gabi conforme o perfil do encontro, o local e a disponibilidade."],
];

const faqs = [
  ["A GB prepara grazing table em Chapecó?", "Sim. A GB prepara mesas gastronômicas para encontros e celebrações em Chapecó e região, conforme formato e disponibilidade."],
  ["Como definir o tamanho e o formato?", "Fale com a Gabi e informe a ocasião, a data, o local e a quantidade aproximada de pessoas. A orientação é feita de acordo com as opções disponíveis."],
  ["Com quanto tempo de antecedência devo entrar em contato?", "Para eventos e celebrações, quanto antes a conversa começar, melhor. A confirmação depende da agenda e da disponibilidade."],
  ["Como solicitar um orçamento?", "Entre em contato pelo WhatsApp e compartilhe os principais detalhes do evento. A Gabi orienta os próximos passos pessoalmente."],
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
      { "@type": "WebPage", name: "Grazing Table em Chapecó | GB Grazing Foods", description: "Grazing tables e mesas gastronômicas em Chapecó para aniversários, recepções e celebrações.", url: pageUrl, inLanguage: "pt-BR", isPartOf: { "@type": "WebSite", name: "GB Grazing Foods", url: `${siteUrl}/` } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Grazing table em Chapecó", item: pageUrl },
      ] },
    ],
  };

  return <main id="inicio">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="top-note"><span>Eventos em Chapecó e região</span><span className="top-note-divider" aria-hidden="true" /><span>Atendimento pessoal pela Gabi</span></div>
    <header className="site-header"><Brand /><nav aria-label="Navegação da página"><Link href="/">Início</Link><a href="#ocasioes">Ocasiões</a><a href="#como-planejar">Como planejar</a><a href="#duvidas">Dúvidas</a></nav><a className="button button-small button-outline header-order-button" href={whatsapp} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true">↗</span></a></header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow">Grazing table em Chapecó</p><h1 id="hero-title">Grazing table em Chapecó<br /><em>para celebrar ao redor da mesa</em></h1><p className="hero-description">Mesas gastronômicas para aniversários, recepções, comemorações e encontros especiais, com orientação pessoal da Gabi conforme o evento e a disponibilidade.</p><div className="hero-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Planejar meu evento <span aria-hidden="true">→</span></a><a className="text-link" href="#como-planejar">Entender como funciona</a></div><p className="order-note">Formato, data e atendimento conforme disponibilidade</p><div className="hero-proof"><span>Produção artesanal</span><span>Atendimento pessoal</span><span>Chapecó e região</span></div></div>
      <figure className="hero-visual"><img src="/images/gb-eventos.webp" alt="Grazing table preparada para uma celebração em Chapecó" fetchPriority="high" decoding="async" /><figcaption><span>01</span>Feito para celebrar</figcaption></figure>
    </section>

    <section className="section occasions-section" aria-labelledby="experiencia-title"><div className="section-heading"><div><p className="eyebrow">Uma experiência para receber bem</p><h2 id="experiencia-title">Mesa gastronômica para transformar o encontro em experiência</h2></div><p>A grazing table reúne apresentação, sabores e o prazer de compartilhar. A proposta é criar uma mesa que acompanhe a ocasião e ajude a tornar o momento mais acolhedor e memorável.</p></div></section>

    <section className="section experiences-section" id="ocasioes" aria-labelledby="ocasioes-title"><div className="experiences-intro"><p className="eyebrow light">Para diferentes celebrações</p><h2 id="ocasioes-title">Quando escolher uma grazing table?</h2><p>Conte para a Gabi como será o encontro. A partir dessas informações, ela orienta as possibilidades disponíveis.</p></div><div className="product-list">{occasions.map(([title, text], index) => <article className="product-item" key={title}><span className="product-index">0{index + 1}</span><div><p className="product-label">Evento em Chapecó</p><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="section occasions-section" aria-labelledby="artesanal-title"><div className="section-heading"><div><p className="eyebrow">Cuidado em cada detalhe</p><h2 id="artesanal-title">Grazing table preparada artesanalmente em Chapecó</h2></div><p>A GB trabalha com produção artesanal e atendimento pessoal. Cada solicitação começa pela compreensão da ocasião, da data e do formato do encontro, sempre conforme a agenda e a disponibilidade.</p></div><div className="occasion-grid"><article className="occasion-card"><h3>Ocasião</h3><p>O planejamento começa entendendo o tipo de encontro e o que você deseja proporcionar.</p></article><article className="occasion-card"><h3>Formato</h3><p>A Gabi orienta as possibilidades disponíveis de acordo com as informações do evento.</p></article><article className="occasion-card"><h3>Apresentação</h3><p>A composição visual faz parte da experiência de receber e compartilhar.</p></article><article className="occasion-card"><h3>Atendimento pessoal</h3><p>Os detalhes são alinhados diretamente com a Gabi pelo WhatsApp.</p></article></div></section>

    <section className="section care-section" id="como-planejar" aria-labelledby="como-title"><div className="care-image"><img src="/images/gb-eventos.webp" alt="Mesa gastronômica preparada pela GB Grazing Foods" loading="lazy" decoding="async" /><div className="care-seal" aria-hidden="true"><span>Feito para</span><strong>celebrar</strong></div></div><div className="care-copy"><p className="eyebrow">Como planejar</p><h2 id="como-title">Seu evento começa com uma conversa</h2><ol><li><span>1</span><div><h3>Conte sobre o evento</h3><p>Informe a ocasião, a data, o local e a quantidade aproximada de pessoas.</p></div></li><li><span>2</span><div><h3>Receba orientação</h3><p>A Gabi apresenta as possibilidades disponíveis para o formato do encontro.</p></div></li><li><span>3</span><div><h3>Confirme os detalhes</h3><p>Alinhe os detalhes finais conforme agenda e disponibilidade.</p></div></li></ol><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre meu evento <span aria-hidden="true">→</span></a></div></section>

    <section className="section faq-section" id="duvidas" aria-labelledby="duvidas-title"><div className="faq-heading"><p className="eyebrow">Antes de planejar</p><h2 id="duvidas-title">Dúvidas sobre grazing table em Chapecó</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="final-cta"><p className="eyebrow light">Tem uma celebração chegando?</p><h2>Conte para a Gabi.<br /><em>Planeje uma experiência à mesa.</em></h2><p>Grazing tables e mesas gastronômicas para encontros e celebrações em Chapecó e região.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Consultar disponibilidade <span aria-hidden="true">→</span></a></section>
    <footer><div className="footer-brand"><Brand /><p>Cestas, tábuas, presentes e experiências gastronômicas.</p></div><div className="footer-contact"><strong>Chapecó e região</strong><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp: (49) 99944-2478</a></div><div className="footer-links"><Link href="/tabuas-de-frios-chapeco/">Ver tábuas de frios</Link><Link href="/">Voltar ao início</Link></div></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale com a Gabi pelo WhatsApp" title="Fale com a Gabi pelo WhatsApp"><span className="whatsapp-float-icon"><WhatsAppIcon /></span><span className="whatsapp-float-label">Fale com a Gabi</span></a>
  </main>;
}
