const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];
let bef20 = [];
let aft20 = [];

for(movie of movies){
    if(movie.releaseYear < 2000){
        bef20.push(movie.title);
    }else if(movie.releaseYear >= 2000){
        aft20.push(movie.title);
    }
}
console.log("Movies before '00s:" + "\n" + bef20);
console.log("Movies after '00s:" + "\n" + aft20);