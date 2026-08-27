const instagramUrl = "https://www.instagram.com/gabi.gbgrazingfoods/";
const whatsappNumber = "5549999442478";

const messages = {
  order: "Olá Gabi! Vim pelo site da GB Grazing Foods e gostaria de fazer um pedido. Pode me ajudar?",
  gift: "Olá Gabi! Vim pelo site da GB e estou procurando uma opção especial para presentear. Pode me mostrar as opções?",
  boards: "Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de tábuas de frios para compartilhar.",
  breakfast: "Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de cestas de café da manhã.",
  event: "Olá Gabi! Vim pelo site da GB e gostaria de informações para uma comemoração ou evento.",
  corporate: "Olá Gabi! Vim pelo site da GB e gostaria de conhecer as opções de presentes, coffee breaks e experiências corporativas.",
  information: "Olá Gabi! Vim pelo site da GB Grazing Foods e gostaria de mais informações.",
};

const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const whatsapp = {
  order: whatsappLink(messages.order), gift: whatsappLink(messages.gift), boards: whatsappLink(messages.boards),
  breakfast: whatsappLink(messages.breakfast), event: whatsappLink(messages.event),
  corporate: whatsappLink(messages.corporate), information: whatsappLink(messages.information),
};

const occasions = [
  { number: "01", title: "Presentear", text: "Cestas de café da manhã, boxes e mimos para aniversários, agradecimentos e todo gesto que merece cuidado.", image: "/images/gb-presentes.webp", alt: "Cesta de café da manhã artesanal preparada em Chapecó", cta: "Quero escolher um presente", href: whatsapp.gift },
  { number: "02", title: "Compartilhar", text: "Tábuas de frios para casal, amigos e família, noites de vinho e aquele encontro especial.", image: "/images/gb-hero.webp", alt: "Tábua de frios artesanal com queijos, frutas, pães e embutidos", cta: "Quero ver as tábuas", href: whatsapp.boards },
  { number: "03", title: "Celebrar", text: "Grazing tables e experiências para aniversários, comemorações, recepções e encontros especiais.", image: "/images/gb-eventos.webp", alt: "Grazing table elegante preparada para uma celebração", cta: "Planejar uma celebração", href: whatsapp.event },
];

const products = [
  { label: "Cestas de café da manhã", title: "Café da Manhã Afeto", text: "Um presente gastronômico que chega cedo e transforma o primeiro momento do dia.", cta: "Ver opções de café da manhã", href: "/cestas-de-cafe-da-manha-chapeco/" },
  { label: "Para brindar a dois", title: "Noite de Vinhos", text: "Sabores selecionados para uma noite sem pressa, cheia de conversa e presença.", cta: "Quero ver as tábuas", href: whatsapp.boards },
  { label: "Tábuas de frios", title: "Tábua para Compartilhar", text: "Uma composição generosa para casal, amigos ou família receberem bem e criarem boas memórias.", cta: "Quero uma tábua", href: whatsapp.boards },
  { label: "Presentes corporativos em Chapecó", title: "Experiências Corporativas", text: "Presentes, coffee breaks e experiências para reconhecer clientes, equipes e parceiros.", cta: "Conhecer soluções para empresas", href: whatsapp.corporate },
];

const faqs = [
  { question: "Com quanta antecedência devo fazer o pedido?", answer: "Os pedidos devem ser feitos preferencialmente com 24 horas de antecedência, conforme disponibilidade. Para eventos e pedidos corporativos, quanto antes conversarmos, melhor." },
  { question: "Onde a GB realiza entregas?", answer: "Entregamos em Chapecó e região. Consulte a disponibilidade e a taxa de entrega conforme o endereço." },
  { question: "É possível personalizar?", answer: "Sim. Conte para a Gabi quem vai receber, qual é a ocasião e o que você imaginou. Cada experiência é orientada pessoalmente, conforme o produto e a antecedência." },
  { question: "A GB atende empresas e eventos?", answer: "Sim. Preparamos presentes corporativos, coffee breaks em Chapecó, kits para reuniões e mesas gastronômicas para encontros e celebrações." },
];

