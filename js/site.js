/**
 * 共通スクリプト - スムーススクロール、ページトップへ戻る、ドロップダウン、サブメニュー
 */
document.addEventListener('DOMContentLoaded', function () {
  // アンカーリンクのスムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ページトップへ戻るボタン（存在する場合のみ）
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // サブメニュー（モバイル）の開閉
  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle('open');
      const icon = toggle.querySelector('.icon');
      if (icon) {
        icon.textContent = parent.classList.contains('open') ? '▼' : '▶︎';
      }
    });
  });

  // PC用ドロップダウンの開閉
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');
  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    });
  }

  // FAQアコーディオン（存在する場合のみ）
  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.parentElement;
      item.classList.toggle('open');
    });
  });
});
