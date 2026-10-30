'use strict';

/* =====================================================
   PROJETOS (dados vindos de github.com/Renato-Rhuan)
   - repo: nome do repositório no GitHub
   - live: site publicado (opcional)
   - img:  foto local do projeto (opcional). Sem ela, a foto é
           gerada automaticamente a partir do site publicado.
   - l:    linguagens e tecnologias usadas
   ===================================================== */
const GH = 'https://github.com/Renato-Rhuan/';

const PROJECTS = [
  { n: 'Previsão do Tempo', repo: 'previsao-do-tempo', live: 'https://previsao-do-tempo-xi-lime.vercel.app',
    t: 'App com backend', d: 'Previsão do tempo com busca por voz. O servidor em Node.js protege a chave da API OpenWeather.',
    l: ['HTML', 'CSS', 'JavaScript', 'Node.js'] },
  { n: 'Conversor de Moedas', repo: 'conversor-moedas', live: 'https://conversor-moedas-roan-three.vercel.app', img: 'imag/conversor de moedas.png',
    t: 'Consumo de API', d: 'Converte entre moedas usando uma API de câmbio em tempo real.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'iPhone 17 Pro', repo: 'iphone-17', live: 'https://iphone-17-git-main-renato-rhuans-projects.vercel.app', img: 'imag/Iphone17.png',
    t: 'Interface interativa', d: 'Apresentação elegante com animações e troca de cores dinâmica.',
    l: ['React', 'Tailwind CSS', 'JavaScript'] },
  { n: 'Site Nubank', repo: 'Nubank', live: 'https://nubank-flame.vercel.app', img: 'imag/Site-Nubank.png',
    t: 'Landing page', d: 'Landing page responsiva que apresenta os serviços do Nubank, com foco na experiência do usuário.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Rehbeleza', repo: 'rehbeleza', live: 'https://rehbeleza.vercel.app', img: 'imag/site-salao.png',
    t: 'Site institucional', d: 'Site de um salão de beleza com serviços, avaliações de clientes e contato para agendamento.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Dev Coffee', repo: 'cafeteria', live: 'https://cafeteria-gules.vercel.app', img: 'imag/cafeteria.png',
    t: 'Site institucional', d: 'Site de uma cafeteria fictícia com design moderno e layout responsivo.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Tech Store', repo: 'tech-store', live: 'https://tech-store-iota-six.vercel.app', img: 'imag/tech.png',
    t: 'E-commerce', d: 'Loja interativa e responsiva que destaca produtos de tecnologia.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Café Allegro', repo: 'Caf--Allegro', live: 'https://caf-allegro.vercel.app',
    t: 'Site institucional', d: 'Site de uma cafeteria fictícia com produtos, preços, contato e mapa integrado.',
    l: ['HTML', 'CSS'] },
  { n: 'Nike', repo: 'Nike', live: 'https://nike-inky-five.vercel.app',
    t: 'Página de produto', d: 'Página inspirada na Nike, criada para praticar layout, CSS e interatividade.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Loja de Carros', repo: 'loja-de-carro', live: 'https://loja-de-carro-rose.vercel.app',
    t: 'Catálogo', d: 'Vitrine de carros feita para aprimorar o domínio de HTML, CSS e JavaScript.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Login do Instagram', repo: 'Instagram-login', live: 'https://instagram-login-kappa-seven.vercel.app',
    t: 'Clone de interface', d: 'Tela de login do Instagram com formulário estilizado e troca automática de imagens no celular.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Slider', repo: 'slider', live: 'https://slider-ebon-eight.vercel.app',
    t: 'Componente', d: 'Slider de imagens feito do zero com JavaScript, HTML e CSS.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Link Bio', repo: 'link-bio', live: 'https://link-bio-omega.vercel.app',
    t: 'Template', d: 'Template de página de links para redes sociais, leve e fácil de personalizar.',
    l: ['HTML', 'CSS'] },
  { n: 'Portfólio (versão anterior)', repo: 'meu-portfolio', live: 'https://meu-portfolio-liard-one.vercel.app',
    t: 'Portfólio', d: 'Primeira versão do meu portfólio, com partículas animadas ao fundo.',
    l: ['HTML', 'CSS', 'JavaScript'] },
  { n: 'Este portfólio', repo: 'portfoilio-renato',
    t: 'Portfólio', d: 'O site que você está vendo, em HTML, CSS e JavaScript puros.',
    l: ['HTML', 'CSS', 'JavaScript'] }
];

const LANG_COLOR = {
  'HTML': '#e34c26', 'CSS': '#8b6be0', 'JavaScript': '#f1e05a',
  'Node.js': '#6cc24a', 'React': '#61dafb', 'Tailwind CSS': '#38bdf8'
};

/* ---------- Cards de projetos ---------- */
const grid = document.getElementById('grid');

// Tenta a foto local; se não existir, usa uma captura do site publicado
const shot = url => 'https://s0.wp.com/mshots/v1/' + encodeURIComponent(url) + '?w=900&h=560';

