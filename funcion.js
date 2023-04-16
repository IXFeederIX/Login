const arrUsuarios = [
    { usuario: "chuchito10", contraseña: "mimamamemima" },
    { usuario: "pepeelpro", contraseña: "pipepito10" },
    { usuario: "andres153", contraseña: "gokuesmejorqnaruto" }
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
  
  function login() {
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
  }
  
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");
  
  loginButton.addEventListener("click", login);
  registerButton.addEventListener("click", registrarse);