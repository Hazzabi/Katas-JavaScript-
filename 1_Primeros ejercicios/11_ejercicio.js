const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  let totSum = 0;
  for (const array of list){
    if (typeof array === 'number'){
        totSum += array;
    }else{
        totSum += array.length;
    }
  }
  return totSum;
}
console.log(averageWord(mixedElements))