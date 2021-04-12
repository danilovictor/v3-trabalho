function Login() {
    var done = 0;
    var usuario = document.getElementsByName('username')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    seha = senha.toLowerCase();
  
    if (usuario == "admin" && senha == "admin") {
      window.location = "myphoto.html";
      done = 1;
    }
    if (done == 0) {
      alert("Dados incorretos, tente novamente");
  
    }
  }