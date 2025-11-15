//1.1 Boton con la clase .showme
const botonShowMe = document.querySelector('.showme');
console.log('1.1 - Botón .showme:', botonShowMe);

//1.2 h1 con id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log('1.2 - h1 #pillado:', h1Pillado);

//1.3 Todos los <p>
const todosLosParrafos = document.querySelectorAll('p');
console.log('1.3 - Todos los <p>:', todosLosParrafos);

//1.4 Todos los elementos con clase .pokemon
const pokemons = document.querySelectorAll('.pokemon');
console.log('1.4 - Elementos .pokemon:', pokemons);

//1.5 Todos los elementos con data-function="testMe"
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log('1.5 - Elementos con data-function="testMe":', personajes);

//1.6 El 3 personaje con data-function="testMe", Los indices empiezan en 0, así que el 3 es el indice 2
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log('1.6 - Tercer personaje (índice 2):', tercerPersonaje);