const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country){
  if(capitals.hasOwnProperty(country)){
    return capitals[country];
  }else{
    return "The country isn't in the list";
  }
}
console.log(getCapital("France")); 
console.log(getCapital("Brazil"));