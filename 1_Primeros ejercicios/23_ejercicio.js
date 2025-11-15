const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
let smallMov = [];
let medMov = [];
let bigMov = [];
for(movie of movies){
    if(movie.durationInMinutes < 100){
        smallMov.push(movie.name);
    }else if(movie.durationInMinutes >= 100 && movie.durationInMinutes < 200){
        medMov.push(movie.name);
    }else if(movie.durationInMinutes >= 200){
        bigMov.push(movie.name);
    }
}
console.log("Peliculas cortas: " + smallMov);
console.log("Peliculas medianas: " + medMov);
console.log("Peliculas largas: " + bigMov);