let produtoAtual = null;
let todosProdutos = [];
let imagemAtualIndex = 0;

function updateNavHighlight(categoria) {
  document.querySelectorAll('[data-nav-categoria]').forEach((a) => {
    const ativo = a.getAttribute('data-nav-categoria') === categoria;
    a.classList.toggle('text-caramelo', ativo);
    a.classList.toggle('font-semibold', ativo);
    if (a.closest('.desktop-nav')) {
      a.classList.toggle('text-espresso/80', !ativo);
    }
  });
}

function badgeForStatus(status) {
  const label = t('badge.prontaEntregaUnica');
  return `
    <span class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
      ${label}
    </span>`;
}

function imagensDoProduto(p) {
  return p.imagens && p.imagens.length ? p.imagens : [p.imagem];
}

function thumbTemplate(src, alt, index) {
  const ativo = index === imagemAtualIndex;
  return `
    <button class="thumb-btn w-20 h-20 rounded-xl overflow-hidden border-2 shadow-sm focus:outline-none transition-all ${
      ativo ? 'border-caramelo active' : 'border-areia hover:border-caramelo'
    }" data-index="${index}" aria-label="${alt}">
      <img alt="${alt}" class="w-full h-full object-cover" src="${src}" loading="lazy"
           onerror="this.onerror=null; this.src='${IMAGEM_FALLBACK}';" />
    </button>`;
}

function switchPhoto(buttonElement, imageSrc, index) {
  const mainImg = document.getElementById('main-product-img');
  if (!mainImg) return;

  mainImg.style.opacity = '0.3';
  setTimeout(() => {
    mainImg.src = imageSrc;
    mainImg.style.opacity = '1';
  }, 120);

  document.querySelectorAll('.thumb-btn').forEach((btn) => {
    const ativo = Number(btn.getAttribute('data-index')) === index;
    btn.classList.toggle('active', ativo);
    btn.classList.toggle('border-caramelo', ativo);
    btn.classList.toggle('border-areia', !ativo);
    btn.classList.toggle('hover:border-caramelo', !ativo);
  });

  imagemAtualIndex = index;
}

function crossSellCard(p) {
  const nome = localized(p.nome);
  const material = localized(p.material);
  const preco = formatPrice(p.preco);
  const pdp = `produto.html?id=${p.id}`;

  return `
    <article class="bg-white rounded-2xl border border-borda p-4 shadow-craft hover:shadow-craft-lg transition-all flex flex-col group min-w-[78vw] sm:min-w-[320px] snap-center md:min-w-0 md:snap-align-none md:shrink">
      <a href="${pdp}" class="block relative aspect-square rounded-xl overflow-hidden bg-linho mb-4">
        <img alt="${nome}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" src="${p.imagem}" loading="lazy"
             onerror="this.onerror=null; this.src='${IMAGEM_FALLBACK}';" />
        <span class="absolute top-3 left-3 bg-caramelo text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">${t('badge.pecaUnica')}</span>
        <span class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-espresso text-[11px] font-semibold px-2 py-0.5 rounded-md border border-areia">${t('tag.' + p.categoria)}</span>
      </a>
      <div class="flex-grow flex flex-col justify-between">
        <div>
          <h4 class="font-bold text-espresso text-base sm:text-lg group-hover:text-caramelo transition-colors">
            <a href="${pdp}">${nome}</a>
          </h4>
          <p class="text-xs text-espresso/60 mt-1 line-clamp-2">${material}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-areia/60 flex items-center justify-between">
          <div>
            <span class="text-[10px] uppercase font-semibold text-espresso/40 block">${t('pdp.valor')}</span>
            <span class="text-lg font-bold text-espresso">${preco}</span>
          </div>
          <a class="inline-flex items-center gap-1.5 bg-linho hover:bg-caramelo hover:text-white text-espresso text-xs font-semibold px-3.5 py-2 rounded-full border border-areia transition-colors" href="${pdp}">
            <span>${t('pdp.reservar')}</span>
            <svg fill="none" height="12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
          </a>
        </div>
      </div>
    </article>`;
}

