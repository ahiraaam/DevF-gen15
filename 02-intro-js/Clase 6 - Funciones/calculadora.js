function Suma(numero1, numero2) {
  //let suma = numero1 + numero2;
  //console.log("Vengo de funcion suma", numero1 + numero2);
  return numero1 + numero2;
}
function Resta(numero1, numero2) {
  return numero1 - numero2;
}
function Multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}
function Division(numero1, numero2) {
  return numero1 / numero2;
}
function Porcentaje(numero1, numero2) {
  //numero1 es a quien se le saca el porcentaje
  //numero2 es el porcentaje a sacar
  return numero1 * (numero2 / 100);
}

function Calculadora() {
  let operacion = prompt("¿Qué operacion quieres realizar? +,-,*,/, %");
  let numero1 = parseInt(prompt("Ingresa el primer número"));
  let numero2 = parseInt(prompt("Ingresa el segundo número"));
  let resultado;
  switch (operacion) {
    case "+":
      resultado = Suma(numero1, numero2);
      resultado = resultado + 10;
      break;
    case "-":
      resultado = Resta(numero1, numero2);
      break;
    case "*":
      resultado = Multiplicacion(numero1, numero2);
      break;
    case "/":
      resultado = Division(numero1, numero2);
      break;
    case "%":
      resultado = Porcentaje(numero1, numero2);
      break;
    default:
      resultado = "Operación no válida";
  }
  console.log("Vengo de calculadora", resultado);
}

Calculadora();
