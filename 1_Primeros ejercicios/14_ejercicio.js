const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  let counter = {};
    for (const word of list){
        if (counter[word]){
            counter[word] += 1;
        }else{
            counter[word] =1;
        }
    }
    return counter;
  }
console.log(repeatCounter(words));