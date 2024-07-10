const wsUri = "wss://echo-ws-service.herokuapp.com";
let websocket;
let status;
var mapLink = document.createElement('a');
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');
const input = document.querySelector('.input');
const divChat = document.querySelector('.chat-box_body');
const btnOpen = document.querySelector('.j-btn-open');
const btnClose = document.querySelector('.j-btn-close');

function writeToScreen(message) {
  console.log(message);
}

btnOpen.addEventListener('click', () => {
  
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    writeToScreen("CONNECTED");};
  
  websocket.onclose = function(evt) {
    writeToScreen("DISCONNECTED");};
  
  websocket.onmessage = function(evt) {
    writeToScreen('RESPONSE: ' + evt.data);
    const html = `
       <div class="div-message server-message"><p>`+evt.data+`</p></div>`;
    divChat.innerHTML += html;
  };
  
  websocket.onerror = function(evt) {
    writeToScreen('ERROR:' + evt.data);};
});

btnClose.addEventListener('click', () => {
  websocket.close();
  websocket = null;
});

function messageClient (val){
  const html = `
       <div class="div-message client-message"><p>`+val+`</p></div>`;
  divChat.innerHTML += html;
  input.value = '';
}

function messageGeo (href, text){
  const html = `
       <div class="div-message client-message"><p><a href ='`+href+`'>`+text+`</p></div>`;
  divChat.innerHTML += html;
}

btnSend.addEventListener('click', () => {
  var val = input.value;
  writeToScreen("SENT: " + val);
  websocket.send(val);
  messageClient(val);
});

const error = () => {alert('Невозможно получить ваше местоположение');}

const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status = `Широта: ${latitude} °, Долгота: ${longitude} °`;
  console.log(status);
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = 'Геопозиция';
  messageGeo(mapLink.href, mapLink.textContent);
}

btnGeo.addEventListener('click', () => {
  mapLink.href = '';
  mapLink.textContent = '';
  
  if (!navigator.geolocation) {
    status = 'Geolocation не поддерживается вашим браузером';
  } else {
    status = 'Определение местоположения…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
  console.log(status);
});