let seccionPrincipal = document.getElementById("seccion_principal");
seccionPrincipal.hidden = true;
let usuarioActual = null;

function login(event) {
  event.preventDefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password").value;
  let mensaje = document.getElementById("mensaje");
  console.log(username, password);

  if (username.value === "a@gmail.com" && password === "123") {
    window.location.href = "index.html";
    let btnLogin = document.getElementById("btn_login");
    btnLogin.disabled = true;
    username.readOnly = true;
    if (usuarioActual != null) {
      mensaje.style.color = "red";
      mensaje.innerHTML = "<strong>Ya estás logeado</strong>";
    } else {
      mensaje.style.color = "green";
      mensaje.innerHTML = "<strong>Login exitoso</strong>";
      seccionPrincipal.hidden = false;
      let h2 = document.createElement("h2");
      h2.innerText = username.value;
      seccionPrincipal.appendChild(h2);
      usuarioActual = username.value;
    }
  } else {
    mensaje.style.color = "red";
    mensaje.innerText = "Error al iniciar sesión ";
  }
}

let btnIngresarDinero = document.getElementById("btn_ingresar_dinero");

btnIngresarDinero.addEventListener("click", function () {
  alert("Hola");
});
