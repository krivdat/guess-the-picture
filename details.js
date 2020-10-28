const query = window.location.search;
const urlParams = new URLSearchParams(query);
const category = urlParams.get('category');
const img = document.querySelector('#picture');
const caption = document.querySelector('#caption');
const title = document.querySelector('title');

const pictures = {
  // max number of pictures in each category
  wild_animals: {
    catFullName: 'Wild Animals',
    pics: ['elephant', 'wolf', 'zebra'],
  },
  birds: {
    catFullName: 'Birds',
    pics: ['bird 1', 'bird 2', 'parrot', 'bird 4'],
  },
  shapes: {
    catFullName: 'Shapes',
    pics: ['square', 'circle', 'triangle'],
  },
  vehicles: {
    catFullName: 'Vehicles',
    pics: ['airplane', 'helicopter', 'car'],
  },
  plants: {
    catFullName: 'Plants',
    pics: ['tree', 'violet', 'cactus'],
  },
  daily_objects: {
    catFullName: 'Daily Objects',
    pics: ['ball', 'pen', 'chair'],
  },
};

const max = pictures[category].pics.length;
let randId = 1;
let prevId = 1;

title.textContent = `Guess the Picture - ${pictures[category].catFullName}`;
console.log(pictures[category]);

function showRandomImage() {
  while (randId === prevId) {
    // do not show the same image repeatedly
    randId = Math.floor(Math.random() * max) + 1;
  }
  prevId = randId;

  console.log(randId);
  img.src = `./img/${category}/${randId}.jpg`;
  img.alt = `picture of ${pictures[category].catFullName}`;
  caption.textContent = pictures[category].pics[randId - 1];
}

showRandomImage();
img.addEventListener('click', showRandomImage);
