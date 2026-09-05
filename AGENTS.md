# AGENTS.md — LBM Hand Made (Catálogo & Vitrine Web)

## 1. Visão Geral do Negócio
Site vitrine artesanal para o ateliê "LBM hand made", sediado em Portugal.
O catálogo atende dois públicos complementares:
- **Bolsas & Acessórios:** Peças sofisticadas em fio de malha e crochê estruturado.
- **Amigurumi & Geek:** Personagens colecionáveis da cultura pop (ex: Plankton, Demogorgon, Kirby, animais) feitos à mão.
O fluxo de conversão é direto: os cards de produtos geram pedidos personalizados via WhatsApp, sem checkout ou pagamentos complexos na largada.

## 2. Identidade Visual Extraída da Marca (Logo LBM)
- **Cores Oficiais:**
  - Primária (Tipografia / Logotipo): `#261810` (Café Espresso / Couro Escuro).
  - Secundária (Acentos / Badges / Botões): `#C48B5E` (Caramelo / Terracota artesanal).
  - Fundo Geral (Background): `#FAF8F5` (Off-white linho natural).
  - Superfície dos Cards: `#FFFFFF` (Branco suave puro).
  - Bordas e Divisores: `#EAE4DC` (Bordas sutis tom de areia).
- **Tipografia:**
  - Logotipo e Destaques Artesanais: Fonte estilo script cursiva/elegante (`Pacifico` ou `Playwrite`). O logo oficial utiliza arquivo de imagem PNG com fundo transparente ou a tipografia script renderizada.
  - Subtítulo do Logo: "hand made" em estilo itálico suave com traços laterais (`- hand made -`).
  - Interface, Textos e Botões: Fonte limpa sem serifa (`Plus Jakarta Sans` ou `Inter`).

## 3. Stack Técnica & Dependências
- HTML5 Semântico
- Tailwind CSS via CDN
- Swiper.js (CSS e JS) via CDN para os carrosséis
- Lucide Icons (SVGs inline ou CDN)
- Renderização via dados desacoplados (`produtos.json`) ou componentes estáticos reutilizáveis

## 4. Estrutura e Seções da Aplicação
1. **Header Fixo (Navbar):**
   - Esquerda: Logo "LBM" em script com "- hand made -" discreto (link para o topo `#inicio`).
   - Centro: Navegação por links âncora: "Início", "Amigurumi", "Bolsas", "Sobre", "Contato".
   - Direita: Botão de ação destacado: "Fazer Encomenda" (WhatsApp direto).
   - Efeito: `backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#EAE4DC]`.

2. **Hero Section (Duas Colunas):**
   - Esquerda: Selo discreto "100% Feito à Mão em Portugal", título focado no afeto e na dedicação ponto por ponto ("in fios handmade"), descrição curta e botões de chamada rápida ("Ver Coleção" e "WhatsApp").
   - Direita: Card moldura estilo polaroid/ateliê (`rounded-3xl border border-[#EAE4DC] bg-white p-3 shadow-md`) com imagem de destaque.

3. **Catálogo — Dois Carrosséis Independentes (Swiper.js):**
   - **Carrossel 1:** "Amigurumi & Geek" (foco nos colecionáveis e personagens).
   - **Carrossel 2:** "Bolsas & Acessórios" (foco em moda e peças em fio de malha).
   - **Padrão dos Cards de Produto:**
     - Proporção fixa: `aspect-[4/5]` com `object-cover`.
     - Zoom suave ao passar o cursor: `group-hover:scale-105 transition-transform duration-300`.
     - Badges de disponibilidade: "Pronta Entrega" ou "Sob Encomenda".
     - Nome da peça, material/dimensões e botão "Pedir no WhatsApp" que monta o link:
       `https://wa.me/351XXXXXXXXX?text=Olá!%20Tenho%20interesse%20na%20peça%20[NomeDaPeça]`.

4. **Seção "Sobre o Ateliê":**
   - Breve parágrafo valorizando o processo manual, os materiais selecionados e a personalização de cores.

5. **Como Encomendar & Envio (Portugal):**
   - 3 passos simples: 1. Escolha a peça -> 2. Combinamos detalhes no WhatsApp -> 3. Envio pelos CTT para todo o país.

6. **Rodapé:**
   - Redes sociais (Instagram @lbmhandmade), WhatsApp direto, localização geral e aviso de direitos autorais.

## 5. Regras de Qualidade para o Agente de Código
- Utilize sempre a skill `frontend-design` para evitar layouts genéricos ou cores padrão de framework.
- Garanta responsividade Mobile First completa (viewport 360px a 420px otimizado para celulares).
- Não invente frameworks complexos ou dependências pesadas fora da stack definida.