const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
let minors = "";
let adults = "";

for (user of users){
    if(user.years < 18){
        minors += "Usuarios menores de edad:" + user.name + "\n";
    }else{
        adults +="usuarios mayores de edad:" + user.name + "\n";
    }
}
console.log(minors);
console.log(adults);