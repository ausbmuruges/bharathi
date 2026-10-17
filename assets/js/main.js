document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('yr');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  if (!toggle) {
    return;
  }

  const storedTheme = localStorage.getItem('theme-preference');

  if (storedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  }

  const syncToggleLabel = () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    toggle.textContent = isDark ? '☀' : '☾';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  };

  syncToggleLabel();

  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';

    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme-preference', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme-preference', 'dark');
    }

    syncToggleLabel();
  });
});