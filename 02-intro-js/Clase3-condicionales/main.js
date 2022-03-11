//Solicitar al usuario su edad y validar si es o no mayor de edad 
//mayoria de edad a 18

/*
var edad = parseInt(prompt("Ingresa tu edad")); // 18
console.log(typeof edad);

if( edad >= 18 ) // condicion
{
    //Si es verdadero
    console.log("Eres de mayor de edad");
}else
{
    console.log("Eres menor de edad");
}

// "18" == 18 : verdadero porque compare el valor de las variables
if (edad == 18) {
    console.log("Los datos son iguales");
}

// "18" === 18 : falso porque compare el valor y tipo de dato de las variables
if (edad === 18) {
    console.log("Los datos son identidos");
}

*/

// FALSY
// condiciones que retornan un resultado falso

/*

if(false)
if(undefined )
if(null )
if(0 )
if(NaN )
if("" )



//Truthy
// Siempre devolveran un resultado positivo

if(true)
if({})
if(42)
if("0")
if("false")

var input = "false";

if(input)
{
    console.log("entro en el if");
}else
{
    console.log("entro al else");
}

*/

// && el operador AND necesita cumplir todas las condiciones para retornar un valor verdadero
// || el operador AND necesita cumplir todas las condiciones para retornar un valor verdadero

var color = "roja";
var edad = 15;
var vivo = true;

if( color == "azul" || edad >= 18 && vivo == true)
{
    console.log("puedes acceder al club");
}else
{
    console.log("No puedes entrar al club");
}