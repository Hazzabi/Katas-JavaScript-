// spread operator

// 2.1 Copia de array
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsCopy = [...pointsList];
console.log(pointsCopy);

// 2.2 Copia de objeto
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = { ...toy };
console.log(toyCopy);

// 2.3 Juntar arrays
const pointsList2 = [54,87,99,65,32];
const allPoints = [...pointsList, ...pointsList2];
console.log(allPoints); 

// 2.4 Fusionar objetos
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toyFinal = { ...toy, ...toyUpdate };
console.log(toyFinal);

// 2.5 Copia eliminando posición 2
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsCopy);