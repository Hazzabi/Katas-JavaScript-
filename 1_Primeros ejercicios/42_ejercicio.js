function swap(array, index1, index2){
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico", 
  "La mujer invisible",
  "La cosa",
];

console.log("Array original:", [...fantasticFour]);

console.log("Intercambiar 0 y 1:", swap([...fantasticFour], 0, 1));
console.log("Intercambiar 1 y 3:", swap([...fantasticFour], 1, 3));