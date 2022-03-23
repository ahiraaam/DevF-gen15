
let pagina = document.getElementById("titulo");
console.log(pagina);

let textos = document.getElementsByClassName("texto");
console.log(textos);

let h2 = document.createElement("h2");
h2.innerText = "Este tag lo cree desde JS";

let bodyTag = document.getElementsByTagName("body");
console.log(bodyTag);

bodyTag[0].prepend(h2);



function screenBlanco(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="white";
}

function screenAzul(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="blue";
    body.style.paddingLeft="5rem"
}

function screenMagenta(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="pink";
}

function sumar()
{
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;

    let resultado = parseInt(num1) + parseInt(num2);

    document.getElementById("c").value = resultado;
}

function imprimirValor(){
    let input = document.getElementById("a");
    console.log(input.value);
}

function keyupevent()
{
    console.log("keyup");
}