/*
let h1 = document.getElementsByTagName("h1");
let random = document.getElementById("btn-random");
let random2 = numeros[16];
console.log(numeros);
console.log(h1);
console.log(random);
console.log(random2);
*/

//let numeros2 = document.getElementsByClassName("btn");
//console.log(numeros2);

// Variables
let operacion = "";

// 1- Obtener todos los elementos de tipo boton
let numeros = document.getElementsByTagName("button");

//2- Asignar el evento click
console.log(numeros, numeros.length);

for (let i = 0; i < numeros.length; i++) {
  //console.log("Actuando sobre el boton",numeros[i].value);
  numeros[i].addEventListener("click", function () {
    escribirPantalla(numeros[i].value);
  });
}

function escribirPantalla(digit){
  let pantalla = document.getElementById("pantalla");

  if( digit == "=" )
  {
    resultado();
  }else
  {
    pantalla.value = pantalla.value + digit;

    if( digit == "+" || digit == "-" || digit == "*" || digit == "/")
    {
      operacion = digit;
    }
  }

}

function resultado()
{
  let pantalla = document.getElementById("pantalla");
  let arrayOperacion = pantalla.value.split(operacion);
  // 512+23 split + 
  // 0 -> 512    1 -> 23
  console.log(arrayOperacion);
  let resultado = 0;
  switch( operacion )
  {
    case "+":{
      resultado = parseFloat(arrayOperacion[0]) + parseFloat(arrayOperacion[1]) ;
    }
    break;
    case "-":{
      resultado = parseFloat(arrayOperacion[0]) - parseFloat(arrayOperacion[1]) ;
    }
    break;
    case "*":{
      resultado = parseFloat(arrayOperacion[0]) * parseFloat(arrayOperacion[1]) ;
    }
    break;
    case "/":{
      resultado = parseFloat(arrayOperacion[0]) / parseFloat(arrayOperacion[1]) ;
    }
    break;
  }

  pantalla.value = resultado;

}