// Progressive enhancements: content and downloads also work without JavaScript.
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (menu && nav) {
  menu.hidden = false;
  document.documentElement.classList.add('nav-ready');
  const close = () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { close(); menu.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.nav-wrap')) close(); });
  window.matchMedia('(min-width:801px)').addEventListener('change', close);
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('motion-ready');
  window.addEventListener('pageshow', () => document.querySelectorAll('.reveal').forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < innerHeight && rect.bottom > 0) element.classList.add('in-view');
  }));
}
const filters = document.querySelector('.filters');
const cards = [...document.querySelectorAll('#projects-grid .project-card')];
if (filters && cards.length) {
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let count = 0;
    cards.forEach(card => {
      const visible = button.dataset.filter === 'All work' || card.dataset.categories.split('|').includes(button.dataset.filter);
      card.hidden = !visible;
      if (visible) { card.classList.add('in-view'); count++; }
    });
    document.querySelector('#project-count').textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
  });
}
const version = document.querySelector('#resume-version');
if (version) version.addEventListener('change', () => {
  const preview = document.querySelector('#resume-preview');
  const name = version.options[version.selectedIndex].textContent;
  preview.data = version.value;
  preview.setAttribute('aria-label', `${name} resume PDF preview`);
  const fallback = document.createElement('p');
  const link = document.createElement('a');
  link.href = version.value;
  link.textContent = `Open the ${name} resume PDF`;
  fallback.append('If the embedded preview is unavailable, ', link, '.');
  preview.replaceChildren(fallback);
  document.querySelector('#preview-open').href = version.value;
});
const copy = document.querySelector('.copy-email');
if (copy && navigator.clipboard && window.isSecureContext) {
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try { await navigator.clipboard.writeText(copy.dataset.email); status.textContent = 'Email address copied.'; }
    catch { status.textContent = 'Copy unavailable. Select the email address above to copy it.'; }
  });
}
