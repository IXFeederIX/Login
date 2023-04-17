const arrUsuarios = [
    { nombre:"Chucho Calderas", usuario: "chuchito10", contraseña: "mimamamemima" },
    { nombre:"Pepe Garcia", usuario: "pepeelpro", contraseña: "pipepito10" },
    {nombre:"Andrez Gonzales", usuario: "andres153", contraseña: "gokuesmejorqnaruto" }
  ];
  
  const body = document.body;
  const registro = document.querySelector(".registro")
  const contenedor = document.querySelector(".container")
  const contenedor2 = document.querySelector(".container2")
  
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
  function login() {
  loginform.addEventListener("submit", (e)=>{
    e.preventDefault();
    let usuarioEncontrado = false;
    arrUsuarios.forEach(objetoUsuario => {
      if (objetoUsuario.usuario === Username.value && objetoUsuario.contraseña === password.value) {
        usuarioEncontrado = true;
      }
    });
    if (usuarioEncontrado) {
      alert("Puedes iniciar sesión.");
    } else {
      alert("Usuario o contraseña inválidos.");
    }
  })

    
  }
  function registrarse(){
  registro.addEventListener("submit", (e)=>{
  e.preventDefault();
  const newuser = document.getElementById("UsuarioN").value
  const pass = document.getElementById("Contraseña").value
  const name = document.getElementById("Nombre").value
  const apellido = document.getElementById("Apellido").value
let usuarioExiste = false;
  let nuevoUsuario = { nombre: name + " " + apellido , usuario: newuser, contraseña: pass};
  arrUsuarios.forEach(usuarioRegistrado =>{
    if (usuarioRegistrado.usuario === newuser.value) {
      usuarioRegistrado = true;
    }
  })
  if (usuarioExiste === true) {
    alert("el nombre de Usuario existe");
  } else {
    alert("Usuario Registrado Correctamente");
    arrUsuarios.push(nuevoUsuario)
  }
})

  
}