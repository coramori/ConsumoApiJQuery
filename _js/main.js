/* # Confs */
const URL_API = 'https://api.thecatapi.com/v1/breeds/?offset=5&limit=5';

$(document).ready(() => {
  getPagina('home.html', 'main');
});

var listGatos = new Array();

const getCatList = (offset = null, limit = null) => {};

// URL: https://api.thecatapi.com/v1/breeds
const getCat = () => {
  getPagina('getCat.html', 'main');
  $.ajax({
    url: URL_API,
    dataType: 'json',
    success: (data) => {
      let listCat = document.createElement('div');
      $(listCat).addClass('row');
      $('#getCat').html(listCat);
      console.log(data);
      data.forEach((p) => {
        // Início Card
        let li = document.createElement('div');
        let card = document.createElement('div');
        let cardHeader = document.createElement('div');
        let cardBody = document.createElement('div');

        $(li).addClass('col-4');

        $(card).addClass('card');
        $(cardHeader).addClass('card-header');
        $(cardBody).addClass('card-body');

        // Fim do Card

        $(cardHeader).html(`<h1>${p.name}</h1>`);

        $(cardBody).html(`<img src="${p.image.url}" width: 256px />`);

        $(card).append(cardHeader).append(cardBody);
        $(li).append(card);
        $(listCat).append(li);

        listGatos.push(p);
      });
    },
  });
};
