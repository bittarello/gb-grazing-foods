import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://gbgrazingfoods.com.br";
const path = "/tabuas-de-frios-chapeco/";
const pageUrl = `${siteUrl}${path}`;
const whatsappNumber = "5549999442478";
const whatsappMessage = "Olá Gabi! Vi a página de tábuas de frios da GB e gostaria de conhecer as opções disponíveis.";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Tábuas de Frios em Chapecó | GB Grazing Foods",
  description: "Tábuas de frios artesanais em Chapecó para casal, amigos, família e encontros especiais. Consulte as opções e combine a entrega pelo WhatsApp.",
  alternates: { canonical: path },
  openGraph: {
    title: "Tábuas de Frios em Chapecó | GB Grazing Foods",
    description: "Tábuas de frios artesanais em Chapecó para casal, amigos, família e encontros especiais. Consulte as opções e combine a entrega pelo WhatsApp.",
    url: path,
    siteName: "GB Grazing Foods",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/gb-hero.webp", alt: "Tábua de frios artesanal preparada para compartilhar" }],
  },
};

const moments = [
  ["Momentos a dois", "Uma opção para uma noite tranquila, uma conversa sem pressa ou um encontro especial em casa."],
  ["Receber amigos", "Uma forma prática e bonita de servir enquanto todo mundo aproveita o encontro."],
  ["Encontros em família", "Uma composição para colocar no centro da mesa e compartilhar sabores juntos."],
  ["Celebrações", "Para aniversários e pequenas comemorações em que a apresentação também faz parte da experiência."],
];

