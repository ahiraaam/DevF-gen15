let numeros = document.getElementsByTagName("button");
let h1 = document.getElementsByTagName("h1");
let random = document.getElementById("btn-random");
let random2 = numeros[16];
console.log(numeros);
console.log(h1);
console.log(random);
console.log(random2);

//let numeros2 = document.getElementsByClassName("btn");
//console.log(numeros2);

for (let i = 0; i < numeros.length; i++) {
  numeros[i].addEventListener("click", function () {
    console.log(numeros[i].value);
  });
}
