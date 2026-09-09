import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/coffee-break-chapeco/";
const pageUrl = `${siteUrl}${path}`;
const whatsappNumber = "5549999442478";
const whatsappMessage = "Olá Gabi! Vi a página de coffee break da GB e gostaria de consultar uma opção para reunião, treinamento ou evento em Chapecó.";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Coffee Break em Chapecó | GB Grazing Foods",
  description: "Coffee break sob encomenda em Chapecó para reuniões, treinamentos, eventos e encontros corporativos. Consulte quantidade, prazo e disponibilidade pelo WhatsApp.",
  alternates: { canonical: path },
  openGraph: {
    title: "Coffee Break em Chapecó | GB Grazing Foods",
    description: "Coffee break sob encomenda em Chapecó para reuniões, treinamentos, eventos e encontros corporativos. Consulte quantidade, prazo e disponibilidade pelo WhatsApp.",
    url: path,
    siteName: "GB Grazing Foods",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/gb-eventos.webp", alt: "Mesa gastronômica para uma pausa em reunião ou encontro" }],
  },
};

const uses = [
  ["Reuniões", "Uma pausa organizada para receber equipes, clientes ou parceiros durante encontros de trabalho."],
  ["Treinamentos e workshops", "Um formato para acompanhar intervalos e momentos de integração ao longo da programação."],
  ["Eventos corporativos", "Coffee break para recepções, encontros profissionais e ações internas, conforme a dinâmica do evento."],
  ["Encontros de equipe", "Uma solução sob encomenda para momentos em que a empresa quer reunir pessoas com praticidade e cuidado."],
];

