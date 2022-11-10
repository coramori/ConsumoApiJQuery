/* # Confs */
let URL_API = 'https://api.thecatapi.com/v1/breeds/';

$(document).ready(() => {
  URL_API += localStorage.getItem('name');
  console.log(URL_API);
  getCat();
});

// URL: https://api.thecatapi.com/v1/breeds
const getCat = () => {
  $.ajax({
    url: URL_API,
    dataType: 'json',
    success: (data) => {
      let container = document.createElement('div');
      $(container).addClass('container');
      $('#main-content').html(container);
      console.log(data);

      let containerImg = document.createElement('div');
      $(containerImg).addClass('details-picture');
      let img = document.createElement('img');

      let containerTitle = document.createElement('div');
      $(containerTitle).addClass('details-title');
      let title = document.createElement('h3');

      let containerDesc = document.createElement('div');
      $(containerDesc).addClass('details-desc');
      let description = document.createElement('p');
      let infos = document.createElement('p');

      $(img).attr('src', localStorage.getItem('img'));
      $(title).text(data.name);
      $(description).text(data.description);
      $(infos).text(
        `temperament, ${data.temperament} \norigin, ${data.origin} \nlife_span, ${data.life_span}`
      );

      $(containerImg).append(img);
      $(containerTitle).append(title);
      $(containerDesc).append(description).append(infos);
      $(container)
        .append(containerImg)
        .append(containerTitle)
        .append(containerDesc);
    },
  });
};
