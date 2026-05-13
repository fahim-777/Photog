// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
menu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Filter
const filters = document.querySelectorAll('.filter');
const tiles = document.querySelectorAll('.tile');
filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    filters.forEach((f) => {
      f.classList.remove('active');
      f.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const cat = btn.dataset.filter;
    tiles.forEach((t) => {
      const show = cat === 'all' || t.dataset.cat === cat;
      t.classList.toggle('hidden', !show);
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCap = lightbox.querySelector('.lightbox-caption');
const lightboxClose = lightbox.querySelector('.lightbox-close');

const openLightbox = (src, caption) => {
  lightboxImg.src = src;
  lightboxImg.alt = caption || '';
  lightboxCap.textContent = caption || '';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};
const closeLightbox = () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxImg.src = '';
};

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    const img = tile.querySelector('img');
    const cap = tile.querySelector('figcaption');
    const text = cap ? cap.innerText.replace(/\s+/g, ' ').trim() : '';
    openLightbox(img.src, text);
  });
});
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Reveal on scroll
const revealEls = document.querySelectorAll(
  '.section-head, .hero-content, .about-image, .about-copy, .card, .press blockquote, .press-attrib, .contact-inner, .tile'
);
revealEls.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));

// Contact form (demo only — no backend)
function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const note = document.getElementById('form-note');
  const name = form.name.value.trim();
  note.style.color = '#9bdca8';
  note.textContent = `Thanks ${name || 'there'} — message ready to send. (Demo form; wire to email or CRM for the real site.)`;
  form.reset();
  return false;
}
window.handleContact = handleContact;
