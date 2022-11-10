// Highlight index.html
setTimeout(getRandomCat, 1);
setInterval(getRandomCat, 3000);

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data.file} alt="cat" />`;
    });
}

// API cards.html
const URL_API = 'https://api.thecatapi.com/v1/breeds/';

$(document).ready(() => {
  getCat();
});

var listGatos = new Array();
const getCat = () => {
  $.ajax({
    url: URL_API,
    dataType: 'json',
    success: (data) => {
      let listCat = document.createElement('div');
      $(listCat).addClass('cats');
      $('#cats').html(listCat);
      data.forEach((p, i) => {
        let li = document.createElement('div');
        let card = document.createElement('div');
        let cardHeader = document.createElement('div');
        let cardBody = document.createElement('div');
        let a = document.createElement('a');

        $(a).attr('href', 'details.html');
        $(a).attr('onClick', `save("${p.id}", "${p.image.url}");`);
        $(li).addClass('container-list');
        $(card).addClass('container');
        $(cardHeader).addClass('container-head');
        $(cardBody).addClass('container-body');
        $(cardBody).attr('style', `background-image: url("${p.image.url}")`);

        $(cardHeader).html(`<h2>${p.name}</h2>`);

        $(cardBody).append(a);
        $(card).append(cardHeader).append(cardBody);
        $(li).append(card);
        $(listCat).append(li);

        listGatos.push(p);
      });
    },
  });
};

const save = (id, img) => {
  localStorage.setItem('name', id);
  localStorage.setItem('img', img);
};
