// Funcion que devuelve un string
function holaMundo() {
  return "Hola Mundo";
}
//Imprimimos el lo que nos da el "return" de la función
console.log(holaMundo());
//Asigno la función a una variable
let resultado = holaMundo();

console.log(resultado);

function saludo() {
  console.log("¿Cómo has estado?");
  return 2;
}

let saludoFinal = "Hola ahiram \n" + saludo();

console.log(saludoFinal);

function datosPersonales(nombre, edad, ciudad) {
  let datos =
    "Hola, te llamas " +
    nombre +
    ", tienes " +
    edad +
    " años. Vives en " +
    ciudad;
  return datos;
}

let persona1 = datosPersonales("Ahiram", 23, "Estado de México");
console.log(persona1);
let persona2 = datosPersonales("Ángel", 22, "Acapulco");
console.log(persona2);

let nombre = prompt("Dame tu nombre");
let edad = prompt("Dame tu edad");
let ciudad = prompt("Dame tu ciudad");

let persona3 = datosPersonales(nombre, edad, ciudad);
console.log(persona3);
nombre = "Carlos";
console.log(datosPersonales(nombre, edad, ciudad));
