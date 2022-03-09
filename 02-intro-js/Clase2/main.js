var nombre = "Carlos"; //String
var numero = 20; //Number
var numeroDecimal = 3.14; //Number
var bandera = true; //Boolean
var bandera2 = false; //Boolean
var nula = null; //Null
var indefinida; //undefined
console.log('La variable "nombre "jdsfnksf" " tiene el valor: ' + nombre);
console.log(
  "La variable 'nombre' tiene el valor: " +
    indefinida +
    " y tiene el tipo de dato: " +
    typeof indefinida
);
//console.log(x); --- Marca error porque la variable no existe

//objetos de JS las variables no tienen comillas
var persona = {
  nombre: "Ahiram",
  edad: 23,
  nacionalidad: "Mexicana",
  viva: true,
};
console.log(persona);
console.log(persona.nacionalidad);

//Arreglo - Empieza en la posición 0
var arreglo = [1, 2, 3, 4, 5, "hola"]; //Tenemos 6 elementos
console.log(arreglo);
console.log(arreglo[5]);

var numero1 = 5;
var numero2 = 8;

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multi = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero2 % numero1;
var exp = numero1 ** numero2;

console.log("Suma ", suma);
console.log("Resta ", resta);
console.log("Multi ", multi);
console.log("Division ", division);
console.log("Modulo ", modulo);
console.log("Exponencial ", exp);

var numero3 = prompt("Ingresa un número");
var numero4 = prompt("Ingresa otro número");

console.log(numero3 + numero4); //Dará como resultado "11" si introducimos 1 y 1
console.log(parseInt(numero3) + parseInt(numero4)); //Dará como resultado "2" si introducimos 1 y 1

//parseInt --> pasar string a Int (entero)
//parseFloat --> pasar string a Floar (decimal)
