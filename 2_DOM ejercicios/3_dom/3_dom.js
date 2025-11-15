// 1.1 Crear una lista <ul> con los paises
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');

// Creo un li para cada pais y lo meto a un ul
for (let i = 0; i < countries.length; i++) {
    const li = document.createElement('li');
    li.textContent = countries[i]; // pongo país
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 1.2 Eliminar el elemento con clase .fn-remove-me
const removeMe = document.querySelector('.fn-remove-me');
if (removeMe) {
    removeMe.remove();
}

// 1.3 Crear lista de coches en el div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');

if (printHereDiv) {
    const ulCars = document.createElement('ul');
    for (let i = 0; i < cars.length; i++) {
        const li = document.createElement('li');
        li.textContent = cars[i];
        ulCars.appendChild(li);
    }
    printHereDiv.appendChild(ulCars);
}

// 1.4 Crear divs con título (h4) e imagen
const countriesWithImages = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// creo los divs con un for
for (let i = 0; i < countriesWithImages.length; i++) {
    const div = document.createElement('div');
    
    const h4 = document.createElement('h4');
    h4.textContent = countriesWithImages[i].title;
    
    const img = document.createElement('img');
    img.src = countriesWithImages[i].imgUrl;
    img.alt = 'Imagen random ' + (i + 1);

    // h4 y la imagen dentro del div y este al body
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
}

// 1.5 Botón para eliminar el último div
const buttonRemoveLast = document.createElement('button');
buttonRemoveLast.textContent = 'Eliminar último';
document.body.appendChild(buttonRemoveLast);

buttonRemoveLast.addEventListener('click', function() {
    const allDivs = document.querySelectorAll('body > div');
    const imageDivs = [];
    
    // Filtro solo los divs que tienen h4 e imagen
    allDivs.forEach(div => {
        if (div.querySelector('h4') && div.querySelector('img')) {
            imageDivs.push(div);
        }
    });
    if (imageDivs.length > 0) {
        const lastDiv = imageDivs[imageDivs.length - 1];
        lastDiv.remove();
    }
});

// 1.6 Boton para cada div que elimine solo ese div

// vuelvo a crear los divs  pero los añado a un array, desntro del contenedor para no mezclarlos
const container = document.createElement('div'); 
document.body.appendChild(container);
const divsWithButtons = []; 

for (let i = 0; i < countriesWithImages.length; i++) {
    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = countriesWithImages[i].title;

    const img = document.createElement('img');
    img.src = countriesWithImages[i].imgUrl;
    img.alt = 'Imagen ' + (i + 1);

    const button = document.createElement('button');
    button.textContent = 'Eliminar este';
    
    // Evento para eliminar solo este div
    button.addEventListener('click', function() {
        div.remove();
    });

    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(button);
    
    container.appendChild(div);
}