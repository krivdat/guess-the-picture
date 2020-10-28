const query = window.location.search;
const urlParams = new URLSearchParams(query);
const category = urlParams.get('category');
const img = document.querySelector('#picture');
const title = document.querySelector('title');

const pictures = {
  // max number of pictures in each category
  wild_animals: 3,
  birds: 4,
  shapes: 3,
  vehicles: 3,
  plants: 3,
  daily_objects: 3,
};

const max = pictures[category];
let randId = 1;
let prevId = 1;

title.textContent = 'Guess the Picture - ' + category;

function showRandomImage() {
  while (randId === prevId) {
    // do not show the same image repeatedly
    randId = Math.floor(Math.random() * max) + 1;
  }
  prevId = randId;

  console.log(randId);
  img.src = `./img/${category}/${randId}.jpg`;
  img.alt = `picture of ${category}`;
}

showRandomImage();
img.addEventListener('click', showRandomImage);
