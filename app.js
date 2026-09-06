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
    'card.prontaEntrega': 'Peça Única',
    'card.sobEncomenda': 'Peça Única',
    'card.msg': 'Olá! Gostaria de reservar a peça única *{nome}* que vi no site.',
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
    'card.prontaEntrega': 'One of a Kind',
    'card.sobEncomenda': 'One of a Kind',
    'card.msg': 'Hello! I would like to reserve the unique piece *{nome}* from your website.',
    'sobre.titulo1': 'About the',
    'sobre.titulo2': 'Studio',
    'sobre.texto':
      "Each LBM piece starts from a fully manual process, stitch by stitch, without haste or shortcuts. We choose selected yarns, care for the finishing and personalise the colours so your piece is truly yours. From the first stitch to the last, everything is made with calm and care.",
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
  },
};

let currentLang = localStorage.getItem('lbm-lang') || 'pt';
let produtos = [];

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

function localized(value) {
  if (value && typeof value === 'object') {
    return value[currentLang] ?? value['pt'] ?? Object.values(value)[0] ?? '';
  }
  return value;
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

function badgeFor(status) {
  const label = t('card.prontaEntrega');
  return `
    <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-caramelo/15 text-caramelo">
      <span class="w-1.5 h-1.5 rounded-full bg-caramelo"></span>
      ${label}
    </span>`;
}

function cardTemplate(produto) {
  const nome = localized(produto.nome);
  const material = localized(produto.material);
  const mensagem = encodeURIComponent(t('card.msg').replace('{nome}', nome));
  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;

  return `
    <article class="swiper-slide group h-auto">
      <div class="bg-white border border-areia rounded-3xl overflow-hidden shadow-sm h-full flex flex-col">
        <div class="relative aspect-[4/5] overflow-hidden">
          <img src="${produto.imagem}" alt="${nome}" loading="lazy"
               onerror="this.onerror=null; this.src='${IMAGEM_FALLBACK}';"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute top-3 left-3">${badgeFor(produto.status)}</div>
        </div>
        <div class="p-4 flex flex-col flex-grow">
          <h3 class="font-semibold text-lg">${nome}</h3>
          <p class="mt-1 mb-auto min-h-[2.75rem] text-xs sm:text-sm text-espresso/60 leading-relaxed flex items-start">${material}</p>
          <a href="${whatsapp}" target="_blank" rel="noopener"
             class="mt-4 flex-shrink-0 inline-flex items-center justify-center gap-2 bg-caramelo text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-espresso transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.85 9.85 0 0 1-5-1.37l-.36-.21-3.72.98.99-3.62-.24-.37a9.74 9.74 0 0 1-1.5-5.2c0-5.43 4.42-9.85 9.86-9.85a9.8 9.8 0 0 1 6.97 2.89 9.8 9.8 0 0 1 2.88 6.97c0 5.43-4.42 9.86-9.85 9.86zm8.02-17.9A11.3 11.3 0 0 0 12.05 .1C5.8.1.7 5.19.7 11.45c0 2 .52 3.95 1.5 5.67L.6 23l6.03-1.58a11.36 11.36 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.34-11.35 0-3.03-1.18-5.88-3.33-8.05z"/></svg>
            ${t('card.pedir')}
          </a>
        </div>
      </div>
    </article>`;
}

function navArrowButtons(prefix) {
  return `
    <button class="${prefix}-prev w-10 h-10 rounded-full border border-areia bg-white text-espresso hover:bg-caramelo hover:text-white transition-colors flex items-center justify-center" aria-label="Anterior">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <button class="${prefix}-next w-10 h-10 rounded-full border border-areia bg-white text-espresso hover:bg-caramelo hover:text-white transition-colors flex items-center justify-center" aria-label="Próximo">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>`;
}

let amigurumiSwiper;
let bolsasSwiper;

function initSwiper() {
  if (amigurumiSwiper) {
    amigurumiSwiper.destroy(true, true);
    bolsasSwiper.destroy(true, true);
  }

  amigurumiSwiper = new Swiper('.amigurumi-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: { nextEl: '.amigurumi-next', prevEl: '.amigurumi-prev' },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
      1280: { slidesPerView: 4, spaceBetween: 24 },
    },
  });

  bolsasSwiper = new Swiper('.bolsas-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: { nextEl: '.bolsas-next', prevEl: '.bolsas-prev' },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
      1280: { slidesPerView: 4, spaceBetween: 24 },
    },
  });
}

function renderProdutos() {
  if (!produtos.length) return;

  document.getElementById('amigurumi-list').innerHTML = produtos
    .filter((p) => p.categoria === 'amigurumi')
    .map(cardTemplate)
    .join('');

  document.getElementById('bolsas-list').innerHTML = produtos
    .filter((p) => p.categoria === 'bolsas')
    .map(cardTemplate)
    .join('');

  document.getElementById('amigurumi-nav').innerHTML = navArrowButtons('amigurumi');
  document.getElementById('bolsas-nav').innerHTML = navArrowButtons('bolsas');

  initSwiper();
}

async function loadProdutos() {
  try {
    const response = await fetch('produtos.json');
    if (!response.ok) throw new Error('Falha ao carregar produtos');
    produtos = await response.json();
    renderProdutos();
  } catch (error) {
    console.error(error);
    const msg = t('erro.carregar');
    document.getElementById('amigurumi-list').innerHTML =
      `<p class="text-espresso/60">${msg}</p>`;
    document.getElementById('bolsas-list').innerHTML =
      `<p class="text-espresso/60">${msg}</p>`;
  }
}

function setLanguage(lang) {
  if (lang === currentLang || !translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lbm-lang', currentLang);
  applyStaticTranslations();
  updateLangButtons();
  renderProdutos();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

function bootstrap() {
  applyStaticTranslations();
  updateLangButtons();
  loadProdutos();
}

document.addEventListener('DOMContentLoaded', bootstrap);