const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Creo una sección completa como si fuera una web
const main = document.createElement('main');
main.style.maxWidth = '800px';
main.style.margin = 'auto';
main.style.fontFamily = 'verdana';
main.style.padding = '20px';

const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = 'Álbumes Legendarios del Metal';
title.style.textAlign = 'center';
title.style.color = '#a80606ff';
header.appendChild(title);
main.appendChild(header);

const ul = document.createElement('ul');
ul.style.listStyle = 'none';

for (let i = 0; i < albums.length; i++) {
    const li = document.createElement('li');
    li.textContent = albums[i];
    li.style.background = '#000000ff';
    li.style.color = '#c42020ff';
    li.style.margin = '10px';
    li.style.padding = '15px';
    li.style.borderRadius = '8px';
    li.style.fontSize = '18px';
    ul.appendChild(li);
}
main.appendChild(ul);

// Añado todo al body
document.body.appendChild(main);
document.body.style.background = '#1a0202ff';