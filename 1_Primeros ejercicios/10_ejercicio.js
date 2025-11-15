const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let sumNum = 0;
  for (const number of numberList){
    sumNum += number;
  }
  let promedio = sumNum / numberList.length;
  return promedio
}
console.log(average(numbers));