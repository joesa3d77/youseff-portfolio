// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Theme toggle (persisted) =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
    themeIcon.textContent = '☀️';
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    root.removeAttribute('data-theme');
    themeIcon.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'false');
  }
}

const savedTheme = localStorage.getItem('portfolio-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(savedTheme || (prefersLight ? 'light' : 'dark'));

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('portfolio-theme', next);
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('main .section');
const navItems = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => navObserver.observe(section));

// ===== Scroll reveal =====
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .section-title, .hero-text, .hero-photo-wrap').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
