// Declaração da variável produtos fora do escopo do evento para torná-la global
let produtos;

window.onload = function () {
  var storedUser = localStorage.getItem("usuario");
  var user = JSON.parse(storedUser);
  document.getElementById("user").textContent = user.name;
  document.getElementById("perfil").textContent = user.name;
  document.getElementById("idPerfil").textContent = user.id;
};

document.addEventListener("DOMContentLoaded", function () {
  fetch("../Dados/loja.json")
    .then((response) => response.json())
    .then((data) => {
      produtos = data;
      const produtosContainer = document.getElementById("produtos-container");

      produtos.forEach((produto, index) => {
        const card = document.createElement("div");
        card.className = "card";

        const card_header = document.createElement("div");
        card_header.className= "card-header";

        const card_footer = document.createElement("div");
        card_footer.className = "card-footer";

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = produto.descricao;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = "Preço: $" + produto.preco.toFixed(2);

        const btnAdicionarAoCarrinho = document.createElement("a");
        btnAdicionarAoCarrinho.href = "#";
        btnAdicionarAoCarrinho.className =
          "button-green btn-adicionar-ao-carrinho";
        btnAdicionarAoCarrinho.textContent = "Adicionar ao Carrinho";
        btnAdicionarAoCarrinho.setAttribute("data-indice", index);

        card_header.appendChild(imagem);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card_footer.appendChild(btnAdicionarAoCarrinho);


        card.appendChild(card_header);
        card.appendChild(cardBody);
        card.appendChild(card_footer);

        produtosContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));

  $("#produtos-container").on(
    "click",
    ".btn-adicionar-ao-carrinho",
    function () {
      alert("adicionado ao carrinho");
      const indexDoProduto = $(this).data("indice");
      const produtoSelecionado = produtos[indexDoProduto];
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinho.push(produtoSelecionado);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  );
});
