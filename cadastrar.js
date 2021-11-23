var btn = document.getElementById("VerSenha");
var btnConfirm = document.getElementById("verConfirmSenha");

var nome = document.getElementById("nome");
var labelNome = document.getElementById("labelNome");
var validNome = false;

var usuario = document.getElementById("usuario");
var labelUsuario = document.getElementById("labelUsuario");
var validUsuario = false;

var senha = document.getElementById("senha");
var labelSenha = document.getElementById("labelSenha");
var validSenha = false;

var ConfirmSenha = document.getElementById("confirmSenha");
var labelConfirmsenha = document.getElementById("labelConfirmSenha");
var validConfirmSenha = false;

var msgError = document.getElementById("msgError");
var msgSucess = document.getElementById("msgSuccess");

nome.addEventListener("keyup", function () {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color:red");
    labelNome.innerHTML = "Nome *Insira no minímo 3 caracteres*";
    nome.setAttribute("style", "border-color:red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color:green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color:green");
    validNome = true;
  }
});

usuario.addEventListener("keyup", function () {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute("style", "color:red");
    labelUsuario.innerHTML = "Usuário *Insira no minímo 5 caracteres*";
    usuario.setAttribute("style", "border-color:red");
    validUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color:green");
    labelUsuario.innerHTML = "Usuário";
    usuario.setAttribute("style", "border-color:green");
    validUsuario = true;
  }
});

senha.addEventListener("keyup", function () {
  if (senha.value.length <= 4) {
    labelSenha.setAttribute("style", "color:red");
    labelSenha.innerHTML = "Senha *Insira no minímo 5 caracteres*";
    senha.setAttribute("style", "border-color:red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color:green");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color:green");
    validSenha = true;
  }
});

ConfirmSenha.addEventListener("keyup", function () {
  if (senha.value != ConfirmSenha.value) {
    labelConfirmsenha.setAttribute("style", "color:red");
    labelConfirmsenha.innerHTML = "Confirmar Senha *As senhas não conferem*";
    ConfirmSenha.setAttribute("style", "border-color:red");
    validConfirmSenha = false;
  } else {
    labelConfirmsenha.setAttribute("style", "color:green");
    labelConfirmsenha.innerHTML = "Confirmar Senha";
    ConfirmSenha.setAttribute("style", "border-color:green");
    validConfirmSenha = true;
  }
});

function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmSenha) {
    var listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSucess.setAttribute("style", "display:block");
    msgSucess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.setAttribute("style", "display:none");
    msgError.innerHTML = "";
    setTimeout(() => {
      window.location.href  = '../Login-box/Login.html';
    }, 3000);
  } else {
    msgError.setAttribute("style", "display:block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSucess.innerHTML = "";
    msgSucess.setAttribute("style", "display:none");
  }
}

btn.addEventListener("click", function () {
  let inputSenha = document.getElementById("senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

btnConfirm.addEventListener("click", function () {
  let inputSenha = document.getElementById("confirmSenha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});
