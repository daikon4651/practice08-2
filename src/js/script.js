document.addEventListener('DOMContentLoaded', () => {
  // グローバルナビゲーションの開閉
  const gNavBtn = document.getElementById('js-gNavBtn');

  gNavBtn.addEventListener('click', (e) => {
    document.documentElement.classList.toggle('is-gNavOpen');
  }, false);
}, false);
