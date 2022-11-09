setTimeout(getRandomCat, 1);
setInterval(getRandomCat, 3000);

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data.file} alt="cat" />`;
    });
}
