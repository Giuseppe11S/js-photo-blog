
const callApi = 'https://lanciweb.github.io/demo/api/pictures/';
const imgToApi = document.getElementsByClassName('picture-card');
let pictureGen = [];

function getPicApi() {
  axios.get(callApi)
  .then(response => {
    pictureGen.push(response.data.response);
    console.log(pictureGen);
  })
  .catch(error => {
    console.error('Errore API:', error);
  });

}

getPicApi();