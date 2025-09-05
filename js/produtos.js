const produtos = [
{ id: 1, nome: "Controle PS5", preco:350, imagem:"img/controle.jpg"},
{ id: 2, nome: "Jogo Elden Ring", preco:300, imagem:"img/elden.jpg"},
{ id: 3, nome: "Headset Gamer", preco:250, imagem:"img/headset.jpg"},

];

function renderizarProdutos() {
  const container = document.getElementById("lista-produtos"); 
  produtos.forEach(produto => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
        <div class="card mb-4">
            <img src="${produto.imagem}" class= "card-img-top" alt="${produto.nome}">
            <div class="card-body">
            <h5> class="card-title">${produto.nome}</h5>
            <p class="card-text">R$ ${produto.nome}</p>
            <button class="btn bnt-primary" onclick="adicionarCarrinho(${produto.id})">Adicionar ao carrinho</button> 
                </div>
                </div>
            `;
            container.appendChild(col);
  });
}
  function adicionarCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produtos.find(p => p.id === id));
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Adicionado ao carrinho!");
  }

  renderizarProdutos();