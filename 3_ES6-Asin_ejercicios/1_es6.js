//destructuring

// 1.1 Destructuring de objeto
const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const { title, gender, year } = game;
console.log(title);     
console.log(gender);   
console.log(year);      


// 1.2 Destructuring de array
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);    
console.log(fruit3);    

// 1.3 Destructuring del return de funcion
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};
const { name, race } = animalFunction();
console.log(name);  
console.log(race); 
 

// 1.4 Destructuring anidado
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
const { name: carName, itv } = car;
const [itv1, itv2, itv3] = itv;

console.log(carName);   
console.log(itv1);    
console.log(itv2);     
console.log(itv3);