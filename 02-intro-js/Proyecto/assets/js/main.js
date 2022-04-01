let usuariosbd;

function validarlocalstorage() {
    let localstorastring = localStorage.getItem("usuariosbd");

    if(localstorastring)
    {
        usuariosbd = JSON.parse(localstorastring);
    }else
    {
        usuariosbd = [
            {
                nombre:"Carlos",
                apellido:"Burgueño",
                usuario:"cburguenog@gmail.com",
                contrasena:"test1234",
                saldo:500,
                movimientos:[]
            }
        ];

        localStorage.setItem("usuariosbd",JSON.stringify(usuariosbd))
    }
}


async function  showAlert(message,type="danger",hideTime=3000)
{
    let alertType = `alert-${type}`;
    let alert = document.getElementById("alert");
    alert.innerText = message;

    alert.classList.add(alertType);

    await setTimeout(()=>{
        alert.classList.remove(alertType);
        alert.innerText = "";
    },hideTime)
}


async function login(usuario,password){
    let resultado = false;

    for (let index = 0; index < usuariosbd.length; index++) {
        const element = usuariosbd[index];
        if ( (element.usuario.toLowerCase() === usuario.toLowerCase()) && (element.contrasena === password)  ) {
            resultado = true;
            
            localStorage.setItem("currentUsrLoggin",index);

            await showAlert("LOGIN EXITOSO!!!!","success",1500);
            window.location.href = "balance.html";

        }
        
    }

    if (!resultado) {
        showAlert("VERIFICA USUARIO Y/O CONTRASEÑA. NO SE LOGRO INICIAR SESION","danger",3000);
    }
}

async function registro()
{
    let nombre = document.getElementById("txt-name").value;
    let apellido = document.getElementById("txt-lastname").value;
    let usuario = document.getElementById("txt-user-reg").value;
    let contrasena = document.getElementById("txt-pass-reg").value;

    let cuenta = {
        nombre,
        apellido,
        usuario,
        contrasena,
        saldo:0,
        movimientos:[]
    }

    usuariosbd.push(cuenta);
    localStorage.setItem("usuariosbd",JSON.stringify(usuariosbd));

    await showAlert("REGISTRO CREADO EXITOSAMENTE..!! INICIANDO SESION","success",1500);
    setTimeout(() => {
        login(usuario,contrasena);
    }, 1000);
}

function asignarEventos()
{
    document.getElementById("btn-login").addEventListener("click",function(){
        let usuario = document.getElementById("txt-user").value;
        let password = document.getElementById("txt-pass").value;
        login(usuario,password);
    });

    document.getElementById("btn-registro").addEventListener("click",function(){
        registro();
    });
}

function showHideForm(mostrarFormularioRegistro)
{

    if(mostrarFormularioRegistro)
    {
        document.getElementById("registro").hidden = false;
        document.getElementById("login").hidden = true;
    }else
    {
        document.getElementById("registro").hidden = true;
        document.getElementById("login").hidden = false;
    }
}

(function () {
    validarlocalstorage();
    asignarEventos();
    showHideForm(false);
})();


