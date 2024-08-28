let span = document.getElementsByClassName("close")[0];

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    document.getElementById("modal").style.display = "block";
    let text = document.getElementById("modal-text");

    //logica para se o nome e senha forem incorretos
  }
}

span.onclick = function() {
  document.getElementById("modal").style.display = "none";
}