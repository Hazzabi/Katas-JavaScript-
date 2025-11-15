
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener('input', function(event) {
    const texto = event.target.value.toLowerCase(); 

    // filtrar
    const filtrados = streamers.filter(streamer => 
        streamer.name.toLowerCase().includes(texto)
    );

    console.clear();// para limpiar la consola
    console.log('Texto buscado:', texto);
    console.log('Streamers encontrados:', filtrados);
});