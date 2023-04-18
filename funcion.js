const Inicio= document.querySelector(".Inicio")
const contenedor2 = document.querySelector(".container2")
const body = document.body;
const contenedor = document.querySelector(".container")
const titulo = document.getElementsByTagName("h1")
  


function initialApi(){

  contenedor2.innerHTML="";
  contenedor.innerHTML="";
const charginHeader = document.createElement("h2")
charginHeader.innerText = "Iniciando Sesion..."
contenedor.appendChild(charginHeader)
const charger = document.createElement("div")
charger.classList.add("square-filler")

contenedor.appendChild(charger)

setTimeout(() => {
  window.location.replace("dashboard.html");
}, 5000);

}





///7registro inicio sesion
const arrUsuarios = [
    { nombre:"Chucho Calderas", usuario: "chuchito10", contraseña: "mimamamemima" },
    { nombre:"Pepe Garcia", usuario: "pepeelpro", contraseña: "pipepito10" },
    {nombre:"Andrez Gonzales", usuario: "andres153", contraseña: "gokuesmejorqnaruto" }
  ];
  


  
  function registrarseform() {
    contenedor.classList.add("fadeOut")
    setTimeout(() => {
      contenedor.classList.remove("fadeOut")
      contenedor.style.display = "none"
      contenedor2.style.display = "flex"
    }, 500);
  }
  
  const Username = document.getElementById("Username")
  const password = document.getElementById("password")
  const loginform = document.getElementById("loginform")

  loginform.addEventListener("submit", (e)=>{
    e.preventDefault();
    let usuarioEncontrado = false;
    arrUsuarios.forEach(objetoUsuario => {
      if (objetoUsuario.usuario === Username.value && objetoUsuario.contraseña === password.value) {
        usuarioEncontrado = true;
        let usuario = objetoUsuario.usuario
        let nombre = objetoUsuario.nombre
        let userObject = { usuario};
        let nameObject = { nombre};
      localStorage.setItem("usuario", JSON.stringify(userObject));
      localStorage.setItem("nombre", JSON.stringify(nameObject));
      }
    });
    if (usuarioEncontrado) {
      alert("Puedes iniciar sesión.");

      initialApi();
    } else {
      alert("Usuario o contraseña inválidos.");
    }
  })

    
  
 
    const registroform = document.getElementById("registroform");
    registroform.addEventListener("submit", (e) => {
      e.preventDefault();
      const newuser = document.getElementById("UsuarioN").value;
      const pass = document.getElementById("Contraseña").value;
      const name = document.getElementById("Nombre").value;
      const apellido = document.getElementById("Apellido").value;
      let usuarioExiste = false;
      let nuevoUsuario = { nombre: name + " " + apellido, usuario: newuser, contraseña: pass };
      arrUsuarios.forEach(usuarioRegistrado => {
        if (usuarioRegistrado.usuario === newuser) {
          usuarioExiste = true;
        }
      });
      if (usuarioExiste) {
        alert("El nombre de usuario ya existe.");

      } else {
        alert("Usuario registrado correctamente.");
        registroform.reset();
        arrUsuarios.push(nuevoUsuario);
      }
    });
  ////////7registro inicio sesion
 