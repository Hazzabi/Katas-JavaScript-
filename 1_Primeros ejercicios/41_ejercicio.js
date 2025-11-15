function rollDice(sides){
    const result = Math.floor(Math.random() * sides) + 1;
    return result;
}

console.log("Tirada de dado de 6 caras:", rollDice(6));
console.log("Tirada de dado de 20 caras:", rollDice(20));
console.log("Tirada de moneda (1=cara, 2=cruz):", rollDice(2));