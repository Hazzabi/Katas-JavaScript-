//1
function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === text){
            return i;
        }
    }
    return -1;
}

//2
function removeItem(array, text){
    const index = findArrayIndex(array, text);
    if(index !== -1){
        array.splice(index, 1);
    }
    return array;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Leia")); 
console.log(findArrayIndex(mainCharacters, "Han Solo")); 
console.log(findArrayIndex(mainCharacters, "Yoda"));  

console.log("Array original:", [...mainCharacters]);

// Ejemplo 1:
console.log("Eliminando 'Leia':", removeItem([...mainCharacters], "Leia"));

// Ejemplo 2:
console.log("Eliminando 'Yoda':", removeItem([...mainCharacters], "Yoda"));

// Ejemplo 4: 
console.log("Eliminando 'Rey':", removeItem([...mainCharacters], "Rey"));