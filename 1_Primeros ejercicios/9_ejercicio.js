const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sumTot = 0;
  for (const number of numberList){
    sumTot += number ;
  } 
  return sumTot;
}
console.log(sumNumbers(numbers));