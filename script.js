const callApi = 'https://lanciweb.github.io/demo/api/pictures/';
const backgroundCard = document.querySelector('.background-card');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-image');
const closeBtn = document.querySelector('.close-btn');
let pictureGen = [];



// richiesta ad l'api
function getPicApi() {
  axios.get(callApi)
    .then(function(response) {
      pictureGen = response.data;
      renderCards();
    });
}

function renderCards() {

  // variabile dove andranno le cards
  let cardsHTML = '';

  pictureGen.forEach(function(objData) {
    cardsHTML += `
      <div class="card">
        <img class="pin-picture" src="img/pin.svg" alt="Pin">
        <img class="card-image" src="${objData.url}" alt="${objData.title}">
        <h2>${objData.title}</h2>
        <p>${objData.date}</p>
      </div>
    `;
  });

  backgroundCard.innerHTML = cardsHTML;
  
  const cardImages = document.querySelectorAll('.card-image');

   // collego le img generate all'overlay
   
  cardImages.forEach(function(image) {
    image.addEventListener('click', () => {

      overlayImage.src = image.src;
      overlayImage.alt = image.alt;
      overlay.classList.remove('overlay-ds-none');

    });
  });
}


// chiusura dell'overlay tramite button
closeBtn.addEventListener('click', () => {

  overlay.classList.add('overlay-ds-none');
  overlayImage.src = '';
  overlayImage.alt = '';

});


getPicApi();
