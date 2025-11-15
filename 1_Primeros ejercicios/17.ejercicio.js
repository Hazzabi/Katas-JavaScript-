const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};
for (properties in alien){
    console.log("La propiedad "  + properties + " tiene cómo valor: " + alien[properties])
}