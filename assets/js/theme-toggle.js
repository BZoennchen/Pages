(function () {
  var STORAGE_KEY = 'theme-preference';
  var DARK = 'dark';
  var LIGHT = 'light';

  function systemPrefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function storedTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function effectiveTheme() {
    return storedTheme() || (systemPrefersDark() ? DARK : LIGHT);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function updateButton(theme) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    if (theme === DARK) {
      btn.textContent = '☀';
      btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      btn.textContent = '🌙';
      btn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  // Apply immediately (called from inline head script to avoid flash)
  applyTheme(effectiveTheme());

  document.addEventListener('DOMContentLoaded', function () {
    updateButton(effectiveTheme());

    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || effectiveTheme();
      var next = current === DARK ? LIGHT : DARK;
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      applyTheme(next);
      updateButton(next);
    });

    // Keep in sync if another tab changes the preference
    window.addEventListener('storage', function (e) {
      if (e.key === STORAGE_KEY && e.newValue) {
        applyTheme(e.newValue);
        updateButton(e.newValue);
      }
    });
  });
})();
