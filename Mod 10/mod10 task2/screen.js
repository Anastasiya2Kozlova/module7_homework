const btn = document.querySelector('.j-btn-test');
const p = document.querySelector('.screen-info');

btn.addEventListener('click', () => {
  const widthScreen = window.screen.width;
  const heightScreen = window.screen.height;
  alert(`Ширина экрана - ${widthScreen} px, высота экрана - ${heightScreen}`);
});