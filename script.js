function setLang(lang) {
  document.body.classList.remove('lang-en', 'lang-zh');
  document.querySelectorAll('#lang-bar button').forEach(b => b.classList.remove('active'));
  if (lang === 'en') {
    document.body.classList.add('lang-en');
    document.getElementById('btn-en').classList.add('active');
  } else if (lang === 'zh') {
    document.body.classList.add('lang-zh');
    document.getElementById('btn-zh').classList.add('active');
  } else {
    document.getElementById('btn-bi').classList.add('active');
  }
  try { localStorage.setItem('lang', lang); } catch(e) {}
}

(function () {
  var saved = 'bi';
  try { saved = localStorage.getItem('lang') || 'bi'; } catch(e) {}
  setLang(saved);
})();
