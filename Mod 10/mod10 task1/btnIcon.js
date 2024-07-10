const btn = document.querySelector('.j-btn-test');
const icon = document.querySelector('.bi-arrow-down-left-circle');
const iconFill = document.querySelector('.bi-arrow-down-left-circle-fill');

btn.addEventListener('click', () => {
  icon.classList.toggle('icon_display_none');
  iconFill.classList.toggle('icon_display_none');
});