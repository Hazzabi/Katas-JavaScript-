//.map

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

// 3.1 Solo nombres
const names = users.map(user => user.name);
console.log(names); 

// 3.2 Cambiar 'A' por 'Anacleto'
const namesModified = users.map(user => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    }
    return user.name;
});
console.log(namesModified);

// 3.3 Añadir Visitado
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const citiesVisited = cities.map(city => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    }
    return city.name;
});
console.log(citiesVisited);
