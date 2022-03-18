let persona1 = {
  nombre: "Elias",
  edad: 30,
  ciudad: "Guadalajara",
  vivo: true,
  coloresFavoritos: ["azul", "rojo", "negro"],
  mascota: {
    nombre: "Sol",
    raza: "Chihuahua",
    edad: 5,
  },
};

console.log(persona1.ciudad);
console.log(persona1.vivo);
console.log(persona1.coloresFavoritos[2]);
console.log(persona1.mascota.raza);

let cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

console.log(cuentas[1].password);
