
const cardPlace = document.getElementById('cards-place');
document.addEventListener("DOMContentLoaded", function () {
    fetch("../Dados/loja.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach(row => {
            const card = document.createElement("div");
            card.className = "card";


            const cardHeader = document.createElement("div");
            cardHeader.className = "card-header";

            const img = document.createElement("img");
            img.src = row.imagem;

            cardHeader.appendChild(img);
            card.appendChild(cardHeader);

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            let cardTitle = document.createElement("div");
            cardTitle.className = "card-title";
            cardTitle.textContent = `${row.nome}`;

            let cardText = document.createElement("div");
            cardText.className = "card-text";
            cardText.textContent = `${row.descricao}`;

            let p = document.createElement("p");
            p.textContent = `Preco:$${row.preco}`;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(p);
            card.appendChild(cardBody);

            let cardFooter = this.createElement("div");
            cardFooter.className= "card-footer";
            
            let cardbutton = this.createElement("button");
            cardbutton.className = row.status ? "button-green": "button-red";
            cardbutton.textContent = row.status ? "Disponivel": "Indisponivel";


            cardFooter.appendChild(cardbutton);
            card.appendChild(cardFooter);

            cardPlace.appendChild(card);
        });
      })
  });