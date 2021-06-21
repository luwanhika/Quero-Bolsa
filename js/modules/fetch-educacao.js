export default function initFetchEducacao() {

}

async function fetchEducacao(url) {
  const educacaoResponse = await fetch(url);
  const educacaoJSON = await educacaoResponse.json();

  educacaoJSON.forEach(cidade => {
    console.log(cidade.campus.city.length);
    createEducacao(cidade);
  });
}

function createEducacao(cidade) {
  const div = document.createElement('div');
  div.classList.add('select-form');
  div.innerHTML = ``
}

fetchEducacao('./db.json');