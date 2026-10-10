

// 1. A nossa base de dados de produtos (uma lista/array)
// Cada {} representa um produto com o seu nome e preço
const listaDeProdutos = [
  { nome: "Camiseta JS Profissional", preco: 89.90 },
  { nome: "Caneca Mágica HTML", preco: 45.00 },
  { nome: "Autocolante Logo CSS", preco: 15.00 },
  { nome: "Livro de JavaScript Moderno", preco: 120.00 },
  { nome: "Rato Sem Fios Tech", preco: 65.50 }
];

// 2. Selecionamos o container onde os cards vão ficar
const containerProdutos = document.getElementById('container-produtos');

// 3. Função responsável por renderizar (mostrar) os cards na tela
function mostrarProdutos(produtos) {
  // Limpa o container antes de adicionar novos cards (bom para pesquisas futuros)
  containerProdutos.innerHTML = '';

  // Usamos um loop (forEach) para percorrer cada produto da nossa lista
  produtos.forEach(produto => {
    // Para cada produto, criamos o HTML do seu card
    // Note o uso de `produto.nome` e `produto.preco` para preencher os dados
    const cardHTML = `
      <div class="card-produto">
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho('${produto.nome}')">Comprar</button>
      </div>
    `;

    // Adicionamos esse novo HTML dentro do container, sem apagar o que já lá estava
    containerProdutos.innerHTML += cardHTML;
  });
}

// 4. Função simples para simular a compra (será chamada pelo botão no HTML)
function adicionarAoCarrinho(nomeProduto) {
  alert(`${nomeProduto} foi adicionado ao carrinho!`);
}

// 5. Chamamos a função principal para mostrar os produtos assim que a página carregar
mostrarProdutos(listaDeProdutos);