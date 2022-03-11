//ARREGLOS

var alumnes = [
  "Alberto",
  "Ana",
  "José Luis",
  "Valeria",
  "Ángel",
  "Karina",
  "Zuri",
];
console.log("Arreglo original", alumnes);
//Imprimir un elemento en específico
console.log(alumnes[3]);

alumnes[2] = "Isaac";

console.log(alumnes);

console.log(alumnes.length);

//La última posición siempre es la longitud - 1

alumnes.push("Elias");
//console.log(alumnes);

alumnes.pop();
//console.log(alumnes);

alumnes.unshift("Elias");
//console.log(alumnes);

alumnes.shift();
//console.log(alumnes);

alumnes.push("Elias");
alumnes.shift();
console.log(alumnes);

var animales = "rata pollo gato perro vaca pejelagarto caballo";

var arrayAnimales = animales.split(" ");
console.log(arrayAnimales);

var grupo1 = alumnes.slice(2);
console.log(grupo1);
var grupo2 = alumnes.slice(0, 4);
console.log(grupo2);

//Primer parámetro es el index donde agregamos
//Segundo parámetro son los elementos a eliminar
//SPLICE ES SOBRE EL ARREGLO ORIGINAL
arrayAnimales.splice(4, 0, "toro", "leopardo", "lagartija");
console.log(arrayAnimales);

arrayAnimales.splice(2, 3, "venado");
console.log(arrayAnimales);
