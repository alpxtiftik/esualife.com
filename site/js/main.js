(function () {
  'use strict';

  // Footer yılı
  var yearEl = document.getElementById('displayYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobil menü aç/kapa
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('is-open'));
    });
    // Dışarı tıklayınca kapat (opsiyonel)
    document.addEventListener('click', function (e) {
      if (menu.classList.contains('is-open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