function BrandMark() {
  return <a className="brand" href="#inicio" aria-label="GB Grazing Foods - início"><span className="brand-monogram">GB</span><span className="brand-name"><strong>Grazing Foods</strong><small>por Gabi</small></span></a>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a9.87 9.87 0 0 0-8.55 14.8L2 22l5.35-1.4A10 10 0 1 0 12 2Zm0 18.18a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.17.83.85-3.08-.2-.32A8.18 8.18 0 1 1 12 20.18Zm4.48-6.12c-.24-.12-1.45-.72-1.68-.8-.22-.08-.38-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.28.18-.52.06-.25-.12-1.03-.38-1.96-1.2a7.3 7.3 0 0 1-1.36-1.7c-.14-.24-.02-.37.1-.5l.37-.42c.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.23.25-.86.85-.86 2.05 0 1.21.88 2.38 1 2.55.12.16 1.73 2.64 4.19 3.7.58.26 1.04.41 1.4.53.58.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" /></svg>;
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "FoodEstablishment", name: "GB Grazing Foods",
    description: "Cestas de café da manhã, tábuas de frios, presentes especiais, eventos e experiências gastronômicas em Chapecó e região.",
    telephone: "+55 49 99944-2478", priceRange: "A partir de R$ 95",
    areaServed: { "@type": "City", name: "Chapecó" }, sameAs: [instagramUrl],
  };

  return (
    <main id="inicio">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="top-note"><span>Entregas em Chapecó e região</span><span className="top-note-divider" aria-hidden="true" /><span>Pedidos preferencialmente com 24h</span></div>

      <header className="site-header">
        <BrandMark />
        <nav aria-label="Navegação principal"><a href="#ocasioes">Experiências</a><a href="#como-pedir">Como pedir</a><a href="#historia">Nossa história</a><a href="#duvidas">Dúvidas</a></nav>
        <a className="button button-small button-outline header-order-button" href={whatsapp.order} target="_blank" rel="noreferrer">Fazer um pedido pelo WhatsApp <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Cestas, tábuas e presentes em Chapecó e região</p>
          <h1 id="hero-title">O sabor fica.<br /><em>O gesto também.</em></h1>
          <p className="hero-description">Cestas de café da manhã, tábuas de frios, presentes especiais e experiências gastronômicas preparadas pela Gabi para presentear, compartilhar e celebrar.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsapp.order} target="_blank" rel="noreferrer">Fazer um pedido pelo WhatsApp <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#ocasioes">Conhecer as experiências</a>
          </div>
          <p className="order-note">Atendimento pessoal pela Gabi · Pedidos conforme disponibilidade</p>
          <div className="hero-proof" aria-label="Informações comerciais da GB"><span>Opções a partir de R$ 95</span><span>Produção artesanal</span><span>Entregas em Chapecó e região</span></div>
        </div>
        <figure className="hero-visual">
          <img src="/images/gb-hero.webp" alt="Tábua de frios artesanal com queijos, frutas, pães e embutidos" width="1587" height="991" fetchPriority="high" decoding="async" />
          <figcaption><span>01</span>Feito para compartilhar</figcaption>
        </figure>
      </section>

      <section className="manifesto" aria-label="Manifesto da marca"><p>Não entregamos apenas alimentos. Criamos um jeito bonito, saboroso e verdadeiro de dizer <em>“pensei em você”.</em></p></section>

      <section className="section occasions-section" id="ocasioes">
        <div className="section-heading">
          <div><p className="eyebrow">Escolha sua experiência</p><h2>Para cada momento,<br />um jeito de encantar.</h2></div>
          <p>Você escolhe a ocasião. A Gabi orienta pessoalmente as opções, sabores e detalhes para que tudo chegue com significado.</p>
        </div>
        <div className="occasion-grid">
          {occasions.map((occasion) => <article className="occasion-card" key={occasion.title}>
            <div className="occasion-image"><img src={occasion.image} alt={occasion.alt} loading="lazy" decoding="async" /><span>{occasion.number}</span></div>
            <h3>{occasion.title}</h3><p>{occasion.text}</p>
            <a href={occasion.href} target="_blank" rel="noreferrer" aria-label={`${occasion.cta} pelo WhatsApp`}>{occasion.cta} <span aria-hidden="true">→</span></a>
          </article>)}
        </div>
        <article className="corporate-strip">
          <div className="corporate-number">04</div>
          <div><p className="product-label">Para clientes, equipes e parceiros</p><h3>Empresas</h3><p>Presentes corporativos, coffee breaks em Chapecó e experiências para reconhecer pessoas e fortalecer relações.</p></div>
          <a className="button button-dark" href={whatsapp.corporate} target="_blank" rel="noreferrer">Conhecer opções corporativas <span aria-hidden="true">→</span></a>
        </article>
        <div className="commercial-info" aria-label="Preço, prazo e entrega">
          <div className="price-highlight"><span>Experiências</span><strong>a partir de R$ 95</strong></div>
          <div className="commercial-detail"><span>Prazo</span><p>Pedidos preferencialmente com 24 horas de antecedência, conforme disponibilidade.</p></div>
          <div className="commercial-detail"><span>Entrega</span><p>Entregas em Chapecó e região. Consulte disponibilidade e taxa conforme o endereço.</p></div>
        </div>
      </section>

      <section className="section experiences-section" id="experiencias">
        <div className="experiences-intro"><p className="eyebrow light">Opções concretas para comprar</p><h2>Comece pelo que<br /><em>você quer fazer sentir.</em></h2><p>Há opções individuais, para duas pessoas e composições maiores. Fale diretamente com a Gabi para conhecer o cardápio disponível.</p></div>
        <div className="product-list">
          {products.map((product, index) => <article className="product-item" key={product.title}>
            <span className="product-index">0{index + 1}</span>
            <div><p className="product-label">{product.label}</p><h3>{product.title}</h3><p>{product.text}</p><a className="product-cta" href={product.href} target="_blank" rel="noreferrer">{product.cta} <span aria-hidden="true">→</span></a></div>
          </article>)}
        </div>
      </section>

      <section className="section care-section" id="como-pedir">
        <div className="care-image"><img src="/images/gb-presentes.webp" alt="Cesta de café da manhã artesanal com frutas, pães e flores" width="1254" height="1254" loading="lazy" decoding="async" /><div className="care-seal" aria-hidden="true"><span>Feito com</span><strong>afeto</strong></div></div>
        <div className="care-copy">
          <p className="eyebrow">Como fazer seu pedido</p><h2>Seu presente começa com uma conversa.</h2>
          <ol>
            <li><span>1</span><div><h3>Conte o momento</h3><p>Quem vai receber, qual é a ocasião e quando você precisa.</p></div></li>
            <li><span>2</span><div><h3>Escolha com a Gabi</h3><p>Pelo WhatsApp, você recebe orientação sobre formatos, sabores, valores e detalhes.</p></div></li>
            <li><span>3</span><div><h3>Confirme e aguarde o encanto</h3><p>A GB prepara tudo artesanalmente e combina a entrega em Chapecó e região.</p></div></li>
          </ol>
          <a className="button button-primary" href={whatsapp.order} target="_blank" rel="noreferrer">Quero encomendar <span aria-hidden="true">→</span></a>
          <p className="whatsapp-microcopy">WhatsApp · Atendimento pessoal pela Gabi</p>
        </div>
      </section>

      <section className="story-section" id="historia">
        <div className="story-number">22</div>
        <div className="story-copy"><p className="eyebrow">A história por trás da GB</p><h2>O cuidado sempre fez parte da trajetória da Gabi.</h2><p>Depois de 22 anos cuidando de pessoas no mundo financeiro, Gabriela Bittarello transformou sua experiência com atendimento e sua atenção aos detalhes em um novo jeito de acolher: presentes e experiências gastronômicas preparados artesanalmente para cada cliente.</p><blockquote>“Cada montagem carrega intenção. É assim que um presente se torna memória.”</blockquote><span className="signature">Gabi</span></div>
        <div className="story-caption"><strong>anos</strong><span>de experiência cuidando de pessoas</span></div>
      </section>

      <section className="section faq-section" id="duvidas">
        <div className="faq-heading"><p className="eyebrow">Antes de pedir</p><h2>O que você pode<br />querer saber.</h2></div>
        <div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="final-cta">
        <p className="eyebrow light">Tem um momento especial chegando?</p><h2>Conte para a Gabi.<br /><em>Ela transforma em experiência.</em></h2>
        <p>Cestas, tábuas, presentes e experiências gastronômicas em Chapecó e região, com opções a partir de R$ 95.</p>
        <a className="button button-light" href={whatsapp.order} target="_blank" rel="noreferrer">Fazer pedido pelo WhatsApp <span aria-hidden="true">→</span></a>
      </section>

      <footer>
        <div className="footer-brand"><BrandMark /><p>Cestas, tábuas, presentes e experiências gastronômicas.</p></div>
        <div className="footer-contact"><strong>Chapecó e região</strong><a href={whatsapp.order} target="_blank" rel="noreferrer">WhatsApp: (49) 99944-2478</a><span>Pedidos preferencialmente com 24h de antecedência.</span></div>
        <div className="footer-links"><a className="button button-dark footer-order-button" href={whatsapp.order} target="_blank" rel="noreferrer">Fazer pedido pelo WhatsApp</a><a href={instagramUrl} target="_blank" rel="noreferrer">Siga a GB no Instagram · @gabi.gbgrazingfoods <span aria-hidden="true">↗</span></a></div>
      </footer>

      <a className="whatsapp-float" href={whatsapp.information} target="_blank" rel="noreferrer" aria-label="Fale com a Gabi pelo WhatsApp" title="Fale com a Gabi pelo WhatsApp"><span className="whatsapp-float-icon"><WhatsAppIcon /></span><span className="whatsapp-float-label">Fale com a Gabi</span></a>
    </main>
  );
}