const faqs = [
  ["A GB faz coffee break em Chapecó?", "Sim. A GB prepara coffee break sob encomenda em Chapecó para reuniões, treinamentos, eventos e encontros corporativos, conforme quantidade, prazo e disponibilidade."],
  ["O que preciso informar para solicitar?", "Informe a data, o local, o horário, o tipo de encontro e a quantidade aproximada de pessoas. Com essas informações, a Gabi orienta as possibilidades disponíveis."],
  ["Com quanto tempo de antecedência devo solicitar?", "Para pedidos corporativos, quanto antes você entrar em contato, melhor. A confirmação depende da agenda, da quantidade e da disponibilidade de produção."],
  ["Coffee break e presente corporativo são a mesma coisa?", "Não. O coffee break é pensado para servir pessoas durante uma reunião, treinamento ou evento. Para agradecer ou reconhecer clientes, equipes e parceiros, veja as opções de presentes corporativos."],
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
        name: "Coffee Break em Chapecó | GB Grazing Foods",
        description: "Coffee break sob encomenda para reuniões, treinamentos, eventos e encontros corporativos em Chapecó.",
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
    ],
  };

  return <main id="inicio">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="top-note"><span>Coffee break sob encomenda em Chapecó</span><span className="top-note-divider" aria-hidden="true" /><span>Conforme quantidade, prazo e disponibilidade</span></div>

    <header className="site-header">
      <Brand />
      <nav aria-label="Navegação da página"><Link href="/">Início</Link><a href="#ocasioes">Ocasiões</a><a href="#como-solicitar">Como solicitar</a><a href="#duvidas">Dúvidas</a></nav>
      <a className="button button-small button-outline header-order-button" href={whatsapp} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Coffee break para empresas e encontros profissionais</p>
        <h1 id="hero-title">Coffee break em Chapecó<br /><em>para reuniões, treinamentos e eventos</em></h1>
        <p className="hero-description">A GB prepara coffee break sob encomenda de acordo com o tipo de encontro, a quantidade aproximada de pessoas, a data, o horário, o local e a disponibilidade de produção.</p>
        <div className="hero-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Consultar coffee break <span aria-hidden="true">→</span></a><a className="text-link" href="#como-solicitar">Ver como solicitar</a></div>
        <p className="order-note">Atendimento pessoal pela Gabi · Pedidos corporativos conforme agenda e disponibilidade</p>
        <div className="hero-proof"><span>Sob encomenda</span><span>Planejamento por quantidade</span><span>Atendimento em Chapecó</span></div>
      </div>
      <figure className="hero-visual"><img src="/images/gb-eventos.webp" alt="Mesa gastronômica organizada para receber pessoas em um encontro" fetchPriority="high" decoding="async" /><figcaption><span>01</span>Feito para acolher</figcaption></figure>
    </section>

    <section className="section occasions-section" aria-labelledby="pausa-title">
      <div className="section-heading"><div><p className="eyebrow">Uma pausa organizada para o encontro</p><h2 id="pausa-title">O formato parte da rotina e do número de pessoas</h2></div><p>Uma reunião curta, um treinamento de várias horas e um evento corporativo têm necessidades diferentes. Por isso, a orientação considera o horário, a quantidade de participantes e como o coffee break será servido.</p></div>
    </section>

    <section className="section experiences-section" id="ocasioes" aria-labelledby="ocasioes-title">
      <div className="experiences-intro"><p className="eyebrow light">Onde o coffee break pode ajudar</p><h2 id="ocasioes-title">Reuniões, treinamentos, workshops e eventos corporativos</h2><p>Conte como será o encontro. Essas informações ajudam a orientar uma solução adequada para a ocasião e para a quantidade de pessoas.</p></div>
      <div className="product-list">{uses.map(([title, text], index) => <article className="product-item" key={title}><span className="product-index">0{index + 1}</span><div><p className="product-label">Coffee break sob encomenda</p><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="section occasions-section" aria-labelledby="informacoes-title">
      <div className="section-heading"><div><p className="eyebrow">Informações para o pedido</p><h2 id="informacoes-title">Data, horário, local e quantidade de pessoas</h2></div><p>Esses dados permitem verificar disponibilidade e orientar as possibilidades para o encontro, sem assumir um formato único para todos os pedidos.</p></div>
      <div className="occasion-grid">
        <article className="occasion-card"><h3>Data e horário</h3><p>Informe quando acontecerá o encontro e em qual momento o coffee break será servido.</p></article>
        <article className="occasion-card"><h3>Quantidade</h3><p>A quantidade aproximada de pessoas orienta o dimensionamento do pedido.</p></article>
        <article className="occasion-card"><h3>Tipo de encontro</h3><p>Reunião, treinamento, workshop ou evento têm dinâmicas diferentes.</p></article>
        <article className="occasion-card"><h3>Local</h3><p>Informe onde será realizado para alinhar disponibilidade e condições de atendimento.</p></article>
      </div>
    </section>

    <section className="section care-section" id="como-solicitar" aria-labelledby="como-title">
      <div className="care-image"><img src="/images/gb-eventos.webp" alt="Composição gastronômica para uma pausa durante um encontro" loading="lazy" decoding="async" /><div className="care-seal" aria-hidden="true"><span>Feito para</span><strong>acolher</strong></div></div>
      <div className="care-copy"><p className="eyebrow">Como solicitar</p><h2 id="como-title">Envie as informações do seu encontro</h2><ol>
        <li><span>1</span><div><h3>Informe data, horário e local</h3><p>Conte quando e onde o encontro vai acontecer.</p></div></li>
        <li><span>2</span><div><h3>Informe a quantidade de pessoas</h3><p>Diga a quantidade aproximada e o tipo de encontro.</p></div></li>
        <li><span>3</span><div><h3>Consulte as possibilidades</h3><p>A Gabi orienta as opções disponíveis e alinha os detalhes do pedido.</p></div></li>
      </ol><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Solicitar pelo WhatsApp <span aria-hidden="true">→</span></a></div>
    </section>

    <section className="section faq-section" id="duvidas" aria-labelledby="duvidas-title">
      <div className="faq-heading"><p className="eyebrow">Antes de solicitar</p><h2 id="duvidas-title">Dúvidas sobre coffee break</h2></div>
      <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="final-cta"><p className="eyebrow light">Vai realizar uma reunião, treinamento ou evento?</p><h2>Converse com a Gabi.<br /><em>Organize o coffee break de acordo com o encontro.</em></h2><p>Atendimento em Chapecó conforme quantidade, prazo, local e disponibilidade.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Consultar disponibilidade <span aria-hidden="true">→</span></a></section>

    <footer><div className="footer-brand"><Brand /><p>Cestas, tábuas, presentes e experiências gastronômicas.</p></div><div className="footer-contact"><strong>Chapecó e região</strong><span>Pedidos conforme quantidade, prazo e disponibilidade.</span></div><div className="footer-links"><Link href="/presentes-corporativos-chapeco/">Presentes corporativos</Link><Link href="/grazing-table-chapeco/">Montagem para eventos</Link><Link href="/">Voltar ao início</Link></div></footer>

    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Gabi sobre coffee break pelo WhatsApp" title="Falar sobre coffee break"><span className="whatsapp-float-icon"><WhatsAppIcon /></span><span className="whatsapp-float-label">Fale com a Gabi</span></a>
  </main>;
}