function loadImage(img, sources) {
  let i = 0;
  const next = () => {
    if (i >= sources.length) {
      img.closest('.card__media').classList.add('is-empty');
      img.remove();
      return;
    }
    img.src = sources[i++];
  };
  img.addEventListener('error', next);
  next();
}

function cardHTML(p) {
  const main = p.live || GH + p.repo;
  const langs = p.l.map(x => `<li><i style="--c:${LANG_COLOR[x] || '#999'}"></i>${x}</li>`).join('');
  const live = p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Ver online</a>` : '';
  return `
    <article class="card" data-react="${p.l.includes('React')}" data-node="${p.l.includes('Node.js')}">
      <a class="card__media" href="${main}" target="_blank" rel="noopener" data-title="${p.n}" aria-label="Abrir ${p.n}">
        <img alt="Captura de tela do projeto ${p.n}" loading="lazy">
        <span class="card__open">${p.live ? 'Abrir site' : 'Abrir no GitHub'}</span>
      </a>
      <div class="card__body">
        <div class="card__head"><h3>${p.n}</h3><span class="card__type">${p.t}</span></div>
        <p class="card__desc">${p.d}</p>
        <ul class="langs" aria-label="Linguagens">${langs}</ul>
        <div class="card__links">${live}<a href="${GH + p.repo}" target="_blank" rel="noopener">Código no GitHub</a></div>
      </div>
    </article>`;
}

grid.innerHTML = PROJECTS.map(cardHTML).join('');
grid.querySelectorAll('.card').forEach((card, i) => {
  const p = PROJECTS[i];
  const sources = [];
  if (p.img) sources.push(encodeURI(p.img));
  if (p.live) sources.push(shot(p.live));
  loadImage(card.querySelector('img'), sources);
});

document.querySelectorAll('[data-count]').forEach(el => (el.textContent = PROJECTS.length));

/* ---------- Filtros ---------- */
const filters = document.querySelectorAll('.filter');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.toggle('is-active', b === btn));
  const f = btn.dataset.filter;
  grid.querySelectorAll('.card').forEach(card => {
    const isReact = card.dataset.react === 'true';
    const isNode = card.dataset.node === 'true';
    card.hidden = (f === 'react' && !isReact) || (f === 'node' && !isNode) || (f === 'front' && (isReact || isNode));
  });
}));

/* ---------- Foto do hero ---------- */
// Ideal: PNG sem fundo em imag/renato-recorte.png (a foto fica na frente do nome).
// Se não existir, usa a foto atual e mistura com o fundo.
const photo = document.querySelector('.hero__photo');
const photoFallback = () => {
  if (photo.dataset.fallback) return;
  photo.dataset.fallback = '1';
  photo.classList.add('is-rect');
  photo.src = 'imag/renato%20perfil.png';
};
photo.addEventListener('error', photoFallback);
if (photo.complete && !photo.naturalWidth) photoFallback();

/* ---------- Menu ---------- */
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');
const setMenu = open => {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  toggle.firstElementChild.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered';
};
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
document.querySelectorAll('.nav__links a').forEach(a => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));

const onScroll = () => nav.classList.toggle('is-stuck', scrollY > 24);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

document.getElementById('year').textContent = new Date().getFullYear();

/* =====================================================
   CARROSSEL DE TECNOLOGIAS
   - Loop contínuo sem emendas (o conteúdo é clonado até cobrir a tela)
   - Pausa ao passar o mouse
   - Acelera ao rolar a página e inverte o sentido ao rolar para cima
   - Sem movimento para quem prefere menos animação
   ===================================================== */
(function marquee() {
  const box = document.querySelector('.marquee');
  const track = box.querySelector('.marquee__track');
  const original = track.innerHTML;
  const BASE = 48;                 // velocidade padrão (px/s)
  let setWidth = 0, x = 0, boost = 0, hover = false, lastY = scrollY, last = performance.now();

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    box.classList.add('is-static');
    return;
  }

  const build = () => {
    track.innerHTML = original;
    setWidth = track.scrollWidth;
    while (track.scrollWidth < box.clientWidth + setWidth) track.insertAdjacentHTML('beforeend', original);
  };
  build();
  addEventListener('resize', build);

  addEventListener('scroll', () => {
    boost = Math.max(-700, Math.min(700, boost + (scrollY - lastY) * 3));
    lastY = scrollY;
  }, { passive: true });

  box.addEventListener('pointerenter', () => (hover = true));
  box.addEventListener('pointerleave', () => (hover = false));

  (function tick(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    boost *= Math.pow(0.04, dt);   // o impulso do scroll vai se dissipando
    x -= ((hover ? 0 : BASE) + boost) * dt;
    x %= setWidth;
    if (x > 0) x -= setWidth;
    track.style.transform = `translate3d(${x}px,0,0)`;
    requestAnimationFrame(tick);
  })(last);
})();
