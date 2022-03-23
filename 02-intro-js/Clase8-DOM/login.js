function login()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log(username,password);

    if( username === "carlos.burgueno@gmail.com" && password === "123" )
    {
        window.location.href = "index.html";
        console.log("login hecho");
    }else
    {
        alert("usuario y/o contraseña incorrectos");
    }
}