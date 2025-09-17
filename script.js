const callApi = 'https://lanciweb.github.io/demo/api/pictures/';
const backgroundCard = document.querySelector('.background-card');
let pictureGen = [];

function getPicApi() {
  axios.get(callApi)
    .then(response => {
      pictureGen = response.data;
      console.log(pictureGen);
      renderCards();
    })
};

function renderCards() {
  let cardsHTML = '';
  
  pictureGen.forEach((objData) => {
    cardsHTML += `
      <div class="card">
        <img class="pin-picture" src="img/pin.svg" alt="Pin">
        <img src="${objData.url}" alt="${objData.title}">
        <h2>${objData.title}</h2>
        <p>${objData.date}</p>
      </div>
    `;
  });
  
  backgroundCard.innerHTML = cardsHTML;
}


getPicApi();