function renderPage() {
  const p = produtoAtual;
  if (!p) return;

  const nome = localized(p.nome);
  const nomeCompleto = localized(p.nomeCompleto);
  const subtitulo = localized(p.subtitulo);
  const dimensoes = localized(p.dimensoes);
  const material = localized(p.material);
  const preco = formatPrice(p.preco);

  document.title = `${nomeCompleto} — LBM hand made`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t('pdp.metaDesc').replace('{nome}', nomeCompleto);

  const breadcrumbAtual = document.getElementById('breadcrumb-atual');
  breadcrumbAtual.textContent = nomeCompleto;

  const breadcrumbCategoria = document.getElementById('breadcrumb-categoria');
  breadcrumbCategoria.href = `index.html#${p.categoria}`;
  breadcrumbCategoria.textContent = t('cat.' + p.categoria);

  updateNavHighlight(p.categoria);

  document.getElementById('pdp-badge').innerHTML = badgeForStatus(p.status);
  document.getElementById('pdp-nome').textContent = nomeCompleto;
  document.getElementById('pdp-subtitulo').textContent = subtitulo;
  document.getElementById('pdp-preco').textContent = preco;

  const paragrafos = localized(p.descricao) || [];
  document.getElementById('pdp-descricao').innerHTML = paragrafos
    .map((par) => `<p>${par}</p>`)
    .join('');

  document.getElementById('pdp-dimensoes').textContent = dimensoes;
  document.getElementById('pdp-material').textContent = material;

  const mensagem = encodeURIComponent(
    t('pdp.msg').replace('{nome}', nomeCompleto).replace('{preco}', preco)
  );
  document.getElementById('pdp-cta').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;

  const imagens = imagensDoProduto(p);
  if (imagemAtualIndex >= imagens.length) imagemAtualIndex = 0;
  const mainImg = document.getElementById('main-product-img');
  mainImg.src = imagens[imagemAtualIndex];
  mainImg.alt = nomeCompleto;
  document.getElementById('thumbs-list').innerHTML = imagens
    .map((src, i) => thumbTemplate(src, nomeCompleto, i))
    .join('');

  const mesmaCategoria = todosProdutos.filter(
    (x) => x.id !== p.id && x.categoria === p.categoria
  );
  const outrasCategorias = todosProdutos.filter(
    (x) => x.id !== p.id && x.categoria !== p.categoria
  );
  const outros = [...mesmaCategoria, ...outrasCategorias].slice(0, 3);
  document.getElementById('cross-sell-list').innerHTML = outros
    .map(crossSellCard)
    .join('');
}

function openLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;
  const mainImg = document.getElementById('main-product-img');
  lightboxImg.src = mainImg ? mainImg.src : IMAGEM_FALLBACK;
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.classList.add('overflow-hidden');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  document.body.classList.remove('overflow-hidden');
}

const thumbsList = document.getElementById('thumbs-list');
if (thumbsList) {
  thumbsList.addEventListener('click', (e) => {
    const btn = e.target.closest('.thumb-btn');
    if (!btn || !produtoAtual) return;
    const index = Number(btn.getAttribute('data-index'));
    switchPhoto(btn, imagensDoProduto(produtoAtual)[index], index);
  });
}

async function loadProduto() {
  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) {
    window.location.href = 'index.html';
    return;
  }

  try {
    const response = await fetch('produtos.json');
    if (!response.ok) throw new Error('Falha ao carregar produtos');
    todosProdutos = await response.json();
    const produto = todosProdutos.find((x) => x.id === id);
    if (!produto) {
      window.location.href = 'index.html';
      return;
    }
    produtoAtual = produto;
    renderPage();
  } catch (error) {
    console.error(error);
    window.location.href = 'index.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadProduto();

  const frame = document.getElementById('main-frame');
  if (frame) frame.addEventListener('click', openLightbox);

  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
onLanguageChange(() => {
  if (produtoAtual) renderPage();
});