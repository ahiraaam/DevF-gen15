let currentUser;
let currentUserIndex;
let usuariosbd;

function actualizarLocalStora() {
    usuariosbd[currentUserIndex] = currentUser;
    localStorage.setItem("usuariosbd",JSON.stringify(usuariosbd));
}

function logOut()
{
    localStorage.removeItem("currentUsrLoggin");
    window.location.href = "index.html";
}

function validarlocalstorage(){
    let localstorastring = localStorage.getItem("usuariosbd");
    usuariosbd = JSON.parse(localstorastring);

    localstorastring = localStorage.getItem("currentUsrLoggin");
    if( localstorastring )
    {
        currentUserIndex = parseInt(localstorastring);
        currentUser = usuariosbd[currentUserIndex];
        cargarUI();
    }else
    {
        alert("NO SE ENCONTRARON LOS DATOS DE SESION");
        window.location.href = "index.html";
    }
}

function crearMovimiento( tipo,cantidad )
{
    let movimiento = { tipo,cantidad };
    currentUser.movimientos.push(movimiento);
    actualizarLocalStora();
    cargarMovimientos();

}

function cargarMovimientos()
{
    let html="";
    if( currentUser.movimientos.length > 0 )
    {
        for (let index = 0; index < currentUser.movimientos.length; index++) {
            const element = currentUser.movimientos[index];
            html += `
                    <tr>
                        <td class="text-center" >${index+1}</td>
                        <td class="text-center" >${element.tipo}</td>
                        <td class="text-center" >${element.cantidad}</td>
                    </tr>
                `;
        }

    }else
    {
        html= `
        <tr>
            <td class="text-center" colspan=3 >Sin movimientos</td>
        </tr>
        `;
    }

    document.getElementById("tableMovimientos").innerHTML = html;
}

async function  showAlert(id,message,type="danger",hideTime=3000)
{
    let alertType = `alert-${type}`;
    let alert = document.getElementById(id);
    alert.innerText = message;

    alert.classList.add(alertType);

    await setTimeout(()=>{
        alert.classList.remove(alertType);
        alert.innerText = "";
    },hideTime)
}


function animarSaldo(){
    let counter = document.getElementById("saldo");
    const data = +counter.innerText;
    const time = currentUser.saldo / 200;

    if(data < currentUser.saldo) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animarSaldo, 1);
    }else{
        counter.innerText = currentUser.saldo;
    }
}


function cargarUI(){
    document.getElementById("lbl-nombre").innerText = currentUser.nombre;
    document.getElementById("lbl-apellido").innerText = currentUser.apellido;
    document.getElementById("lbl-usuario").innerText = currentUser.usuario;

    animarSaldo();

    let html = "";
    for (let index = 0; index < usuariosbd.length; index++) {
        if (index != currentUserIndex) {
            html+= `<option value="${index}"> ${usuariosbd[index].nombre} ${usuariosbd[index].apellido} </option>`;
        }
    }
    document.getElementById("ddl-cuentas").innerHTML= html;

    cargarMovimientos();
    
}

function hideModal(id)
{
    setTimeout(() => {
        let myModalEl = document.getElementById(id);
        let modal = bootstrap.Modal.getInstance(myModalEl);
                
        modal.hide();
    }, 1500);
}
async function realizarDeposito(){
    let deposito = parseInt(document.getElementById("txt-deposito").value);

    if (isNaN(deposito)) {
        showAlert("alert","INGRESE UNA CANTIDAD VALIDA","danger",1500);
        return;
    }

    if ( (currentUser.saldo + deposito) <= 990) {
        currentUser.saldo += deposito;

        actualizarLocalStora();
        await showAlert("alert","SE REALIZO EL DEPOSITO CORRECTAMENTE","success",1500);
        animarSaldo();
        crearMovimiento( "DEPOSITO",deposito );
        document.getElementById("txt-deposito").value = "";
        hideModal("depositar");
    }else
    {
        showAlert("alert","LA CANTIDAD EXCEDE EL LIMITE DEL SALDO","danger",1500);
    }
}

async function realizarRetiro(){
    let retiro = parseInt(document.getElementById("txt-retiro").value);

    if (isNaN(retiro)) {
        showAlert("alert-retiro","INGRESE UNA CANTIDAD VALIDA","danger",1500);
        return;
    }

    if ( retiro > currentUser.saldo ) {
        showAlert("alert-retiro","LA CANTIDAD EXEDE SU SALDO ACTUAL","danger",1500);
        return;
    }

    if ( (currentUser.saldo - retiro) >= 10) {
        currentUser.saldo -= retiro;

        actualizarLocalStora();
        await showAlert("alert-retiro","SE REALIZO EL RETIRO CORRECTAMENTE","success",1500);
        document.getElementById("saldo").innerText="0";
        crearMovimiento( "RETIRO",retiro );
        animarSaldo();
        document.getElementById("txt-retiro").value = "";
        hideModal("retirar");
    }else
    {
        showAlert("alert-retiro","LA CANTIDAD NO ALCANZA EL SALDO MINIMO","danger",1500);
    }
}

async function realizarTransferencia()
{
    let transferencia = parseInt(document.getElementById("txt-transferencia").value);
    let indexUsuario = parseInt(document.getElementById("ddl-cuentas").value);

    if(currentUser.saldo >= transferencia)
    {
        currentUser.saldo -= transferencia;
        usuariosbd[indexUsuario].saldo += transferencia;

        actualizarLocalStora();
        await showAlert("alert-transferencia","SE REALIZO LA TRANSFERENCIA CORRECTAMENTE","success",1500);
        crearMovimiento( `TRANSFERENCIA A ${usuariosbd[indexUsuario].nombre} ${usuariosbd[indexUsuario].apellido}` ,retiro );
        document.getElementById("saldo").innerText="0";
        animarSaldo();

    }else
    {
        showAlert("alert-transferencia","NO CUENTA CON EL SALDO SUFICIENTE","danger",1500);
    }
}


function asignarEventos(){

    document.getElementById("btn-depositar").addEventListener("click",function(){
        realizarDeposito();
    })

    document.getElementById("btn-retirar").addEventListener("click",function(){
        realizarRetiro();
    })

    document.getElementById("btn-transferir").addEventListener("click",function(){
        realizarTransferencia();
    })

    document.getElementById("btn-logout").addEventListener("click",function(){
        logOut();
    })

    document.getElementById("btn-consultar").addEventListener("click",function(){
        let counter = document.getElementById("saldo");
        counter.classList.add("h1");
        counter.innerText = 0;
        animarSaldo();
        setTimeout(()=>{
            counter.classList.remove("h1")
        },2000)
    })

}


(function () {
    validarlocalstorage();
    asignarEventos();

})();
