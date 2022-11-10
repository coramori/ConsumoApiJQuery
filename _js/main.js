/* # Confs */
const URL_API = 'https://api.thecatapi.com/v1/breeds/?offset=50&limit=6';

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
      $(listCat).addClass('linha');
      $('#getCat').html(listCat);
      console.log(data);
      data.forEach((p, i) => {
        // Início Card

        let li = document.createElement('div');
        let card = document.createElement('div');
        let cardHeader = document.createElement('div');
        let cardBody = document.createElement('div');
        let cardFooter = document.createElement('div');
        let img = document.createElement('img');
        let a = document.createElement('a');

        $(img).attr('src', p.image.url);
        $(a).attr('href', 'details.html');
        $(a).attr('onClick', `save("${p.id}", "${p.image.url}");`);
        $(li).addClass('listinha');
        $(card).addClass('cartaozinho');
        $(cardHeader).addClass('card-cabecinha');
        $(cardBody).addClass('card-corpinho');
        $(cardFooter).addClass('card-pezinho');

        // Fim do Card

        // Buscando dados API
        $(cardHeader).html(`<h2>${p.name}</h2>`);

        console.log(p.id);

        $(cardFooter).html(`<p>${p.description}</p>`);

        // Adicionando cards na página
        $(a).append(img);
        $(cardBody).append(a);
        $(card).append(cardHeader).append(cardBody).append(cardFooter);
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
