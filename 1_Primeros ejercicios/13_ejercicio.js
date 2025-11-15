const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameToFind) {
  const position = nameList.indexOf(nameToFind);
  if (position !== -1){
    return [true, position];
  }else{
    return false;
  }
}
console.log(nameFinder(names, 'Jessica'))