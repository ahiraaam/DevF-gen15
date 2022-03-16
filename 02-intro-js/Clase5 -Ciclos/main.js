// WHILE

let index = 0;
let arreglo = [];

while (index < 10) {
  //generar numeros aleatorios
  let numeroGenerado = Math.floor(Math.random() * 100);
  arreglo.push(numeroGenerado);
  console.log(
    "Iteración número: " + index + ";Valor generado:" + numeroGenerado
  );
  index++;
}

console.log(arreglo);

// Crea un programa que solicite al
//usuario letras o palabras, si es así guardar
//el resultado. Para terminar de capturar
//el usuario no debe escribir valor alguno.
//Al terminar de capturar, mostrar en pantalla
//la concatenación de todas las palabras
//capturadas

let arregloPalabras = [];
let inputUsuario;
do {
  inputUsuario = prompt("Ingresa una palabra o letra");
  arregloPalabras.push(inputUsuario);
} while (inputUsuario != "");

let stringFinal = "";

//[hola,cómo,estas] -- longitud de 3 pero tiene hasta la posicion 2
//Primera iteración
//i = 0 \ hola
//i = 1 | cómo
//i = 2 | estas
//i = 3 | ERROR porque ya no existe esa posición

//hola
// hola cómo
// hola cómo estas
arregloPalabras.pop();
console.log(arregloPalabras);

for (let i = 0; i < arregloPalabras.length; i++) {
  stringFinal = stringFinal + arregloPalabras[i] + " ";
}
console.log(arregloPalabras);
console.log(stringFinal);

let stringFinal2 = arregloPalabras.join(" ");
console.log(stringFinal2);
