const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  let totalR =[];
  for (const element of list){
    if(totalR.includes(element) === false){
        totalR.push(element);
    }else{
    }
  }
  return totalR;
}
console.log(removeDuplicates(duplicates));