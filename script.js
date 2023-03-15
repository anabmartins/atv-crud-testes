function verify() {
  let email = document.getElementById("email").value;
  let psw = document.getElementById("psw").value;
  let usuario = email.substring(0, email.indexOf("@"));
  let dominio = email.substring(email.indexOf("@") + 1, email.length);
  if (email.length === 0) {
    document.getElementById("msgemail").innerHTML =
      "<font color='red'>Informe seu e-mail</font>";
  } else if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    dominio.search("@") == -1 &&
    usuario.search("@") == -1
  ) {
    if (psw.length === 0 || psw.length <= 3) {
      document.getElementById("msgsenha").innerHTML =
        "<font color='red'>Senha inválida</font>";
    } else {
      window.location.href = "./cadastro.html";
    }
  } else {
    document.getElementById("msgemail").innerHTML =
      "<font color='red'>E-mail inválido</font>";
  }
}