const faqs = [
  ["Vocês entregam tábuas de frios em Chapecó?", "Sim. A GB realiza entregas em Chapecó e região. A disponibilidade e a taxa de entrega são consultadas conforme o endereço."],
  ["Com quanto tempo de antecedência devo fazer o pedido?", "Os pedidos devem ser feitos preferencialmente com 24 horas de antecedência, conforme disponibilidade."],
  ["É possível personalizar a tábua?", "Sim. Conte para a Gabi qual é a ocasião, para quantas pessoas você está planejando e o que imaginou. A orientação é feita pessoalmente, conforme as opções e a antecedência."],
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
      { "@type": "WebPage", name: "Tábuas de Frios em Chapecó | GB Grazing Foods", description: "Tábuas de frios artesanais para compartilhar em Chapecó e região.", url: pageUrl, inLanguage: "pt-BR", isPartOf: { "@type": "WebSite", name: "GB Grazing Foods", url: `${siteUrl}/` } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Tábuas de frios", item: pageUrl },
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
        <p className="eyebrow">Experiências para compartilhar em Chapecó e região</p>
        <h1 id="hero-title">Tábuas de frios em Chapecó<br /><em>para compartilhar bons momentos</em></h1>
        <p className="hero-description">A GB prepara tábuas para encontros a dois, amigos, família e pequenas celebrações, com orientação pessoal pela Gabi e entrega combinada conforme o endereço.</p>
        <div className="hero-actions"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Conhecer opções pelo WhatsApp <span aria-hidden="true">→</span></a><a className="text-link" href="#opcoes">Entender como funciona</a></div>
        <p className="order-note">Atendimento pessoal pela Gabi · Pedidos conforme disponibilidade</p>
        <div className="hero-proof"><span>Produção artesanal</span><span>Atendimento pessoal</span><span>Chapecó e região</span></div>
      </div>
      <figure className="hero-visual"><img src="/images/gb-hero.webp" alt="Tábua artesanal com queijos, frutas, pães e embutidos" width="1587" height="991" fetchPriority="high" decoding="async" /><figcaption><span>01</span>Feito para compartilhar</figcaption></figure>
    </section>

    <section className="section occasions-section" aria-labelledby="experiencia-title">
      <div className="section-heading"><div><p className="eyebrow">Um encontro com mais sabor</p><h2 id="experiencia-title">Uma tábua para deixar a mesa pronta para compartilhar</h2></div><p>Para uma noite a dois, uma visita de amigos ou um encontro em família, a tábua reúne sabores e apresentação em uma solução prática para servir. A Gabi orienta a escolha de acordo com o número de pessoas e o tipo de ocasião.</p></div>
    </section>

    <section className="section care-section" id="opcoes" aria-labelledby="opcoes-title">
      <div className="care-image"><img src="/images/gb-hero.webp" alt="Tábua artesanal preparada para um encontro especial" width="1587" height="991" loading="lazy" decoding="async" /><div className="care-seal" aria-hidden="true"><span>Feito para</span><strong>compartilhar</strong></div></div>
      <div className="care-copy"><p className="eyebrow">Escolha com orientação pessoal</p><h2 id="opcoes-title">Encontre uma tábua para o seu encontro</h2><ol>
        <li><span>1</span><div><h3>Conte quantas pessoas vão compartilhar</h3><p>Informe o número de pessoas, a ocasião e quando você gostaria de receber o pedido.</p></div></li>
        <li><span>2</span><div><h3>Conheça as opções disponíveis</h3><p>A Gabi orienta sobre formatos, sabores, valores e detalhes para chegar a uma composição adequada ao momento.</p></div></li>
      </ol><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Consultar opções disponíveis <span aria-hidden="true">→</span></a><p className="whatsapp-microcopy">WhatsApp · Atendimento pessoal pela Gabi</p></div>
    </section>

    <section className="section experiences-section" id="momentos" aria-labelledby="momentos-title">
      <div className="experiences-intro"><p className="eyebrow light">Ideias para compartilhar</p><h2 id="momentos-title">Para casal, amigos, família ou celebrações</h2><p>A mesma proposta pode acompanhar encontros bem diferentes. O tamanho, a composição e os detalhes são orientados conforme a ocasião e a disponibilidade.</p></div>
      <div className="product-list">{moments.map(([title, text], index) => <article className="product-item" key={title}><span className="product-index">0{index + 1}</span><div><p className="product-label">Momento para compartilhar</p><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="section occasions-section" aria-labelledby="artesanal-title">
      <div className="section-heading"><div><p className="eyebrow">Cuidado em cada montagem</p><h2 id="artesanal-title">Cuidado na escolha e na apresentação</h2></div><p>A GB trabalha de forma artesanal, pensando tanto nos sabores quanto na experiência de colocar a tábua à mesa. Os detalhes são combinados diretamente com a Gabi conforme o pedido e a antecedência.</p></div>
      <div className="occasion-grid">
        <article className="occasion-card"><h3>Quantidade</h3><p>A escolha começa entendendo quantas pessoas vão compartilhar e qual é o tipo de encontro.</p></article>
        <article className="occasion-card"><h3>Apresentação</h3><p>A montagem é pensada para chegar pronta para fazer parte da mesa e do momento.</p></article>
        <article className="occasion-card"><h3>Preparação artesanal</h3><p>Cada pedido é preparado conforme as opções disponíveis e os detalhes combinados.</p></article>
        <article className="occasion-card"><h3>Atendimento pessoal</h3><p>A orientação do pedido é feita diretamente com a Gabi pelo WhatsApp.</p></article>
      </div>
    </section>

    <section className="section occasions-section" aria-labelledby="entrega-title">
      <div className="section-heading"><div><p className="eyebrow">Entrega combinada com você</p><h2 id="entrega-title">Como funciona a entrega</h2></div><p>A GB realiza entregas em Chapecó e região. Informe o endereço no atendimento para consultar disponibilidade, taxa e o melhor horário para o pedido.</p></div>
      <div className="commercial-info"><div className="price-highlight"><span>Região atendida</span><strong>Chapecó e região</strong></div><div className="commercial-detail"><span>Disponibilidade e taxa</span><p>Consulte as condições de entrega conforme o endereço.</p></div><div className="commercial-detail"><span>Antecedência</span><p>Pedidos preferencialmente com 24 horas de antecedência, conforme disponibilidade.</p></div></div>
    </section>

    <section className="section care-section" id="como-encomendar" aria-labelledby="como-title">
      <div className="care-copy"><p className="eyebrow">Seu pedido começa com uma conversa</p><h2 id="como-title">Como encomendar sua tábua</h2><p className="hero-description">Fale diretamente com a Gabi para conhecer o que está disponível e combinar os detalhes do encontro.</p><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Fazer pedido pelo WhatsApp <span aria-hidden="true">→</span></a></div>
      <div className="care-copy"><ol><li><span>1</span><div><h3>Conte o momento</h3><p>Diga para quantas pessoas você está planejando, qual é a ocasião e quando precisa.</p></div></li><li><span>2</span><div><h3>Escolha com a Gabi</h3><p>Conheça as opções disponíveis e receba orientação sobre os detalhes.</p></div></li><li><span>3</span><div><h3>Confirme a entrega</h3><p>Informe o endereço e combine disponibilidade, taxa e demais informações do pedido.</p></div></li></ol></div>
    </section>

    <section className="section faq-section" id="duvidas" aria-labelledby="duvidas-title">
      <div className="faq-heading"><p className="eyebrow">Antes de pedir</p><h2 id="duvidas-title">Dúvidas antes de encomendar</h2></div>
      <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="final-cta"><p className="eyebrow light">Tem um encontro especial chegando?</p><h2>Converse com a Gabi.<br /><em>Escolha uma composição para compartilhar.</em></h2><p>Atendimento pessoal, preparação artesanal e entrega em Chapecó e região conforme disponibilidade.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <span aria-hidden="true">→</span></a></section>

    <footer><div className="footer-brand"><Brand /><p>Cestas, tábuas, presentes e experiências gastronômicas.</p></div><div className="footer-contact"><strong>Chapecó e região</strong><span>Pedidos preferencialmente com 24h de antecedência.</span></div><div className="footer-links"><a className="button button-dark footer-order-button" href={whatsapp} target="_blank" rel="noreferrer">Consultar opções pelo WhatsApp</a><Link href="/cestas-de-cafe-da-manha-chapeco/">Ver cestas de café da manhã</Link><Link href="/">Voltar para a página inicial</Link></div></footer>

    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale com a Gabi pelo WhatsApp" title="Fale com a Gabi pelo WhatsApp"><span className="whatsapp-float-icon"><WhatsAppIcon /></span><span className="whatsapp-float-label">Fale com a Gabi</span></a>
  </main>;
}