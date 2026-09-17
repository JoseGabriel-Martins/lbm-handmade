const WHATSAPP_NUMBER = '351933127289';
const IMAGEM_FALLBACK = 'assets/images/logo.png';

const translations = {
  pt: {
    'meta.title': 'LBM hand made — Amigurumi & Bolsas artesanais',
    'nav.inicio': 'Início',
    'nav.amigurumi': 'Amigurumi',
    'nav.bolsas': 'Bolsas',
    'nav.sobre': 'Sobre',
    'nav.contato': 'Contato',
    'nav.encomendar': 'Fazer Encomenda',
    'hero.badge': '100% Feito à Mão em Portugal',
    'hero.titulo1': 'Ponto a ponto,',
    'hero.titulo2': 'feito com afeto',
    'hero.descricao':
      'Amigurumi colecionáveis e bolsas de fio de malha, feitos um por um à mão. Cada peça carrega dedicação, materiais escolhidos e cores feitas para você.',
    'hero.ctaColecao': 'Ver Coleção',
    'hero.ctaWhatsapp': 'WhatsApp',
    'hero.legenda': 'amor em cada ponto',
    'amigurumi.titulo': 'Amigurumi',
    'amigurumi.tituloScript': '& Geek',
    'amigurumi.descricao':
      'Personagens colecionáveis da cultura pop, feitos à mão com fios macios.',
    'bolsas.titulo': 'Bolsas',
    'bolsas.tituloScript': '& Acessórios',
    'bolsas.descricao':
      'Peças sofisticadas em fio de malha e crochê estruturado.',
    'card.pedir': 'Reservar no WhatsApp',
    'card.msg': 'Olá! Gostaria de reservar a peça única *{nome}* que vi no site.',
    'badge.pecaUnica': 'Peça Única',
    'badge.prontaEntregaUnica': 'Pronta Entrega (Peça Única)',
    'card.prontaEntrega': 'Pronta Entrega',
    'card.sobEncomenda': 'Sob Encomenda',
    'cat.amigurumi': 'Amigurumi',
    'cat.bolsas': 'Bolsas',
    'tag.amigurumi': 'Amigurumi Geek',
    'tag.bolsas': 'Bolsa de Autor',
    'sobre.titulo1': 'Sobre o',
    'sobre.titulo2': 'Ateliê',
    'sobre.texto':
      'Cada peça da LBM nasce do processo manual, ponto a ponto, sem pressa e sem atalhos. Escolhemos fios selecionados, cuidamos do acabamento e personalizamos as cores para que a sua peça seja verdadeiramente sua. Do primeiro ponto ao último, é tudo feito com calma e carinho.',
    'encomendar.titulo': 'Como encomendar',
    'encomendar.subtitulo': 'Envio pelos CTT para todo o país.',
    'encomendar.passo1Titulo': 'Escolha a peça',
    'encomendar.passo1Texto':
      'Navegue pelo catálogo e encontre a peça que fala consigo.',
    'encomendar.passo2Titulo': 'Combine no WhatsApp',
    'encomendar.passo2Texto':
      'Cada peça é única — confirmamos os detalhes diretamente consigo.',
    'encomendar.passo3Titulo': 'Envio pelos CTT',
    'encomendar.passo3Texto':
      'Receba em casa, em qualquer ponto de Portugal.',
    'rodape.descricao':
      'Peças artesanais em crochê e fio de malha, feitas com dedicação em Portugal.',
    'rodape.contato': 'Contato',
    'rodape.localizacao': 'Onde estamos',
    'rodape.localizacaoTexto': 'Portugal · Envio para todo o país',
    'rodape.direitos': '© 2026 LBM hand made. Todos os direitos reservados.',
    'erro.carregar': 'Não foi possível carregar os produtos.',
    'pdp.fichaTitulo': 'Ficha Técnica do Atelier',
    'pdp.dimensoesLabel': 'Dimensões Reais',
    'pdp.materialLabel': 'Material / Fio Nobre',
    'pdp.ctaReservar': 'Reservar esta peça no WhatsApp',
    'pdp.atendimento':
      'Atendimento atencioso direto com a artesã · Resposta rápida',
    'pdp.cttTitulo':
      'Envios CTT Registado para Portugal Continental & Ilhas',
    'pdp.cttTexto':
      'Despachado em até 24h úteis numa caixa acolhedora com saquinho de linho puro perfumado e código de rastreio nacional CTT. Também enviamos para toda a Europa.',
    'pdp.exploreLabel': 'EXPLORE A COLEÇÃO',
    'pdp.outrasPecas': 'Outras Peças Exclusivas',
    'pdp.valor': 'Valor',
    'pdp.reservar': 'Reservar',
    'pdp.galeriaLegenda': 'amor, calma e dedicação em cada ponto',
    'pdp.msg':
      'Olá! Gostaria de reservar a peça única *{nome}* ({preco}) que vi no site.',
    'pdp.metaDesc':
      'Peça artesanal única 1 de 1. {nome} feito à mão em Portugal. Reserve diretamente pelo WhatsApp.',
  },
  en: {
    'meta.title': 'LBM hand made — Handmade Amigurumi & Bags',
    'nav.inicio': 'Home',
    'nav.amigurumi': 'Amigurumi',
    'nav.bolsas': 'Bags',
    'nav.sobre': 'About',
    'nav.contato': 'Contact',
    'nav.encomendar': 'Order Now',
    'hero.badge': '100% Handmade in Portugal',
    'hero.titulo1': 'Stitch by stitch,',
    'hero.titulo2': 'made with love',
    'hero.descricao':
      'Collectible amigurumi and crochet yarn bags, each one made by hand. Every piece carries dedication, carefully chosen materials and colours made just for you.',
    'hero.ctaColecao': 'View Collection',
    'hero.ctaWhatsapp': 'WhatsApp',
    'hero.legenda': 'love in every stitch',
    'amigurumi.titulo': 'Amigurumi',
    'amigurumi.tituloScript': '& Geek',
    'amigurumi.descricao':
      'Collectible pop-culture characters, handmade with soft yarns.',
    'bolsas.titulo': 'Bags',
    'bolsas.tituloScript': '& Accessories',
    'bolsas.descricao':
      'Sophisticated pieces in knit yarn and structured crochet.',
    'card.pedir': 'Reserve via WhatsApp',
    'card.msg':
      'Hello! I would like to reserve the unique piece *{nome}* from your website.',
    'badge.pecaUnica': 'One of a Kind',
    'badge.prontaEntregaUnica': 'Ready to Ship (One of a Kind)',
    'card.prontaEntrega': 'Ready to Ship',
    'card.sobEncomenda': 'Made to Order',
    'cat.amigurumi': 'Amigurumi',
    'cat.bolsas': 'Bags',
    'tag.amigurumi': 'Geek Amigurumi',
    'tag.bolsas': 'Designer Bag',
    'sobre.titulo1': 'About the',
    'sobre.titulo2': 'Studio',
    'sobre.texto':
      'Each LBM piece starts from a fully manual process, stitch by stitch, without haste or shortcuts. We choose selected yarns, care for the finishing and personalise the colours so your piece is truly yours. From the first stitch to the last, everything is made with calm and care.',
    'encomendar.titulo': 'How to order',
    'encomendar.subtitulo': 'Shipping via CTT across the whole country.',
    'encomendar.passo1Titulo': 'Choose your piece',
    'encomendar.passo1Texto':
      'Browse the catalogue and find the piece that speaks to you.',
    'encomendar.passo2Titulo': 'Arrange on WhatsApp',
    'encomendar.passo2Texto':
      'Each piece is unique — we confirm the details directly with you.',
    'encomendar.passo3Titulo': 'Shipped by CTT',
    'encomendar.passo3Texto':
      'Receive it at home, anywhere in Portugal.',
    'rodape.descricao':
      'Handmade crochet and knit yarn pieces, made with dedication in Portugal.',
    'rodape.contato': 'Contact',
    'rodape.localizacao': 'Where we are',
    'rodape.localizacaoTexto': 'Portugal · Shipping across the country',
    'rodape.direitos': '© 2026 LBM hand made. All rights reserved.',
    'erro.carregar': 'Could not load the products.',
    'pdp.fichaTitulo': 'Studio Spec Sheet',
    'pdp.dimensoesLabel': 'Actual Dimensions',
    'pdp.materialLabel': 'Material / Fine Yarn',
    'pdp.ctaReservar': 'Reserve this piece on WhatsApp',
    'pdp.atendimento':
      'Attentive service directly with the maker · Quick reply',
    'pdp.cttTitulo':
      'Registered CTT Shipping to Mainland Portugal & Islands',
    'pdp.cttTexto':
      'Dispatched within 24 working hours in a cosy box with a perfumed pure linen pouch and national CTT tracking code. We also ship across Europe.',
    'pdp.exploreLabel': 'EXPLORE THE COLLECTION',
    'pdp.outrasPecas': 'Other Exclusive Pieces',
    'pdp.valor': 'Price',
    'pdp.reservar': 'Reserve',
    'pdp.galeriaLegenda': 'love, calm and dedication in every stitch',
    'pdp.msg':
      'Hello! I would like to reserve the unique piece *{nome}* ({preco}) from your website.',
    'pdp.metaDesc':
      'One-of-a-kind handmade piece. {nome}, handmade in Portugal. Reserve directly via WhatsApp.',
  },
};

let currentLang = localStorage.getItem('lbm-lang') || 'pt';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

function localized(value) {
  if (value && typeof value === 'object') {
    return value[currentLang] ?? value['pt'] ?? Object.values(value)[0] ?? '';
  }
  return value;
}

function formatPrice(value, lang = currentLang) {
  return new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

const langListeners = [];

function onLanguageChange(fn) {
  langListeners.push(fn);
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang === 'pt' ? 'pt-PT' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const lang = btn.getAttribute('data-lang');
    const active = lang === currentLang;
    btn.classList.toggle('bg-caramelo', active);
    btn.classList.toggle('text-white', active);
    btn.classList.toggle('text-espresso/50', !active);
    btn.classList.toggle('hover:text-caramelo', !active);
  });
}

function setLanguage(lang) {
  if (lang === currentLang || !translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lbm-lang', currentLang);
  applyStaticTranslations();
  updateLangButtons();
  langListeners.forEach((fn) => fn());
}

document.addEventListener('DOMContentLoaded', () => {
  applyStaticTranslations();
  updateLangButtons();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }
});