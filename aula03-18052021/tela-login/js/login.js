const EMAIL = "admin@admin.com";
const SENHA = "123";
function logar() {
  // Aqui tenho que validar se o usuario e senha estão validos.
  let email = document.getElementById("input-email").value;
  let senha = document.getElementById("input-senha").value;
  let form = document.getElementById("form");

  if (email.toLowerCase() == EMAIL && senha == SENHA) {
    form.action = "landing-page.html";
    console.log(email);
  } else {
    alert("Usuário ou senha inválidos.");
  }
}
