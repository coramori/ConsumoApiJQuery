/* # Confs */
const URL_API = 'https://api.thecatapi.com/v1/breeds';

$(document).ready(()=>{
    getPagina('home.html', 'main');
})

var listGatos = new Array()

const getCatList = (offset=null,limit=null) => {


}

// URL: https://api.thecatapi.com/v1/breeds
const getCat = () => {
    getPagina('getCat.html','main');
    $.ajax({
        url: URL_API,
        dataType: 'json',
        success: (data) => {
            let listCat = document.createElement('div');
            $(listCat).addClass('row');
            $('#getCat').html(listCat);
                console.log(data)
            data.forEach((p) => {

                //criando card
                let li = document.createElement('div');
                let card = document.createElement('div');
                let cardHeader = document.createElement('div');
                let cardBody = document.createElement('div');

                $(li).addClass('col-4');

                $(card).addClass('card');
                $(cardHeader).addClass('card-header');
                $(cardBody).addClass('card-body');
                
                //terminou de criar o card


                $(cardHeader).html(`<h1>${p.name}</h1>`);
                
                $(cardBody).html(`<img src="${p.image.url}" />`);
                
                
                $(card).append(cardHeader)
                       .append(cardBody);
                $(li).append(card);                     
                $(listCat).append(li);

                listGatos.push(p);
                //getIMGPokemon(p.url,`#ch-pkm${i}`);
            });
        }
    });
}




// //Vem da API
// var dataRetornoApi = new Array();

// dataRetornoApi.forEach(g => {
//   const gatinho = {
//     id: g.id,
//     name: g.name,
//     temperament: g.temperament,
//     origin: g.origin,
//     country_codes: g.country_codes,
//     country_code: g.country_code,
//     description: g.description,
//     life_span: g.life_span,
//     url_img: g.image.url_img
//   }

//   listGatos.push(gatinho);
// });

