const img = document.querySelector('.pokemon-image');
const nameElement = document.getElementById('pokemon-name');

// funcion para cargar pokemon
async function cargarNuevoPokemon() {
    console.log('Cargando Pokemon...');
    
    // generar Id aleatorio 
    const idAleatorio = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;
    console.log('ID elegido:', idAleatorio);
    
    // fetch a la API
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la API');
        }
        const pokemon = await response.json();
        console.log('Pokémon encontrado:', pokemon.name);
        
        // Muestra de imagen y nombre
        img.src = pokemon.sprites.front_default;
        img.alt = pokemon.name;
        img.style.display = 'block';
        
        nameElement.textContent = pokemon.name;
        
        console.log('Imagen cargada', pokemon.sprites.front_default);
        
    } catch (error) { // por si hay error
        console.error('Error:', error);
        nameElement.textContent = 'Error al cargar Pokémon. Recarga la página.';
        img.style.display = 'none';
    }
}
cargarNuevoPokemon();